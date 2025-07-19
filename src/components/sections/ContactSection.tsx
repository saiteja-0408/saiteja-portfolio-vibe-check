
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, Clock, Send, Download, ExternalLink, MessageSquare, Zap } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "saiteja0408.s@gmail.com",
      link: "mailto:saiteja0408.s@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (571) 123-4567",
      link: "tel:+15711234567",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Arlington, Virginia",
      link: "https://maps.google.com/?q=Arlington,Virginia",
      color: "text-purple-600"
    },
    {
      icon: Calendar,
      title: "Availability",
      value: "Open to Opportunities",
      link: "#",
      color: "text-orange-600"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="section-container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                            className="w-full"
                          />
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
                            className="w-full"
                          />
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
                          className="w-full"
                        />
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
                          rows={6}
                          className="w-full resize-none"
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-6">
              {/* Quick Contact Info */}
              <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className={`p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors`}>
                        <info.icon className={`h-5 w-5 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-700">{info.title}</div>
                        <div className="text-sm text-gray-600">{info.value}</div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </motion.a>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    Connect With Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border transition-all duration-200 hover:shadow-md ${social.bgColor} hover:bg-blue-50`}
                      >
                        <social.icon className={`h-5 w-5 ${social.color}`} />
                        <span className="font-medium text-gray-700">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {availability.map((day, index) => (
                      <motion.div
                        key={day.day}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-gray-700 w-20">{day.day}</span>
                          <span className="text-sm text-gray-600">{day.time}</span>
                        </div>
                        <Badge
                          variant={
                            day.status === "Available" ? "default" :
                            day.status === "Limited" ? "secondary" : "outline"
                          }
                          className={
                            day.status === "Available" ? "bg-green-100 text-green-800" :
                            day.status === "Limited" ? "bg-yellow-100 text-yellow-800" :
                            "bg-gray-100 text-gray-800"
                          }
                        >
                          {day.status}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Download Resume */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, want to discuss opportunities, 
                or just want to connect, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Mail className="h-4 w-4 mr-2" />
                  Start a Conversation
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
