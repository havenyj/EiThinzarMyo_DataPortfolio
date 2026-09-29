import React from 'react';
import { motion } from 'framer-motion';
import { LEADERSHIP, CERTIFICATIONS } from '../constants.ts';
import type { Experience as ExperienceType } from '../types.ts';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-40 px-6 bg-slate-900/20">
      <div className="max-w-4xl mx-auto">

        {/* JOURNEY HEADER */}
        <div className="mb-20 md:mb-24 text-center flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
            JOURNEY
          </h2>

          <div className="w-16 md:w-24 h-1.5 md:h-2 bg-indigo-500 rounded-full mt-4 md:mt-6"></div>
        </div>


        {/* EXPERIENCE */}
        <div className="mb-24">
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              EXPERIENCE
            </h3>

            <div className="w-10 h-1 bg-indigo-500 rounded-full mt-3"></div>
          </div>

          <div className="space-y-16">
            {LEADERSHIP.map((item: ExperienceType, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12 border-l-2 border-slate-800"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>

                {/* Title + Period */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-6 gap-2">
                  <h4 className="text-3xl font-black text-white tracking-tight">
                    {item.title}
                  </h4>

                  <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
                    {item.period}
                  </span>
                </div>

                {/* Organization */}
                <div className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-8">
                  {item.organization}
                </div>

                {/* Responsibilities */}
                <ul className="space-y-5">
                  {item.bullets.map((b: string, bi: number) => (
                    <li
                      key={bi}
                      className="text-slate-400 text-base leading-relaxed flex gap-4"
                    >
                      <span className="text-indigo-500 font-bold">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>


        {/* CERTIFICATIONS */}
        <div>
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              CERTIFICATIONS
            </h3>

            <div className="w-10 h-1 bg-indigo-500 rounded-full mt-3"></div>
          </div>

          <div className="grid gap-6">
            {CERTIFICATIONS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 md:p-8 rounded-2xl border border-slate-800 bg-slate-900/30 hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <div>
                    <h4 className="text-xl md:text-2xl font-black text-white tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mt-3">
                      {item.organization}
                    </p>
                  </div>

                  <span className="self-start md:self-auto text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-indigo-500/30">
                    {item.status}
                  </span>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};