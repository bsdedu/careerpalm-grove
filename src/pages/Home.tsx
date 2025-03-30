
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Brain, Cpu, BarChart, Shield } from "lucide-react";

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
              <a href="#" className="inline-flex items-center text-tyrian-700 dark:text-tyrian-400 hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
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
              <a href="#" className="inline-flex items-center text-tyrian-700 dark:text-tyrian-400 hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
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
              <a href="#" className="inline-flex items-center text-tyrian-700 dark:text-tyrian-400 hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
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
              <a href="#" className="inline-flex items-center text-tyrian-700 dark:text-tyrian-400 hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
                Why Choose TyrianAI for Your Business
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We bring years of expertise in artificial intelligence and machine learning to help you navigate the complexities of digital transformation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-tyrian-600 dark:text-tyrian-400 mr-2 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      Expert Team
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our team consists of Ph.D. researchers and experienced AI engineers from top tech companies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-tyrian-600 dark:text-tyrian-400 mr-2 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      Tailored Solutions
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We don't offer one-size-fits-all products. Every solution is custom-built for your specific needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-tyrian-600 dark:text-tyrian-400 mr-2 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      Continuous Support
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We provide ongoing maintenance, updates, and 24/7 support for all our AI solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-tyrian-600 dark:text-tyrian-400 mr-2 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      Proven Results
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our clients report an average of 35% increase in efficiency after implementing our solutions.
                    </p>
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
