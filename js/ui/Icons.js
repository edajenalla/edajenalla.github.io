const Icons = {
  battery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="16" height="10" rx="2"></rect><line x1="22" y1="11" x2="22" y2="13"></line><line x1="6" y1="10" x2="6" y2="14"></line><line x1="10" y1="10" x2="10" y2="14"></line></svg>`,
  resistor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h2l2-6 4 12 4-12 2 6h2"></path></svg>`,
  lamp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"></path></svg>`,
  switch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="20" height="6" rx="3"></rect><circle cx="8" cy="12" r="2" fill="currentColor"></circle></svg>`,
  wire: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12s2-4 8-4 8 4 8 4-2 4-8 4-8-4-8-4z"></path></svg>`,
  source: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0"></path></svg>`,
  inductor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h2c0-2 2-2 2 0s2 2 2 0 2-2 2 0 2 2 2 0 2-2 2 0h2"></path></svg>`,
  capacitor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="9" y2="12"></line><line x1="9" y1="6" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="18"></line><line x1="15" y1="12" x2="20" y2="12"></line></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
  stop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12"></rect></svg>`,
  save: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>`,
  open: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
  library: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
  exercise: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  warning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
  lightning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
};

const ComponentSVG = {
  battery: (value = 9) => `
    <svg viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="batteryBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#e74c3c"/>
          <stop offset="100%" stop-color="#96281b"/>
        </linearGradient>
      </defs>
      <rect x="10" y="8" width="60" height="24" rx="3" fill="url(#batteryBody)"/>
      <rect x="10" y="8" width="60" height="6" rx="3" fill="#fff" opacity="0.15"/>
      <text x="45" y="24" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">${value}V</text>
      <rect x="70" y="16" width="6" height="8" rx="1" fill="#ccc"/>
      <text x="73" y="14" font-family="Inter, sans-serif" font-size="9" font-weight="800" fill="#e74c3c" text-anchor="middle">+</text>
      <rect x="4" y="16" width="6" height="8" rx="1" fill="#333"/>
      <text x="7" y="14" font-family="Inter, sans-serif" font-size="9" font-weight="800" fill="#3b82f6" text-anchor="middle">−</text>
    </svg>
  `,
  resistor: (value = 100) => `
    <svg viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="resistorBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#f5deb3"/>
          <stop offset="50%" stop-color="#deb887"/>
          <stop offset="100%" stop-color="#c4a060"/>
        </linearGradient>
      </defs>
      <rect x="10" y="6" width="60" height="18" rx="9" fill="url(#resistorBody)"/>
      <rect x="12" y="7" width="56" height="4" rx="2" fill="#fff" opacity="0.3"/>
      <rect x="22" y="6" width="3" height="18" fill="#8b4513"/>
      <rect x="30" y="6" width="3" height="18" fill="#000"/>
      <rect x="38" y="6" width="3" height="18" fill="#8b4513"/>
      <text x="58" y="18" font-family="JetBrains Mono, monospace" font-size="7" font-weight="700" fill="#3a2817">${value}Ω</text>
    </svg>
  `,
  lamp: (on = false) => `
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff8b0"/>
          <stop offset="60%" stop-color="#ffcc00"/>
          <stop offset="100%" stop-color="#cc9900"/>
        </radialGradient>
        <radialGradient id="lampOff" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#555"/>
          <stop offset="100%" stop-color="#222"/>
        </radialGradient>
      </defs>
      <circle cx="30" cy="30" r="22" fill="${on ? 'url(#lampGlow)' : 'url(#lampOff)'}" stroke="${on ? '#ffcc00' : '#444'}" stroke-width="2"/>
      <path d="M 22 30 Q 30 ${on ? 18 : 26} 38 30" fill="none" stroke="${on ? '#fff' : '#666'}" stroke-width="1.5"/>
      <path d="M 22 30 Q 30 ${on ? 42 : 34} 38 30" fill="none" stroke="${on ? '#fff' : '#666'}" stroke-width="1.5"/>
      <rect x="22" y="52" width="16" height="6" rx="1" fill="#888"/>
    </svg>
  `,
  switch: (on = false) => `
    <svg viewBox="0 0 70 30" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="60" height="14" rx="7" fill="${on ? '#3fb950' : '#555'}"/>
      <circle cx="${on ? 48 : 22}" cy="15" r="9" fill="#fff"/>
      <ellipse cx="${on ? 48 : 22}" cy="12" rx="5" ry="2" fill="#fff" opacity="0.6"/>
      <circle cx="8" cy="15" r="3" fill="#3b82f6"/>
      <circle cx="62" cy="15" r="3" fill="#3b82f6"/>
    </svg>
  `,
  wire: (color = '#3b82f6') => `
    <svg viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M 5 10 Q 15 5 30 10 T 55 10" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="5" cy="10" r="3" fill="${color}"/>
      <circle cx="55" cy="10" r="3" fill="${color}"/>
    </svg>
  `,
  source: (value = 230) => `
    <svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sourceBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2563eb"/>
          <stop offset="100%" stop-color="#1e40af"/>
        </linearGradient>
      </defs>
      <circle cx="35" cy="35" r="26" fill="url(#sourceBody)" stroke="#60a5fa" stroke-width="2"/>
      <path d="M 20 35 Q 24 28 28 35 T 36 35 T 44 35 T 50 35" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
      <text x="35" y="55" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="#fff" text-anchor="middle">${value}V</text>
      <circle cx="9" cy="35" r="3" fill="#3b82f6"/>
      <circle cx="61" cy="35" r="3" fill="#3b82f6"/>
    </svg>
  `,
  inductor: (value = 0.1) => `
    <svg viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="6" width="60" height="18" rx="9" fill="#8b5cf6"/>
      <path d="M 20 15 c 0 -5 4 -5 4 0 s 4 5 4 0 s 4 -5 4 0 s 4 5 4 0 s 4 -5 4 0 s 4 5 4 0" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.7"/>
      <text x="50" y="18" font-family="JetBrains Mono, monospace" font-size="7" font-weight="700" fill="#fff">${value}H</text>
    </svg>
  `,
  capacitor: (value = 0.00001) => `
    <svg viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="6" width="60" height="18" rx="4" fill="#0891b2"/>
      <line x1="32" y1="10" x2="32" y2="20" stroke="#fff" stroke-width="2"/>
      <line x1="38" y1="10" x2="38" y2="20" stroke="#fff" stroke-width="2"/>
      <line x1="20" y1="15" x2="32" y2="15" stroke="#fff" stroke-width="1.5"/>
      <line x1="38" y1="15" x2="50" y2="15" stroke="#fff" stroke-width="1.5"/>
      <text x="60" y="18" font-family="JetBrains Mono, monospace" font-size="6" font-weight="700" fill="#fff">10µF</text>
    </svg>
  `
};