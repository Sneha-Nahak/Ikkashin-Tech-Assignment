'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="py-12 md:py-20 lg:py-28 bg-white" role="region" aria-label="Hero section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in space-y-6 md:space-y-8 order-2 lg:order-1 text-center sm:text-center md:text-left">
            <h1 className="text-display text-primary animate-fade-in">
              Building Confident Learners for a Changing World
            </h1>

            <p className="text-body text-text-muted max-w-xl animate-fade-in mx-auto sm:mx-auto md:mx-0" style={{ animationDelay: '0.1s' }}>
              Excellence in academics, competitive preparation, sports and holistic development for over 3,000 students and 400+ faculty members.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in justify-center sm:justify-center md:justify-start" style={{ animationDelay: '0.2s' }}>
              <Link href="#admissions" className="btn btn-primary group">
                Start Your Journey
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-fast" />
              </Link>
              <Link href="#about" className="btn btn-secondary hover:border-accent hover:border-opacity-50 transition-all duration-base">
                Explore the School
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-up order-1 lg:order-2 relative h-80 md:h-96 lg:h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-base group">
            <Image
              src="/sbps-school.png"
              alt="Social Baluni Public School Campus"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-base"
              priority
            />
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
