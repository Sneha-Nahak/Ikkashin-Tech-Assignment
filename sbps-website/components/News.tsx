import Link from 'next/link'
import { Calendar, ArrowRight, Trophy, Sparkles, Lightbulb } from 'lucide-react'

export default function News() {
  const news = [
    {
      icon: Trophy,
      date: 'Dec 15, 2024',
      title: 'Annual Sports Day 2024 - Grand Finale',
      description: 'Spectacular display of athletic prowess and team spirit as 3000+ students participate in our flagship sports event.',
    },
    {
      icon: Sparkles,
      date: 'Dec 10, 2024',
      title: 'IIT Admissions Result - 75% Success Rate',
      description: 'Our IIT preparation program celebrates another year of exceptional results with students securing seats in all top-tier colleges.',
    },
    {
      icon: Lightbulb,
      date: 'Dec 1, 2024',
      title: 'Science Exhibition - Student Innovation Showcase',
      description: 'Students demonstrate cutting-edge projects in robotics, renewable energy, and biotechnology at annual science fair.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-bg" role="region" aria-label="News and events">
      <div className="container">
        <div className="section-header">
          <h2>News & Events</h2>
          <p>Stay updated with the latest from SBPS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {news.map((item, idx) => {
            const Icon = item.icon
            return (
              <article key={idx} className="card card-hover group">
                <div className="flex flex-col gap-4 h-full">
                  <Icon className="w-10 h-10 text-primary group-hover:text-secondary transition" />

                  <div className="flex items-center gap-2 text-xs md:text-sm text-text-muted">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-heading-3 text-text group-hover:text-primary transition flex-1">
                    {item.title}
                  </h3>

                  <p className="text-body-sm text-text-muted">
                    {item.description}
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition font-medium text-sm md:text-base"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
