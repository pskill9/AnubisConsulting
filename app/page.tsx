import { Hero } from "@/components/ui/helix-hero";
import { ArrowRight, Brain, Microscope, Rocket, CheckCircle, Users, Award, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero
        title="Where Science Meets Innovation"
        description="Anubis Consulting bridges the gap between cutting-edge AI, advanced microbiology research, and strategic startup advisory. Transform your vision into reality with our interdisciplinary expertise."
      />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight mb-3 text-gray-900">Our Expertise</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
              Three pillars of excellence, one unified approach to innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/ai" className="group">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 p-8 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-light tracking-tight text-gray-900 mb-3">AI Consulting</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight mb-4">
                  Harness the power of machine learning and artificial intelligence to transform your business processes and unlock new opportunities.
                </p>
                <div className="flex items-center text-cyan-600 group-hover:text-cyan-700">
                  <span className="text-sm font-normal">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/services/microbiology" className="group">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 p-8 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-light tracking-tight text-gray-900 mb-3">Microbiology Research</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight mb-4">
                  Advanced microbiology solutions for healthcare, biotechnology, and environmental applications with cutting-edge research capabilities.
                </p>
                <div className="flex items-center text-green-600 group-hover:text-green-700">
                  <span className="text-sm font-normal">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/services/startups" className="group">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 p-8 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-light tracking-tight text-gray-900 mb-3">Startup Advisory</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight mb-4">
                  Strategic guidance to navigate the startup journey, from ideation to scaling, with proven frameworks and industry insights.
                </p>
                <div className="flex items-center text-purple-600 group-hover:text-purple-700">
                  <span className="text-sm font-normal">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight mb-3 text-gray-900">Why Choose Anubis</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
              Our unique interdisciplinary approach delivers results that matter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-lg font-light tracking-tight text-gray-900 mb-2">Proven Expertise</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">
                Decades of combined experience across AI, biotech, and business strategy
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-light tracking-tight text-gray-900 mb-2">Collaborative Approach</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">
                We work as an extension of your team, ensuring seamless integration
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-light tracking-tight text-gray-900 mb-2">Industry Recognition</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">
                Award-winning solutions and peer-reviewed research publications
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-light tracking-tight text-gray-900 mb-2">Measurable Impact</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">
                Data-driven strategies with clear KPIs and demonstrable ROI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight mb-3 text-gray-900">Recent Success Stories</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
              See how we've helped organizations transform and grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="h-48 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                  alt="AI Implementation"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-light tracking-tight text-gray-900 mb-2">
                AI-Powered Diagnostics Platform
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight mb-3">
                Reduced diagnostic time by 75% for a leading healthcare provider using custom ML models.
              </p>
              <Link href="/case-studies" className="text-cyan-600 text-sm font-normal hover:text-cyan-700">
                Read case study →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg mb-4 flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop"
                  alt="Biotech Research"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-light tracking-tight text-gray-900 mb-2">
                Novel Antimicrobial Discovery
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight mb-3">
                Identified 3 promising antimicrobial compounds through advanced screening techniques.
              </p>
              <Link href="/case-studies" className="text-green-600 text-sm font-normal hover:text-green-700">
                Read case study →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg mb-4 flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop"
                  alt="Startup Success"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-light tracking-tight text-gray-900 mb-2">
                Series A Success Story
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight mb-3">
                Helped biotech startup secure $15M in funding with strategic positioning and pitch deck.
              </p>
              <Link href="/case-studies" className="text-purple-600 text-sm font-normal hover:text-purple-700">
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light tracking-tight mb-3 text-white">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-cyan-100 text-sm leading-relaxed font-light tracking-tight mb-8 max-w-2xl mx-auto">
            Schedule a discovery call to explore how our expertise can accelerate your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 text-lg font-normal text-cyan-600 bg-white rounded-md hover:bg-gray-100 transition-colors"
            >
              Book Discovery Call
            </Link>
            <Link
              href="/case-studies"
              className="inline-block px-8 py-3 text-lg font-normal text-white border-2 border-white rounded-md hover:bg-white hover:text-cyan-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}