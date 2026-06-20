# 🚇 Smart Metro Operations Platform

This project is a role-based metro fleet management dashboard built using React, Tailwind CSS, React Router, and Context API.

It includes separate dashboards for Employees, Supervisors, and Admins to manage train operations, maintenance reporting, shift scheduling, branding requests, analytics, and AI-inspired deployment planning.

## 📌 Overview

The goal of this project is to simulate how a metro operations team can manage fleet deployment and maintenance through a centralized dashboard.

The platform enables:

- Fleet monitoring and management
- Employee shift scheduling
- Maintenance issue reporting
- Branding request management
- AI-inspired train ranking and deployment
- Operational analytics and insights
- Audit logging and activity tracking
- Cross-dashboard workflow synchronization

The system follows a role-based architecture where Employees, Supervisors, and Administrators interact through a structured operational workflow.

## 🎯 Key Features

### 👨‍✈️ Employee Dashboard

- Shift Scheduling
- Maintenance Issue Reporting
- Branding Update Requests
- Persistent Data Storage
- Workflow-Based Submissions

### 🧑‍💼 Supervisor Dashboard

- AI-Based Train Ranking
- Smart Deployment Planning
- Active Alert Monitoring & Resolution
- Blocked Train Detection
- Branding Insights
- Shift Request Monitoring
- Operational Simulation Panel
- Audit Log Access

### 👨‍💻 Admin Dashboard

- Fleet Management
- Add / Edit / Delete Trains
- Analytics Dashboard
- Predictive Maintenance Monitoring
- Notifications Center
- Maintenance Report Approval
- Branding Request Approval
- Maintenance Alert Resolution
- Audit Log Tracking

## 🔑 Authentication & Access Control

The application implements role-based authentication with protected dashboard access.

### Available Roles

#### Employee

- Submit maintenance reports
- Schedule shifts
- Submit branding requests

#### Supervisor

- Monitor train deployment
- Review alerts
- Resolve maintenance issues
- Access analytics and audit logs

#### Admin

- Manage fleet operations
- Approve requests
- Configure operational data
- Monitor complete system activity

---

## 🤖 AI-Inspired Features

The system includes intelligent scheduling and deployment logic that simulates decision-support systems used in transportation operations.

### Train Ranking Engine

Ranks trains based on:

- Operational Score
- Maintenance Status
- Mileage
- Availability

### Smart Deployment Logic

Automatically:

- Prioritizes healthy trains
- Blocks trains with unresolved maintenance issues
- Generates deployment recommendations
- Optimizes train allocation

### Operational Simulation

Allows supervisors to evaluate deployment outcomes using ranked train data.

---

## 🔄 Workflow

### Maintenance Workflow

Employee Reports Issue

⬇

Supervisor/Admin Receives Alert

⬇

Issue Reviewed & Resolved

⬇

Audit Log Generated

⬇

Train Becomes Deployable Again

---

### Branding Workflow

Employee Submits Branding Request

⬇

Admin Reviews Request

⬇

Approve / Reject

⬇

Audit Log Generated

---

### Shift Scheduling Workflow

Employee Creates Shift Request

⬇

Supervisor Monitors Requests

⬇

Shift Recorded in System

⬇

Audit Log Updated

---

## 📊 Highlights

✔ Role-Based Authentication

✔ Protected Dashboard Access

✔ Employee → Supervisor → Admin Workflow

✔ AI-Inspired Fleet Deployment Logic

✔ Cross-Dashboard Workflow Synchronization

✔ Persistent Local Storage

✔ Maintenance Approval System

✔ Branding Approval System

✔ Comprehensive Audit Logging

✔ Analytics Dashboard

✔ Responsive UI Design

✔ Smart Deployment Planning

✔ Alert Resolution System

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS

### State Management

- React Context API

### Data Persistence

- Browser LocalStorage

### Data Visualization

- Recharts

### Build Tool

- Vite

---

## 🏗️ Architecture

The application follows a modular React architecture featuring:

- Role-Based Dashboards
- Shared Reusable UI Components
- Context-Based Global State Management
- Utility-Driven Business Logic
- Persistent Client-Side Storage
- Component-Based Design Architecture

---

## 📷 Screenshots

### Login Page

![Login Page](screenshots/login.png)

---

### Employee Dashboard

#### Shift Scheduling & Maintenance Reporting & Branding Requests

![Employee Dashboard 1](screenshots/employee-dashboard.png)

---

### Supervisor Dashboard

#### Analytics & Deployment Planning & Alerts

![Supervisor Dashboard 1](screenshots/supervisor-dashboard-1.png)

#### Pending Requests

![Supervisor Dashboard 2](screenshots/supervisor-dashboard-2.png)

#### Audit Logs & Blocked Trains

![Supervisor Dashboard 3](screenshots/supervisor-dashboard-3.png)

#### Deployment Simulation & Branding Insights

![Supervisor Dashboard 4](screenshots/supervisor-dashboard-4.png)

---

### Admin Dashboard

#### Stats & Alerts & Pending Branding requests

![Admin Dashboard 1](screenshots/admin-dashboard-1.png)

#### Analytics & Predictive Maintenance & Notifications

![Admin Dashboard 2](screenshots/admin-dashboard-2.png)

#### AI Recommendations

![Admin Dashboard 3](screenshots/admin-dashboard-3.png)

#### Add Train & Audit Logs

![Admin Dashboard 4](screenshots/admin-dashboard-4.png)

#### Fleet Management

![Admin Dashboard 5](screenshots/admin-dashboard-5.png)

#### User Management

![Admin Dashboard 6](screenshots/admin-dashboard-6.png)

#### Maintenance Reports

![Admin Dashboard 7](screenshots/admin-dashboard-7.png)

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/Ujjawala27/Smart-Metro-Operations-Platform.git
```

### Navigate to Project Directory

```bash
cd Smart-Metro-Operations-Platform
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Open Browser

```bash
http://localhost:5173
```

## 🔑 Demo Credentials

### Employee

- Username: employee
- Password: employee123

### Supervisor

- Username: supervisor
- Password: supervisor123

### Admin

- Username: admin
- Password: admin123

---

## 🌟 Learning Outcomes

This project helped in understanding:

- Role-Based Access Control (RBAC)
- React Context API
- Component-Based Architecture
- State Persistence with LocalStorage
- Dashboard Design Principles
- Workflow Automation
- Business Logic Implementation
- State Synchronization Across Dashboards
- Responsive UI Development
- Workflow-Based System Design

---

## 🔮 Future Enhancements

- Cloud Database Integration
- Multi-User Support
- WebSocket-Based Live Updates
- Machine Learning-Based Maintenance Prediction
- Advanced Analytics & Reporting
- Mobile Application Support
- Notification Service Integration
- Fleet Performance Forecasting

---

## 🚀 Deployment

The application can be deployed easily using:

- Vercel
- Netlify
- GitHub Pages

### Live Demo

🔗 Live Demo:
https://smart-metro-operations-platform-x3e.vercel.app

---

## 👨‍💻 Author

Developed as a role-based metro fleet management and scheduling platform demonstrating workflow automation, operational monitoring, and AI-inspired deployment planning.

**Project:** Smart Metro Operations Platform

**GitHub Repository:**
https://github.com/Ujjawala27/Smart-Metro-Operations-Platform.git
