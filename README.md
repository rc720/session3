# React Session 3

A **React + Vite** project demonstrating the core concepts of React, including **React Router**, **Conditional Rendering**, **State Management with useState**, and **Dynamic List Rendering**.

---

## 📚 Topics Covered

- React Router DOM
- Navigation Bar
- Home Component
- About Component
- Contact Component
- Conditional Rendering
- React `useState` Hook
- Dynamic List Rendering using `map()`

---

## 🛠️ Technologies Used

- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3

---

## 📁 Project Structure

```text
session3
│── public
│
├── src
│   ├── assets
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── ConditionalRendering.jsx
│   │   ├── UseStateExample.jsx
│   │   └── ListRendering.jsx
│   │
│   ├── screenshots
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 📸 Project Screenshots

## 🏠 Home Page

The landing page of the application.

![Home](./src/screenshots/Home.png)

---

## ℹ️ About Page

Displays information about the application.

![About](./src/screenshots/About.png)

---

## 📞 Contact Page

Displays contact information.

![Contact](./src/screenshots/Contact.png)

---

## 🔀 Conditional Rendering - Example 1

Shows different UI based on a condition.

![Conditional Rendering 1](./src/screenshots/Conditional1.png)

---

## 🔀 Conditional Rendering - Example 2

Another example demonstrating conditional rendering.

![Conditional Rendering 2](./src/screenshots/Conditional2.png)

---

## ⚛️ useState Example 1 (Before)

Initial state before clicking the button.

![useState Before](./src/screenshots/UseState1.png)

---

## ⚛️ useState Example 1 (After)

Updated state after clicking the button.

![useState After](./src/screenshots/UseState2.png)

---


## 📋 Dynamic List Rendering

This example demonstrates rendering a list dynamically using the `map()` function.

```jsx
const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Rohit" },
  { id: 3, name: "Laksh" },
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.id} - {user.name}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
```

Screenshot:

![Dynamic List Rendering](./src/screenshots/Listreading.png)

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/rc420594/react-session3.git
```

> Replace the repository URL with your actual GitHub repository if different.

---

## 2️⃣ Navigate to the Project

```bash
cd react-session3
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Run the Development Server

```bash
npm run dev
```

---

## 5️⃣ Open in Browser

```
http://localhost:5173
```

---

# 🎯 Features

- Responsive Navigation Bar
- React Router Navigation
- Home, About & Contact Pages
- Conditional Rendering Examples
- State Management using `useState`
- Dynamic List Rendering using `map()`
- Clean and Reusable Components
- Fast Development using Vite

---

# 📖 Learning Outcomes

After completing this project, you will understand:

- Creating reusable React components
- Client-side routing with React Router
- Conditional rendering techniques
- Managing state using the `useState` Hook
- Rendering dynamic data using `map()`
- Using unique `key` props for efficient rendering
- Organizing a React project using Vite

---

# 📦 Dependencies

```json
{
  "react": "^19.x",
  "react-dom": "^19.x",
  "react-router-dom": "^7.x",
  "vite": "^7.x"
}
```

---

# 👨‍💻 Author

**Rahul Chaurasiya**

- GitHub: https://github.com/rc420594
- Full Stack Developer
- React & MERN Stack Enthusiast

---

## ⭐ Support

If you found this project helpful, please consider giving it a **⭐ Star** on GitHub.

Happy Coding! 🚀
