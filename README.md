# 🚀 Task Manager – Full DevOps Project

A full-stack **Task Manager application** built with **Node.js, React, MongoDB**, and deployed using a **production-grade CI/CD DevOps pipeline**.

This project demonstrates **real-world DevOps practices** including Dockerization, GitHub Actions CI/CD, image versioning, cloud deployment, and rollback strategy.

---

## 🌐 Live Demo

- **Frontend:** https://task-manager-devops-okggf5xi1-vishruti18s-projects.vercel.app/
- **Backend:** https://task-manager-backend-hnji.onrender.com

---

## 🧱 Tech Stack

### Frontend
- React
- Axios
- Docker

### Backend
- Node.js
- Express
- MongoDB (Atlas)
- Docker

### DevOps / Cloud
- Docker & Docker Hub
- GitHub Actions (CI/CD)
- Render (Backend hosting)
- Vercel (Frontend hosting)
- MongoDB Atlas (Cloud DB)

---

## 📐 System Architecture

Developer
|
| git push
v
GitHub Repository
|
| GitHub Actions (CI)
| - Install dependencies
| - Build frontend
| - Build Docker images
| - Push images to Docker Hub
v
Docker Hub
|
| Pull Docker Image
v
Render (Backend)
|
v
MongoDB Atlas

## 🔄 CI/CD Pipeline (GitHub Actions)

Every push to the `main` branch triggers:

1. Frontend dependency install & build
2. Backend dependency install
3. Docker image build (backend & frontend)
4. Docker image push to Docker Hub
5. Production deployment via Docker image

### ✅ Key Features
- Automated CI validation
- Immutable Docker images

## 🧪 API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Add new task |
| DELETE | `/tasks/:id` | Delete task |

### Clone repository
```bash
git clone https://github.com/vishruti-18/task-manager-devops.git
cd task-manager-devops
