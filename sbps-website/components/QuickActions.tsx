import Link from 'next/link'
import { BookOpen, Rocket, Trophy, DoorOpen } from 'lucide-react'

export default function QuickActions() {
  const actions = [
    {
      icon: BookOpen,
      href: '#academics',
      title: 'Academics',
      description: 'World-class curriculum and faculty',
    },
    {
      icon: Rocket,
      href: '#iit-nda',
      title: 'IIT/NDA Prep',
      description: 'Dedicated competitive exam programs',
    },
    {
      icon: Trophy,
      href: '#sports',
      title: 'Sports',
      description: 'Multi-sport excellence program',
    },
    {
      icon: DoorOpen,
      href: '#admissions',
      title: 'Admissions',
      description: 'Join our community',
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-bg" role="region" aria-label="Quick access section">
      <div className="container">
        <h2 className="sr-only">Quick Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <Link
                key={action.href}
                href={action.href}
                className="card card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-base -mr-10 -mt-10"></div>
                <div className="flex items-start gap-4 h-full relative z-10">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary flex-shrink-0 group-hover:text-secondary group-hover:scale-110 transition-all duration-fast" />
                  <div className="min-w-0">
                    <h3 className="font-bold text-base md:text-lg text-text group-hover:text-primary transition-colors duration-fast">
                      {action.title}
                    </h3>
                    <p className="text-xs md:text-sm text-text-muted mt-1 group-hover:text-text transition-colors duration-fast">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
