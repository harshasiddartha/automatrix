"use client"

import { useTheme } from "./ThemeProvider"

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-black backdrop-blur-lg border-1 border-gray-300/80 dark:border-gray-700/80 rounded-2xl shadow-xl transition-all">
        <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/automatixlogo.svg"
              alt="Automatix Logo"
              className="h-8 w-auto mr-2"
              style={{ display: "inline-block" }}
            />
            
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-normal transition-colors">
              Why Us
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-normal transition-colors">
              Mission
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-normal transition-colors">
              Works
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-normal transition-colors">
              Services
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm font-normal transition-colors flex items-center gap-1">
              Pages
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          
          {/* Theme Toggle and CTA Button */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border-2 border-gray-400 dark:border-gray-400 bg-gray-200 dark:bg-[#2a2a2a] hover:bg-gray-300 dark:hover:bg-[#333] transition-colors shadow-sm"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            {/* CTA Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-[#2a2a2a] border-2 border-gray-400 dark:border-gray-200 rounded-md text-gray-800 dark:text-white text-sm font-normal hover:bg-gray-300 dark:hover:bg-[#333] transition-colors shadow-sm">
              Let&apos;s Talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

