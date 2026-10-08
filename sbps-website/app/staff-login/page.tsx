import Link from 'next/link'
import { ArrowLeft, Mail, Lock } from 'lucide-react'

export const metadata = {
  title: 'Staff Login | Social Baluni Public School',
  description: 'Staff portal login for SBPS employees',
}

export default function StaffLoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-bg via-white to-bg-alt">
      {/* Top Navigation Link */}
      <div className="sticky top-0 z-10 bg-white bg-opacity-95 backdrop-blur-sm border-b border-border">
        <div className="container py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-fast">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container flex items-center justify-center min-h-[calc(100vh-100px)] py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-heading text-primary mb-2">Staff Portal</h1>
            <p className="text-body text-text-muted">Sign in to access your dashboard</p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-border shadow-lg p-8 md:p-10 animate-slide-up">
            <form className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-text">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" />
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@sbps.edu.in"
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 focus:border-accent transition-all duration-fast bg-bg"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-text">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted pointer-events-none" />
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 focus:border-accent transition-all duration-fast bg-bg"
                    required
                  />
                </div>
              </div>

              {/* Remember & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-border cursor-pointer accent-accent"
                  />
                  <span className="text-text-muted group-hover:text-text transition-colors duration-fast">Remember me</span>
                </label>
                <a href="#" className="text-accent hover:text-primary transition-colors duration-fast font-medium">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary hover:bg-opacity-90 transition-all duration-fast shadow-md hover:shadow-lg active:scale-95 transform"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-text-muted">Or</span>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-bg-alt rounded-lg p-4 text-center">
              <p className="text-sm text-text-muted mb-3">
                Need help accessing your account?
              </p>
              <a
                href="mailto:support@sbps.edu.in"
                className="inline-block text-accent hover:text-primary font-medium transition-colors duration-fast"
              >
                Contact IT Support
              </a>
            </div>
          </div>

          {/* Footer Info */}
          <p className="text-center text-sm text-text-muted mt-6">
            This portal is for authorized SBPS staff only. Unauthorized access is prohibited.
          </p>
        </div>
      </div>
    </main>
  )
}
