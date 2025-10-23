# MongoDB Setup Instructions

## Prerequisites
1. Install Node.js from https://nodejs.org
2. Install MongoDB from https://www.mongodb.com/try/download/community

## Setup Steps

1. **Install dependencies:**
   ```bash
   cd "d:\html & css"
   npm install
   ```

2. **Start MongoDB:**
   ```bash
   mongod
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Access your app:**
   Open http://localhost:3000 in your browser

## Database Structure
- Database: `careerpath`
- Collection: `assessments`
- Document format:
  ```json
  {
    "question": 1,
    "answer": "math",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
  ```

## API Endpoints
- POST `/api/assessment` - Save assessment data
- GET `/api/assessments` - Get all assessments