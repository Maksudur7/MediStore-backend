# 🏥 MediStore Backend - Pharmacy Management System

Welcome to the **MediStore Backend**! This is the core engine powering the MediStore platform, designed to manage medicine inventory, user authentication, orders, and administrative tasks for a modern online pharmacy.

---

## 🚀 Project Overview

MediStore is a robust MERN stack-based backend that provides a RESTful API for managing an online medicine store. It handles everything from secure user registration to complex order processing and inventory tracking.

### Key Features
* **User Authentication:** Secure JWT-based login and registration with role-based access control (User/Admin).
* **Product Management:** Full CRUD operations for medicines, including categories, pricing, and stock levels.
* **Order System:** Seamless checkout process and order history tracking.
* **Security:** Password hashing using Bcrypt and protected routes via Middleware.
* **Search & Filter:** Advanced searching capabilities for finding specific medicines.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **Node.js** | JavaScript Runtime |
| **Express.js** | Web Framework |
| **MongoDB** | NoSQL Database |
| **Mongoose** | MongoDB Object Modeling |
| **JWT** | Secure Authentication |
| **Dotenv** | Environment Variable Management |

---
## 🛣️ API Routes & Functionalities Overview

### 1. User & Authentication (`/auth`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/auth/register` | New user ba admin account toiri kora. |
| `POST` | `/auth/login` | Email/Password diye login kore JWT token neya. |
| `GET` | `/auth/me` | Current logged-in user-er details dekha. |

### 2. Medicine Management (`/medicines`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/medicines` | All available medicines-er list dekha. |
| `GET` | `/medicines/:id` | Specific medicine-er details (Price, Stock) dekha. |
| `POST` | `/medicines/add` | **(Admin)** Inventory-te notun medicine add kora. |
| `PUT` | `/medicines/update/:id` | **(Admin)** Medicine-er information ba stock update kora. |
| `DELETE` | `/medicines/delete/:id` | **(Admin)** List theke medicine remove kora. |

### 3. Order & Transactions (`/orders`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/orders/place-order` | Medicine buy korar jonno order submit kora. |
| `GET` | `/orders/my-orders` | User-er nijer purono shob order-er history. |
| `GET` | `/orders/all-orders` | **(Admin)** Shop-er shob customer-er order list dekha. |

### 4. Categories & Search
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/categories` | Shob dhoroner medicine category dekha. |
| `GET` | `/medicines/category/:name` | Specific category-r medicine filter kora. |
---

## ⚙️ How the Project Works (Workflow)

### 1. User Authentication & Authorization
- **Registration & Login:** When a user registers, their password is securely hashed using `Bcrypt.js` before being saved in the database. During login, if the credentials match, the server issues a **JWT (JSON Web Token)** for session management.
- **Middleware Protection:** All sensitive routes are protected by the `verifyToken` middleware, which validates the authenticity of the user's token before granting access.
- **Role-Based Access Control (RBAC):** The `verifyAdmin` function checks if the user has an 'admin' role. Only authorized administrators have the permission to add, update, or delete medicines from the inventory.

### 2. Medicine Inventory Management
- **Data Storage:** Comprehensive details for each medicine—including name, category, price, and stock quantity—are stored and managed in **MongoDB**.
- **Dynamic Filtering:** When a user selects a specific category (e.g., Syrup, Tablet, or Capsule), the server dynamically filters and fetches the relevant data from the database.
- **Stock Synchronization:** The system features automated inventory tracking. When an order is successfully placed, the stock quantity of the respective medicine is automatically decremented.

### 3. Ordering Process
- **Order Placement:** When a user clicks 'Checkout', the backend `place-order` function is triggered to process the transaction.
- **Order Validation:** The server performs a real-time check to ensure the requested medicines are in stock. Once validated, the order is saved, and the details are added to the user's personal order history.
- **Administrative Oversight:** Through the admin dashboard, administrators can monitor all transactions and update order statuses (e.g., from 'Pending' to 'Delivered').

### 4. Database Architecture
- **Users Collection:** Stores Name, Email, Hashed Password, and Role (User/Admin).
- **Medicines Collection:** Stores Name, Category, Price, Stock levels, Description, and Image URLs.
- **Orders Collection:** Stores UserID, detailed Product list, Total Price, Order Date, and current Status.

---

## ⚙️ Installation & Setup

Follow these steps to get the project running locally:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Maksudur7/MediStore-backend.git](https://github.com/Maksudur7/MediStore-backend.git)
    cd MediStore-backend
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory and add your credentials:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```

4.  **Run the Server:**
    ```bash
    # For development
    npm run dev

    # For production
    npm start
    ```

---

## 🛡️ API Security
* All sensitive routes are protected by a `verifyToken` middleware.
* Admin-specific tasks are guarded by a `verifyAdmin` check to ensure data integrity.

---

**Developed by [Maksudur Rahman](https://github.com/Maksudur7)**
