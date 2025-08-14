import { Hero } from "@/components/ui/helix-hero";
import { Brain, Microscope, Rocket, ArrowRight, Calendar, Building } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    category: "AI",
    categoryColor: "cyan",
    icon: Brain,
    title: "AI-Powered Diagnostic Platform for Healthcare Provider",
    client: "Major Regional Hospital Network",
    challenge: "Manual diagnostic processes leading to delays and inconsistent results across multiple facilities.",
    solution: "Developed custom ML models for automated image analysis and predictive diagnostics, integrated with existing hospital systems.",
    results: [
      "75% reduction in diagnostic time",
      "92% accuracy improvement",
      "40% cost savings in lab operations",
      "$2.5M annual savings"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    duration: "6 months",
    year: "2023"
  },
  {
    id: 2,
    category: "Microbiology",
    categoryColor: "green",
    icon: Microscope,
    title: "Novel Antimicrobial Discovery for Pharmaceutical Company",
    client: "Global Pharmaceutical Leader",
    challenge: "Traditional screening methods failing to identify effective compounds against resistant bacteria strains.",
    solution: "Implemented advanced high-throughput screening combined with AI-driven compound optimization and microbiome analysis.",
    results: [
      "3 promising compounds identified",
      "60% faster screening process",
      "2 patents filed",
      "Phase II trials initiated"
    ],
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&h=600&fit=crop",
    duration: "18 months",
    year: "2023"
  },
  {
    id: 3,
    category: "Startup",
    categoryColor: "purple",
    icon: Rocket,
    title: "Series A Success for Biotech Startup",
    client: "Emerging Biotech Startup",
    challenge: "Early-stage startup struggling to articulate value proposition and secure institutional funding.",
    solution: "Comprehensive advisory including business model refinement, pitch deck creation, investor introductions, and technical roadmap development.",
    results: [
      "$15M Series A raised",
      "3x valuation increase",
      "Strategic partnerships secured",
      "Team scaled from 5 to 25"
    ],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    duration: "9 months",
    year: "2022"
  },
  {
    id: 4,
    category: "AI",
    categoryColor: "cyan",
    icon: Brain,
    title: "Predictive Maintenance System for Manufacturing",
    client: "Fortune 500 Manufacturer",
    challenge: "Unexpected equipment failures causing production delays and significant maintenance costs.",
    solution: "Deployed IoT sensors with ML models for real-time anomaly detection and predictive maintenance scheduling.",
    results: [
      "85% reduction in unplanned downtime",
      "30% maintenance cost reduction",
      "ROI achieved in 4 months",
      "Scaled to 12 facilities"
    ],
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop",
    duration: "12 months",
    year: "2023"
  },
  {
    id: 5,
    category: "Microbiology",
    categoryColor: "green",
    icon: Microscope,
    title: "Microbiome Analysis for Nutrition Company",
    client: "Leading Nutrition Brand",
    challenge: "Need to develop personalized probiotic formulations based on individual microbiome profiles.",
    solution: "Created comprehensive microbiome profiling platform with AI-driven recommendations for personalized nutrition.",
    results: [
      "10,000+ profiles analyzed",
      "85% customer satisfaction",
      "New product line launched",
      "25% revenue increase"
    ],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    duration: "8 months",
    year: "2023"
  },
  {
    id: 6,
    category: "Startup",
    categoryColor: "purple",
    icon: Rocket,
    title: "Market Entry Strategy for Tech Startup",
    client: "B2B SaaS Platform",
    challenge: "Struggling to gain traction in competitive market with unclear positioning and go-to-market strategy.",
    solution: "Developed targeted market segmentation, refined value proposition, created sales playbook, and established channel partnerships.",
    results: [
      "300% increase in qualified leads",
      "$2M ARR in 12 months",
      "3 enterprise clients secured",
      "Seed round oversubscribed"
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    duration: "6 months",
    year: "2022"
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        title="Case Studies"
        description="Real-world success stories demonstrating our impact across AI, microbiology, and startup advisory. See how we've helped organizations transform challenges into opportunities."
      />

      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">Success Stories</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
              Explore how we've delivered measurable results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => {
              const Icon = study.icon;
              const colorClasses = {
                cyan: "bg-cyan-100 text-cyan-700",
                green: "bg-green-100 text-green-700",
                purple: "bg-purple-100 text-purple-700"
              };
              
              return (
                <div key={study.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${colorClasses[study.categoryColor]} px-3 py-1 rounded-full text-sm font-medium inline-flex items-center`}>
                        <Icon className="h-4 w-4 mr-1" />
                        {study.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-light tracking-tight text-gray-900 mb-2 line-clamp-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-sm text-gray-500 mb-3 flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      {study.client}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight mb-4 line-clamp-3">
                      {study.challenge}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-light text-gray-900 mb-2">Key Results:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index}>• {result}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {study.duration}
                      </span>
                      <span>{study.year}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">Collective Impact</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
              Our work creates lasting value across industries and disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl font-light tracking-tight text-cyan-600 mb-2">150+</div>
              <div className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">Projects Delivered</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl font-light tracking-tight text-green-600 mb-2">$500M+</div>
              <div className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">Value Created</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl font-light tracking-tight text-purple-600 mb-2">95%</div>
              <div className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">Client Satisfaction</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-4xl font-light tracking-tight text-orange-600 mb-2">25+</div>
              <div className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Distribution */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">Industries We Serve</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
              Cross-industry expertise enabling innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-light tracking-tight text-gray-900">Healthcare</div>
              <div className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">35% of projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light tracking-tight text-gray-900">Technology</div>
              <div className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">25% of projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light tracking-tight text-gray-900">Biotechnology</div>
              <div className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">20% of projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light tracking-tight text-gray-900">Manufacturing</div>
              <div className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">20% of projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve breakthrough results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-lg font-normal text-cyan-600 bg-white rounded-md hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="inline-block px-8 py-3 text-lg font-normal text-white border-2 border-white rounded-md hover:bg-white hover:text-cyan-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}