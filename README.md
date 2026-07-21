# Support CRM - Full Stack Ticket Management System

A full-stack customer support ticket management application built with **React**, **FastAPI**, **SQLAlchemy**, and **SQLite**. The application enables support teams to create, manage, search, and update customer support tickets through a clean and responsive web interface.

---

## Overview

Support CRM is a lightweight ticket management system that demonstrates a complete full-stack application using modern web technologies.

The frontend provides an intuitive dashboard for managing tickets, while the backend exposes RESTful APIs for ticket creation, retrieval, updating, searching, filtering, and pagination.

---

## Features

### Dashboard

- View all support tickets
- Search tickets by:
  - Ticket ID
  - Customer Name
  - Customer Email
  - Subject
  - Description
- Filter tickets by status
- Server-side pagination
- Responsive ticket table

### Ticket Management

- Create new support tickets
- View complete ticket details
- Update ticket status
- Add internal support notes
- View previous notes
- Loading indicators
- Success and error notifications

---

# Tech Stack

## Frontend

- React
- Vite
- Bootstrap
- React Router DOM
- Axios
- React Hot Toast

## Backend

- FastAPI
- SQLAlchemy ORM
- Pydantic
- SQLite
- Uvicorn

---

# Project Structure

```text
support-crm/

├── backend/
│
│   ├── app/
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── routers/
│   │   ├── services/
│   │   ├── utils/
│   │   └── main.py
│   │
│   └── requirements.txt
│
└── frontend/
    │
    ├── src/
    │
    ├── components/
    │
    ├── pages/
    │
    ├── services/
    │
    ├── App.jsx
    └── main.jsx
```

---

# Application Workflow

```text
Dashboard

↓

Search / Filter Tickets

↓

View Ticket Details

↓

Update Status

↓

Add Support Note

↓

Save Changes

OR

Dashboard

↓

Create New Ticket

↓

Submit

↓

Return to Dashboard
```

---

# API Endpoints

## Create Ticket

```http
POST /api/tickets
```

Creates a new support ticket.

---

## Get All Tickets

```http
GET /api/tickets
```

Supports:

- page
- size
- search
- status
- sort

---

## Get Ticket

```http
GET /api/tickets/{ticket_id}
```

Returns complete ticket details including notes.

---

## Update Ticket

```http
PUT /api/tickets/{ticket_id}
```

Updates:

- Ticket Status
- Adds Support Note

---

## Delete Ticket

```http
DELETE /api/tickets/{ticket_id}
```

Deletes a ticket.

---

# Ticket Status

The application supports three ticket states:

- Open
- In Progress
- Closed

---

# Validation

### Ticket Creation

| Field | Validation |
|---------|------------|
| Customer Name | 3 - 100 characters |
| Email | Valid email address |
| Subject | 5 - 150 characters |
| Description | Minimum 10 characters |

### Notes

| Field | Validation |
|---------|------------|
| Note | 3 - 1000 characters |

---

# Author

Developed as part of a Full Stack Developer Assessment.

Frontend: React + Tailwind CSS

Backend: FastAPI + SQLAlchemy + SQLite