const HeroVideo = () => {
  return (
    <div className="w-full h-full relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        {/* Reference files from the public directory starting with a "/" */}
        <source src="/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default HeroVideo;
