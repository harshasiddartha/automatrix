"use client"

export function ProductFeatures() {
  return (
    <div className="relative bg-white dark:bg-black min-h-screen py-24 px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Product Button */}
        <div className="flex justify-center mb-8">
          <button className="px-6 py-2 rounded-full border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-black/50 text-gray-900 dark:text-white text-sm font-medium backdrop-blur-sm transition-colors"
            style={{
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)',
            }}
          >
            Product
          </button>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white text-center mb-6 max-w-4xl mx-auto transition-colors">
          Discover our range of innovative tools designed for your success
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 dark:text-gray-400 text-lg text-center mb-16 max-w-3xl mx-auto transition-colors">
          Explore tailored solutions that meet the unique needs of your business, driving efficiency and productivity in every aspect.
        </p>

        {/* Four Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          
          {/* Top-Left: Chat that grows with you */}
          <div className="relative rounded-2xl bg-gradient-to-br from-gray-100 dark:from-[#1a1a1a] to-gray-50 dark:to-[#0f0f0f] p-8 border-2 border-gray-300 dark:border-[#2a2a2a] shadow-lg dark:shadow-none transition-colors"
            style={{
              boxShadow: '0 0 40px rgba(255, 107, 53, 0.15), inset 0 0 40px rgba(255, 107, 53, 0.05)',
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">Chat that grows with you</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed transition-colors">
              Our AI chatbot adapts to every interaction, with smarter responses with every conversation – when you need it.
            </p>
            
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative w-16 h-16 flex items-center justify-center"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 140, 80, 0.6))',
                }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff8c50] to-[#d2691e] flex items-center justify-center"
                  style={{
                    boxShadow: '0 0 30px rgba(255, 140, 80, 0.5)',
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-white/20"></div>
                </div>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="rounded-xl bg-white dark:bg-[#0a0a0a] border-2 border-gray-300 dark:border-white/10 p-4 transition-colors shadow-md dark:shadow-none"
              style={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Prompt */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ff8c50] to-[#d2691e] flex items-center justify-center"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 140, 80, 0.5)',
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-gray-900 dark:text-white text-sm transition-colors">Tell me about the latest pipelines.</span>
              </div>

              {/* Response */}
              <div className="mb-4 pl-9">
                <p className="text-gray-700 dark:text-gray-300 text-sm transition-colors">AI pipelines are essential for building robust, scalable,</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mb-4">
                <button className="px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-black/50 text-gray-900 dark:text-white text-xs font-medium backdrop-blur-sm transition-colors"
                  style={{
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  Add details
                </button>
                <button className="px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-black/50 text-gray-900 dark:text-white text-xs font-medium backdrop-blur-sm transition-colors"
                  style={{
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  Suggest something else
                </button>
              </div>

              {/* Input Field */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-black/50 backdrop-blur-sm transition-colors"
                style={{
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
                }}
              >
                <input 
                  type="text" 
                  placeholder="Ask another question" 
                  className="flex-1 bg-transparent text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-gray-500 outline-none"
                />
                <svg className="w-5 h-5 text-gray-600 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Top-Right: Built-in smart citations */}
          <div className="relative rounded-2xl bg-gradient-to-br from-gray-100 dark:from-[#1a1a1a] to-gray-50 dark:to-[#0f0f0f] p-8 border-2 border-gray-300 dark:border-[#2a2a2a] shadow-lg dark:shadow-none transition-colors"
            style={{
              boxShadow: '0 0 40px rgba(34, 197, 94, 0.15), inset 0 0 40px rgba(34, 197, 94, 0.05)',
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">Built-in smart citations</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed transition-colors">
              Effortlessly generate accurate, real-time references to back up your data, insights, and research with minimal effort.
            </p>
            
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative w-16 h-16 flex items-center justify-center"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))',
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center transform rotate-12"
                  style={{
                    boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)',
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Citation Interface */}
            <div className="rounded-xl bg-white dark:bg-[#0a0a0a] border-2 border-gray-300 dark:border-white/10 p-4 transition-colors shadow-md dark:shadow-none"
              style={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Call to Action */}
              <button className="w-full mb-4 px-4 py-3 rounded-full border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-black/50 text-gray-900 dark:text-white text-sm font-medium backdrop-blur-sm flex items-center justify-center gap-2 transition-colors"
                style={{
                  boxShadow: '0 0 15px rgba(34, 197, 94, 0.2)',
                }}
              >
                Experience the enchanting magic of AI
                <div className="w-4 h-4 rounded bg-gradient-to-br from-[#22c55e] to-[#16a34a]"
                  style={{
                    boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)',
                  }}
                ></div>
              </button>

              {/* Suggested Citation Box */}
              <div className="rounded-lg border-2 border-gray-300 dark:border-white/10 bg-white dark:bg-[#0f0f0f] p-4 mb-4 transition-colors shadow-sm dark:shadow-none">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-900 dark:text-white text-sm font-medium transition-colors">Suggested citation</span>
                </div>
                <a href="#" className="text-green-400 dark:text-green-400 text-green-600 dark:text-green-400 text-sm mb-2 flex items-center gap-1 hover:text-green-300 dark:hover:text-green-300 transition-colors">
                  LLM transformer models
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <div className="text-gray-600 dark:text-gray-400 text-xs space-y-1 transition-colors">
                  <p>MIT, PhD</p>
                  <p>John Umbridge</p>
                  <p>c. 2022</p>
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-black/50 text-gray-900 dark:text-white text-xs font-medium backdrop-blur-sm transition-colors"
                  style={{
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  Most cited
                </button>
                <button className="px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-black/50 text-gray-900 dark:text-white text-xs font-medium backdrop-blur-sm transition-colors"
                  style={{
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  Latest
                </button>
              </div>
            </div>
          </div>

          {/* Bottom-Left: Intelligent time management */}
          <div className="relative rounded-2xl bg-gradient-to-br from-gray-100 dark:from-[#1a1a1a] to-gray-50 dark:to-[#0f0f0f] p-8 border-2 border-gray-300 dark:border-[#2a2a2a] shadow-lg dark:shadow-none transition-colors"
            style={{
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.15), inset 0 0 40px rgba(168, 85, 247, 0.05)',
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">Intelligent time management</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed transition-colors">
              Optimize your schedule with AI-powered suggestions, ensuring you prioritize tasks and make the most of every minute.
            </p>
            
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative w-16 h-16 flex items-center justify-center"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))',
                }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a855f7] to-[#9333ea] flex items-center justify-center"
                  style={{
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Time Management Interface */}
            <div className="rounded-xl bg-white dark:bg-[#0a0a0a] border-2 border-gray-300 dark:border-white/10 p-4 transition-colors shadow-md dark:shadow-none"
              style={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Time spent section */}
              <div className="mb-4">
                <h3 className="text-gray-900 dark:text-white text-sm font-medium mb-3 transition-colors">Time spent</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400 text-xs transition-colors">
                  <div className="flex justify-between">
                    <span>Meetings</span>
                    <span>- hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Personal</span>
                    <span>- hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Blocked</span>
                    <span>- hours</span>
                  </div>
                </div>
              </div>

              {/* Event Listing */}
              <div className="mb-4 pb-4 border-b border-gray-200 dark:border-white/10 transition-colors">
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 dark:text-white text-sm transition-colors">Engineering All-Hands</span>
                  <span className="text-gray-600 dark:text-gray-400 text-xs transition-colors">Today 1:00pm</span>
                </div>
              </div>

              {/* Analysing button */}
              <button className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-black/50 text-gray-900 dark:text-white text-sm font-medium backdrop-blur-sm flex items-center justify-center gap-2 transition-colors"
                style={{
                  boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)',
                }}
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#a855f7] to-[#9333ea]"
                  style={{
                    boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
                  }}
                ></div>
                Analysing time
              </button>
            </div>
          </div>

          {/* Bottom-Right: Seamless integrations */}
          <div className="relative rounded-2xl bg-gradient-to-br from-gray-100 dark:from-[#1a1a1a] to-gray-50 dark:to-[#0f0f0f] p-8 border-2 border-gray-300 dark:border-[#2a2a2a] shadow-lg dark:shadow-none transition-colors"
            style={{
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.15), inset 0 0 40px rgba(59, 130, 246, 0.05)',
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">Seamless integrations</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed transition-colors">
              Enhancing workflows with other powerful automation tools and insights.
            </p>
            
            {/* Icon */}
            <div className="mb-6 flex flex-col items-center justify-center">
              <div className="relative w-16 h-16 flex items-center justify-center mb-2"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))',
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#2563eb] flex items-center justify-center"
                  style={{
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
              </div>
              <span className="text-blue-400 text-xs font-medium"
                style={{
                  textShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                }}
              >
                CONNECTING
              </span>
            </div>

            {/* Integration Icons Grid */}
            <div className="rounded-xl bg-white dark:bg-[#0a0a0a] border-2 border-gray-300 dark:border-white/10 p-4 transition-colors shadow-md dark:shadow-none"
              style={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="grid grid-cols-3 gap-3">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i}
                    className="aspect-square rounded-lg border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center transition-colors"
                    style={{
                      boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)',
                    }}
                  >
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-[#3b82f6] to-[#2563eb] opacity-60"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

