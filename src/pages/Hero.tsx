import React from 'react';
import { motion } from 'framer-motion';
import { ResumeButton } from '../components/ResumeButton.tsx';
import GradientText from '../components/GradientText.tsx';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center px-6 text-center pt-24 md:pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_70%)]" />
      <div className="absolute top-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-600/10 blur-[100px] md:blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 blur-[100px] md:blur-[150px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[100vw] mx-auto relative z-10 px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="inline-block px-5 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8 md:mb-10"
        >
          <span className="text-indigo-400 font-black uppercase text-[8px] md:text-[9px] tracking-[0.4em]">Available for Opportunities</span>
        </motion.div>

        <p className="text-slate-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium mb-8 md:mb-10">
        Based in Myanmar · Relocating to Taipei · Authorized to work in Taiwan
        </p>
        
        <div className="mb-8 md:mb-12 flex flex-col items-center justify-center">
          <GradientText 
            className="text-[18vw] sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none whitespace-nowrap py-2"
            colors={['#6366f1', '#a855f7', '#ffffff', '#fb7185', '#6366f1']}
            animationSpeed={6}
          >
            林月君
          </GradientText>

          <p className="mt-3 md:mt-4 text-sm md:text-base text-slate-500 font-medium tracking-[0.25em] uppercase">
            EI THINZAR MYO
          </p>
        </div>
        
        <p className="text-lg md:text-2xl lg:text-3xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16 px-4">
        A Junior Data Analyst transforming complex <span className="text-white font-bold italic">data</span> into actionable insights and data-driven solutions.
          </p>
        
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <ResumeButton />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6 md:gap-8 text-slate-500"
          >
            <a href="https://linkedin.com/in/eithinzarmyo" target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:scale-110 flex items-center gap-2">
              <i className="fa-brands fa-linkedin text-xl"></i>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
            </a>
            <a href="https://github.com/havenyj" target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:scale-110 flex items-center gap-2">
              <i className="fa-brands fa-github text-xl"></i>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">GitHub</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};