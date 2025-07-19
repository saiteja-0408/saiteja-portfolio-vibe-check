import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Users, Code, Clock, Activity, Zap, Target, Award } from "lucide-react";

interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: any;
  color: string;
  bgColor: string;
  description: string;
  trend: "up" | "down" | "stable";
  change: number;
}

const LiveStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const stats: Stat[] = [
    {
      id: "projects",
      label: "Projects Completed",
      value: 25,
      icon: Code,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "Full-stack applications and automation tools",
      trend: "up",
      change: 12
    },
    {
      id: "experience",
      label: "Years Experience",
      value: 4,
      suffix: "+",
      icon: Clock,
      color: "text-green-600",
      bgColor: "bg-green-50",
      description: "Software engineering and DevOps",
      trend: "up",
      change: 1
    },
    {
      id: "technologies",
      label: "Technologies Mastered",
      value: 15,
      icon: Zap,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Programming languages and frameworks",
      trend: "up",
      change: 3
    },
    {
      id: "efficiency",
      label: "Testing Time Reduced",
      value: 70,
      suffix: "%",
      icon: Target,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      description: "Through automation frameworks",
      trend: "up",
      change: 15
    },
    {
      id: "accuracy",
      label: "Migration Accuracy",
      value: 98,
      suffix: "%",
      icon: Award,
      color: "text-red-600",
      bgColor: "bg-red-50",
      description: "Data migration success rate",
      trend: "stable",
      change: 2
    },
    {
      id: "deployment",
      label: "Deployment Time Reduced",
      value: 80,
      suffix: "%",
      icon: TrendingUp,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      description: "Through CI/CD automation",
      trend: "up",
      change: 20
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("live-stats");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [isVisible, value]);

    return (
      <span className="text-3xl font-bold">
        {displayValue.toLocaleString()}{suffix}
      </span>
    );
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "down":
        return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />;
      default:
        return <Activity className="h-4 w-4 text-blue-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      default:
        return "text-blue-600";
    }
  };

  return (
    <section id="live-stats" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Live Performance Metrics</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time statistics showcasing my impact and achievements across various projects and technologies.
          </p>
        </motion.div>

        {/* Live Time Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Last updated: {currentTime.toLocaleTimeString()}
            </span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="h-full bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full ${stat.bgColor} group-hover:scale-110 transition-transform`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className="flex items-center gap-1">
                      {getTrendIcon(stat.trend)}
                      <span className={`text-xs font-medium ${getTrendColor(stat.trend)}`}>
                        +{stat.change}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <h3 className="text-lg font-semibold text-gray-800">{stat.label}</h3>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{stat.value}{stat.suffix}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          stat.color === "text-blue-600" ? "bg-blue-500" :
                          stat.color === "text-green-600" ? "bg-green-500" :
                          stat.color === "text-purple-600" ? "bg-purple-500" :
                          stat.color === "text-orange-600" ? "bg-orange-500" :
                          stat.color === "text-red-600" ? "bg-red-500" :
                          "bg-indigo-500"
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min(stat.value, 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Total Impact", value: "150K+", description: "Records processed" },
            { label: "Success Rate", value: "98%", description: "Project completion" },
            { label: "Time Saved", value: "500+", description: "Hours automated" },
            { label: "Technologies", value: "15+", description: "Mastered skills" }
          ].map((summary, index) => (
            <motion.div
              key={summary.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50"
            >
              <div className="text-2xl font-bold text-gray-800 mb-1">{summary.value}</div>
              <div className="text-sm font-medium text-gray-700 mb-1">{summary.label}</div>
              <div className="text-xs text-gray-500">{summary.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's work together to create innovative solutions and drive measurable impact for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Projects
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Get in Touch
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveStats; 