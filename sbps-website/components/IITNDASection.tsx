import Link from 'next/link'
import { Star, TrendingUp, Users } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export default function IITNDASection() {
  const achievements = [
    {
      icon: TrendingUp,
      stat: '1200+',
      title: 'IIT Admissions',
      subtitle: 'In the last 5 years',
    },
    {
      icon: Users,
      stat: '300+',
      title: 'NDA/CDS Selections',
      subtitle: 'Defence services excellence',
    },
    {
      icon: Star,
      stat: '75%',
      title: 'Success Rate',
      subtitle: 'Top-tier college placements',
    },
  ]

  return (
    <section id="iit-nda" className="py-16 md:py-24 bg-white" role="region" aria-label="IIT and NDA preparation">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-heading-2 text-primary mb-4">
                Dedicated Competitive Preparation
              </h2>
              <p className="text-body text-text-muted">
                Our comprehensive IIT/NDA preparation programs combine rigorous academics with strategic exam preparation, resulting in consistent excellence.
              </p>
            </div>

            {/* Achievement Items */}
            <div className="space-y-4">
              {achievements.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-bg-alt rounded-lg border border-border hover:border-primary transition">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div className="min-w-0">
                      <p className="font-bold text-base md:text-lg text-primary">
                        {item.stat} {item.title}
                      </p>
                      <p className="text-xs md:text-sm text-text-muted">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link href="#admissions" className="btn btn-primary inline-flex">
              Start IIT/NDA Program
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Visual */}
          <div className="bg-bg rounded-2xl border-2 border-border p-12 md:p-16 flex items-center justify-center min-h-96">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto mb-4" />
              <p className="font-serif text-lg md:text-xl text-primary font-bold">
                Success Through Structure & Support
              </p>
              <p className="text-text-muted text-sm md:text-base mt-2">
                Evidence-based approach to competitive exam preparation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
