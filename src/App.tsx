/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function App() {
  const channelUrl = "https://t.me/ApexForexr";

  const handleJoinClick = () => {
    window.open(channelUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div 
      id="main-container"
      className="relative min-h-screen bg-white flex flex-col font-sans text-slate-900 select-none antialiased overflow-x-hidden"
    >
      {/* Background Subtle Mesh / Ambient Glow */}
      <div 
        id="bg-ambient-glow-1"
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#24A1DE] opacity-[0.03] blur-[140px] pointer-events-none"
      />
      <div 
        id="bg-ambient-glow-2"
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#24A1DE] opacity-[0.02] blur-[140px] pointer-events-none"
      />

      {/* Header Navigation */}
      <nav id="header-nav" className="px-6 sm:px-12 py-8 flex justify-between items-center w-full max-w-7xl mx-auto z-20">
        <div id="brand-logo-container" className="flex items-center gap-3">
          <div id="brand-avatar" className="w-10 h-10 bg-[#24A1DE] rounded-xl flex items-center justify-center shadow-lg shadow-[#24A1DE]/20">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 8.146l-1.92 9.043c-.145.639-.524.797-1.059.497l-2.92-2.154-1.41 1.356c-.156.156-.285.285-.586.285l.209-2.969 5.404-4.882c.235-.209-.052-.326-.364-.118l-6.68 4.204-2.879-.901c-.626-.196-.639-.626.13-.925l11.258-4.337c.521-.196.977.118.817.901z"/>
            </svg>
          </div>
          <span id="brand-title" className="font-extrabold text-lg sm:text-xl tracking-tight uppercase text-slate-900 font-sans">
            ApexForex
          </span>
        </div>
        <div id="nav-topics" className="hidden md:flex text-xs font-semibold text-slate-400 gap-8 tracking-wide uppercase">
          <span className="hover:text-[#24A1DE] transition-colors cursor-default">Real-time Signals</span>
          <span className="hover:text-[#24A1DE] transition-colors cursor-default">Market Analysis</span>
          <span className="hover:text-[#24A1DE] transition-colors cursor-default flex items-center gap-1">
            Verified Results
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-50" />
          </span>
        </div>
      </nav>

      {/* Main Hero Section */}
      <main id="hero-main" className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 py-10 z-10">
        <div id="hero-content-wrapper" className="max-w-3xl w-full text-center flex flex-col items-center">
          
          {/* Abstract Signal Graphic */}
          <motion.div 
            id="signal-indicator-bars"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex justify-center gap-2 items-end h-20"
          >
            <div className="w-2.5 h-6 bg-slate-100 rounded-full animate-pulse transition-all"></div>
            <div className="w-2.5 h-11 bg-slate-100 rounded-full animate-pulse transition-all [animation-delay:0.2s]"></div>
            <div className="w-2.5 h-16 bg-[#24A1DE] rounded-full shadow-[0_4px_12px_rgba(36,161,222,0.3)]"></div>
            <div className="w-2.5 h-9 bg-slate-100 rounded-full animate-pulse transition-all [animation-delay:0.4s]"></div>
            <div className="w-2.5 h-13 bg-[#24A1DE] rounded-full shadow-[0_4px_12px_rgba(36,161,222,0.3)]"></div>
            <div className="w-2.5 h-20 bg-slate-100 rounded-full animate-pulse transition-all [animation-delay:0.1s]"></div>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            id="hero-heading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-none mb-6"
          >
            Apex Forex Signals <br/> 
            <span className="text-[#24A1DE]">Instant Delivery.</span>
          </motion.h1>

          {/* Core Description Quote */}
          <motion.p 
            id="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-slate-500 mb-12 max-w-xl mx-auto font-light leading-relaxed"
          >
            Join the elite circle of traders receiving high-probability forex insights directly to their Telegram dashboard.
          </motion.p>

          {/* Interactive Redirect Group */}
          <div id="interaction-action-group" className="flex flex-col items-center gap-8 w-full max-w-md">
            <motion.button
              id="join-now-button"
              onClick={handleJoinClick}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:w-auto bg-[#24A1DE] text-white text-xl sm:text-2xl font-semibold px-12 sm:px-16 py-5 sm:py-6 rounded-full shadow-2xl shadow-blue-200 hover:bg-[#208fca] active:bg-[#1c7fae] transition-all flex items-center justify-center gap-4 group cursor-pointer"
            >
              <span>Join Now</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>

            {/* Direct Channel URL Footnote */}
            <motion.a 
              id="direct-link-anchor"
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              whileHover={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-mono text-slate-400 hover:text-[#24A1DE] transition-colors flex items-center gap-1.5"
            >
              <span>t.me/ApexForexr</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>

            {/* Live Dashboard Market Stats Card */}
            <motion.div 
              id="statistics-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex items-center justify-center gap-6 sm:gap-10 mt-4 border border-slate-100 rounded-2xl px-8 py-5 bg-slate-50/50 backdrop-blur-sm shadow-sm"
            >
              <div id="stat-members" className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold text-slate-900">5,200+</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Members</span>
              </div>
              <div className="w-[1px] h-10 bg-slate-100"></div>
              <div id="stat-winrate" className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold text-[#24A1DE]">89.4%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Win Rate</span>
              </div>
              <div className="w-[1px] h-10 bg-slate-100"></div>
              <div id="stat-monitoring" className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold text-slate-900">24/7</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Monitoring</span>
              </div>
            </motion.div>
          </div>

        </div>
      </main>

      {/* Footer Design Element */}
      <footer id="main-footer" className="p-6 sm:p-12 w-full z-10 mt-auto">
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div id="protocol-version" className="text-xs text-slate-300 font-mono">
            // APEXFOREX PROTOCOL v4.0.1
          </div>
          <div id="system-status-indicator" className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
              System Status: Live Signals Active
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

