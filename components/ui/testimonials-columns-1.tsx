"use client";
import React from "react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <div 
        className="flex flex-col gap-6 pb-6 animate-scroll-up"
        style={{
          animationDuration: `${props.duration || 10}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite'
        }}
      >
        {[...props.testimonials, ...props.testimonials].map((testimonial, index) => (
          <div 
            className="p-8 rounded-3xl border border-gray-200 shadow-lg shadow-cyan-500/5 max-w-xs w-full bg-white" 
            key={`${testimonial.name}-${index}`}
          >
            <div className="text-gray-700 text-sm leading-relaxed font-light tracking-tight">{testimonial.text}</div>
            <div className="flex items-center gap-3 mt-5">
              <img
                width={40}
                height={40}
                src={testimonial.image}
                alt={testimonial.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5 text-gray-900">{testimonial.name}</div>
                <div className="leading-5 text-gray-600 tracking-tight text-sm">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};