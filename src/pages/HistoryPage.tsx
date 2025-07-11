import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  FileText, 
  Calendar, 
  Download, 
  Edit, 
  Trash2, 
  Eye,
  Clock,
  Target
} from 'lucide-react';
import { toast } from 'sonner';

interface Article {
  id: string;
  title: string;
  topic: string;
  wordCount: number;
  seoScore: number;
  createdAt: string;
  status: 'published' | 'draft' | 'archived';
  keywords: string[];
}

const HistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Sample data
  const articles: Article[] = [
    {
      id: '1',
      title: 'The Future of Remote Work in 2024',
      topic: 'Remote Work',
      wordCount: 1250,
      seoScore: 95,
      createdAt: '2024-01-15',
      status: 'published',
      keywords: ['remote work', 'future trends', 'productivity']
    },
    {
      id: '2',
      title: 'Complete Guide to Digital Marketing',
      topic: 'Digital Marketing',
      wordCount: 1800,
      seoScore: 88,
      createdAt: '2024-01-14',
      status: 'draft',
      keywords: ['digital marketing', 'SEO', 'content marketing']
    },
    {
      id: '3',
      title: 'Benefits of Sustainable Living',
      topic: 'Sustainability',
      wordCount: 950,
      seoScore: 92,
      createdAt: '2024-01-13',
      status: 'published',
      keywords: ['sustainability', 'environment', 'green living']
    },
    {
      id: '4',
      title: 'AI in Healthcare: Transforming Patient Care',
      topic: 'Healthcare AI',
      wordCount: 1400,
      seoScore: 89,
      createdAt: '2024-01-12',
      status: 'archived',
      keywords: ['AI', 'healthcare', 'technology']
    },
    {
      id: '5',
      title: 'Cybersecurity Best Practices for Small Business',
      topic: 'Cybersecurity',
      wordCount: 1100,
      seoScore: 91,
      createdAt: '2024-01-11',
      status: 'published',
      keywords: ['cybersecurity', 'small business', 'data protection']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.keywords.some(keyword => 
                           keyword.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    
    const matchesFilter = selectedFilter === 'all' || article.status === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const handleDownload = (article: Article) => {
    toast.success(`Downloaded "${article.title}"`);
  };

  const handleEdit = (article: Article) => {
    toast.success(`Editing "${article.title}"`);
  };

  const handleDelete = (article: Article) => {
    toast.success(`Deleted "${article.title}"`);
  };

  const handleView = (article: Article) => {
    toast.success(`Viewing "${article.title}"`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeoScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Article History</h1>
        <p className="text-gray-600">Manage your generated articles and track their performance</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search articles by title, topic, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button 
              variant={selectedFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('all')}
              size="sm"
            >
              All
            </Button>
            <Button 
              variant={selectedFilter === 'published' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('published')}
              size="sm"
            >
              Published
            </Button>
            <Button 
              variant={selectedFilter === 'draft' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('draft')}
              size="sm"
            >
              Draft
            </Button>
            <Button 
              variant={selectedFilter === 'archived' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('archived')}
              size="sm"
            >
              Archived
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Total Articles</p>
                <p className="text-2xl font-bold">{articles.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Avg SEO Score</p>
                <p className="text-2xl font-bold">
                  {Math.round(articles.reduce((sum, article) => sum + article.seoScore, 0) / articles.length)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold">{articles.filter(a => a.createdAt.startsWith('2024-01')).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Total Words</p>
                <p className="text-2xl font-bold">
                  {articles.reduce((sum, article) => sum + article.wordCount, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Articles List */}
      <div className="space-y-4">
        {filteredArticles.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">
                {searchTerm ? 'Try adjusting your search terms' : 'Get started by creating your first article'}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{article.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.createdAt).toLocaleDateString()}
                      </span>
                      <span>{article.wordCount} words</span>
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(article.status)}>
                      {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
                    </Badge>
                    <div className={`text-lg font-bold ${getSeoScoreColor(article.seoScore)}`}>
                      {article.seoScore}%
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {article.keywords.map((keyword, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    Topic: <span className="font-medium">{article.topic}</span>
                  </p>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleView(article)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleEdit(article)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleDownload(article)}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleDelete(article)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Pagination placeholder */}
      {filteredArticles.length > 0 && (
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Badge variant="secondary">1 of 1</Badge>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;