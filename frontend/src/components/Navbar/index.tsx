// src/components/Navbar/index.tsx
import * as React from "react"

// Petites icônes inline (pour éviter d'ajouter une lib d'icônes)
const IconInstagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" strokeWidth="2" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
)
const IconYoutube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.9 3 12 3 12 3s-6.9 0-8.7.4A4 4 0 0 0 .5 6.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 5.8 4 4 0 0 0 2.8 2.8C5.1 21 12 21 12 21s6.9 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
  </svg>
)

const NavBar: React.FC = () => {
  return (
    <nav className="w-full bg-black text-white">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo / marque */}
        <div className="font-extrabold tracking-wider">
          THE ATHLETES&apos; PROGRESS
        </div>

        {/* Liens centraux (desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li><a href="#" className="hover:text-gray-300 transition-colors">Accueil</a></li>
          <li><a href="#" className="hover:text-gray-300 transition-colors">Prestations</a></li>
          <li><a href="#" className="hover:text-gray-300 transition-colors">Communauté</a></li>
          <li><a href="#" className="hover:text-gray-300 transition-colors">Contact</a></li>
        </ul>

        {/* Icônes + CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:bg-white/10 transition-colors"
            aria-label="Instagram"
          >
            <IconInstagram className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:bg-white/10 transition-colors"
            aria-label="YouTube"
          >
            <IconYoutube className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="hidden sm:inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Ebook Gratuit
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
