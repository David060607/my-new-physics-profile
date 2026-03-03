"use client";

import { useState } from 'react';

export default function Home() {
const [mass, setMass] = useState(0);
const energy = mass * Math.pow(299792458, 2);

return (
<div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
<h1 style={{ color: '#6366f1' }}>PARK JI SUNG PHYSICS</h1>
<div style={{ border: '1px solid #334155', padding: '40px', borderRadius: '20px', backgroundColor: '#0f172a' }}>
<p style={{ fontSize: '1.2rem' }}>Mass (kg):
<input
type="number"
value={mass}
onChange={(e) => setMass(Number(e.target.value))}
style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px' }}
/>
</p>
<h2 style={{ color: '#4ade80' }}>Energy: {energy.toLocaleString()} J</h2>
</div>
<p style={{ marginTop: '30px', fontStyle: 'italic', color: '#64748b' }}>E = mc² (Energy-Mass Equivalence)</p>
</div>
);
}