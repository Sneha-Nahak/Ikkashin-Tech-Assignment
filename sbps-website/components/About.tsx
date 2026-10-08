import { Building2, Microscope, Dumbbell, Home } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Building2,
      title: 'Three Schools, One Vision',
      description: 'Boarding school, Defence Academy, and IIT/NEET preparation under one comprehensive institution.',
    },
    {
      icon: Microscope,
      title: 'Academic Excellence',
      description: 'Rigorous curriculum, experienced faculty, and personalized learning approach ensuring holistic development.',
    },
    {
      icon: Dumbbell,
      title: 'World-Class Sports',
      description: 'Multi-sport programs including cricket, football, volleyball, fencing, shooting, boxing and athletics.',
    },
    {
      icon: Home,
      title: 'Boarding Facilities',
      description: 'State-of-the-art residential infrastructure with 24/7 care and support for student well-being.',
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-white" role="region" aria-label="About the school">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose SBPS?</h2>
          <p>A complete educational ecosystem designed for student excellence</p>
        </div>

        <div className="grid-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="card card-hover group relative overflow-hidden">
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-accent opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-base group-hover:scale-125 transition-transform"></div>
                <div className="flex flex-col gap-4 relative z-10">
                  <Icon className="w-10 h-10 text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-fast" />
                  <h3 className="text-heading-3 text-text group-hover:text-primary transition-colors duration-fast">
                    {feature.title}
                  </h3>
                  <p className="text-body-sm text-text-muted group-hover:text-text transition-colors duration-fast">
                    {feature.description}
                  </p>
                  <div className="h-1 w-8 bg-accent opacity-0 group-hover:opacity-40 transition-opacity duration-base"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
