export default function ResultsDashboard() {
  return (
    <div className="min-h-screen bg-white dark:bg-black p-8 lg:p-12 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          {/* Our Impact Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-[#1a1a1a] rounded-md mb-6 transition-colors">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-900 dark:text-white text-sm font-normal transition-colors">Our Impact</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white font-bold leading-tight transition-colors" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Real Results, Backed by Data
          </h1>
        </div>

        {/* Top Row - Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Community Card */}
          <div className="bg-gray-100 dark:bg-[#1a1a1a] rounded-lg p-6 transition-colors">
            <h3 className="text-gray-900 dark:text-white text-base font-normal mb-3 transition-colors">Community</h3>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">10,000+</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal transition-colors">
              Total people that no longer have depression.
            </p>
          </div>

          {/* Anxiety Reduction Card */}
          <div className="bg-gray-100 dark:bg-[#1a1a1a] rounded-lg p-6 transition-colors">
            <h3 className="text-gray-900 dark:text-white text-base font-normal mb-3 transition-colors">Anxiety Reduction</h3>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">57%</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal transition-colors">
              Decrease in anxiety symptoms after just 4 weeks.
            </p>
          </div>

          {/* Depression Improvement Card */}
          <div className="bg-gray-100 dark:bg-[#1a1a1a] rounded-lg p-6 transition-colors">
            <h3 className="text-gray-900 dark:text-white text-base font-normal mb-3 transition-colors">Depression Improvement</h3>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">98%</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal transition-colors">
              Depression report significant improvement within 4 weeks.
            </p>
          </div>

          {/* User Retention Card */}
          <div className="bg-gray-100 dark:bg-[#1a1a1a] rounded-lg p-6 transition-colors">
            <h3 className="text-gray-900 dark:text-white text-base font-normal mb-3 transition-colors">User Retention</h3>
            <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">83%</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal transition-colors">
              Speaks to the ongoing value users find in our platform.
            </p>
          </div>
        </div>

        {/* Bottom Row - Chart Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Anxiety Reduction Chart */}
          <div className="bg-gray-100 dark:bg-[#1a1a1a] rounded-lg p-6 transition-colors">
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400 text-xs font-normal mb-1 transition-colors">After 4 Weeks</p>
              <h3 className="text-gray-900 dark:text-white text-xl font-normal transition-colors">Anxiety Reduction</h3>
            </div>
            <div className="relative h-64">
              {/* Chart Container */}
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                {/* Background */}
                <rect x="0" y="0" width="400" height="200" fill="var(--chart-bg)" />
                
                {/* Grid lines */}
                <line x1="50" y1="160" x2="370" y2="160" stroke="var(--chart-grid)" strokeWidth="1" />
                <line x1="50" y1="120" x2="370" y2="120" stroke="var(--chart-grid)" strokeWidth="1" />
                <line x1="50" y1="80" x2="370" y2="80" stroke="var(--chart-grid)" strokeWidth="1" />
                <line x1="50" y1="40" x2="370" y2="40" stroke="var(--chart-grid)" strokeWidth="1" />
                
                {/* Y-axis */}
                <line x1="50" y1="20" x2="50" y2="180" stroke="var(--chart-axis)" strokeWidth="1" />
                
                {/* Y-axis labels */}
                <text x="45" y="165" fill="var(--chart-text)" fontSize="11" textAnchor="end" fontFamily="sans-serif">12.0</text>
                <text x="45" y="125" fill="var(--chart-text)" fontSize="11" textAnchor="end" fontFamily="sans-serif">14.0</text>
                <text x="45" y="85" fill="var(--chart-text)" fontSize="11" textAnchor="end" fontFamily="sans-serif">16.0</text>
                
                {/* Chart line: starts at ~15.5, dips to ~12.5, rises to ~13.5 */}
                {/* Mapping: 12.0 = 160, 14.0 = 120, 16.0 = 80 */}
                {/* 15.5 ≈ 88, 12.5 ≈ 152, 13.5 ≈ 132 */}
                <path
                  d="M 80 88 L 140 88 Q 180 152 220 152 Q 260 152 300 140 Q 320 135 340 132"
                  fill="none"
                  stroke="var(--chart-line)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Week 1 Label */}
                <g>
                  <rect x="70" y="65" width="45" height="18" rx="4" fill="var(--chart-label-bg)" stroke="var(--chart-label-border)" strokeWidth="1" />
                  <text x="92.5" y="77" fill="var(--chart-text)" fontSize="10" textAnchor="middle" fontFamily="sans-serif">Week 1</text>
                </g>
                
                {/* Week 4 Label */}
                <g>
                  <rect x="310" y="110" width="45" height="18" rx="4" fill="var(--chart-label-bg)" stroke="var(--chart-label-border)" strokeWidth="1" />
                  <text x="332.5" y="122" fill="var(--chart-text)" fontSize="10" textAnchor="middle" fontFamily="sans-serif">Week 4</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Depression Improvement Chart */}
          <div className="bg-gray-100 dark:bg-[#1a1a1a] rounded-lg p-6 transition-colors">
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400 text-xs font-normal mb-1 transition-colors">After 4 Weeks</p>
              <h3 className="text-gray-900 dark:text-white text-xl font-normal transition-colors">Depression Improvement</h3>
            </div>
            <div className="relative h-64">
              {/* Chart Container */}
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                {/* Background */}
                <rect x="0" y="0" width="400" height="200" fill="var(--chart-bg)" />
                
                {/* Grid lines */}
                <line x1="50" y1="160" x2="370" y2="160" stroke="var(--chart-grid)" strokeWidth="1" />
                <line x1="50" y1="120" x2="370" y2="120" stroke="var(--chart-grid)" strokeWidth="1" />
                <line x1="50" y1="80" x2="370" y2="80" stroke="var(--chart-grid)" strokeWidth="1" />
                <line x1="50" y1="40" x2="370" y2="40" stroke="var(--chart-grid)" strokeWidth="1" />
                
                {/* Y-axis */}
                <line x1="50" y1="20" x2="50" y2="180" stroke="var(--chart-axis)" strokeWidth="1" />
                
                {/* Y-axis labels */}
                <text x="45" y="165" fill="var(--chart-text)" fontSize="11" textAnchor="end" fontFamily="sans-serif">60%</text>
                <text x="45" y="125" fill="var(--chart-text)" fontSize="11" textAnchor="end" fontFamily="sans-serif">80%</text>
                <text x="45" y="85" fill="var(--chart-text)" fontSize="11" textAnchor="end" fontFamily="sans-serif">100%</text>
                
                {/* Chart line: starts at ~65%, rises steadily to ~95% */}
                {/* Mapping: 60% = 160, 80% = 120, 100% = 80 */}
                {/* 65% ≈ 150, 95% ≈ 52 */}
                <path
                  d="M 80 150 Q 140 135 200 115 Q 260 85 320 65 Q 330 60 340 52"
                  fill="none"
                  stroke="var(--chart-line)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Week 1 Label */}
                <g>
                  <rect x="70" y="140" width="45" height="18" rx="4" fill="var(--chart-label-bg)" stroke="var(--chart-label-border)" strokeWidth="1" />
                  <text x="92.5" y="152" fill="var(--chart-text)" fontSize="10" textAnchor="middle" fontFamily="sans-serif">Week 1</text>
                </g>
                
                {/* Week 4 Label */}
                <g>
                  <rect x="310" y="30" width="45" height="18" rx="4" fill="var(--chart-label-bg)" stroke="var(--chart-label-border)" strokeWidth="1" />
                  <text x="332.5" y="42" fill="var(--chart-text)" fontSize="10" textAnchor="middle" fontFamily="sans-serif">Week 4</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

