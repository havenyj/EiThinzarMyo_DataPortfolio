import React from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from '../components/ImageWithFallback.tsx';
import { profileImg } from '../constants.ts';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] w-full max-w-[400px] lg:max-w-[480px] mx-auto rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-slate-900 border border-white/5 shadow-2xl group flex items-center justify-center"
          >
            <div className="w-full h-full relative z-10 flex items-center justify-center overflow-hidden">
               <ImageWithFallback 
                src={profileImg} 
                alt="Ei Thinzar Myo" 
                category="Profile"
                className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-20 pointer-events-none" />
            <div className="absolute top-6 left-6 md:top-10 md:left-10 w-10 md:w-16 h-10 md:h-16 border-t-2 border-l-2 border-indigo-500/30 rounded-tl-2xl md:rounded-tl-3xl pointer-events-none z-30" />
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-10 md:w-16 h-10 md:h-16 border-b-2 border-r-2 border-indigo-500/30 rounded-br-2xl md:rounded-br-3xl pointer-events-none z-30" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
              <div className="inline-block px-4 py-1.5 md:px-5 md:py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6 md:mb-10">
                <span className="text-indigo-400 font-black uppercase text-[9px] md:text-[10px] tracking-[0.4em]">Junior Data Analyst</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none uppercase text-shadow">About Me</h2>
              <div className="w-16 md:w-24 h-1.5 md:h-2 bg-indigo-500 rounded-full mt-4 md:mt-6"></div>
            </div>

            <div className="space-y-6 md:space-y-8 text-slate-400 text-lg md:text-xl leading-relaxed text-left">
              <p>
                I’m a <span className="text-white font-semibold italic">Junior Data Analyst</span> with a Computer Science background, specialising in Big Data. I enjoy exploring datasets, performing statistical and predictive analyses, and transforming raw data into actionable insights for decision-making.
              </p>
              <p>
                My analytical approach is <span className="text-white/90">structured and data-driven</span> — starting with data cleaning and exploratory analysis, followed by feature engineering, modeling, and visualization. I strive to communicate insights clearly to support informed business decisions.
              </p>
              <p>
                As someone at the start of my professional journey, I bring strong technical skills, a methodical mindset, and a genuine eagerness to learn. I’m looking to grow within a <span className="text-indigo-400">collaborative, data-focused team</span> where I can contribute meaningful insights and continuously improve my analytical abilities.
              </p>
            </div>

            <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-12 md:pt-16 border-t border-white/10">
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-black text-white tracking-tighter">Data</div>
                <div className="text-[7px] md:text-[8px] font-black text-slate-500 uppercase tracking-[0.4em] mt-3 md:mt-4 leading-relaxed">
                  Cleaning<br/>Analysis
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-black text-white tracking-tighter">Insights</div>
                <div className="text-[7px] md:text-[8px] font-black text-slate-500 uppercase tracking-[0.4em] mt-3 md:mt-4 leading-relaxed">
                  Dashboards<br/>Visuals
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-black text-white tracking-tighter">Models</div>
                <div className="text-[7px] md:text-[8px] font-black text-slate-500 uppercase tracking-[0.4em] mt-3 md:mt-4 leading-relaxed">
                  Regression<br/>Prediction
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-black text-white tracking-tighter">Collaboration</div>
                <div className="text-[7px] md:text-[8px] font-black text-slate-500 uppercase tracking-[0.4em] mt-3 md:mt-4 leading-relaxed">
                  Agile<br/>Teamwork
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};