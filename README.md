# Modern Portfolio Website

A responsive portfolio website built with MERN stack featuring dark mode, animations, and a contact system.

## 🚀 Tech Stack
**Frontend:**
- React.js with Hooks
- Tailwind CSS
- Framer Motion
- React Router v6

**Backend:**
- Node.js
- Express.js
- MongoDB
- Nodemailer

## ✨ Features
- Dark/Light theme
- Responsive design
- Smooth animations
- Contact form
- Project showcase
- Dynamic content
- Mobile-friendly

## 🛠️ Installation

1. **Clone and Install**

bash
git clone <repo-url>
cd portfolio-website
Install frontend dependencies
cd client
npm install
Install backend dependencies
cd ../server
npm install

2. **Environment Setup**
Create `.env` in server directory:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-password
```

3. **Run Application**
```bash
# Start backend (from server directory)
npm run dev

# Start frontend (from client directory)
npm start
```

## �� Project Structure


portfolio/
├── client/
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ └── App.js
└── server/
├── controllers/
├── models/
├── routes/
└── server.js