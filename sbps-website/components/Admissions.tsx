import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, Users, FileText } from 'lucide-react'

export default function Admissions() {
  const processSteps = [
    {
      number: 1,
      title: 'Apply Online',
      description: 'Fill the admission form with your details',
    },
    {
      number: 2,
      title: 'Entrance Test',
      description: 'Appear for placement assessment',
    },
    {
      number: 3,
      title: 'Interview',
      description: 'Meet with our admission counselors',
    },
    {
      number: 4,
      title: 'Confirmation',
      description: 'Complete fee submission & enrollment',
    },
  ]

  const importantDates = [
    {
      icon: Clock,
      label: 'Next Intake',
      value: 'January 2025',
    },
    {
      icon: FileText,
      label: 'Application Deadline',
      value: 'December 30, 2024',
    },
    {
      icon: Users,
      label: 'Entrance Test',
      value: 'January 5, 2025',
    },
  ]

  return (
    <section id="admissions" className="py-16 md:py-24 bg-white" role="region" aria-label="Admissions call to action">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading-2 text-primary mb-4">
            Join Social Baluni Public School
          </h2>
          <p className="text-body text-text-muted max-w-2xl mx-auto">
            Begin your journey to academic excellence, competitive success, and personal growth
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-bg-alt rounded-lg p-6 md:p-8 border border-border text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mx-auto mb-4">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-base md:text-lg text-text mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs md:text-sm text-text-muted">
                    {step.description}
                  </p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 right-0 w-6 text-primary text-2xl translate-x-1/3">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-bg rounded-xl p-8 md:p-12 border-2 border-border mb-12 md:mb-16">
          <h3 className="text-heading-2 text-primary mb-8 text-center">Important Dates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {importantDates.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <p className="text-sm text-text-muted mb-2">{item.label}</p>
                  <p className="text-lg md:text-xl font-bold text-text">{item.value}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="mailto:admissions@sbpsdoon.com" className="btn btn-primary">
            Apply Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="#" className="btn btn-secondary">
            Download Brochure
          </Link>
        </div>
      </div>
    </section>
  )
}
