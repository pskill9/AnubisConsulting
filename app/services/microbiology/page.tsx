import { Hero } from "@/components/ui/helix-hero";
import { Microscope, Dna, Flask, Shield, Activity, Beaker, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MicrobiologyServicesPage() {
  return (
    <>
      <Hero
        title="Microbiology Research Services"
        description="Advanced microbiology solutions for healthcare, biotechnology, and environmental applications. From pathogen detection to microbiome analysis, we deliver scientific excellence."
      />

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pioneering Microbiology Research & Development
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our microbiology services combine state-of-the-art laboratory capabilities 
                with cutting-edge research methodologies to deliver breakthrough solutions 
                for complex biological challenges.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Pathogen identification and characterization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Antimicrobial resistance testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Microbiome analysis and profiling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Bioprocess optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Environmental microbiology studies</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop"
                alt="Microbiology Research"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Microbiology Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive laboratory and research capabilities for diverse applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Microscope className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diagnostic Microbiology</h3>
              <p className="text-gray-600 mb-4">
                Rapid and accurate identification of pathogens using advanced molecular techniques.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• PCR and qPCR analysis</li>
                <li>• Next-generation sequencing</li>
                <li>• MALDI-TOF identification</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Dna className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Genomics & Proteomics</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive genetic and protein analysis for research and development.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Whole genome sequencing</li>
                <li>• Metagenomics analysis</li>
                <li>• Protein expression profiling</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Flask className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fermentation Technology</h3>
              <p className="text-gray-600 mb-4">
                Optimize bioprocesses for pharmaceutical and industrial applications.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Process development</li>
                <li>• Scale-up optimization</li>
                <li>• Yield enhancement</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Shield className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Antimicrobial Research</h3>
              <p className="text-gray-600 mb-4">
                Development and testing of novel antimicrobial compounds and strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• MIC/MBC determination</li>
                <li>• Resistance mechanism studies</li>
                <li>• Biofilm analysis</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Activity className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Microbiome Analysis</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive profiling of microbial communities and their functions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 16S rRNA sequencing</li>
                <li>• Functional metagenomics</li>
                <li>• Dysbiosis assessment</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Beaker className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Control</h3>
              <p className="text-gray-600 mb-4">
                Ensure product safety and compliance with regulatory standards.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Sterility testing</li>
                <li>• Endotoxin analysis</li>
                <li>• Environmental monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advancing scientific knowledge across critical domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Infectious Diseases</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Emerging pathogen surveillance</li>
                <li>• Vaccine development support</li>
                <li>• Transmission dynamics modeling</li>
                <li>• Host-pathogen interactions</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Biotechnology</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Enzyme engineering</li>
                <li>• Metabolic pathway optimization</li>
                <li>• Biofuel production</li>
                <li>• Synthetic biology applications</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Microbiology</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Bioremediation strategies</li>
                <li>• Water quality assessment</li>
                <li>• Soil microbiome studies</li>
                <li>• Climate change impacts</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Food & Agriculture</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Food safety testing</li>
                <li>• Probiotic development</li>
                <li>• Plant-microbe interactions</li>
                <li>• Sustainable agriculture solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Advance Your Microbiology Research
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Partner with our expert team to accelerate your research and development initiatives
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-lg font-medium text-green-600 bg-white rounded-md hover:bg-gray-100 transition-colors"
          >
            Discuss Your Research Needs
          </Link>
        </div>
      </section>
    </>
  );
}