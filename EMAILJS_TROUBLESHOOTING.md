# 🔧 EmailJS Troubleshooting Guide

## 🚨 **Current Issue: "Sending Failed"**

### **🔍 Quick Fixes to Try:**

#### **1. Check EmailJS Template Variables**
Make sure your EmailJS template uses these exact variable names:
- `{{name}}` - Sender's name
- `{{from_name}}` - Sender's name (backup)
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

#### **2. Verify EmailJS Setup**
1. **Service ID:** `service_2681t0x` ✅
2. **Template ID:** `template_2bcvw28` ✅
3. **User ID:** `R7ndoKDdxtDUnECh2` ✅

#### **3. Check EmailJS Dashboard**
- Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
- Verify your Gmail service is connected
- Check if template is published
- Look for any error messages

#### **4. Test EmailJS Template**
In EmailJS dashboard:
1. Go to "Email Templates"
2. Click on your template
3. Click "Test" button
4. Fill in test data and send

### **🛠️ Debug Steps:**

#### **Step 1: Check Browser Console**
1. Open browser console (F12)
2. Submit the contact form
3. Look for specific error messages
4. Share the error details

#### **Step 2: Verify Template**
Make sure your EmailJS template looks like this:

```html
Subject: [Portfolio Contact] {{subject}}

<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{name}} has been received. Kindly respond at your earliest convenience.</div>
  <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey;">
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div style="padding: 6px 10px; margin: 0 10px; background-color: aliceblue; border-radius: 5px; font-size: 26px;" role="img">👤</div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px"><strong>{{name}}</strong></div>
          <div style="color: #cccccc; font-size: 13px">{{from_email}}</div>
          <p style="font-size: 16px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
</div>
```

#### **Step 3: Check Gmail Service**
1. In EmailJS → "Email Services"
2. Verify Gmail is connected
3. Test the service connection
4. Make sure it's active

### **🎯 Current Status:**

#### **✅ What's Working:**
- Form validation ✅
- Console logging ✅
- EmailJS initialization ✅
- Error handling improved ✅

#### **⏳ What Needs Verification:**
- EmailJS template variables
- Gmail service connection
- Template publishing status

### **📧 Alternative Solutions:**

#### **Option 1: Use Console Logging Only**
The form will still log messages to console even if EmailJS fails.

#### **Option 2: Check EmailJS Quota**
Free EmailJS accounts have limits. Check your usage.

#### **Option 3: Test with Different Template**
Try a simpler template first to isolate the issue.

### **🔍 Next Steps:**

1. **Check browser console** for specific error messages
2. **Verify EmailJS template** variables match
3. **Test EmailJS service** connection
4. **Try the form again** and share any new error messages

### **📞 Need Help?**
- Share the browser console error messages
- Check EmailJS dashboard for any alerts
- Verify template is published and active

---

**🎉 Even if EmailJS fails, your messages are still being logged to the browser console!** 