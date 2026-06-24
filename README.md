# Abdul Hadi - Personal Portfolio

![Portfolio Preview](./client/src/assets/FYP-2.jpeg)

Welcome to the repository of my personal portfolio website! This project showcases my skills, experience, and the projects I've built as a Software Engineer and Full-Stack MERN Developer.

## 🚀 Live Demo

*(Add your live URL here once deployed, e.g., https://abdulhadi.dev)*

## 🛠️ Built With

This portfolio is a full-stack application built for performance, aesthetics, and real-time interactions.

### Frontend
- **React.js** (with TypeScript)
- **Vite** (for lightning-fast builds)
- **Framer Motion** (for smooth page animations and transitions)
- **Vanilla CSS** (custom modern glassmorphism UI & responsive design)

### Backend
- **Node.js & Express.js**
- **MongoDB** (for storing contact form submissions)
- **Nodemailer** (for real-time email notifications on form submissions)

## ✨ Features

- **Responsive Design**: Flawlessly adapts to all screen sizes, featuring a custom mobile "floating island" navigation.
- **Dynamic Animations**: Includes an interactive hero section with canvas particle effects, scrolling counters, and staggered card entrances.
- **Modern Aesthetics**: Premium glassmorphism UI, glowing gradients, and custom themes (Cyber Cyan, Neon Purple, Emerald Aurora, Sunset Gold).
- **Functional Contact Form**: A fully working backend API that stores messages and immediately emails them to the inbox using Node Mailer.

## 💻 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v16+)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas URL)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abdulHadi-71/Personal-Portfolio.git
   cd Personal-Portfolio
   ```

2. **Install Frontend Dependencies:**
   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies:**
   ```bash
   cd ../server
   npm install
   ```

4. **Environment Variables:**
   In the `server/` directory, create a `.env` file and add the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   FRONTEND_URL=http://localhost:5173
   CONTACT_RECEIVER=your_email@gmail.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_gmail_app_password
   SMTP_SECURE=true
   ```

### Running the Application

1. **Start the backend server:**
   ```bash
   cd server
   npm run dev
   ```

2. **Start the frontend development server:**
   ```bash
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## 👨‍💻 About Me

I am a Software Engineer Intern with strong experience in full-stack development, real-time systems, and technical documentation. I build fast, scalable, user-centered applications that solve real problems from database to deployment.

Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/abdul-hadi-804a24251/) or reach out via email at abdullah.two00four@gmail.com!

---

*Designed and engineered by Abdul Hadi.*
