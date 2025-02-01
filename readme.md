# MERN Task Management App

A full-stack task management application built using the MERN stack (MongoDB, Express, React, Node.js). This app allows users to perform all basic CRUD operations (Create, Read, Update, Delete) for task management.

## 🚀 Live Demo

[Live Site URL](#) *(https://task-management-app1-snowy.vercel.app/)*

---

## 🛠 Tech Stack

- **Frontend:** Vite + React.js
- **Backend:** Node.js + Express.js
- **Database:** MongoDB

---

## ✨ Features
 
✅ Create, Read, Update, and Delete (CRUD) tasks  
✅ Responsive UI  
✅ RESTful API integration  
✅ Secure and efficient backend  

---

## 📂 Project Structure

```
mern-task-manager/
├── backend/      # Express.js server, MongoDB models, and API routes
│   ├── task_Schema/   # Mongoose schemas
│   ├── routes/   # API routes
│   ├── controllers/ # Logic for handling API requests
│   ├── server.js # Main backend server file
├── frontend/     # React app with Vite
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Application pages
│   │   ├── App.js       # Main app entry point
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
└── README.md
```

---

## 🏗 Setup & Installation

### 1️⃣ Clone the repository:
```sh
git clone https://github.com/Umer-Khokhar/MERN_Stack_Task_management_app
cd MERN_Stack_Task_management_app
```

### 2️⃣ Install dependencies:
#### Backend:
```sh
cd server
npm install
```

#### Frontend:
```sh
cd ../client
npm install
```

### 3️⃣ Setup environment variables:
Create a `.env` file inside the `backend/` folder and add:
```env
DATABASE_URL=your_mongodb_connection_string
PORT=4000
```

### 4️⃣ Run the application:
#### Start the backend:
```sh
cd server
npm start
```

#### Start the frontend:
```sh
cd client
npm run dev
```

The frontend will be running on `http://localhost:5173/` and the backend on `http://localhost:4000/`.

---

## 📌 API Endpoints

| Method | Endpoint          | Description          |
|--------|------------------|----------------------|
| GET    | /api/tasks       | Fetch all tasks     |
| POST   | /api/tasks       | Create a new task   |
| GET    | /api/tasks/:id   | Get a single task   |
| PUT    | /api/tasks/:id   | Update a task       |
| DELETE | /api/tasks/:id   | Delete a task       |

---

## 🚀 Deployment

### Backend:
Deployed the backend on **Vercel**.

### Frontend:
Deploy the frontend on **Vercel**.

---

## 🛠 Future Enhancements
- 🔐 User authentication (JWT)
- 📅 Task due dates & reminders
- 📊 Dashboard with analytics
- 🌙 Dark mode support

---

## 🤝 Contributing
Feel free to contribute by creating issues or submitting pull requests.

---

## 📜 License
This project is licensed under the MIT License.

---

💡 **Developed by [Umer Khokhar](https://github.com/umer-khokhar)**

