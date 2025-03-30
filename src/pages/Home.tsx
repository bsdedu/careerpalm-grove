import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Brain, Cpu, BarChart, Shield, Building, Microscope, Ambulance, ShoppingCart, GraduationCap, Globe, Users, Award, Rocket, Code, Clock, Server } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <ScrollFadeIn>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-heading leading-tight mb-6">
                  Empowering Businesses with Advanced AI Solutions
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Transform your business with our cutting-edge artificial intelligence and machine learning technologies. Stay ahead of the competition with smart, data-driven solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-tyrian-700 hover:bg-tyrian-800 text-white px-8 py-6 text-lg">
                    Get Started
                  </Button>
                  <Button variant="outline" className="border-tyrian-600 text-tyrian-700 hover:bg-tyrian-50 dark:border-tyrian-400 dark:text-tyrian-400 dark:hover:bg-gray-800 px-8 py-6 text-lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 mt-12 lg:mt-0">
                <div className="relative">
                  <div className="bg-gradient-to-r from-tyrian-600 to-tyrian-400 rounded-2xl p-1">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6">
                      <img 
                        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
                        alt="AI Technology Visualization" 
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">AI Processing Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Advanced AI Solutions for Modern Businesses */}
      <ScrollFadeIn delay={200}>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
                Advanced AI Solutions for Modern Businesses
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our comprehensive suite of AI-powered tools and services helps businesses of all sizes achieve their goals faster and more efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Brain className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />,
                  title: "Machine Learning",
                  description: "Custom machine learning models trained on your data to solve your unique business challenges.",
                  path: "/services/machine-learning"
                },
                {
                  icon: <Cpu className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />,
                  title: "Natural Language Processing",
                  description: "Advanced text analysis, sentiment detection, and language understanding capabilities.",
                  path: "/services/natural-language-processing"
                },
                {
                  icon: <BarChart className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />,
                  title: "Predictive Analytics",
                  description: "Forecast trends, identify risks, and uncover hidden opportunities in your business data.",
                  path: "/services/predictive-analytics"
                },
                {
                  icon: <Shield className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />,
                  title: "AI Security",
                  description: "Protect your business with AI-powered threat detection and automated response systems.",
                  path: "/services/ai-security"
                }
              ].map((service, index) => (
                <ScrollFadeIn key={index} direction="up" delay={300 + (index * 100)} threshold={0.2}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-gray-700 h-full flex flex-col justify-between">
                    <div>
                      <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-lg flex items-center justify-center mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                        {service.description}
                      </p>
                    </div>
                    <Link to={service.path} className="inline-flex items-center text-tyrian-700 dark:text-tyrian-400 hover:underline mt-auto">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Industries We Serve */}
      <ScrollFadeIn delay={300} direction="left">
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our AI solutions are tailored to meet the unique challenges of diverse industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Industry cards */}
              {[
                {
                  id: 1,
                  title: "Healthcare",
                  description: "Revolutionizing patient care with AI diagnostics and personalized medicine.",
                  icon: <Ambulance className="h-8 w-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
                  path: "/industries/healthcare"
                },
                {
                  id: 2,
                  title: "Finance",
                  description: "Enhancing financial services with fraud detection and automated trading systems.",
                  icon: <Building className="h-8 w-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
                  path: "/industries/finance"
                },
                {
                  id: 3,
                  title: "Retail",
                  description: "Transforming customer experiences with personalized recommendations and inventory optimization.",
                  icon: <ShoppingCart className="h-8 w-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
                  path: "/industries/retail"
                },
                {
                  id: 4,
                  title: "Manufacturing",
                  description: "Optimizing production lines and predictive maintenance with AI-powered systems.",
                  icon: <Cpu className="h-8 w-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80",
                  path: "/industries/manufacturing"
                },
                {
                  id: 5,
                  title: "Education",
                  description: "Enhancing learning experiences with personalized education and automated grading systems.",
                  icon: <GraduationCap className="h-8 w-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
                  path: "/industries/education"
                },
                {
                  id: 6,
                  title: "Research & Development",
                  description: "Accelerating discoveries with AI-driven data analysis and experimental design.",
                  icon: <Microscope className="h-8 w-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
                  path: "/industries/research"
                }
              ].map((industry) => (
                <ScrollFadeIn key={industry.id} direction="up" delay={400 + (industry.id * 100)} threshold={0.1}>
                  <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
                    <img 
                      src={industry.image} 
                      alt={`${industry.title} Industry`} 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="mb-3">
                          {industry.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                        <p className="text-white/80 mb-4">{industry.description}</p>
                        <Link to={industry.path} className="inline-flex items-center text-white hover:underline">
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Who We Are - New Section */}
      <ScrollFadeIn delay={350} direction="up">
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollFadeIn direction="left" delay={400}>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="TyrianAI Team" 
                    className="rounded-xl shadow-lg w-full h-full object-cover"
                  />
                </div>
              </ScrollFadeIn>
              <ScrollFadeIn direction="right" delay={450}>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
                    Who We Are
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    At TyrianAI, we are a team of passionate AI experts, data scientists, and engineers dedicated to transforming how businesses leverage artificial intelligence. Founded in 2018, we've grown from a small startup to an industry-leading AI solutions provider.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Our mission is to democratize access to advanced AI technologies, making them accessible and practical for businesses of all sizes. We believe in the power of AI to solve complex problems, drive innovation, and create sustainable competitive advantages.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="flex items-center">
                      <Users className="h-10 w-10 text-tyrian-600 mr-4" />
                      <div>
                        <h3 className="font-bold text-lg">60+ AI Experts</h3>
                        <p className="text-gray-600 dark:text-gray-400">Specialized team</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-10 w-10 text-tyrian-600 mr-4" />
                      <div>
                        <h3 className="font-bold text-lg">15+ Awards</h3>
                        <p className="text-gray-600 dark:text-gray-400">Industry recognition</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Rocket className="h-10 w-10 text-tyrian-600 mr-4" />
                      <div>
                        <h3 className="font-bold text-lg">200+ Projects</h3>
                        <p className="text-gray-600 dark:text-gray-400">Successfully delivered</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Code className="h-10 w-10 text-tyrian-600 mr-4" />
                      <div>
                        <h3 className="font-bold text-lg">5+ Million</h3>
                        <p className="text-gray-600 dark:text-gray-400">Lines of AI code</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Core Services Overview */}
      <ScrollFadeIn delay={400} direction="right">
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
                Our Core Services Overview
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Comprehensive AI solutions designed to transform your business operations and drive innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollFadeIn direction="left" delay={500}>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" 
                    alt="AI Services Overview" 
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </ScrollFadeIn>
              <div className="space-y-8">
                {[
                  {
                    id: 1,
                    title: "AI Consulting",
                    description: "Expert guidance on AI strategy, implementation roadmaps, and technology selection tailored to your specific business needs.",
                    icon: <Brain className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />
                  },
                  {
                    id: 2,
                    title: "Custom AI Development",
                    description: "Bespoke AI solutions engineered from the ground up to address your unique challenges and opportunities.",
                    icon: <Cpu className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />
                  },
                  {
                    id: 3,
                    title: "AI Integration",
                    description: "Seamlessly incorporate AI capabilities into your existing systems and workflows to maximize efficiency.",
                    icon: <Globe className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />
                  },
                  {
                    id: 4,
                    title: "Data Analytics & Insights",
                    description: "Transform raw data into actionable business intelligence with our advanced analytics capabilities.",
                    icon: <BarChart className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />
                  }
                ].map((service) => (
                  <ScrollFadeIn key={service.id} direction="right" delay={600 + (service.id * 100)} threshold={0.2}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-full flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </ScrollFadeIn>
                ))}
                
                <ScrollFadeIn delay={1000}>
                  <div className="mt-6">
                    <Link to="/services">
                      <Button className="bg-tyrian-700 hover:bg-tyrian-800 text-white">
                        Explore All Services
                      </Button>
                    </Link>
                  </div>
                </ScrollFadeIn>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* What Sets Us Apart - New Section */}
      <ScrollFadeIn delay={450} direction="left">
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
                What Sets Us Apart?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our unique approach to AI development and implementation creates exceptional value for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: "Research-Backed Solutions",
                  description: "Our solutions are built on cutting-edge research, with 15+ peer-reviewed publications from our team in the last year alone.",
                  icon: <Microscope className="h-10 w-10 text-white" />,
                  delay: 500
                },
                {
                  id: 2,
                  title: "Rapid Implementation",
                  description: "We deliver AI solutions 40% faster than industry average, getting you from concept to deployment in record time.",
                  icon: <Clock className="h-10 w-10 text-white" />,
                  delay: 550
                },
                {
                  id: 3,
                  title: "Scalable Infrastructure",
                  description: "Our cloud-native architecture ensures your AI solutions scale seamlessly as your business grows and evolves.",
                  icon: <Server className="h-10 w-10 text-white" />,
                  delay: 600
                }
              ].map((item) => (
                <ScrollFadeIn key={item.id} direction="up" delay={item.delay} threshold={0.1}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden h-full">
                    <div className="bg-gradient-to-r from-tyrian-700 to-tyrian-500 p-6">
                      <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
            
            <ScrollFadeIn delay={650}>
              <div className="mt-12 text-center">
                <Link to="/about">
                  <Button className="bg-tyrian-700 hover:bg-tyrian-800 text-white">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </ScrollFadeIn>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Why Choose Us Section - Completely redesigned */}
      <ScrollFadeIn delay={500}>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
                Why Choose TyrianAI
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Partner with the industry leader in artificial intelligence and machine learning solutions.
              </p>
            </div>
            
            {/* Redesigned cards with improved layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  id: 1,
                  title: "Elite AI Expertise",
                  description: "Our team includes PhD researchers and AI engineers from top tech companies and research institutions with a proven track record of innovation.",
                  icon: <Users className="h-10 w-10 text-white" />,
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                },
                {
                  id: 2,
                  title: "Custom-Tailored Solutions",
                  description: "We don't believe in one-size-fits-all. Every AI solution we develop is meticulously crafted to address your specific business needs and objectives.",
                  icon: <Brain className="h-10 w-10 text-white" />,
                  image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80"
                },
                {
                  id: 3,
                  title: "End-to-End Support",
                  description: "From initial consultation to deployment and beyond, we provide comprehensive support including 24/7 monitoring, maintenance, and continuous optimization.",
                  icon: <Clock className="h-10 w-10 text-white" />,
                  image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80"
                },
                {
                  id: 4,
                  title: "Proven ROI",
                  description: "Our clients consistently report a significant return on investment, with an average 35% increase in operational efficiency and 25% cost reduction.",
                  icon: <BarChart className="h-10 w-10 text-white" />,
                  image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=600&q=80"
                }
              ].map((feature) => (
                <ScrollFadeIn key={feature.id} direction="up" delay={600 + (feature.id * 100)} threshold={0.2}>
                  <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-tyrian-900/80 to-tyrian-700/40 z-10"></div>
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-tyrian-600 p-3 rounded-full z-20">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/about">
                <Button className="bg-tyrian-700 hover:bg-tyrian-800 text-white">
                  Learn More About Our Approach
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollFadeIn>

      {/* CTA Section */}
      <ScrollFadeIn delay={800} direction="up">
        <section className="py-20 bg-gradient-to-r from-tyrian-800 to-tyrian-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-tyrian-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of forward-thinking companies already leveraging our AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-tyrian-800 hover:bg-tyrian-50 px-8 py-6 text-lg">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-tyrian-700/50 px-8 py-6 text-lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
};

export default Home;
