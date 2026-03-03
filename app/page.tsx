"use client";

import { useState } from 'react';

export default function Home() {
const [mass, setMass] = useState(0);
const c = 299792458;
const energy = mass * Math.pow(c, 2);

return (
<main style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: 'monospace' }}>
<div style={{ textAlign: 'center', marginBottom: '3rem' }}>
<h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#6366f1' }}>
PARK JI SUNG
</h1>
<p style={{ color: '#9ca3af', fontSize: '1.25rem' }}>Theoretical Physicist & Researcher</p>
</div>

);
}
