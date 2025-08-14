import { Hero } from "@/components/ui/helix-hero";
import { Rocket, TrendingUp, Users, Target, Lightbulb, DollarSign, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function StartupServicesPage() {
  return (
    <>
      <Hero
        title="Startup Advisory Services"
        description="From ideation to IPO, we provide strategic guidance to navigate the startup journey. Leverage our expertise in technology, science, and business to build, scale, and succeed."
      />

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-6">
                Strategic Guidance for Every Stage
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight mb-6">
                Our startup advisory services combine deep technical expertise with 
                proven business strategies to help founders build sustainable, scalable 
                ventures in technology and life sciences.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Business model validation and refinement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Fundraising strategy and investor relations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Product-market fit optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Go-to-market strategy development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Technical architecture and roadmap</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
                alt="Startup Team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">Comprehensive Startup Support</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
              End-to-end advisory services tailored to your startup's unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Lightbulb className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-3">Ideation & Validation</h3>
              <p className="text-gray-600 mb-4">
                Transform ideas into viable business opportunities with market validation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Market research & analysis</li>
                <li>• MVP development strategy</li>
                <li>• Customer discovery</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <DollarSign className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-3">Fundraising Support</h3>
              <p className="text-gray-600 mb-4">
                Navigate the funding landscape from pre-seed to Series A and beyond.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Pitch deck creation</li>
                <li>• Investor introductions</li>
                <li>• Valuation strategy</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Target className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-3">Go-to-Market Strategy</h3>
              <p className="text-gray-600 mb-4">
                Build and execute effective strategies to capture your target market.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Market positioning</li>
                <li>• Sales strategy development</li>
                <li>• Channel partnerships</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <TrendingUp className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-3">Growth & Scaling</h3>
              <p className="text-gray-600 mb-4">
                Accelerate growth with proven frameworks and operational excellence.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Growth metrics & KPIs</li>
                <li>• Operational optimization</li>
                <li>• International expansion</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Users className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-3">Team Building</h3>
              <p className="text-gray-600 mb-4">
                Build world-class teams with the right talent and culture.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Hiring strategy</li>
                <li>• Organizational design</li>
                <li>• Leadership coaching</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Rocket className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-3">Exit Strategy</h3>
              <p className="text-gray-600 mb-4">
                Maximize value through strategic exits and acquisitions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• M&A preparation</li>
                <li>• Strategic partnerships</li>
                <li>• IPO readiness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Stages */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">Support at Every Stage</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
              Tailored advisory services aligned with your startup's journey
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                  Pre-Seed / Seed Stage
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Foundation Building</h3>
                <p className="text-gray-600">
                  Validate your concept, build your MVP, secure initial funding, and establish 
                  product-market fit. We help you lay the groundwork for sustainable growth.
                </p>
              </div>
              <div className="flex-1">
                <ul className="space-y-2 text-gray-600">
                  <li>• Business model canvas development</li>
                  <li>• Technical architecture planning</li>
                  <li>• Angel investor connections</li>
                  <li>• Grant application support</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                  Series A / B
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Scale & Expand</h3>
                <p className="text-gray-600">
                  Accelerate growth, expand market reach, optimize operations, and prepare for 
                  institutional funding rounds with strategic guidance.
                </p>
              </div>
              <div className="flex-1">
                <ul className="space-y-2 text-gray-600">
                  <li>• VC pitch preparation</li>
                  <li>• Scaling operations framework</li>
                  <li>• Market expansion strategy</li>
                  <li>• Board governance setup</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                  Growth Stage
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Market Leadership</h3>
                <p className="text-gray-600">
                  Establish market dominance, prepare for exit opportunities, optimize for 
                  profitability, and build sustainable competitive advantages.
                </p>
              </div>
              <div className="flex-1">
                <ul className="space-y-2 text-gray-600">
                  <li>• International expansion</li>
                  <li>• Strategic acquisition planning</li>
                  <li>• IPO preparation</li>
                  <li>• Exit strategy optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">Our Track Record</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
              Proven success in guiding startups to meaningful outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-4xl font-medium text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Startups Advised</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-4xl font-medium text-purple-600 mb-2">$250M+</div>
              <div className="text-gray-600">Funding Raised</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-4xl font-medium text-purple-600 mb-2">12</div>
              <div className="text-gray-600">Successful Exits</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-4xl font-medium text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">5-Year Survival Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-4">
            Ready to Accelerate Your Startup?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our advisory services can help you build, scale, and succeed
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-lg font-normal text-purple-600 bg-white rounded-md hover:bg-gray-100 transition-colors"
          >
            Schedule Strategy Session
          </Link>
        </div>
      </section>
    </>
  );
}