"use client";
import React from 'react';
import Calculator from './Calculator';

export default function Portfolio() {
  const scrollToCalc = () => {
    const calcElement = document.getElementById('calc-area');
    calcElement?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    
    <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-indigo-500/30">
      {/* 배경 장식: 물리학 느낌의 은은한 광원 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-900/10 blur-[100px]" />
      </div>

      {/* 네비게이션 */}
      <nav className="relative z-10 flex justify-between items-center p-8 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold tracking-tighter text-white">JI-SUNG PARK</h1>
        <div className="space-x-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-cyan-400 transition-colors">Researgitch</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Papers</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* 메인 히어로 섹션 */}
      <main className="relative z-10 max-w-6xl mx-auto px-8 pt-24 pb-32">
        <div className="space-y-6">
          <p className="text-cyan-500 font-mono tracking-widest text-sm uppercase">Theoretical Physicist</p>
          <h2 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight leading-none">
            Exploring the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200">
              Cosmic Logic.
            </span>
          </h2>
          <p className="max-w-xl text-lg text-slate-400 leading-relaxed">
            안녕하세요, 물리학자 **박지성**입니다. <br />
            자연과학부터 철학, 신학, 문학을 아루르는 진리를 탐구하는 학자입니다. 
            양자 역학부터 우주론까지, 미지의 영역을 코드로 시뮬레이션하고 연구합니다.
          </p>
          
          <div className="pt-8 flex gap-4">
            <button 
            onClick={scrollToCalc} 
            className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-cyan-400 transition-all duration-300">
              연구 업적 보기
            </button>

            <button className="px-6 py-3 border border-slate-700 rounded-full hover:border-cyan-500/50 hover:bg-slate-900 transition-all">
              문의하기
            </button>
          </div>
        </div>

        {/* 간단한 연구 분야 카드 섹션 */}
        <div className="grid md:grid-cols-3 gap-6 mt-32">
          {[
            { title: "Quantum Computing", desc: "양자 얽힘을 이용한 연산 모델 연구" },
            { title: "Astrophysics", desc: "초신성 폭발과 중력파의 상관관계 분석" },
            { title: "Particle Physics", desc: "표준 모형 너머의 새로운 입자 탐색" },
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-all group">
              <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="relative z-10 border-t border-slate-900 py-12 text-center text-slate-600 text-xs">
        <p>© 2026 Ji-Sung Park. All rights reserved.</p>
      </footer>
    </div>
  );
}