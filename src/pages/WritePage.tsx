import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

import { 
  PenTool, 
  Search, 
  Target, 
  Download, 
  Copy, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  FileText,
  Zap
} from 'lucide-react';
import { toast } from 'sonner';

const WritePage = () => {
  const [formData, setFormData] = useState({
    topic: '',
    keywords: '',
    tone: 'professional',
    wordCount: '1000',
    language: 'english'
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedArticle, setGeneratedArticle] = useState('');
  const [seoScore, setSeoScore] = useState(0);

  const tones = [
    { value: 'professional', label: 'Professional' },
    { value: 'casual', label: 'Casual' },
    { value: 'friendly', label: 'Friendly' },
    { value: 'authoritative', label: 'Authoritative' },
    { value: 'conversational', label: 'Conversational' }
  ];

  const wordCounts = [
    { value: '500', label: '500 words' },
    { value: '1000', label: '1000 words' },
    { value: '1500', label: '1500 words' },
    { value: '2000', label: '2000 words' },
    { value: '2500', label: '2500 words' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateArticle = async () => {
    if (!formData.topic.trim()) {
      toast.error('Please enter a topic for your article');
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const sampleArticle = `# ${formData.topic}

## Introduction

${formData.topic} is a fascinating subject that has gained significant attention in recent years. This comprehensive guide will explore the key aspects, benefits, and practical applications of ${formData.topic.toLowerCase()}.

## What is ${formData.topic}?

${formData.topic} refers to the process and methodologies involved in creating effective solutions for modern challenges. Understanding the fundamentals is crucial for anyone looking to implement these strategies successfully.

## Key Benefits

1. **Improved Efficiency**: Implementing ${formData.topic.toLowerCase()} strategies can significantly boost productivity and streamline operations.

2. **Enhanced Performance**: Organizations that adopt these practices often see substantial improvements in their overall performance metrics.

3. **Cost Reduction**: Proper implementation can lead to significant cost savings over time.

4. **Better User Experience**: End users benefit from more intuitive and effective solutions.

## Best Practices

### Planning Phase
- Conduct thorough research before implementation
- Define clear objectives and success metrics
- Engage stakeholders early in the process

### Implementation Phase
- Start with a pilot program
- Monitor progress regularly
- Adjust strategies based on feedback

### Optimization Phase
- Continuously analyze performance data
- Implement improvements iteratively
- Stay updated with latest trends and technologies

## Common Challenges and Solutions

Many organizations face challenges when implementing ${formData.topic.toLowerCase()}. Here are some common issues and their solutions:

**Challenge 1: Resistance to Change**
- Solution: Provide comprehensive training and clear communication about benefits

**Challenge 2: Limited Resources**
- Solution: Prioritize high-impact initiatives and phase implementation

**Challenge 3: Technical Complexity**
- Solution: Start with simpler solutions and gradually increase complexity

## Future Trends

The future of ${formData.topic.toLowerCase()} looks promising with emerging technologies and evolving methodologies. Key trends to watch include:

- Integration with artificial intelligence
- Enhanced automation capabilities
- Improved user interfaces
- Greater emphasis on sustainability

## Conclusion

${formData.topic} represents a significant opportunity for organizations to improve their operations and deliver better value to their customers. By following the best practices outlined in this guide and staying aware of emerging trends, you can successfully implement these strategies in your own context.

Remember to start small, measure results, and continuously optimize your approach for the best outcomes.`;

      setGeneratedArticle(sampleArticle);
      setSeoScore(Math.floor(Math.random() * 20) + 80); // Random score between 80-100
      setIsGenerating(false);
      toast.success('Article generated successfully!');
    }, 3000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedArticle);
    toast.success('Article copied to clipboard!');
  };

  const downloadArticle = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedArticle], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `${formData.topic.replace(/\s+/g, '-').toLowerCase()}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Article downloaded successfully!');
  };

  const seoChecks = [
    { 
      name: 'Title Optimization', 
      status: generatedArticle ? 'passed' : 'pending', 
      description: 'Title contains target keywords' 
    },
    { 
      name: 'Meta Description', 
      status: generatedArticle ? 'passed' : 'pending', 
      description: 'Compelling meta description under 160 characters' 
    },
    { 
      name: 'Header Structure', 
      status: generatedArticle ? 'passed' : 'pending', 
      description: 'Proper H1, H2, H3 hierarchy' 
    },
    { 
      name: 'Keyword Density', 
      status: generatedArticle ? 'passed' : 'pending', 
      description: 'Optimal keyword density (1-3%)' 
    },
    { 
      name: 'Content Length', 
      status: generatedArticle ? 'passed' : 'pending', 
      description: 'Adequate word count for topic coverage' 
    },
    { 
      name: 'Readability', 
      status: generatedArticle ? 'passed' : 'pending', 
      description: 'Content is easy to read and understand' 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Article Writer</h1>
        <p className="text-gray-600">Generate SEO-optimized articles in minutes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Article Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PenTool className="h-5 w-5" />
                Article Details
              </CardTitle>
              <CardDescription>
                Provide the information needed to generate your article
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="topic">Article Topic *</Label>
                <Input
                  id="topic"
                  placeholder="Enter your article topic (e.g., 'Benefits of Remote Work')"
                  value={formData.topic}
                  onChange={(e) => handleInputChange('topic', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords">Target Keywords</Label>
                <Input
                  id="keywords"
                  placeholder="Enter keywords separated by commas"
                  value={formData.keywords}
                  onChange={(e) => handleInputChange('keywords', e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tone</Label>
                  <Select value={formData.tone} onValueChange={(value) => handleInputChange('tone', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {tones.map((tone) => (
                        <SelectItem key={tone.value} value={tone.value}>
                          {tone.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Word Count</Label>
                  <Select value={formData.wordCount} onValueChange={(value) => handleInputChange('wordCount', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {wordCounts.map((count) => (
                        <SelectItem key={count.value} value={count.value}>
                          {count.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={generateArticle} 
                disabled={isGenerating || !formData.topic.trim()}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isGenerating ? (
                  <>
                    <Clock className="mr-2 h-4 w-4 animate-spin" />
                    Generating Article...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Generate Article
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Article */}
          {generatedArticle && (
            <Card className="mt-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Generated Article
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={copyToClipboard}>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                    <Button size="sm" variant="outline" onClick={downloadArticle}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={generatedArticle}
                  onChange={(e) => setGeneratedArticle(e.target.value)}
                  className="min-h-[600px] font-mono text-sm"
                  placeholder="Your generated article will appear here..."
                />
              </CardContent>
            </Card>
          )}
        </div>

        {/* SEO Sidebar */}
        <div className="space-y-6">
          {/* SEO Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                SEO Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {seoScore}%
                </div>
                <Progress value={seoScore} className="mb-4" />
                <div className="text-sm text-gray-600">
                  {seoScore >= 90 ? 'Excellent' : seoScore >= 80 ? 'Good' : seoScore >= 70 ? 'Fair' : 'Needs Improvement'}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Checklist */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                SEO Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {seoChecks.map((check, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {check.status === 'passed' ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : check.status === 'warning' ? (
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{check.name}</div>
                      <div className="text-xs text-gray-600">{check.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-0.5">Tip</Badge>
                  <p className="text-gray-600">Use long-tail keywords for better targeting</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-0.5">Tip</Badge>
                  <p className="text-gray-600">Include keywords in your headings naturally</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-0.5">Tip</Badge>
                  <p className="text-gray-600">Write for humans first, search engines second</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WritePage;