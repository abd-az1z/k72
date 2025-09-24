K72 - A Trello Clone
K72 is a full-stack, open-source clone of the popular project management tool, Trello. It provides a clean, intuitive Kanban-style interface for managing your tasks and projects. Create boards, add lists, and populate them with cards that you can drag and drop to organize your workflow.

Live Demo: https://k72-beta.vercel.app/

✨ Key Features
Boards, Lists, and Cards: Create an unlimited number of boards to manage different projects. Each board can have multiple lists (e.g., "To Do", "In Progress", "Done"), which hold individual task cards.

Drag & Drop: Seamlessly reorder cards within a list or move them between different lists to update their status.

User Authentication: Secure sign-in and registration functionality powered by NextAuth.js to keep your boards private.

Database Persistence: All your boards, lists, and cards are saved to a database using Prisma ORM.

Modern UI: A clean, responsive, and user-friendly interface built with Tailwind CSS.

Full-Stack Architecture: Built on the powerful Next.js 14 App Router, providing a robust and scalable foundation.

🛠️ Tech Stack
Framework: Next.js 14

Language: TypeScript

Styling: Tailwind CSS

Authentication: NextAuth.js

ORM: Prisma

Database: (Assumed PostgreSQL, MySQL, or similar - Prisma compatible)

🚀 Getting Started
Follow these instructions to get a local copy of the project up and running for development and testing purposes.

Prerequisites
Node.js (v18 or later recommended)

npm or yarn

A SQL database (e.g., PostgreSQL)

Installation & Setup
Clone the repository:

git clone [https://github.com/abd-az1z/k72.git](https://github.com/abd-az1z/k72.git)
cd k72

Install dependencies:

npm install

Set up environment variables:
Create a .env file in the root of the project and add the necessary environment variables. You can use the .env.example file as a template. At a minimum, you will need to provide your DATABASE_URL.

# Example for PostgreSQL
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# Generate a secret for NextAuth
# You can use: `openssl rand -base64 32` in your terminal
NEXTAUTH_SECRET="YOUR_SECRET_HERE"
NEXTAUTH_URL="http://localhost:3000"

Push the database schema:
This command will apply the schema defined in prisma/schema.prisma to your database.

npx prisma db push

Run the development server:

npm run dev

Open http://localhost:3000 with your browser to see the result!

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
