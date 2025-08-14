import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/logo.gif" alt="Anubis Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-medium text-white">Anubis</span>
            </div>
            <p className="text-sm text-gray-400">
              Where science meets technology. AI, Microbiology, and Startup expertise under one roof.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ai" className="text-sm hover:text-cyan-400 transition-colors">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/microbiology" className="text-sm hover:text-cyan-400 transition-colors">
                  Microbiology Research
                </Link>
              </li>
              <li>
                <Link href="/services/startups" className="text-sm hover:text-cyan-400 transition-colors">
                  Startup Advisory
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm hover:text-cyan-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-sm hover:text-cyan-400 transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block px-6 py-2 text-sm font-normal text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anubis Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}