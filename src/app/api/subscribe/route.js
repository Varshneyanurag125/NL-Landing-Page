import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // For security reasons, we're using EmailJS which is more reliable for client-side applications
    const emailJsUserId = process.env.EMAILJS_PUBLIC_KEY;
    const emailJsServiceId = process.env.EMAILJS_SERVICE_ID;
    const emailJsTemplateId = process.env.EMAILJS_TEMPLATE_ID;
    
    // Check if EmailJS credentials are configured
    if (!emailJsUserId || !emailJsServiceId || !emailJsTemplateId) {
      console.error("EmailJS configuration missing. Check your environment variables.");
      
      // Still save the email locally but return a warning
      await saveSubscriberToFile(email);
      
      return NextResponse.json(
        { 
          success: true, 
          message: "Subscription saved locally. Email notification not configured." 
        },
        { status: 200 }
      );
    }
    
    // Using EmailJS to send the email
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: emailJsServiceId,
          template_id: emailJsTemplateId,
          user_id: emailJsUserId,
          template_params: {
            to_email: 'varshneyanurag125@gmail.com',
            subscriber_email: email,
            message: `New subscription from ${email}`,
            time: new Date().toString()
          }
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("EmailJS API error:", errorText);
        throw new Error(`EmailJS API error: ${errorText}`);
      }
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // Continue execution to at least save the subscriber locally
    }

    // Always save subscribers to a local file as backup
    await saveSubscriberToFile(email);

    return NextResponse.json(
      { success: true, message: "Subscription successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    
    // Create a more user-friendly error message
    let errorMessage = "Failed to process subscription";
    if (error.message) {
      if (error.message.includes("EmailJS")) {
        errorMessage = "Email notification service error. Please try again or contact support.";
      } else if (error.message.includes("JSON")) {
        errorMessage = "There was an issue processing your request";
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

/**
 * Helper function to save subscriber information to a local file
 */
async function saveSubscriberToFile(email) {
  try {
    // Create a timestamp
    const timestamp = new Date().toISOString();
    
    // Format the data
    const subscriberData = `${timestamp}, ${email}\n`;
    
    // Path to the subscribers file (will be in the project root)
    const subscribersPath = path.join(process.cwd(), 'subscribers.csv');
    
    // Check if the file exists, if not create with headers
    try {
      await fs.access(subscribersPath);
    } catch {
      await fs.writeFile(subscribersPath, 'Timestamp, Email\n', 'utf8');
    }
    
    // Append to the file
    await fs.appendFile(subscribersPath, subscriberData, 'utf8');
    
    console.log(`Subscriber saved: ${email}`);
    return true;
  } catch (fileError) {
    console.error('Failed to save subscriber to file:', fileError);
    return false;
  }
}
