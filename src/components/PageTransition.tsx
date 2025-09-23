// components/PageTransition.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

declare global {
  interface Window {
    __pageTransitionActive?: boolean;
  }
}

export default function PageTransition() {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // We'll create some stripes
  const stripesCount = 5; // adjust
  const stripeRefs = useRef<HTMLDivElement[]>([]);
  const [animating, setAnimating] = useState(false);
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    const prev = prevPathRef.current;
    const next = pathname || '/';
    // update for next change
    prevPathRef.current = next;

    // Only run animation when navigating to OR from /agency
    const involvesAgency = (p?: string | null) => {
      if (!p) return false;
      return p === '/agency' || p.startsWith('/agency/');
    };

  if (!overlayRef.current) return;

    if (prev === null) {
      // first load - ensure overlay hidden and reveal agency content if landing on /agency
      if (overlayRef.current) overlayRef.current.style.visibility = 'hidden';
      try {
        window.__pageTransitionActive = false;
      } catch {
        /* ignore */
      }
      if (next === '/agency' || next.startsWith('/agency/')) {
        const agencyRoot = document.querySelector('[data-agency-root]') as HTMLElement | null;
        if (agencyRoot) {
          // clear any offscreen transform so the page shows on first load
          gsap.set(agencyRoot, { yPercent: 0, clearProps: 'all' });
        }
      }
      return;
    }

    if (!involvesAgency(prev) && !involvesAgency(next)) {
      // not related to agency route
      return;
    }

    // Play entrance animation
    setAnimating(true);
    // mark global transition active and notify listeners
    try {
      window.__pageTransitionActive = true;
      window.dispatchEvent(new CustomEvent('page-transition-start'));
    } catch {
      /* ignore */
    }
    // ensure overlay is visible while animating
    overlayRef.current.style.visibility = 'visible';
    gsap.killTweensOf(stripeRefs.current);
    gsap.set(stripeRefs.current, { yPercent: -100 });
    gsap.to(stripeRefs.current, {
      yPercent: 0,
      stagger: { each: 0.08, from: 'end' },
      duration: .5,
      ease: 'power2.out',
      onComplete: () => {
        // exit animation
        gsap.to(stripeRefs.current, {
          yPercent: 100,
          stagger: { each: 0.08, from: 'end' },
          duration: .5,
          ease: 'power2.in',
          delay: 0.12,
          onComplete: () => {
            gsap.set(stripeRefs.current, { yPercent: -100 });
            setAnimating(false);
            // If we're navigating to agency, animate the agency root into view
            const nextPath = prevPathRef.current;
            if (nextPath === '/agency' || (nextPath && nextPath.startsWith('/agency/'))) {
              const agencyRoot = document.querySelector('[data-agency-root]') as HTMLElement | null;
              if (agencyRoot) {
                // prepare
                gsap.set(agencyRoot, { yPercent: -100 });
                gsap.to(agencyRoot, {
                  yPercent: 0,
                  duration: 0.6,
                  ease: 'power2.out',
                  onComplete: () => {
                    // hide overlay to avoid leftover visuals
                    if (overlayRef.current) overlayRef.current.style.visibility = 'hidden';
                    // ensure inline transform cleared
                    gsap.set(agencyRoot, { clearProps: 'all' });
                    // mark transition done and notify listeners
                    try {
                      window.__pageTransitionActive = false;
                      window.dispatchEvent(new CustomEvent('page-transition-done'));
                    } catch {
                      /* ignore */
                    }
                  },
                });
                return;
              }
            }
            // hide overlay to avoid leftover visuals
            if (overlayRef.current) overlayRef.current.style.visibility = 'hidden';
            try {
              window.__pageTransitionActive = false;
              window.dispatchEvent(new CustomEvent('page-transition-done'));
            } catch {
              /* ignore */
            }
          },
        });
      },
    });
  }, [pathname]);

  // initialize overlay hidden and ensure stripe positions on mount
  useEffect(() => {
    if (!overlayRef.current) return;
    overlayRef.current.style.visibility = 'hidden';
    // initial set in case refs are attached after first render
    gsap.set(stripeRefs.current, { yPercent: -100 });
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#fff',
        pointerEvents: animating ? 'auto' : 'none',
        overflow: 'hidden',
        zIndex: 9999,
      }}
    >
      {Array.from({ length: stripesCount }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) stripeRefs.current[i] = el;
          }}
          style={{
            position: 'absolute',
            left: `${(i * 100) / stripesCount}%`,
            top: 0,
            width: `${100 / stripesCount}%`,
            height: '100%',
            backgroundColor: '#111',
            transform: 'translateY(-100%)',
          }}
        />
      ))}
    </div>
  );
}