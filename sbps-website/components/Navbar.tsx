'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

// Custom SBPS Logo Component
function SBPSLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      {/* Shield background */}
      <path
        d="M20 2L28 6V18C28 26 20 36 20 36C20 36 12 26 12 18V6L20 2Z"
        fill="white"
        stroke="white"
        strokeWidth="1"
      />
      
      {/* Book/Pages symbol */}
      <g>
        {/* Left page */}
        <path d="M15 12L17 12L17 26L15 26Z" fill="#1F5E3B" opacity="0.9" />
        {/* Right page */}
        <path d="M19 14L23 14L23 26L19 26Z" fill="#1F5E3B" opacity="0.7" />
        
        {/* Horizontal lines on pages */}
        <line x1="15" y1="16" x2="17" y2="16" stroke="#1F5E3B" strokeWidth="0.8" opacity="0.6" />
        <line x1="15" y1="20" x2="17" y2="20" stroke="#1F5E3B" strokeWidth="0.8" opacity="0.6" />
        <line x1="19" y1="18" x2="23" y2="18" stroke="#1F5E3B" strokeWidth="0.8" opacity="0.6" />
        <line x1="19" y1="22" x2="23" y2="22" stroke="#1F5E3B" strokeWidth="0.8" opacity="0.6" />
      </g>
      
      {/* Top accent stripe */}
      <circle cx="20" cy="7" r="2.5" fill="#C8372D" opacity="0.9" />
    </svg>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')
  const [isMounted, setIsMounted] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#academics', label: 'Academics', id: 'academics' },
    { href: '#sports', label: 'Sports', id: 'sports' },
    { href: '#achievements', label: 'Achievements', id: 'achievements' },
    { href: '#admissions', label: 'Admissions', id: 'admissions' },
  ]

  // Simple scroll detection
  useEffect(() => {
    setIsMounted(true)
    
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If section is in viewport (top of section is above middle of screen)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            setActiveLink(link.id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="sticky top-0 z-50">
      {/* Top Header with Logo */}
      <header className="bg-primary border-b-4 border-accent shadow-sm transition-all duration-base" role="banner">
        <div className="container flex justify-between items-center py-3 md:py-4">
          {/* Logo Section */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="bg-accent rounded-full p-2 group-hover:opacity-80 transition-opacity duration-fast">
              <SBPSLogo />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-sm md:text-base text-white group-hover:text-white transition-colors duration-fast">
                Social Baluni Public School
              </p>
              <p className="text-xs text-gray-200">
                Affiliated to CBSE, New Delhi, Affiliation No. 3530479, School Code 81702
              </p>
            </div>
          </Link>

          {/* Mobile Menu Button - Top Header */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors duration-fast text-white"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Bottom Navigation - Hidden on Mobile */}
      <header className="hidden md:block bg-[#232323] border-b border-border transition-all duration-base" role="banner">
        <nav className="container flex items-center justify-between py-3 md:py-4 gap-4" role="navigation" aria-label="Main navigation">
          {/* Desktop Menu */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-fast relative group whitespace-nowrap ${
                    isActive ? 'text-white font-bold' : 'text-white hover:text-white'
                  } after:content-[""] after:absolute after:bottom-0 after:left-0 ${
                    isActive ? 'after:w-full' : 'after:w-0'
                  } after:h-0.5 after:bg-accent after:transition-all after:duration-fast hover:after:w-full`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Staff Login Button - Right Side */}
          <a
            href="/staff-login"
            className="bg-accent text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-opacity-90 hover:shadow-md transition-all duration-fast ml-auto whitespace-nowrap"
          >
            Staff Login
          </a>
        </nav>
      </header>

      {/* Mobile Menu - Dropdown from Top Header */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium py-2 transition-all duration-fast ${
                    isActive ? 'text-accent font-bold' : 'text-text hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )
            })}
            {/* Mobile Staff Login */}
            <a
              href="/staff-login"
              className="bg-accent text-white px-4 py-2 rounded-lg text-center font-medium text-sm hover:bg-opacity-90 transition-all duration-fast mt-2"
              onClick={() => setIsOpen(false)}
            >
              Staff Login
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
