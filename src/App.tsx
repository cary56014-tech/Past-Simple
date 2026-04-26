/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Gamepad2, GraduationCap, MessageSquare, ChevronRight, Menu, X } from 'lucide-react';
import Explanation from './components/Explanation';
import InteractiveExercises from './components/InteractiveExercises';
import PracticeGame from './components/PracticeGame';
import TestSection from './components/TestSection';
import BlogSection from './components/BlogSection';
import { cn } from './lib/utils';

type Section = 'explanation' | 'interactive' | 'practice' | 'test' | 'blog';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('explanation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'explanation', label: 'Explanation', icon: BookOpen },
    { id: 'interactive', label: 'Examples', icon: GraduationCap },
    { id: 'practice', label: 'Games', icon: Gamepad2 },
    { id: 'test', label: 'Test', icon: MessageSquare },
    { id: 'blog', label: 'Comments', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-light">
      {/* Top Header / Nav */}
      <header className="sticky top-0 z-50 bg-brand-light/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
          <div className="flex flex-col items-center gap-6 relative">
            {/* Central Brand */}
            <div className="flex flex-col items-center">
              <h1 className="font-heading text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4 text-brand-dark/30">
                Past Simple
              </h1>
              <div className="h-[2px] w-24 bg-brand-dark/10" />
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden absolute right-0 top-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <nav className="hidden md:flex items-center justify-center gap-14 mt-12">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id as Section)}
                className={cn(
                  "text-[11px] font-sans uppercase tracking-[0.3em] font-bold transition-all hover:text-brand-dark pb-2 relative",
                  activeSection === item.id ? "text-brand-dark" : "text-brand-medium"
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-dark"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-white pt-24 px-6"
          >
            <div className="flex flex-col gap-8 text-center">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id as Section);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "text-xl font-sans font-bold uppercase tracking-widest",
                    activeSection === item.id ? "text-brand-dark underline underline-offset-8" : "text-gray-400"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-grow pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="content-container min-h-[600px]"
            >
              {activeSection === 'explanation' && <Explanation />}
              {activeSection === 'interactive' && <InteractiveExercises />}
              {activeSection === 'practice' && <PracticeGame />}
              {activeSection === 'test' && <TestSection />}
              {activeSection === 'blog' && <BlogSection />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-tighter">PAST SIMPLE</h3>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Mastering the art of English verb conjugation with elegance and precision.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">Navigation</span>
            {menuItems.map(item => (
               <button 
                key={item.label}
                onClick={() => setActiveSection(item.id as Section)}
                className="text-sm text-gray-300 hover:text-white text-left transition-colors"
               >
                 {item.label}
               </button>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">Connect</span>
            <p className="text-sm text-gray-400">© 2026 Past Simple Elite. All rights reserved.</p>
            <p className="text-xs italic text-gray-500">Form follows function, verbs follow rules.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
