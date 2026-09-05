# Full-Stack Application

A simple web app built with **Django REST Framework** and **React** intended to work a TLE propagation viewer.

---

## Tech Stack

* **Backend:** Python, Django
* **Frontend:** JavaScript, React, Cesium

---

## Project Structure

```text
.
├── backend/       # Django API server
├── frontend/      # React/Cesium application (Vite)
├── .gitignore     # Global Git ignore rules
├── CHANGELOG.md   # Version history
└── README.md      # Documentation
```
---

## Getting started

### Prerequisites

Ensure you have installed:
* Python 3.10+
* Node.js 18+
* npm
* Git

### Instalation and Setup

#### 1. Clone the repository

```bash
git clone https://github.com/PedrorFelix/TLEPropagator.git
cd TLEPropagator
```

#### 2. Setup the Backend
```bash
# Starting in repo root
cd backend
python -m venv .venv

# On windows
.venv\Scripts\activate
# On another OS
source .venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
```

#### 3. Setup the Frontend
```bash
# Starting at the repo root
cd frontend
npm install
```

### Starting the server

```bash
# From repo root
cd backend

# On Windows
.venv\Scripts\activate
# On another OS
source .venv/bin/activate

#Return to repo root
cd ..
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | ```/api/hello``` | Basic api check