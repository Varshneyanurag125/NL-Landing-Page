# Gmail App Password Setup for Nodemailer

To use Nodemailer with your Gmail account, you'll need to set up an App Password. This is more secure than using your regular Gmail password, especially for automated applications.

## Step 1: Enable 2-Step Verification

1. Go to your [Google Account](https://myaccount.google.com/).
2. Select "Security" in the left navigation panel.
3. Under "Signing in to Google," select "2-Step Verification" and turn it on.
4. Follow the prompts to set up 2-Step Verification.

## Step 2: Create an App Password

1. Go back to your [Google Account Security page](https://myaccount.google.com/security).
2. Under "Signing in to Google," select "App passwords" (you might need to sign in again).
3. At the bottom, select "Select app" and then "Mail".
4. Select "Select device" and choose "Other (Custom name)".
5. Enter a name like "Noether Labs Newsletter" and click "Generate".
6. Google will display a 16-character app password. Copy this password.

## Step 3: Update Your Code

Open `src/app/api/subscribe/route.js` and update these values:

```javascript
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // replace with your Gmail address
    pass: "your-app-password" // replace with the 16-character app password you generated
  }
});
```

## Step 4: Test Your Email System

Try subscribing with your own email address to make sure everything works properly.

## Security Note

- Never commit your app password to version control.
- For production, use environment variables to store sensitive information.
- Add the following to your `.env.local` file:

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

Then update your code to use:

```javascript
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});
```

## Alternative Solutions

If you prefer not to use Gmail or want a more robust solution:
- Consider using services like SendGrid, Mailgun, or Amazon SES
- For production applications, these services offer better deliverability and monitoring
