import { Hero } from "@/components/ui/helix-hero";
import { Brain, Cpu, Database, BarChart3, Shield, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AIServicesPage() {
  return (
    <>
      <Hero
        title="AI Consulting Services"
        description="Transform your business with cutting-edge artificial intelligence solutions. From machine learning models to neural networks, we deliver AI that drives real results."
      />

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Intelligent Solutions for Complex Challenges
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI consulting services leverage the latest advances in machine learning, 
                deep learning, and natural language processing to create custom solutions 
                that align with your business objectives.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Custom ML model development and training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">AI strategy and roadmap development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Computer vision and image recognition systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Natural language processing and chatbots</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-gray-700">Predictive analytics and forecasting</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 lg:h-full min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
                alt="AI Technology"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core AI Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your industry and use case
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Brain className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Build and deploy custom ML models for classification, regression, clustering, and more.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Supervised & unsupervised learning</li>
                <li>• Model optimization & tuning</li>
                <li>• AutoML implementation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Cpu className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deep Learning</h3>
              <p className="text-gray-600 mb-4">
                Neural network architectures for complex pattern recognition and decision-making.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• CNNs for image processing</li>
                <li>• RNNs for sequence data</li>
                <li>• Transformer models</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Database className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Engineering</h3>
              <p className="text-gray-600 mb-4">
                Build robust data pipelines and infrastructure for AI-ready data processing.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• ETL pipeline design</li>
                <li>• Data lake architecture</li>
                <li>• Real-time processing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <BarChart3 className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Forecast trends and behaviors to make data-driven business decisions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Time series forecasting</li>
                <li>• Customer behavior prediction</li>
                <li>• Risk assessment models</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Shield className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Ethics & Governance</h3>
              <p className="text-gray-600 mb-4">
                Ensure responsible AI deployment with bias mitigation and compliance frameworks.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Fairness assessment</li>
                <li>• Explainable AI (XAI)</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Zap className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate repetitive tasks and optimize workflows with intelligent systems.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Process automation</li>
                <li>• Intelligent document processing</li>
                <li>• Robotic process automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven AI solutions across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare & Life Sciences</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Diagnostic imaging analysis</li>
                <li>• Drug discovery acceleration</li>
                <li>• Patient outcome prediction</li>
                <li>• Clinical trial optimization</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fraud detection systems</li>
                <li>• Credit risk assessment</li>
                <li>• Algorithmic trading</li>
                <li>• Customer segmentation</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Retail & E-commerce</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Recommendation engines</li>
                <li>• Demand forecasting</li>
                <li>• Price optimization</li>
                <li>• Customer service automation</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Manufacturing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Predictive maintenance</li>
                <li>• Quality control automation</li>
                <li>• Supply chain optimization</li>
                <li>• Production planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI expertise can transform your business operations and drive innovation
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-lg font-medium text-cyan-600 bg-white rounded-md hover:bg-gray-100 transition-colors"
          >
            Schedule AI Consultation
          </Link>
        </div>
      </section>
    </>
  );
}