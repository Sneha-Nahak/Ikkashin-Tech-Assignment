import { Award, TrendingUp, Medal, Trophy } from 'lucide-react'

export default function Achievements() {
  const mainAchievements = [
    {
      icon: TrendingUp,
      stat: '98%',
      title: 'Pass Rate',
      description: 'Consistent academic excellence across all boards and streams',
    },
    {
      icon: Medal,
      stat: '1200+',
      title: 'IIT Admissions',
      description: 'Over 75% of IIT aspirants secure admission in top tier colleges',
    },
    {
      icon: Award,
      stat: '300+',
      title: 'NDA Selections',
      description: 'Defence services success, shaping future officers',
    },
    {
      icon: Trophy,
      stat: '50+',
      title: 'Sports Awards',
      description: 'National and state-level championships and recognitions',
    },
  ]

  const recentAchievements = [
    {
      badge: 'Academic',
      badgeColor: 'bg-blue-100 text-blue-700',
      name: 'Aditya Sharma',
      achievement: 'secured AIR 45 in JEE Advanced 2024',
    },
    {
      badge: 'Sports',
      badgeColor: 'bg-green-100 text-green-700',
      name: 'Cricket Team',
      achievement: 'won National School Cricket Championship',
    },
    {
      badge: 'Defence',
      badgeColor: 'bg-red-100 text-red-700',
      name: 'Priya Verma',
      achievement: 'selected in NDA 2024 batch',
    },
    {
      badge: 'Academic',
      badgeColor: 'bg-blue-100 text-blue-700',
      name: 'Debate Team',
      achievement: 'won State-level debate competition',
    },
  ]

  return (
    <section id="achievements" className="py-16 md:py-24 bg-white" role="region" aria-label="Student achievements">
      <div className="container">
        <div className="section-header">
          <h2>Student Achievements</h2>
          <p>Celebrating excellence across academics, sports, and competitive exams</p>
        </div>

        {/* Main Achievements */}
        <div className="grid-4 mb-16 md:mb-20">
          {mainAchievements.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-bg-alt rounded-xl p-6 md:p-8 border border-border hover:border-primary transition text-center"
              >
                <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {item.stat}
                </h3>
                <p className="font-semibold text-text mb-2">{item.title}</p>
                <p className="text-xs md:text-sm text-text-muted">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Recent Achievements */}
        <div>
          <h3 className="text-heading-2 text-primary mb-6 md:mb-8">Recent Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {recentAchievements.map((item, idx) => (
              <div key={idx} className="bg-bg rounded-lg p-5 md:p-6 border border-border hover:border-primary hover:shadow-md transition">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <p className="text-sm md:text-base">
                  <strong className="text-text">{item.name}</strong>{' '}
                  <span className="text-text-muted">{item.achievement}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
