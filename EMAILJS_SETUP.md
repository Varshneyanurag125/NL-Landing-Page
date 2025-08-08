# EmailJS Setup Instructions

Follow these steps to configure EmailJS for your email newsletter subscription system:

## Step 1: Sign Up for EmailJS

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account.
2. The free tier allows 200 emails per month, which should be enough for initial testing.

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to "Email Services" and click "Add New Service".
2. Choose your email provider (Gmail, Outlook, etc.) and connect your account.
3. Name the service "default_service" or note down the service ID you choose.

## Step 3: Create an Email Template

1. Go to "Email Templates" and click "Create New Template".
2. Create a template that will be sent to you when someone subscribes.
3. Here's a sample template:

**Subject:**
```
New Newsletter Subscription
```

**Content:**
```html
<h2>New Subscriber!</h2>
<p>Someone has subscribed to the Noether Labs newsletter.</p>
<p><strong>Email address:</strong> {{subscriber_email}}</p>
<p>Time: {{time}}</p>
```

4. Save the template and note the template ID (it will look like "template_abc123").

## Step 4: Get Your User ID

1. Go to "Account" → "API Keys".
2. Copy your Public Key (this is your user_id).

## Step 5: Update Your Code

Open `src/app/api/subscribe/route.js` and update these values:

```javascript
service_id: 'default_service',  // Use the service ID you created
template_id: 'template_subscription',  // Use the template ID you created
user_id: 'YOUR_EMAILJS_USER_ID',  // Replace with your public key
```

## Step 6: Test Your Subscription Form

Try subscribing with your own email address to make sure everything works properly.

## Additional Features

- You can set up a confirmation email to the subscriber by creating another template.
- For production, consider upgrading to a paid plan if you expect more than 200 emails per month.
