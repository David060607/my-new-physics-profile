"use client";

import React, { useState } from 'react';

export default function Calculator() {
  const [mass, setMass] = useState(0);
  const energy = mass * Math.pow(299792458, 2);

  return (
    <div id="calc-area" className="mt-32 p-8 rounded-3xl bg-slate-800/30 border border-slate-800 max-w-3xl mx-auto scroll-mt-20 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 font-mono">
        <span className="text-cyan-500">◈</span> E = mc² Calculator (Module)
      </h3>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Input Mass (kg)</label>
          <input 
            type="number" 
            value={mass}
            onChange={(e) => setMass(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white text-2xl focus:outline-none focus:border-cyan-500 transition-all"
            placeholder="0"
          />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Energy (Joules)</p>
          <p className="text-2xl font-bold text-cyan-400 break-all font-mono">
            {energy.toLocaleString()} <span className="text-sm text-slate-500">J</span>
          </p>
        </div>
      </div>
    </div>
  );
}