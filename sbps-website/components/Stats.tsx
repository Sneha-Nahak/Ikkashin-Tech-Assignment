import { Users, TrendingUp, Award } from 'lucide-react'

export default function Stats() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-bg-alt" role="region" aria-label="School statistics">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading text-primary mb-4">
            By the Numbers
          </h2>
          <p className="text-body text-text-muted max-w-2xl mx-auto">
            Our commitment to excellence is reflected in these key metrics that define SBPS
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {/* Students Card */}
          <div className="bg-white rounded-xl p-8 md:p-10 text-center border border-border hover:border-primary hover:shadow-lg transition-all duration-base group relative overflow-hidden">
            <div className="absolute -top-1 left-0 w-full h-1 bg-accent opacity-0 group-hover:opacity-40 transition-opacity duration-base"></div>
            <div className="flex justify-center mb-4">
              <div className="bg-bg-alt rounded-full p-4">
                <Users className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform duration-fast" />
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">3000+</h3>
            <p className="text-text-muted text-base md:text-lg">Students</p>
            <p className="text-text-muted text-sm mt-3">Learning and growing in a supportive community</p>
          </div>

          {/* Faculty Card */}
          <div className="bg-white rounded-xl p-8 md:p-10 text-center border border-border hover:border-primary hover:shadow-lg transition-all duration-base group relative overflow-hidden">
            <div className="absolute -top-1 left-0 w-full h-1 bg-accent opacity-0 group-hover:opacity-40 transition-opacity duration-base"></div>
            <div className="flex justify-center mb-4">
              <div className="bg-bg-alt rounded-full p-4">
                <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-secondary group-hover:scale-110 transition-transform duration-fast" />
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">400+</h3>
            <p className="text-text-muted text-base md:text-lg">Faculty & Staff</p>
            <p className="text-text-muted text-sm mt-3">Dedicated professionals committed to excellence</p>
          </div>

          {/* Success Rate Card */}
          <div className="bg-white rounded-xl p-8 md:p-10 text-center border border-border hover:border-primary hover:shadow-lg transition-all duration-base group relative overflow-hidden">
            <div className="absolute -top-1 left-0 w-full h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-base"></div>
            <div className="flex justify-center mb-4">
              <div className="bg-bg-alt rounded-full p-4">
                <Award className="w-8 h-8 md:w-10 md:h-10 text-accent group-hover:scale-110 transition-transform duration-fast" />
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">75%</h3>
            <p className="text-text-muted text-base md:text-lg">IIT Success Rate</p>
            <p className="text-text-muted text-sm mt-3">Proven track record of competitive exam success</p>
          </div>
        </div>
      </div>
    </section>
  )
}
