
import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, Brain, Cpu, Database, BarChart, Search, Eye, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-12 w-12 text-tyrian-600" />,
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI solutions tailored to your business needs.",
      features: [
        "AI readiness assessment",
        "Custom AI strategy development",
        "Implementation roadmap",
        "ROI forecasting"
      ]
    },
    {
      icon: <Cpu className="h-12 w-12 text-tyrian-600" />,
      title: "Machine Learning Solutions",
      description: "Custom machine learning models to solve complex business problems.",
      features: [
        "Supervised & unsupervised learning",
        "Deep learning models",
        "Reinforcement learning",
        "Transfer learning applications"
      ]
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-tyrian-600" />,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions to understand, interpret, and generate human language.",
      features: [
        "Sentiment analysis",
        "Chatbot development",
        "Text summarization",
        "Language translation"
      ]
    },
    {
      icon: <Eye className="h-12 w-12 text-tyrian-600" />,
      title: "Computer Vision",
      description: "Image and video analysis solutions for automated visual understanding.",
      features: [
        "Object detection & recognition",
        "Facial recognition",
        "Video analytics",
        "Augmented reality integration"
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-tyrian-600" />,
      title: "Big Data Analytics",
      description: "Turn your data into actionable insights with advanced analytics.",
      features: [
        "Data warehousing",
        "Real-time analytics",
        "Predictive modeling",
        "Data visualization"
      ]
    },
    {
      icon: <Search className="h-12 w-12 text-tyrian-600" />,
      title: "AI Research",
      description: "Cutting-edge research to advance the state of artificial intelligence.",
      features: [
        "Academic partnerships",
        "Custom research projects",
        "Publication support",
        "Technology prototyping"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | TyrianAI</title>
        <meta name="description" content="Explore TyrianAI's comprehensive range of AI and machine learning services designed to transform your business." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Cutting-edge AI solutions designed to transform your business and drive innovation.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-tyrian-600 dark:text-tyrian-400 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A proven methodology that delivers successful AI implementations.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-tyrian-200 dark:bg-tyrian-800 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { 
                  number: "01",
                  title: "Discovery",
                  description: "Understanding your business objectives and identifying how AI can help achieve them."
                },
                { 
                  number: "02",
                  title: "Design",
                  description: "Creating the architecture and specifications for your custom AI solution."
                },
                { 
                  number: "03",
                  title: "Development",
                  description: "Building and training the AI models with iterative testing and refinement."
                },
                { 
                  number: "04",
                  title: "Deployment",
                  description: "Implementing the solution in your environment with ongoing support and optimization."
                }
              ].map((step, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm relative">
                  <div className="w-12 h-12 bg-tyrian-600 dark:bg-tyrian-700 rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto lg:mx-0">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center lg:text-left">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center lg:text-left">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-tyrian-800 to-tyrian-600 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your business with AI?</h2>
              <p className="text-xl text-white/80 mb-8">
                Contact us today to discuss how our services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-tyrian-800 hover:bg-gray-100">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
