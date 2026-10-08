import { BookOpen, Rocket, Medal, Check } from 'lucide-react'

export default function Academics() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Core Curriculum',
      items: [
        'CBSE-aligned curriculum',
        'Science & Mathematics focus',
        'Humanities excellence',
        'Personalized mentoring',
      ],
    },
    {
      icon: Rocket,
      title: 'IIT/Engineering',
      items: [
        'Expert IIT faculty',
        '75% success rate',
        'Advanced labs & resources',
        'Regular mock exams',
      ],
      highlight: true,
    },
    {
      icon: Medal,
      title: 'NDA Academy',
      items: [
        'Defence academy training',
        'Physical fitness programs',
        'Discipline & leadership',
        'Service orientation',
      ],
    },
  ]

  return (
    <section id="academics" className="py-16 md:py-24 bg-bg" role="region" aria-label="Academic programs">
      <div className="container">
        <div className="section-header">
          <h2>Academic Ecosystem</h2>
          <p>Comprehensive programs designed for individual growth and excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, idx) => {
            const Icon = program.icon
            return (
              <div
                key={idx}
                className={`p-6 md:p-8 rounded-xl border-2 transition-all duration-base group relative overflow-hidden ${
                  program.highlight
                    ? 'bg-primary text-white border-primary shadow-lg hover:shadow-xl hover:-translate-y-1'
                    : 'bg-white border-border hover:border-primary hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <div className={`absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-10 rounded-full transition-all duration-base ${program.highlight ? 'bg-white' : 'bg-accent'}`}></div>
                <Icon className={`w-10 h-10 mb-4 transition-transform duration-fast group-hover:scale-110 ${program.highlight ? 'text-white' : 'text-primary'}`} />
                <h3 className={`text-heading-3 mb-6 transition-all duration-fast ${program.highlight ? 'text-white' : 'text-text group-hover:text-primary'}`}>
                  {program.title}
                </h3>
                <ul className="space-y-3">
                  {program.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 transition-all duration-fast hover:translate-x-1">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-fast ${program.highlight ? 'text-white' : 'text-secondary'}`} />
                      <span className={`text-sm md:text-base transition-colors duration-fast ${program.highlight ? 'text-white' : 'text-text'}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {program.highlight && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
