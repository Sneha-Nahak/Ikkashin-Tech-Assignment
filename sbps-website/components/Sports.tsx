import { 
  Users, 
  Zap,
  Radio,
  Target,
  Activity,
  Dumbbell
} from 'lucide-react'

export default function Sports() {
  const sports = [
    {
      icon: Dumbbell,
      title: 'Cricket',
      description: 'Competitive teams, professional coaching, inter-school tournaments',
    },
    {
      icon: Users,
      title: 'Football',
      description: 'State-level participation, youth development programs',
    },
    {
      icon: Activity,
      title: 'Volleyball',
      description: 'Championship-winning teams, training excellence',
    },
    {
      icon: Zap,
      title: 'Athletics',
      description: 'Track & field programs, national-level competitions',
    },
    {
      icon: Radio,
      title: 'Boxing',
      description: 'Combat sports expertise, fitness training',
    },
    {
      icon: Target,
      title: 'Shooting',
      description: 'Precision training, Olympic-standard range',
    },
  ]

  const clubs = [
    'Debate Club',
    'Tech Hub',
    'Arts & Culture',
    'Community Service',
    'Robotics',
    'Music & Dance',
  ]

  return (
    <section id="sports" className="py-16 md:py-24 bg-bg" role="region" aria-label="Sports and student life">
      <div className="container">
        <div className="section-header">
          <h2>Sports & Student Life</h2>
          <p>Excellence both on and off the field</p>
        </div>

        {/* Sports Grid */}
        <div className="grid-3 mb-16 md:mb-20">
          {sports.map((sport, idx) => {
            const Icon = sport.icon
            return (
              <div key={idx} className="card card-hover group relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-accent opacity-0 group-hover:opacity-8 rounded-full transition-all duration-base group-hover:scale-150"></div>
                <div className="flex flex-col gap-4 relative z-10">
                  <Icon className="w-10 h-10 text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-fast" />
                  <h3 className="text-heading-3 text-text group-hover:text-primary transition-colors duration-fast">
                    {sport.title}
                  </h3>
                  <p className="text-body-sm text-text-muted group-hover:text-text transition-colors duration-fast">
                    {sport.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Extracurricular Highlight */}
        <div className="bg-white rounded-xl border-2 border-border p-8 md:p-12 hover:border-primary hover:shadow-lg transition-all duration-base relative overflow-hidden group">
          <div className="absolute -right-20 -top-20 w-48 h-48 bg-accent opacity-0 group-hover:opacity-5 rounded-full transition-all duration-base group-hover:scale-150"></div>
          <h3 className="text-heading-2 text-primary mb-4 group-hover:text-primary transition-colors duration-fast">
            Extracurricular Excellence
          </h3>
          <p className="text-body text-text-muted mb-6 md:mb-8 group-hover:text-text transition-colors duration-fast">
            Beyond academics and sports, students engage in 25+ clubs and activities including debate, music, arts, technology and community service.
          </p>
          <div className="flex flex-wrap gap-3">
            {clubs.map((club, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-bg-alt text-primary rounded-full text-sm font-medium border border-border hover:border-primary hover:bg-primary hover:text-white hover:shadow-md transition-all duration-fast cursor-default"
              >
                {club}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
