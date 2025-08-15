"use client";

import { Hero } from "@/components/ui/helix-hero";
import { Mail, Phone, MapPin, Clock, Calendar, Send, MessageSquare, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Hero
        title="Let's Start a Conversation"
        description="Ready to transform your vision into reality? Schedule a discovery call or send us a message to explore how our expertise can accelerate your success."
      />

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight mb-8">
                Whether you&apos;re looking to implement AI solutions, advance microbiology research, 
                or scale your startup, we&apos;re here to help. Reach out to discuss your project.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-cyan-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-light tracking-tight text-gray-900">Email</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">contact@anubisconsulting.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-cyan-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-light tracking-tight text-gray-900">Phone</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-cyan-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-light tracking-tight text-gray-900">Office</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-cyan-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-light tracking-tight text-gray-900">Business Hours</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6">
                <h3 className="font-light tracking-tight text-gray-900 mb-3 flex items-center">
                  <Calendar className="h-5 w-5 text-cyan-600 mr-2" />
                  Schedule a Discovery Call
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed font-light tracking-tight">
                  Book a 30-minute consultation to discuss your specific needs and explore how we can help.
                </p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-light rounded-md hover:from-cyan-700 hover:to-blue-800 transition-all">
                  Book Discovery Call
                </button>
              </div>

              <div className="mt-8">
                <h3 className="font-medium text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                    <MessageSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-light tracking-tight text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-light text-gray-700 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-light text-gray-700 mb-2">
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  >
                    <option value="">Select a service</option>
                    <option value="ai">AI Consulting</option>
                    <option value="microbiology">Microbiology Research</option>
                    <option value="startup">Startup Advisory</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project and how we can help..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-light rounded-md hover:from-cyan-700 hover:to-blue-800 transition-all flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">Global Presence</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
              With offices and partners worldwide, we&apos;re positioned to serve clients globally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-light tracking-tight text-gray-900 mb-2">San Francisco</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">
                123 Innovation Drive<br />
                San Francisco, CA 94105<br />
                United States
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-light tracking-tight text-gray-900 mb-2">London</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">
                456 Research Park<br />
                London, EC2A 3PQ<br />
                United Kingdom
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-light tracking-tight text-gray-900 mb-2">Singapore</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">
                789 Technology Hub<br />
                Singapore 138632<br />
                Singapore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-700 text-sm leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
              Common questions about our services and engagement process
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-light tracking-tight text-gray-900 mb-2">
                What is your typical engagement timeline?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">
                Project timelines vary based on scope and complexity. AI consulting projects typically 
                range from 3-12 months, microbiology research can span 6-24 months, and startup advisory 
                engagements are often ongoing with initial intensive periods of 3-6 months.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-light tracking-tight text-gray-900 mb-2">
                Do you work with early-stage startups?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">
                Yes, we work with startups at all stages, from pre-seed to growth stage. Our advisory 
                services are tailored to meet the specific needs and budget constraints of early-stage 
                companies while providing maximum value.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-light tracking-tight text-gray-900 mb-2">
                Can you help with regulatory compliance?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">
                Our team has extensive experience navigating regulatory requirements in healthcare, 
                biotechnology, and AI. We provide guidance on compliance strategies and can connect 
                you with specialized regulatory partners when needed.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-light tracking-tight text-gray-900 mb-2">
                What industries do you specialize in?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light tracking-tight">
                While we work across various industries, we have deep expertise in healthcare, 
                biotechnology, pharmaceuticals, technology, and manufacturing. Our interdisciplinary 
                approach allows us to bring cross-industry insights to every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}