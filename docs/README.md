# CareerPath Navigator

A comprehensive career guidance platform that helps students make informed decisions about their education and career paths after 10th and 12th grade.

## Features

- **User Authentication**: Complete signup/login system with secure password hashing
- **Career Assessment**: Interactive questionnaire to match students with suitable career paths
- **Stream Information**: Detailed information about Science, Commerce, and Arts streams
- **Contact System**: Message submission and storage system
- **Admin Panel**: View all registered users and contact messages
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: bcryptjs for password hashing, express-session for session management

## Setup Instructions

### Prerequisites

1. **Node.js** (v14 or higher)
2. **MongoDB** (v4.4 or higher)
3. **npm** (comes with Node.js)

### Installation

1. **Clone or download the project**
   ```bash
   cd "d:\html & css"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   - Make sure MongoDB is running on your system
   - Default connection: `mongodb://localhost:27017`

4. **Initialize the database**
   ```bash
   npm run init-db
   ```

5. **Start the server**
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Main site: http://localhost:3000
   - Admin panel: http://localhost:3000/admin-panel.html

## File Structure

```
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── init-db.js            # Database initialization
├── test.html             # Main homepage
├── login.html            # Login page
├── signup.html           # Signup page
├── admin-panel.html      # Admin dashboard
├── question-1.html       # Assessment page
└── README.md             # This file
```

## API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `GET /api/user` - Get current user info

### Data Management
- `GET /api/users` - Get all users (admin)
- `POST /api/contact` - Submit contact message
- `GET /api/messages` - Get all messages (admin)
- `POST /api/assessment` - Submit assessment
- `GET /api/assessments` - Get all assessments

## Usage

### For Students

1. **Registration**: Create an account using the signup form
2. **Login**: Access your account with email and password
3. **Assessment**: Take the career assessment to get personalized recommendations
4. **Explore**: Browse different streams and career options
5. **Contact**: Send messages for additional guidance

### For Administrators

1. **Access Admin Panel**: Navigate to `/admin-panel.html`
2. **View Users**: See all registered users and their registration dates
3. **View Messages**: Read all contact messages from students
4. **Monitor Data**: Track user engagement and message volume

## Database Collections

### Users Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date
}
```

### Messages Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  status: String (default: 'unread'),
  createdAt: Date
}
```

### Assessments Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (optional),
  responses: Object,
  results: Object,
  createdAt: Date
}
```

## Security Features

- Password hashing using bcryptjs
- Session-based authentication
- Input validation and sanitization
- Secure session configuration
- Protection against common vulnerabilities

## Troubleshooting

### Port Already in Use Error
If you get "EADDRINUSE" error:
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

### MongoDB Connection Issues
- Ensure MongoDB service is running
- Check if MongoDB is accessible at `mongodb://localhost:27017`
- Verify database permissions

### Missing Dependencies
```bash
npm install
```

## Development

### Adding New Features
1. Update server.js for new API endpoints
2. Create/modify HTML files for new pages
3. Update database schema if needed
4. Test thoroughly before deployment

### Environment Variables
You can set these environment variables:
- `PORT`: Server port (default: 3000)
- `MONGO_URI`: MongoDB connection string
- `SESSION_SECRET`: Session secret key

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Feel free to use and modify as needed.

## Support

For issues or questions, please use the contact form in the application or create an issue in the repository.