
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Brain, Cpu, BarChart, Shield, Building, Microscope, Ambulance, ShoppingCart, GraduationCap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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

      {/* Features Section */}
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
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-gray-700">
              <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Machine Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Custom machine learning models trained on your data to solve your unique business challenges.
              </p>
              <Link to="/services/machine-learning" className="inline-flex items-center text-tyrian-700 dark:text-tyrian-400 hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-gray-700">
              <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Natural Language Processing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced text analysis, sentiment detection, and language understanding capabilities.
              </p>
              <Link to="/services/natural-language-processing" className="inline-flex items-center text-tyrian-700 dark:text-tyrian-400 hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-gray-700">
              <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Predictive Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Forecast trends, identify risks, and uncover hidden opportunities in your business data.
              </p>
              <Link to="/services/predictive-analytics" className="inline-flex items-center text-tyrian-700 dark:text-tyrian-400 hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-gray-700">
              <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                AI Security
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Protect your business with AI-powered threat detection and automated response systems.
              </p>
              <Link to="/services/ai-security" className="inline-flex items-center text-tyrian-700 dark:text-tyrian-400 hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Industries We Serve */}
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
            {/* Industry 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                alt="Healthcare Industry" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3">
                    <Ambulance className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Healthcare</h3>
                  <p className="text-white/80 mb-4">Revolutionizing patient care with AI diagnostics and personalized medicine.</p>
                  <Link to="/industries/healthcare" className="inline-flex items-center text-white hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Industry 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80" 
                alt="Finance Industry" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Finance</h3>
                  <p className="text-white/80 mb-4">Enhancing financial services with fraud detection and automated trading systems.</p>
                  <Link to="/industries/finance" className="inline-flex items-center text-white hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Industry 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" 
                alt="Retail Industry" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3">
                    <ShoppingCart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Retail</h3>
                  <p className="text-white/80 mb-4">Transforming customer experiences with personalized recommendations and inventory optimization.</p>
                  <Link to="/industries/retail" className="inline-flex items-center text-white hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Industry 4 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80" 
                alt="Manufacturing Industry" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Manufacturing</h3>
                  <p className="text-white/80 mb-4">Optimizing production lines and predictive maintenance with AI-powered systems.</p>
                  <Link to="/industries/manufacturing" className="inline-flex items-center text-white hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Industry 5 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80" 
                alt="Education Industry" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                  <p className="text-white/80 mb-4">Enhancing learning experiences with personalized education and automated grading systems.</p>
                  <Link to="/industries/education" className="inline-flex items-center text-white hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Industry 6 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80" 
                alt="Research Industry" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3">
                    <Microscope className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Research & Development</h3>
                  <p className="text-white/80 mb-4">Accelerating discoveries with AI-driven data analysis and experimental design.</p>
                  <Link to="/industries/research" className="inline-flex items-center text-white hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Our Core Services Overview */}
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
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" 
                alt="AI Services Overview" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-full flex items-center justify-center">
                    <Brain className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI Consulting</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Expert guidance on AI strategy, implementation roadmaps, and technology selection tailored to your specific business needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-full flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Custom AI Development</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bespoke AI solutions engineered from the ground up to address your unique challenges and opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI Integration</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Seamlessly incorporate AI capabilities into your existing systems and workflows to maximize efficiency.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 bg-tyrian-100 dark:bg-tyrian-900/30 rounded-full flex items-center justify-center">
                    <BarChart className="h-6 w-6 text-tyrian-700 dark:text-tyrian-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Data Analytics & Insights</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Transform raw data into actionable business intelligence with our advanced analytics capabilities.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <Link to="/services">
                  <Button className="bg-tyrian-700 hover:bg-tyrian-800 text-white">
                    Explore All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Enhanced) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
              Why Choose TyrianAI
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Partner with the industry leader in artificial intelligence and machine learning solutions.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transform transition-transform hover:scale-105">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-tyrian-600 dark:text-tyrian-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Elite AI Expertise
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our team includes PhD researchers and AI engineers from top tech companies and research institutions with a proven track record of innovation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transform transition-transform hover:scale-105">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-tyrian-600 dark:text-tyrian-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Custom-Tailored Solutions
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We don't believe in one-size-fits-all. Every AI solution we develop is meticulously crafted to address your specific business needs and objectives.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transform transition-transform hover:scale-105">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-tyrian-600 dark:text-tyrian-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        End-to-End Support
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        From initial consultation to deployment and beyond, we provide comprehensive support including 24/7 monitoring, maintenance, and continuous optimization.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transform transition-transform hover:scale-105">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-tyrian-600 dark:text-tyrian-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Proven ROI
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Our clients consistently report a significant return on investment, with an average 35% increase in operational efficiency and 25% cost reduction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform translate-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80" 
                    alt="AI technology" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" 
                    alt="Data visualization" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform translate-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80" 
                    alt="Remote work" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};

export default Home;
