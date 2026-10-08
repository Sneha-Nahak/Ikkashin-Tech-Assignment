'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

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

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-text text-white" role="contentinfo">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-16">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-accent rounded-full p-2">
                <SBPSLogo />
              </div>
              <span className="font-bold text-lg">SBPS</span>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              Social Baluni Public School is a premier institution offering comprehensive education for 3000+ students with excellence in academics, competitive preparation, and sports.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <Link
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '#about', label: 'About' },
                { href: '#academics', label: 'Academics' },
                { href: '#iit-nda', label: 'IIT/NDA' },
                { href: '#sports', label: 'Sports' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-bold text-lg mb-6">Academics</h4>
            <ul className="space-y-3">
              {[
                { href: '#', label: 'Core Curriculum' },
                { href: '#', label: 'IIT/Engineering' },
                { href: '#', label: 'NDA Academy' },
                { href: '#', label: 'Faculty' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Phone:</strong><br />
                <span className="text-gray-300">+91-1792-242100</span>
              </p>
              <p>
                <strong>Email:</strong><br />
                <span className="text-gray-300">info@sbpsdoon.com</span>
              </p>
              <p>
                <strong>Address:</strong><br />
                <span className="text-gray-300">
                  Baluni Campus, Dehradun<br />
                  Uttarakhand, India
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white border-opacity-10 pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Social Baluni Public School. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[
                { href: '#', label: 'Privacy Policy' },
                { href: '#', label: 'Terms & Conditions' },
                { href: '#', label: 'Sitemap' },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-xs md:text-sm text-gray-300 hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
