# 💬 Real-Time Chat App (React + Django)

A fullstack real-time chat application using **React** for frontend and **Django Channels** (WebSockets) for backend. Messages are updated instantly between users.

---

## 📁 Project Structure

chatapp/
├── backend/ # Django project using Channels + WebSocket
│ ├── chat/ # Django app for WebSocket consumer
│ ├── chatapp/ # Django settings and ASGI config
│ └── manage.py
├── frontend/ # React-based chat interface
│ ├── src/
│ ├── public/
│ └── package.json
└── README.md

yaml
Copy code

---

## 🚀 How to Run the App

### 1. Backend (Django + Channels)
```bash
cd backend
python -m venv venv
venv\Scripts\activate         # For Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
Make sure channels, daphne, and corsheaders are in requirements.txt.

2. Frontend (React)
bash
Copy code
cd frontend
npm install
npm start
Make sure WebSocket URL in your React app is set to:

bash
Copy code
ws://localhost:8000/ws/chat/
✨ Features
Real-time chat using WebSocket

Messages sent instantly between users

Clean UI built with React

Backend powered by Django Channels

🛠️ Tech Stack
Frontend: React, TailwindCSS (optional)

Backend: Django, Django Channels, WebSocket

Communication: ASGI, Redis (optional for production)
