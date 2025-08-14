import { Hero } from "@/components/ui/helix-hero";
import { Target, Lightbulb, Handshake, Globe } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Anubis Consulting"
        description="Founded on the principle that breakthrough innovation happens at the intersection of disciplines. We bring together world-class expertise in AI, microbiology, and business strategy."
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight mb-6">
                To accelerate scientific and technological advancement by providing 
                interdisciplinary expertise that bridges the gap between research, 
                technology, and commercialization.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that the most complex challenges require diverse perspectives 
                and deep expertise. By combining cutting-edge AI capabilities with 
                advanced microbiology research and strategic business acumen, we help 
                organizations unlock unprecedented opportunities for growth and innovation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Precision</h3>
                    <p className="text-sm text-gray-600">Data-driven solutions with measurable outcomes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Innovation</h3>
                    <p className="text-sm text-gray-600">Pioneering approaches to complex problems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Handshake className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Partnership</h3>
                    <p className="text-sm text-gray-600">Collaborative engagement at every step</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Impact</h3>
                    <p className="text-sm text-gray-600">Global solutions for local challenges</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">Our Story</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight">
              From research labs to boardrooms, our journey spans decades of scientific discovery and business innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-medium text-cyan-600 mb-2">2015</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Foundation</h3>
              <p className="text-gray-600 text-sm">
                Started as a specialized AI consultancy, focusing on machine learning applications in healthcare
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-medium text-green-600 mb-2">2018</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Expansion</h3>
              <p className="text-gray-600 text-sm">
                Added microbiology expertise through strategic partnerships with leading research institutions
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-medium text-purple-600 mb-2">2020</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Evolution</h3>
              <p className="text-gray-600 text-sm">
                Launched startup advisory services, completing our interdisciplinary consulting platform
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-medium mb-2">150+</div>
                <div className="text-cyan-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-medium mb-2">50+</div>
                <div className="text-cyan-100">Expert Consultants</div>
              </div>
              <div>
                <div className="text-4xl font-medium mb-2">25</div>
                <div className="text-cyan-100">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-medium mb-2">95%</div>
                <div className="text-cyan-100">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">Leadership Team</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
              Guided by industry veterans with proven track records in science, technology, and business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
                  alt="CEO"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Dr. Alexander Chen</h3>
              <p className="text-cyan-600 mb-2">CEO & AI Strategy Lead</p>
              <p className="text-gray-600 text-sm">
                Former Google AI researcher with 15+ years in machine learning and neural networks
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                  alt="Chief Science Officer"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Dr. Sarah Martinez</h3>
              <p className="text-green-600 mb-2">Chief Science Officer</p>
              <p className="text-gray-600 text-sm">
                Renowned microbiologist with breakthrough research in antimicrobial resistance
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop"
                  alt="Managing Partner"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Michael Thompson</h3>
              <p className="text-purple-600 mb-2">Managing Partner, Ventures</p>
              <p className="text-gray-600 text-sm">
                Serial entrepreneur with 3 successful exits and expertise in biotech commercialization
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}