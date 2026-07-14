# 🛡️ Insurance Management System

A full-stack **Insurance Management System** developed using **Java Spring Boot** and **MySQL**. The application provides REST APIs for managing **Customers**, **Policies**, and **Leads**, along with a responsive frontend built using **HTML, CSS, JavaScript, and Bootstrap**.

---

## 📌 Project Overview

The Insurance Management System simplifies insurance operations by allowing administrators and agents to manage customer information, insurance policies, and leads through a secure web application.

The project follows a layered architecture using Spring Boot and Spring Data JPA and stores data in a MySQL database. REST APIs are tested using Postman, and role-based access is implemented using **X-Auth-Token** authentication.

---

## 🚀 Technologies Used

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- Maven

### Database
- MySQL

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap 5

### Tools
- Eclipse IDE
- Postman
- Git
- GitHub

---

## ✨ Features

### Customer Module
- Add Customer
- View Customers
- Update Customer
- Delete Customer

### Policy Module
- Add Policy
- View Policies
- Update Policy
- Delete Policy

### Lead Module
- Add Lead
- View Leads
- Update Lead
- Delete Lead

### Authentication
- Token-based Authentication
- ADMIN Role
- AGENT Role

### Authorization
- ADMIN can Create, Update and Delete records.
- AGENT has restricted permissions.
- Unauthorized requests return **401 Unauthorized**.
- Forbidden operations return **403 Forbidden**.

---

## 📂 Project Structure

```
insurance-management-system
│
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com.sawai.insurance
│   │   │       ├── controller
│   │   │       ├── service
│   │   │       ├── repository
│   │   │       ├── entity
│   │   │       ├── security
│   │   │       └── config
│   │   │
│   │   └── resources
│   │       ├── static
│   │       ├── templates
│   │       └── application.properties
│
└── pom.xml
```

---

## 🔗 REST API Endpoints

### Customer APIs

| Method | Endpoint |
|---------|----------|
| GET | /customers |
| GET | /customers/{id} |
| POST | /customers |
| PUT | /customers/{id} |
| DELETE | /customers/{id} |

### Policy APIs

| Method | Endpoint |
|---------|----------|
| GET | /policies |
| GET | /policies/{id} |
| POST | /policies |
| PUT | /policies/{id} |
| DELETE | /policies/{id} |

### Lead APIs

| Method | Endpoint |
|---------|----------|
| GET | /leads |
| GET | /leads/{id} |
| POST | /leads |
| PUT | /leads/{id} |
| DELETE | /leads/{id} |

---

## 🔐 Authentication

The application uses **X-Auth-Token** for authentication.

### ADMIN Token

```
ADMIN123
```

### AGENT Token

```
AGENT123
```

Example Header:

```
X-Auth-Token: ADMIN123
```

---

## 🧪 API Testing

All REST APIs were tested using **Postman**.

Tested Operations:

- Create
- Read
- Update
- Delete
- Authentication
- Authorization
- Error Handling
- HTTP Status Codes

---

## 🗄️ Database

Database Name

```
insurance_db
```

Main Tables

- customers
- policies
- leads

---

## 📸 Project Screenshots

Add screenshots here.

- Login Page
- Dashboard
- Customer Module
- Policy Module
- Lead Module
- Postman API Testing

---

## ▶️ How to Run

1. Clone the repository

```
git clone https://github.com/shriyashdethe/insurance-management-system.git
```

2. Open the project in Eclipse.

3. Configure MySQL in `application.properties`.

4. Run the Spring Boot application.

5. Open your browser:

```
http://localhost:8082/login.html
```

6. Login using:

```
ADMIN123
```

or

```
AGENT123
```

---

## 📈 Future Enhancements

- Spring Security
- JWT Authentication
- Email Notifications
- Policy Renewal Reminder
- Reports & Analytics Dashboard
- File Upload
- PDF Generation

---

## 👨‍💻 Author

**Shriyash Popat Dethe**

GitHub:
https://github.com/shriyashdethe

---

## 📄 License

This project was developed for educational purposes as part of a Java Full Stack learning project.