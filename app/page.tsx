"use client";

import React, { useState, useEffect } from 'react';

export default function CouplePage() {
  // 1. D-Day 계산 (예: 2024년 1월 1일 사귀기 시작했다고 가정)
  const [days, setDays] = useState(0);
  
  useEffect(() => {
    const start = new Date("2025-10-19"); // 우리만의 시작 날짜로 바꾸세요!
    const today = new Date();
    const diff = today.getTime() - start.getTime();
    setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
  }, []);

  // 2. 공유 링크 데이터 (구글 포토 등)
  const links = [
    { title: "📸 우리 사진첩", url: "https://photos.app.goo.gl/JwyhoDTe2zA6ogE68", color: "bg-rose-100" },
    { title: "📍 지성 기도 제목", url: "https://www.notion.so/Oratio-32d13496fc318008a56ec7d9336b352b?source=copy_link", color: "bg-orange-100" },
    { title: "🎵 우리 테마곡", url: "https://youtu.be/BegG8WySo4k?si=sd-zuhyN17him2AD", color: "bg-blue-100" },
  ];

  // 3. 편지/기록 데이터
  const notes = [
    { date: "2025.03.25", content: "오늘 하늘이 너무 예쁘더라, 그대처럼" },
    { date: "2025.03.26", content: "그대의❤️ 손모양 때문에 잠이 안와여..." },
  ];

  return (
    <div className="min-h-screen bg-[#fff5f5] text-slate-800 font-sans pb-20">
      {/* 헤더: D-Day 표시 */}
      <header className="pt-20 pb-10 text-center">
        <h1 className="text-4xl font-extrabold text-rose-400 mb-4 italic"> Davinnie ❤️</h1>
        <div className="inline-block px-6 py-2 bg-white rounded-full shadow-sm border border-rose-100">
          <span className="text-rose-500 font-bold text-xl flex items-center gap-2">
            우리 함께한 지 <span className="text-2xl">{days}</span>일 째
          </span>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 space-y-12">
        {/* 버튼 링크 섹션 */}
        <section>
          <h2 className="text-lg font-bold mb-4 text-rose-300 flex items-center gap-2">
            <span>✨</span> 우리의 기록들
          </h2>
          <div className="grid gap-4">
            {links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                className={`${link.color} p-5 rounded-2xl flex justify-between items-center hover:scale-[1.02] transition-transform shadow-sm`}
              >
                <span className="font-bold text-slate-700">{link.title}</span>
                <span className="text-slate-400 text-xl">→</span>
              </a>
            ))}
          </div>
        </section>

        {/* 편지/기록 섹션 */}
        <section>
          <h2 className="text-lg font-bold mb-4 text-rose-300 flex items-center gap-2">
            <span>💌</span> 한 줄 편지
          </h2>
          <div className="space-y-4">
            {notes.map((note, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-rose-50/50">
                <p className="text-sm text-slate-400 mb-2 font-mono">{note.date}</p>
                <p className="text-slate-600 leading-relaxed">{note.content}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 하단 장식 */}
      <footer className="mt-20 text-center text-rose-200 text-sm italic">
        Forever & Always
      </footer>
    </div>
  );
}