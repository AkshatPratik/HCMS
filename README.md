# 🏥 Healthcare Management System (HCMS)

A database-driven Healthcare Management System (HCMS) designed to digitalize hospital and clinic operations such as patient registration, appointments, prescriptions, inventory, billing, and staff management. Built as part of the **Database Management Systems Mini Project**, this project demonstrates real-world application of database design, normalization, SQL queries, and advanced DBMS concepts like triggers, views, transactions, and cursors.

---

## 📌 Project Objective

To develop a robust, secure, and scalable digital system that:
- Streamlines hospital workflows
- Maintains accurate patient records
- Automates billing and inventory tasks
- Ensures secure data access and integrity
- Implements core database functionalities

---

## 🧠 Problem Statement

Traditional healthcare systems relying on manual and paper-based operations lead to:
- Inefficiencies and delays in service
- Data redundancy and inconsistency
- Risk of medical errors and miscommunication
- Poor accessibility to real-time data

**HCMS** addresses these issues through structured database design and implementation, ensuring secure, real-time, and scalable healthcare data management.

---

## 🗃️ Features

- 🩺 **Patient & Staff Management**  
- 📆 **Appointments & Scheduling**  
- 💊 **Medication & Prescriptions**  
- 🏥 **Procedures & Room Assignments**  
- 🧾 **Billing & Transactions**  
- 🛒 **Inventory & Product Management**  
- 🧪 **Advanced SQL: Joins, Triggers, Views, Cursors, Transactions**

---

## 🧩 ER Diagram & Schema

The database includes the following key tables:

| Entity | Description |
|--------|-------------|
| `Patient` | Stores patient information |
| `Doctor` | Doctor details and specialization |
| `Nurse` | Nurse information |
| `Appointment` | Links patients to doctors |
| `Department` | Hospital department structure |
| `Procedure` | Details of medical procedures |
| `Medication` | Medicines prescribed |
| `Prescribes` | Link between doctor, patient, and medications |
| `Undergoes` | Procedures involving patient, doctor, nurse |
| `Room` | Room availability and assignment |

Additionally, it includes entities for admin login, employee data, customer orders, product categories, cart functionality, and invoice generation.

---

## 🛠️ Technologies Used

- **Database**: MySQL / PostgreSQL  
- **SQL Features**:  
  - Views  
  - Joins  
  - Cursors  
  - Triggers  
  - Transactions  
  - Constraints  
- **Tools**: ER Modeling, Normalization, Functional Dependency Analysis

---

## 📂 Project Structure

/HCMS-Project
│
├── /sql-scripts # SQL for table creation, triggers, views
├── /screenshots # Implementation screenshots
├── /docs # Report and ER diagram
├── /src # Optional frontend/backend integration
└── README.md # This file


---

## 🔐 Advanced Concepts Implemented

### 🔁 **Triggers**
- Update stock after purchase
- Log audit info after product insert/update

### 🧾 **Views**
- Product summary by category
- Order summary by customer

### 🔗 **Joins**
- Product details with categories and subcategories
- Orders linked with customers and products

### 🔍 **Cursors**
- Looping through products and orders for bulk processing

### 🧪 **Transactions**
- Invoices with rollback on failure
- Complete checkout with invoice + stock updates

---

## 📊 Normalization & Functional Dependency Analysis

Each table has been normalized up to **5NF**, with attention to:
- Partial dependencies
- Transitive dependencies
- Multivalued dependencies
- Join dependency anomalies

---

## 🧑‍💻 Authors

- **S. P. Gowtham**  
  Reg No: RA2311026010721
- **Akshat Pratik**  
  Reg No: RA2311026010740

> Guided by **Beaulah Jeyavathana R**,  
> Associate Professor, SRM Institute of Science and Technology

---

## 📸 Screenshots

| Interface | Preview |
|----------|---------|
| Admin Page | ![](screenshots/admin_page.png) |
| Home Page | ![](screenshots/home_page.png) |
| Categories Page | ![](screenshots/categories.png) |
| Cart Page | ![](screenshots/cart.png) |
| Checkout Page | ![](screenshots/checkout.png) |

> _Include actual screenshots in the `screenshots/` directory._

---

## 📝 License

This project is submitted as academic coursework and is free to use for educational purposes. Commercial use is not permitted without explicit permission.

---

## 📬 Feedback

Feel free to open issues or suggest improvements. Contributions for extending it into a full-stack application are welcome!
