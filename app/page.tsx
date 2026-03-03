"use client";

import { useState } from 'react';

export default function Home() {
const [mass, setMass] = useState(0);
const c = 299792458;
const energy = mass * Math.pow(c, 2);

return (
<main style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: 'monospace' }}>

);
}