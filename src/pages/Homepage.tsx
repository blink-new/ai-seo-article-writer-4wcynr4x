import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  PenTool, 
  Search, 
  FileText, 
  Zap, 
  ArrowRight,
  Star,
  Users,
  Target,
  BarChart3
} from 'lucide-react';

const Homepage = () => {
  const features = [
    {
      icon: PenTool,
      title: 'AI-Powered Writing',
      description: 'Generate high-quality articles with advanced AI technology tailored to your needs.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Built-in SEO analysis ensures your content ranks higher in search results.',
    },
    {
      icon: FileText,
      title: 'Multiple Formats',
      description: 'Create blog posts, articles, product descriptions, and more in various formats.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Generate comprehensive articles in seconds, not hours.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Enter Your Topic',
      description: 'Provide your article topic and target keywords.',
      icon: Target,
    },
    {
      number: '02',
      title: 'Select Keywords',
      description: 'Choose relevant keywords for SEO optimization.',
      icon: Search,
    },
    {
      number: '03',
      title: 'Generate Article',
      description: 'Get your SEO-optimized article instantly.',
      icon: FileText,
    },
  ];

  const stats = [
    { value: '10K+', label: 'Articles Generated', icon: FileText },
    { value: '500+', label: 'Happy Users', icon: Users },
    { value: '95%', label: 'SEO Score Average', icon: BarChart3 },
    { value: '4.9', label: 'User Rating', icon: Star },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-500/20 text-blue-100 border-blue-400/30">
              ✨ New: Advanced SEO Analysis
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Effortless SEO Content,
              <br />
              <span className="text-blue-200">Instantly</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Generate high-quality, SEO-optimized articles in seconds with our AI-powered writing assistant.
              Perfect for bloggers, marketers, and content creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/write">
                  Start Writing Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-300 text-white hover:bg-blue-600">
                <Link to="/history">
                  View Examples
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Content Creators
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create engaging, SEO-optimized content that ranks higher and converts better.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create professional content in just three simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-xl font-bold mb-4">
                      {step.number}
                    </div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <Icon className="h-8 w-8 text-blue-200" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Amazing Content?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of content creators who trust our AI to generate high-quality, SEO-optimized articles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link to="/write">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-300 text-white hover:bg-blue-600">
              <Link to="/history">
                View Sample Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;