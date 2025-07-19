
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, Clock, Send, Download, ExternalLink, MessageSquare, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "saiteja0408.s@gmail.com",
      link: "mailto:saiteja0408.s@gmail.com",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (571) 123-4567",
      link: "tel:+15711234567",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Arlington, Virginia",
      link: "https://maps.google.com/?q=Arlington,Virginia",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Calendar,
      title: "Availability",
      value: "Open to Opportunities",
      link: "#",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/saiteja-singirikonda/",
      icon: Linkedin,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "GitHub",
      url: "https://github.com/saiteja-0408",
      icon: Github,
      color: "text-gray-800",
      bgColor: "bg-gray-50"
    }
  ];

  const availability = [
    { day: "Monday", time: "9:00 AM - 6:00 PM", status: "Available" },
    { day: "Tuesday", time: "9:00 AM - 6:00 PM", status: "Available" },
    { day: "Wednesday", time: "9:00 AM - 6:00 PM", status: "Available" },
    { day: "Thursday", time: "9:00 AM - 6:00 PM", status: "Available" },
    { day: "Friday", time: "9:00 AM - 6:00 PM", status: "Available" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM", status: "Limited" },
    { day: "Sunday", time: "Closed", status: "Unavailable" }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // For demo purposes, we'll simulate a successful submission
      // In a real application, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate email sending
      const emailData = {
        to: "saiteja0408.s@gmail.com",
        from: formData.email,
        subject: `Portfolio Contact: ${formData.subject}`,
        message: `
          Name: ${formData.name}
          Email: ${formData.email}
          Subject: ${formData.subject}
          
          Message:
          ${formData.message}
        `
      };

      // Log the email data (in production, this would be sent to your backend)
      console.log("Email would be sent:", emailData);
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      }, 3000);
      
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSocialClick = (url: string, name: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    toast({
      title: "Opening Link",
      description: `Opening ${name} in a new tab`,
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-theme-secondary to-theme-primary">
      <div className="section-container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon!</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            className={`w-full ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                            aria-describedby={errors.name ? "name-error" : undefined}
                          />
                          {errors.name && (
                            <p id="name-error" className="text-red-500 text-sm mt-1">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            className={`w-full ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                            aria-describedby={errors.email ? "email-error" : undefined}
                          />
                          {errors.email && (
                            <p id="email-error" className="text-red-500 text-sm mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          className={`w-full ${errors.subject ? 'border-red-500 focus:border-red-500' : ''}`}
                          aria-describedby={errors.subject ? "subject-error" : undefined}
                        />
                        {errors.subject && (
                          <p id="subject-error" className="text-red-500 text-sm mt-1">
                            {errors.subject}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project or opportunity..."
                          rows={5}
                          className={`w-full ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                          aria-describedby={errors.message ? "message-error" : undefined}
                        />
                        {errors.message && (
                          <p id="message-error" className="text-red-500 text-sm mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-6">
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${info.bgColor || 'bg-gray-50'}`}>
                            <info.icon className={`h-5 w-5 ${info.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-800">{info.title}</h3>
                            <a
                              href={info.link}
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${info.title}: ${info.value}`}
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    Connect With Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSocialClick(social.url, social.name)}
                        className="flex items-center gap-2"
                        aria-label={`Visit ${social.name} profile`}
                      >
                        <social.icon className="h-4 w-4" />
                        {social.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability Calendar */}
              <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {availability.map((day) => (
                      <div key={day.day} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-gray-800 min-w-[80px]">{day.day}</span>
                          <span className="text-sm text-gray-600">{day.time}</span>
                        </div>
                        <Badge 
                          variant={day.status === "Available" ? "default" : day.status === "Limited" ? "secondary" : "outline"}
                          className="text-xs"
                        >
                          {day.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
