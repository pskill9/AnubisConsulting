"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Brain, Microscope, Rocket, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "AI Consulting", href: "/services/ai", icon: Brain },
      { name: "Microbiology", href: "/services/microbiology", icon: Microscope },
      { name: "Startup Advisory", href: "/services/startups", icon: Rocket },
    ],
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="logo.gif" alt="Anubis Logo" width={40} height={40} className="h-10 w-10" />
              <span className="text-xl font-light text-gray-900">Anubis</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div className="relative">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={cn(
                          "flex items-center space-x-1 px-3 py-2 text-sm font-light rounded-md transition-colors",
                          pathname.startsWith(item.href)
                            ? "text-cyan-600"
                            : "text-gray-700 hover:text-gray-900"
                        )}
                      >
                        <span>{item.name}</span>
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 transition-transform",
                            servicesOpen && "rotate-90"
                          )}
                        />
                      </button>
                      {servicesOpen && (
                        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1">
                            {item.children.map((child) => {
                              const Icon = child.icon;
                              return (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  <Icon className="mr-3 h-4 w-4" />
                                  {child.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-2 text-sm font-light rounded-md transition-colors",
                        pathname === item.href
                          ? "text-cyan-600"
                          : "text-gray-700 hover:text-gray-900"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="ml-4 px-4 py-2 text-sm font-normal text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                Book Discovery Call
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-light text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    >
                      {item.name}
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 transition-transform",
                          servicesOpen && "rotate-90"
                        )}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4">
                        {item.children.map((child) => {
                          const Icon = child.icon;
                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <Icon className="mr-3 h-4 w-4" />
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-light text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-normal text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md hover:from-cyan-600 hover:to-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Discovery Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}