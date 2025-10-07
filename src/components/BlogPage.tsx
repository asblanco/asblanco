import { personalInfo } from '../config/socialLinks';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large React applications using TypeScript, focusing on maintainability and developer experience.",
      date: "2024-12-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      slug: "building-scalable-react-applications"
    },
    {
      id: 2,
      title: "My Journey from Frontend to Full-Stack Development",
      excerpt: "Reflecting on my transition from frontend development to full-stack engineering and the lessons learned along the way.",
      date: "2024-11-28",
      readTime: "6 min read",
      tags: ["Career", "Full-Stack", "Personal"],
      slug: "frontend-to-fullstack-journey"
    },
    {
      id: 3,
      title: "Test-Driven Development in Practice at ThoughtWorks",
      excerpt: "How TDD transformed my development process and improved code quality in enterprise applications.",
      date: "2024-11-10",
      readTime: "10 min read",
      tags: ["TDD", "Testing", "Best Practices"],
      slug: "tdd-in-practice-thoughtworks"
    },
    {
      id: 4,
      title: "Accessibility-First Design: Why It Matters",
      excerpt: "Exploring the importance of accessibility in web development and practical tips for creating inclusive experiences.",
      date: "2024-10-22",
      readTime: "7 min read",
      tags: ["Accessibility", "UX", "Web Standards"],
      slug: "accessibility-first-design"
    },
    {
      id: 5,
      title: "Working Remotely: Lessons from a Global Team",
      excerpt: "Insights on effective remote collaboration, communication strategies, and maintaining work-life balance.",
      date: "2024-10-05",
      readTime: "5 min read",
      tags: ["Remote Work", "Collaboration", "Productivity"],
      slug: "working-remotely-global-team"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Thoughts on software development, technology trends, and lessons learned 
            from building products at scale.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <time>{formatDate(post.date)}</time>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    <a href={`./blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </a>
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Read More Link */}
                  <a 
                    href={`./blog/${post.slug}`}
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors group"
                  >
                    Read more
                    <svg 
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get notified when I publish new articles about software development, 
            technology trends, and career insights.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button 
              type="submit"
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;