# Quick EmailJS Setup Guide

This project uses EmailJS to handle newsletter subscriptions. Follow these steps to get it working:

## Step 1: Sign Up for EmailJS

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or your preferred email provider
4. Connect your email account (the one you want to send emails from)

## Step 3: Create an Email Template

1. Go to "Email Templates" and click "Create New Template"
2. Use this basic template:

**Subject:**
```
New Newsletter Subscription
```

**Content:**
```html
<h2>New Subscriber!</h2>
<p>Someone has subscribed to the Noether Labs newsletter.</p>
<p><strong>Email address:</strong> {{subscriber_email}}</p>
<p><strong>Time:</strong> {{time}}</p>
```

## Step 4: Get Your IDs

1. Note your Service ID from the Email Services page
2. Note your Template ID from the Email Templates page
3. Get your User ID (public key) from the "Account" → "API Keys" section

## Step 5: Update Your Project

1. Create a `.env.local` file in the project root with:

```
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
```

Note: The environment variable name has changed from EMAILJS_USER_ID to EMAILJS_PUBLIC_KEY in the latest update.

## Step 6: Restart Your Server

1. Stop your development server if it's running
2. Start it again with `npm run dev`

## Testing

Try subscribing with your own email to test if it works properly. You should:
1. Receive an email notification
2. See a success message on the website
3. Find your email in the `subscribers.csv` file (backup method)

## Troubleshooting

If you're still having issues:

1. Check your browser console for specific error messages
2. Make sure your EmailJS account is properly set up
3. Verify that your IDs are correct in the .env.local file
4. Try using a different email service in EmailJS
5. If you see "Failed to process subscription" error:
   - Make sure you've correctly set up all three environment variables
   - Restart your development server after updating the .env.local file
   - Check that your EmailJS template has the required parameters (subscriber_email and time)
