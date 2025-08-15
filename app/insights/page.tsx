import { Hero } from "@/components/ui/helix-hero";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Image from "next/image";

const insights = [
  {
    id: 1,
    category: "AI & Machine Learning",
    title: "The Future of Generative AI in Healthcare: Opportunities and Challenges",
    excerpt: "Exploring how large language models and generative AI are revolutionizing medical diagnosis, drug discovery, and patient care while addressing critical ethical considerations.",
    author: "Dr. Alexander Chen",
    date: "December 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    tags: ["AI", "Healthcare", "Innovation"]
  },
  {
    id: 2,
    category: "Microbiology",
    title: "Breaking Through Antimicrobial Resistance: Novel Approaches in 2024",
    excerpt: "Latest breakthroughs in combating antimicrobial resistance through innovative screening methods, synthetic biology, and AI-driven compound optimization.",
    author: "Dr. Sarah Martinez",
    date: "December 10, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop",
    tags: ["Microbiology", "Research", "Healthcare"]
  },
  {
    id: 3,
    category: "Startup Strategy",
    title: "Navigating the 2024 Funding Landscape: A Guide for Deep Tech Startups",
    excerpt: "Essential strategies for deep tech startups seeking funding in a changing investment climate, including tips for positioning, valuation, and investor relations.",
    author: "Michael Thompson",
    date: "December 5, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Startups", "Funding", "Strategy"]
  },
  {
    id: 4,
    category: "Technology Trends",
    title: "Quantum Computing Meets Biology: The Next Frontier",
    excerpt: "How quantum computing is poised to revolutionize drug discovery, protein folding predictions, and complex biological simulations in the coming decade.",
    author: "Dr. Alexander Chen",
    date: "November 28, 2023",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
    tags: ["Quantum", "Biology", "Innovation"]
  },
  {
    id: 5,
    category: "Industry Analysis",
    title: "The Convergence of AI and Biotech: Market Opportunities",
    excerpt: "Analysis of emerging opportunities at the intersection of artificial intelligence and biotechnology, including market sizing and investment trends.",
    author: "Michael Thompson",
    date: "November 20, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    tags: ["AI", "Biotech", "Market Analysis"]
  },
  {
    id: 6,
    category: "Research Insights",
    title: "Microbiome Engineering: From Lab to Market",
    excerpt: "Exploring the commercial potential of engineered microbiomes in agriculture, healthcare, and environmental applications, with case studies and market analysis.",
    author: "Dr. Sarah Martinez",
    date: "November 15, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    tags: ["Microbiome", "Commercialization", "Research"]
  }
];

const categories = [
  "All",
  "AI & Machine Learning",
  "Microbiology",
  "Startup Strategy",
  "Technology Trends",
  "Industry Analysis",
  "Research Insights"
];

export default function InsightsPage() {
  return (
    <>
      <Hero
        title="Insights & Perspectives"
        description="Thought leadership at the intersection of AI, microbiology, and business strategy. Stay informed with our latest research, analysis, and industry perspectives."
      />

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">Featured Insight</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
              Our latest thinking on transformative technologies and strategies
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-96 lg:h-full">
                <Image
                  src={insights[0].image}
                  alt={insights[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-cyan-600 font-light text-sm mb-2">
                  {insights[0].category}
                </span>
                <h3 className="text-2xl lg:text-3xl font-light tracking-tight text-gray-900 mb-4">
                  {insights[0].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight mb-6">
                  {insights[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{insights[0].author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{insights[0].date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{insights[0].readTime}</span>
                </div>
                <div className="flex items-center text-cyan-600 hover:text-cyan-700 font-medium">
                  <span>Read Full Article</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-light transition-colors ${
                    category === "All"
                      ? "bg-cyan-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.slice(1).map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <span className="text-cyan-600 font-light text-sm">
                    {article.category}
                  </span>
                  
                  <h3 className="text-lg font-light tracking-tight text-gray-900 mt-2 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{article.author}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-cyan-600 hover:text-cyan-700 font-medium text-sm">
                    <span>Read More</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-light tracking-tight text-white mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-cyan-100 font-light tracking-tight mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on AI, microbiology, and startup strategy
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-cyan-600 font-light rounded-md hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-cyan-100 text-sm mt-4">
              Join 5,000+ industry leaders receiving our monthly insights
            </p>
          </div>
        </div>
      </section>
    </>
  );
}