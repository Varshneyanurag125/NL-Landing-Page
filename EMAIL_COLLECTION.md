# Email Collection Methods

This project includes multiple methods for collecting newsletter subscriptions:

## 1. Gmail/Nodemailer Method (Default)

**Files to configure:**
- `src/app/api/subscribe/route.js` - Set your Gmail and app password
- `.env.local` - Add your Gmail credentials (create this file)

**Setup instructions:**
See [GMAIL_SETUP.md](./GMAIL_SETUP.md) for detailed instructions.

## 2. EmailJS Method (Alternative)

**Files to configure:**
- `src/app/api/subscribe/route.js` - Uncomment the EmailJS code and add your credentials

**Setup instructions:**
See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed instructions.

## 3. Database Storage (Advanced)

For a more robust solution, you could store emails in a database:

1. Set up a database (MongoDB, Supabase, Firebase, etc.)
2. Configure your database connection
3. Modify the route handler to save emails to your database

## Environment Variables

Create a `.env.local` file in the root directory with:

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password

# If using EmailJS
EMAILJS_SERVICE_ID=your-service-id
EMAILJS_TEMPLATE_ID=your-template-id
EMAILJS_USER_ID=your-user-id
```
