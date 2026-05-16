<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>AsepXxnx - Full Stack Developer Portofolio</title>

<meta name="description" content="Full Stack Developer specializing in JavaScript, HTML, and UI/UX. View my live terminal portfolio."/>
<meta property="og:title" content="AsepXxnx Payment"/>
<meta property="og:description" content="Full Stack Developer specializing in JavaScript, HTML, and UI/UX."/>
<meta property="og:url" content="https://AsepXyz12.github.io/bot-wa-db/"/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="AsepXxnx"/>
<meta property="og:image" content="https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778864999571.jpeg"/>

<script src="https://cdn.tailwindcss.com"></script>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

<script>
tailwind.config = {
  theme: {
    extend: {
      fontFamily: { 'mono': ['Fira Code', 'monospace'], 'sans': ['Inter', 'sans-serif'] },
      colors: {
        terminal: {
          bg: '#0d1117', darker: '#010409', card: '#161b22', border: '#30363d',
          text: '#c9d1d9', comment: '#8b949e', keyword: '#ff7b72', string: '#a5d6ff',
          function: '#d2a8ff', variable: '#ffa657', number: '#79c0ff', green: '#7ee787',
          cyan: '#79c0ff', yellow: '#ffa657', purple: '#d2a8ff', pink: '#f778ba', red: '#ff7b72'
        }
      }
    }
  }
}
</script>

<style>
body { font-family: 'Inter', sans-serif; transition: all 0.3s ease; }
body.dark { background-color: #0d1117; color: #c9d1d9; }
body.light { background-color: #f6f8fa; color: #24292f; }

.loading-screen {
  position: fixed; inset: 0; background: #0d1117;
  display: flex; align-items: center; justify-content: center;
  z-index: 99999; transition: opacity 0.5s, visibility 0.5s;
}
.loading-screen.hide { opacity: 0; visibility: hidden; }
.spinner {
  width: 50px; height: 50px; border: 3px solid #30363d;
  border-top-color: #7ee787; border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.typing-cursor { display: inline-block; width: 8px; height: 16px; background-color: #7ee787; margin-left: 2px; animation: blink 0.7s infinite; vertical-align: text-bottom; }
@keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
.code-line { opacity: 0; animation: fadeIn 0.3s ease-in forwards; }
@keyframes fadeIn { to { opacity: 1; } }
.terminal-window { box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5); }
.glass-card { backdrop-filter: blur(10px); border: 1px solid; transition: all 0.3s ease; }
.dark.glass-card { background: rgba(22, 27, 34, 0.8); border-color: rgba(48, 54, 61, 0.5); }
.light.glass-card { background: rgba(255, 255, 255, 0.8); border-color: rgba(208, 215, 222, 0.5); }

.online-indicator { position: relative; }
.online-indicator::after { content: ''; position: absolute; bottom: 0; right: 0; width: 20px; height: 20px; background: #7ee787; border-radius: 50%; border: 3px solid; animation: pulse-slow 2s infinite; }
.dark.online-indicator::after { border-color: #0d1117; }
.light.online-indicator::after { border-color: #f6f8fa; }
@keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity:.5; } }

::-webkit-scrollbar { width: 10px; }
.dark ::-webkit-scrollbar-track { background: #010409; }
.light ::-webkit-scrollbar-track { background: #f6f8fa; }
.dark ::-webkit-scrollbar-thumb { background: #30363d; border-radius: 5px; }
.light ::-webkit-scrollbar-thumb { background: #d0d7de; border-radius: 5px; }

@keyframes rgbGlow { 0% {box-shadow: 0 0 10px #ff0000;} 25% {box-shadow: 0 0 10px #00ff00;} 50% {box-shadow: 0 0 10px #0000ff;} 75% {box-shadow: 0 0 10px #ff00ff;} 100% {box-shadow: 0 0 10px #00ffff;} }
.bg-terminal-card { animation: rgbGlow 3s linear infinite; transition: 0.3s; }
.bg-terminal-card:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 0 20px #ffffff; }

.skill-bar { border-radius: 8px; overflow: hidden; }
.dark.skill-bar { background: #010409; }
.light.skill-bar { background: #eaeef2; }
.skill-fill { height: 8px; background: linear-gradient(90deg, #7ee787, #79c0ff); transition: width 1.5s ease-out; width: 0; }
.project-card:hover { transform: translateY(-5px); }
.back-to-top { position: fixed; bottom: 20px; right: 20px; opacity: 0; pointer-events: none; transition: 0.3s; z-index: 100; }
.back-to-top.show { opacity: 1; pointer-events: auto; }
.testimonial-card:hover { transform: scale(1.02); }
.faq-item { transition: all 0.3s ease; }
.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
.faq-item.active.faq-answer { max-height: 300px; }
.stat-number { animation: countUp 2s ease-out forwards; }
@keyframes countUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.playlist-item.active,.music-playlist-item.active { background: rgba(123, 231, 135, 0.15); border-color: #7ee787; }
.donghua-btn.active { background: linear-gradient(90deg, #d2a8ff, #79c0ff); color: #010409; }
.mode-btn.active { background: #7ee787; color: #010409; }
.speed-btn.active { background: #7ee787; color: #010409; }
.theme-toggle { position: fixed; top: 80px; right: 20px; z-index: 100; }
.volume-slider { -webkit-appearance: none; width: 80px; height: 4px; border-radius: 2px; background: #30363d; outline: none; }
.volume-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 12px; height: 12px; border-radius: 50%; background: #7ee787; cursor: pointer; }

.downloader-tab.active { background: #79c0ff; color: #010409; }
.downloader-content { display: none; }
.downloader-content.active { display: block; }
.downloader-loader {
  border: 2px solid #30363d;
  border-top: 2px solid #79c0ff;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}

/* MEGAH CARD STYLE */
@keyframes gradientShift {
 0% { background-position: 0% 50%; }
 50% { background-position: 100% 50%; }
 100% { background-position: 0% 50%; }
}
@keyframes pulseGlow {
 0%, 100% { box-shadow: 0 0 20px #ff7b72, 0 0 40px #d2a8ff; }
 50% { box-shadow: 0 0 30px #79c0ff, 0 0 60px #7ee787; }
}
.megah-card {
  background: linear-gradient(-45deg, #ff7b72, #d2a8ff, #79c0ff, #7ee787);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite, pulseGlow 3s ease-in-out infinite;
  padding: 4px;
  border-radius: 24px;
  position: relative;
}
.megah-card-inner {
  background: #010409;
  border-radius: 20px;
  padding: 28px;
}
.megah-card::before {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
  z-index: 2;
}
.megah-hot::before {
  content: '🔥 HOT DEAL';
  background: linear-gradient(90deg, #ff7b72, #f778ba);
  color: #fff;
}
.megah-nika::before {
  content: '✨ LIST NIKA';
  background: linear-gradient(90deg, #79c0ff, #7ee787);
  color: #010409;
}
.countdown {
  display: flex; gap: 8px; justify-content: center; margin: 16px 0;
}
.countdown-item {
  background: #161b22; padding: 8px 12px; border-radius: 8px;
  text-align: center; border: 1px solid #30363d;
}
.countdown-number {
  font-size: 24px; font-weight: bold; color: #7ee787;
  font-family: 'Fira Code', monospace;
}
.countdown-label {
  font-size: 10px; color: #8b949e; font-family: 'Fira Code', monospace;
}
.nika-item {
  background: #161b22; border: 1px solid #30363d; border-radius: 12px;
  padding: 14px; transition: all 0.3s;
}
.nika-item:hover {
  transform: translateX(5px); border-color: #79c0ff;
  box-shadow: 0 0 15px rgba(121, 192, 255, 0.3);
}
.tier-badge {
  padding: 4px 10px; border-radius: 8px; font-size: 11px;
  font-family: 'Fira Code', monospace; font-weight: bold;
}

/* FIX SALJU */
.snowflake {
  position: fixed;
  top: -20px;
  color: #fff;
  user-select: none;
  pointer-events: none;
  z-index: 9999;
  will-change: transform, opacity;
  animation: snowfall linear forwards;
}
@keyframes snowfall {
 0% {
    transform: translateX(0) translateY(0) rotate(0deg);
    opacity: 0;
  }
 10% { opacity: 1; }
 100% {
    transform: translateX(var(--drift)) translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}
</style>
</head>

<body class="dark min-h-screen">
<div class="loading-screen" id="loadingScreen">
  <div class="text-center">
    <div class="spinner mx-auto mb-4"></div>
    <p class="font-mono text-terminal-green text-sm">Loading AsepXxnx Terminal...</p>
  </div>
</div>

<button onclick="toggleTheme()" class="theme-toggle p-3 rounded-full bg-terminal-card hover:scale-110 transition-all">
  <svg id="themeIcon" class="w-5 h-5 text-terminal-yellow" fill="currentColor" viewBox="0 0 20 20">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
  </svg>
</button>

<div id="clickIntro" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:999; opacity:0; pointer-events:none; transition:opacity 0.6s ease;">
  <img id="introLogo" src="https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778864999571.jpeg" style="width:120px; height:120px; border-radius:50%; border:3px solid #00eaff; box-shadow:0 0 12px #00eaff;">
  <h1 style="color:#00eaff; font-family:'Fira Code', monospace; margin-top:18px; font-size:26px; letter-spacing:2px; text-shadow:0 0 10px #00eaff;">WELCOME TO WEBSITE AsepXxnx</h1>
</div>

<header class="bg-terminal-darker border-b border-terminal-border sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 py-3">
    <div class="flex items-center justify-center space-x-2 text-terminal-comment">
      <svg class="w-5 h-5 text-terminal-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
      <span class="text-sm font-mono">Developer Terminal</span>
    </div>
  </div>
</header>

<main class="max-w-7xl mx-auto px-4 py-6">
  <!-- TERMINAL -->
  <div class="terminal-window bg-terminal-darker rounded-xl overflow-hidden mb-8">
    <div class="bg-terminal-card px-4 py-3 flex items-center justify-between border-b border-terminal-border">
      <div class="flex items-center space-x-2">
        <span class="w-3 h-3 rounded-full bg-red-500"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span class="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      <span class="text-sm text-terminal-comment font-mono">profile.config.js — AsepXxnx</span>
    </div>
    <div id="terminalContent" class="p-6 font-mono text-sm overflow-x-auto min-h-[400px] max-h-[500px] overflow-y-auto">
      <div id="breadcrumb" class="text-terminal-comment mb-4 text-xs">src › modules › profile.config.js</div>
      <div id="codeContainer" class="space-y-1"></div>
      <div id="typingLine" class="mt-2"></div>
    </div>
  </div>

  <!-- DOWNLOADER -->
  <div class="glass-card rounded-xl p-6 mb-8 max-w-2xl mx-auto">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5 text-terminal-cyan" fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
        <h3 class="font-mono text-terminal-cyan font-semibold">DOWNLOADER</h3>
      </div>
    </div>
    <div class="flex gap-2 mb-4 border-b border-terminal-border pb-3">
      <button onclick="switchTab('ig')" id="tab-ig" class="downloader-tab active px-3 py-1 text-xs rounded bg-terminal-cyan text-terminal-darker font-mono">Instagram</button>
      <button onclick="switchTab('tt')" id="tab-tt" class="downloader-tab px-3 py-1 text-xs rounded bg-terminal-darker text-terminal-comment font-mono">TikTok</button>
      <button onclick="switchTab('sp')" id="tab-sp" class="downloader-tab px-3 py-1 text-xs rounded bg-terminal-darker text-terminal-comment font-mono">Spotify</button>
    </div>

    <div id="content-ig" class="downloader-content active">
      <input type="text" id="igUrl" placeholder="Paste link Instagram..." class="w-full px-3 py-2 bg-terminal-darker border-terminal-border rounded text-xs font-mono text-terminal-text focus:outline-none focus:border-terminal-cyan mb-3">
      <button onclick="downloadIG()" class="w-full py-2 bg-terminal-cyan text-terminal-darker font-mono font-bold rounded hover:opacity-80 transition-all flex items-center justify-center gap-2">
        <span id="igBtnText">Download</span>
        <span id="igLoader" class="downloader-loader hidden"></span>
      </button>
      <div id="igResult" class="mt-3"></div>
    </div>

    <div id="content-tt" class="downloader-content">
      <input type="text" id="ttUrl" placeholder="Paste link TikTok... support vt.tiktok.com" class="w-full px-3 py-2 bg-terminal-darker border-terminal-border rounded text-xs font-mono text-terminal-text focus:outline-none focus:border-terminal-cyan mb-3">
      <button onclick="downloadTT()" class="w-full py-2 bg-terminal-cyan text-terminal-darker font-mono font-bold rounded hover:opacity-80 transition-all flex items-center justify-center gap-2">
        <span id="ttBtnText">Download</span>
        <span id="ttLoader" class="downloader-loader hidden"></span>
      </button>
      <div id="ttResult" class="mt-3"></div>
    </div>

    <div id="content-sp" class="downloader-content">
      <input type="text" id="spUrl" placeholder="Paste link Spotify..." class="w-full px-3 py-2 bg-terminal-darker border-terminal-border rounded text-xs font-mono text-terminal-text focus:outline-none focus:border-terminal-cyan mb-3">
      <button onclick="downloadSP()" class="w-full py-2 bg-terminal-cyan text-terminal-darker font-mono font-bold rounded hover:opacity-80 transition-all flex items-center justify-center gap-2">
        <span id="spBtnText">Download</span>
        <span id="spLoader" class="downloader-loader hidden"></span>
      </button>
      <div id="spResult" class="mt-3"></div>
    </div>
  </div>

  <!-- DONGHUA PLAYER - NEW SECTION -->
  <div class="glass-card rounded-xl p-6 mb-8 max-w-3xl mx-auto">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5 text-terminal-purple" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/></svg>
        <h3 class="font-mono text-terminal-purple font-semibold">DONGHUA PLAYER</h3>
      </div>
    </div>

    <!-- Donghua Selector -->
    <div class="flex gap-2 mb-4">
      <button onclick="switchDonghua('btth')" id="donghua-btth" class="donghua-btn active flex-1 py-2 rounded-lg text-xs font-mono font-bold transition-all">Battle Through The Heavens</button>
      <button onclick="switchDonghua('ri')" id="donghua-ri" class="donghua-btn flex-1 py-2 rounded-lg text-xs font-mono font-bold transition-all bg-terminal-darker text-terminal-comment">Renegade Immortal</button>
    </div>

    <!-- BTTH Content -->
    <div id="content-btth" class="donghua-content active">
      <div class="bg-terminal-darker p-4 rounded-lg mb-4">
        <audio id="btthAudio" controls class="w-full mb-3"></audio>
        <div class="flex items-center justify-between text-xs font-mono text-terminal-comment">
          <span id="btthNowPlaying">Select an episode</span>
          <div class="flex items-center gap-2">
            <span>Volume:</span>
            <input type="range" min="0" max="1" step="0.1" value="0.8" class="volume-slider" onchange="setVolume('btthAudio', this.value)">
          </div>
        </div>
      </div>
      <div id="btthPlaylist" class="space-y-2 max-h-64 overflow-y-auto">
        <!-- Playlist generated by JS -->
      </div>
    </div>

    <!-- Renegade Immortal Content -->
    <div id="content-ri" class="donghua-content hidden">
      <div class="bg-terminal-darker p-4 rounded-lg mb-4">
        <audio id="riAudio" controls class="w-full mb-3"></audio>
        <div class="flex items-center justify-between text-xs font-mono text-terminal-comment">
          <span id="riNowPlaying">Select an episode</span>
          <div class="flex items-center gap-2">
            <span>Volume:</span>
            <input type="range" min="0" max="1" step="0.1" value="0.8" class="volume-slider" onchange="setVolume('riAudio', this.value)">
          </div>
        </div>
      </div>
      <div id="riPlaylist" class="space-y-2 max-h-64 overflow-y-auto">
        <!-- Playlist generated by JS -->
      </div>
    </div>
  </div>

  <!-- MUSIC PLAYER - NEW SECTION -->
  <div class="glass-card rounded-xl p-6 mb-8 max-w-3xl mx-auto">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5 text-terminal-pink" fill="currentColor" viewBox="0 0 20 20"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A2 2 0 105 15c0 1.103.897 2 2 2s2-.897 2-2V7.976l8-1.6v2.519c-.055.23-.256.391-.508.45a2 2 0 11-1.243-3.805l8-1.6z"/></svg>
        <h3 class="font-mono text-terminal-pink font-semibold">MUSIC PLAYER</h3>
      </div>
    </div>

    <div class="bg-terminal-darker p-4 rounded-lg mb-4">
      <audio id="musicAudio" controls class="w-full mb-3"></audio>
      <div class="flex items-center justify-between text-xs font-mono text-terminal-comment">
        <span id="musicNowPlaying">Select a track</span>
        <div class="flex items-center gap-2">
          <span>Volume:</span>
          <input type="range" min="0" max="1" step="0.1" value="0.8" class="volume-slider" onchange="setVolume('musicAudio', this.value)">
        </div>
      </div>
    </div>

    <div id="musicPlaylist" class="space-y-2">
      <!-- Playlist generated by JS -->
    </div>
  </div>

  <!-- PRODUK SPESIAL -->
  <div class="megah-card megah-hot max-w-2xl mx-auto mt-8">
    <div class="megah-card-inner">
      <h3 class="text-2xl font-bold mb-2 text-center font-mono bg-gradient-to-r from-terminal-pink to-terminal-cyan bg-clip-text text-transparent">PRODUK SPESIAL</h3>
      <p class="text-center text-terminal-comment text-xs mb-4">Limited Offer - Slot Terbatas!</p>

      <div class="countdown" id="countdown">
        <div class="countdown-item"><div class="countdown-number" id="days">00</div><div class="countdown-label">Days</div></div>
        <div class="countdown-item"><div class="countdown-number" id="hours">00</div><div class="countdown-label">Hours</div></div>
        <div class="countdown-item"><div class="countdown-number" id="minutes">00</div><div class="countdown-label">Min</div></div>
        <div class="countdown-item"><div class="countdown-number" id="seconds">00</div><div class="countdown-label">Sec</div></div>
      </div>

      <div class="bg-terminal-darker p-5 rounded-lg border-terminal-border">
        <div class="flex justify-between items-center mb-3">
          <h4 class="text-lg font-mono text-terminal-pink font-bold">Partner Spesial - Asep XYZ</h4>
          <div class="text-right">
            <span class="text-terminal-yellow font-mono font-bold text-xl">Rp 200.000</span>
            <p class="text-xs text-terminal-comment line-through">Rp 500.000</p>
          </div>
        </div>
        <p class="text-xs text-terminal-comment font-mono mb-4">Contact Join: <span class="text-terminal-cyan">AsepXxnxt</span></p>
        <ul class="space-y-2 text-xs font-mono text-terminal-text mb-5">
          <li>✅ Get all title res-mod nika</li>
          <li>✅ Get no enc all yg gua punya</li>
          <li>✅ Get all function click / no click</li>
          <li>✅ Get reseller nika tele + apk</li>
          <li>✅ Get reseller improve</li>
          <li>✅ Get reseller shinigami</li>
          <li>✅ Get reseller xvoludultra via WA + via tele</li>
          <li>✅ Get fix error SC lu (klo error bilang aja ke gua 😘)</li>
        </ul>
        <a href="https://wa.me/62881036109288" target="_blank" class="block w-full py-3 bg-gradient-to-r from-terminal-green to-terminal-cyan text-terminal-darker text-center font-mono font-bold rounded-lg hover:scale-105 transition-all shadow-lg shadow-terminal-green/30">
          💬 Chat WhatsApp Sekarang
        </a>
      </div>
    </div>
  </div>

  <!-- LIST NIKA -->
  <div class="megah-card megah-nika max-w-3xl mx-auto mt-8">
    <div class="megah-card-inner">
      <h3 class="text-2xl font-bold mb-2 text-center font-mono bg-gradient-to-r from-terminal-cyan to-terminal-green bg-clip-text text-transparent">LIST HARGA NIKA</h3>
      <p class="text-center text-terminal-comment text-xs mb-5">All Tier & Upgrade Price</p>

      <div class="mb-6">
        <h4 class="text-terminal-cyan font-mono font-bold mb-3">NIKA VIA WA</h4>
        <div class="space-y-3">
          <div class="nika-item">
            <div class="flex justify-between items-center mb-2">
              <span class="tier-badge bg-terminal-purple/20 text-terminal-purple">RESELLER</span>
              <span class="text-terminal-green font-mono font-bold">60K</span>
            </div>
            <ul class="text-xs text-terminal-comment space-y-1">
              <li>❗ BISA JUALAN SC NIKA</li>
              <li>❗ FREE UPDATE PERMANEN</li>
              <li>❗ MASUK GB RESELLER</li>
            </ul>
          </div>

          <div class="nika-item">
            <div class="flex justify-between items-center mb-2">
              <span class="tier-badge bg-terminal-cyan/20 text-terminal-cyan">PARTNER</span>
              <span class="text-terminal-green font-mono font-bold">100K</span>
            </div>
            <ul class="text-xs text-terminal-comment space-y-1">
              <li>❗ BISA JUALAN SC NIKA</li>
              <li>❗ FREE UPDATE PERMANEN</li>
              <li>❗ BISA JUALAN RESELLER</li>
              <li>❗ MASUK GB RESELLER</li>
              <li>❗ MASUK GRUP PARTNER</li>
            </ul>
          </div>

          <div class="nika-item">
            <div class="flex justify-between items-center mb-2">
              <span class="tier-badge bg-terminal-yellow/20 text-terminal-yellow">TANGAN KANAN</span>
              <span class="text-terminal-green font-mono font-bold">140K</span>
            </div>
            <ul class="text-xs text-terminal-comment space-y-1">
              <li>❗ BISA JUALAN SC NIKA</li>
              <li>❗ FREE UPDATE PERMANEN</li>
              <li>❗ BISA JUALAN RESELLER</li>
              <li>❗ BISA JUALAN PARTNER</li>
              <li>❗ MASUK GB RESELLER</li>
              <li>❗ MASUK GRUP PARTNER</li>
              <li>❗ DAPET BONUS LAINNYA</li>
            </ul>
          </div>

          <div class="nika-item">
            <div class="flex justify-between items-center mb-2">
              <span class="tier-badge bg-terminal-pink/20 text-terminal-pink">OWNER</span>
              <span class="text-terminal-green font-mono font-bold">200K</span>
            </div>
            <ul class="text-xs text-terminal-comment space-y-1">
              <li>❗ BISA JUALAN SC NIKA</li>
              <li>❗ FREE UPDATE PERMANEN</li>
              <li>❗ BISA JUALAN RESELLER</li>
              <li>❗ BISA JUALAN PARTNER</li>
              <li>❗ BISA JUALAN TK</li>
              <li>❗ MASUK GB RESELLER</li>
              <li>❗ MASUK GRUP PARTNER</li>
              <li>❗ DAPET BONUS LAINNYA</li>
            </ul>
          </div>

          <div class="nika-item">
            <div class="flex justify-between items-center mb-2">
              <span class="tier-badge bg-terminal-red/20 text-terminal-red">MODS</span>
              <span class="text-terminal-green font-mono font-bold">250K</span>
            </div>
            <ul class="text-xs text-terminal-comment space-y-1">
              <li>❗ BISA JUALAN SC NIKA</li>
              <li>❗ FREE UPDATE PERMANEN</li>
              <li>❗ BISA JUALAN RESELLER</li>
              <li>❗ BISA JUALAN PARTNER</li>
              <li>❗ BISA JUALAN TK</li>
              <li>❗ BISA JUALAN OWNER</li>
              <li>❗ MASUK GB RESELLER</li>
              <li>❗ MASUK GRUP PARTNER</li>
              <li>❗ DAPET BONUS LAINNYA</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-terminal-purple font-mono font-bold mb-3">OPEN UP TITLE NIKA</h4>
        <p class="text-xs text-terminal-yellow font-mono mb-2">HARGA UP RESELLER</p>
        <div class="grid grid-cols-2 gap-2 text-xs mb-3">
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">RESELLER TO PT : <span class="text-terminal-green">40K</span></div>
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">RESELLER TO TK : <span class="text-terminal-green">80K</span></div>
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">RESELLER TO OWNER : <span class="text-terminal-green">140K</span></div>
<div class="bg-terminal-darker p-2 rounded border-terminal-border">RESELLER TO MODS : <span class="text-terminal-green">190K</span></div>
        </div>

        <p class="text-xs text-terminal-yellow font-mono mb-2">HARGA UP TK</p>
        <div class="grid grid-cols-2 gap-2 text-xs mb-3">
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">TK TO OWNER : <span class="text-terminal-green">60K</span></div>
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">TK TO MODS : <span class="text-terminal-green">110K</span></div>
        </div>

        <p class="text-xs text-terminal-yellow font-mono mb-2">HARGA UP OWNER</p>
        <div class="grid grid-cols-1 gap-2 text-xs">
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">OWNER TO MODS : <span class="text-terminal-green">50K</span></div>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-terminal-green font-mono font-bold mb-3">LIST HARGA NIKA VIA APK</h4>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">1 DAY : <span class="text-terminal-green">5K</span></div>
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">7 DAY : <span class="text-terminal-green">15K</span></div>
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">1 BULAN : <span class="text-terminal-green">40K</span></div>
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">PERMANEN : <span class="text-terminal-green">55K</span></div>
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">RESELLER : <span class="text-terminal-green">90K</span></div>
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">ADMIN : <span class="text-terminal-green">120K</span></div>
          <div class="bg-terminal-darker p-2 rounded border-terminal-border col-span-2">OWNER : <span class="text-terminal-green">250K</span></div>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-terminal-pink font-mono font-bold mb-3">LIST HARGA UP TITEL APK</h4>
        <p class="text-xs text-terminal-yellow font-mono mb-2">FROM PERMANEN</p>
        <div class="grid grid-cols-1 gap-2 text-xs mb-3">
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">PERMANEN TO RESELLER : <span class="text-terminal-green">50K</span></div>
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">PERMANEN TO ADMIN : <span class="text-terminal-green">100K</span></div>
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">PERMANEN TO OWNER : <span class="text-terminal-green">220K</span></div>
        </div>
        <p class="text-xs text-terminal-yellow font-mono mb-2">FROM RESELLER</p>
        <div class="grid grid-cols-2 gap-2 text-xs mb-3">
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">RESELLER TO ADMIN : <span class="text-terminal-green">60K</span></div>
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">RESELLER TO OWNER : <span class="text-terminal-green">170K</span></div>
        </div>
        <p class="text-xs text-terminal-yellow font-mono mb-2">FROM ADMIN</p>
        <div class="grid grid-cols-1 gap-2 text-xs">
          <div class="bg-terminal-darker p-2 rounded border-terminal-border">ADMIN TO OWNER : <span class="text-terminal-green">120K</span></div>
        </div>
      </div>

      <a href="https://wa.me/62881036109288" target="_blank" class="block w-full mt-5 py-3 bg-gradient-to-r from-terminal-cyan to-terminal-green text-terminal-darker text-center font-mono font-bold rounded-lg hover:scale-105 transition-all shadow-lg shadow-terminal-cyan/30">
        💬 Order via WhatsApp
      </a>
    </div>
  </div>

  <!-- PROFILE CARD -->
  <div class="glass-card rounded-xl p-6 max-w-2xl mx-auto mt-8">
    <div class="flex flex-col items-center mb-8">
      <div class="relative online-indicator mb-4">
        <div class="w-32 h-32 rounded-full bg-gradient-to-br from-terminal-cyan to-terminal-purple p-1">
          <div class="w-full h-full rounded-full bg-terminal-card flex items-center justify-center overflow-hidden">
            <img src="https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778864999571.jpeg" class="w-full h-full object-cover"/>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold mb-2">ASEPXXNX</h2>
      <p class="text-terminal-comment mb-4">➤ Full Stack Developer</p>

      <div class="w-full bg-terminal-bg rounded-lg p-4 border-terminal-border mb-6">
        <div class="text-terminal-yellow text-xs font-semibold mb-2 font-mono">BIO</div>
        <p class="text-terminal-green italic text-sm">"Gw AsepXxnx, dev script & web. Fokus bikin tools praktis, cepat, dan gampang dipake. Kalau butuh custom project, gas DM."</p>
      </div>

      <div class="w-full bg-terminal-darker p-4 rounded border-terminal-border mb-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs text-terminal-comment font-mono">Nomor WhatsApp</span>
          <button onclick="navigator.clipboard.writeText('62881036109288')" class="text-xs text-terminal-green hover:text-terminal-green/80 font-mono">Copy</button>
        </div>
        <div class="text-terminal-green font-mono text-lg font-semibold">62881036109288</div>
      </div>

      <div class="w-full bg-terminal-darker p-4 rounded border-terminal-border mb-4">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs text-terminal-comment font-mono">Nomor DANA</span>
          <button onclick="navigator.clipboard.writeText('0882009545852')" class="text-xs text-terminal-cyan hover:text-terminal-cyan/80 font-mono">Copy</button>
        </div>
        <div class="text-terminal-cyan font-mono text-lg font-semibold">0882009545852</div>
        <div class="text-terminal-green text-xs font-mono">a.n: AsepXxnx</div>
      </div>

      <div class="w-full bg-terminal-darker p-4 rounded border-terminal-border mb-4">
        <span class="text-xs text-terminal-comment font-mono mb-2 block">Scan QRIS</span>
        <img src="https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778865010448.jpeg" class="w-48 rounded-lg border-terminal-border"/>
      </div>
    </div>
  </div>

  <!-- SKILLS -->
  <div class="glass-card rounded-xl p-6 max-w-2xl mx-auto mt-8">
    <h3 class="text-xl font-bold mb-6 text-center font-mono text-terminal-cyan">SKILLS</h3>
    <div class="space-y-4">
      <div>
        <div class="flex justify-between mb-1 text-xs font-mono">
          <span>JavaScript</span><span>90%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width: 90%"></div></div>
      </div>
      <div>
        <div class="flex justify-between mb-1 text-xs font-mono">
          <span>HTML/CSS</span><span>95%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width: 95%"></div></div>
      </div>
      <div>
        <div class="flex justify-between mb-1 text-xs font-mono">
          <span>Node.js</span><span>85%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width: 85%"></div></div>
      </div>
      <div>
        <div class="flex justify-between mb-1 text-xs font-mono">
          <span>TailwindCSS</span><span>92%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" style="width: 92%"></div></div>
      </div>
    </div>
  </div>

  <!-- PROJECTS -->
  <div class="glass-card rounded-xl p-6 max-w-4xl mx-auto mt-8">
    <h3 class="text-xl font-bold mb-6 text-center font-mono text-terminal-purple">PROJECTS</h3>
    <div class="grid md:grid-cols-2 gap-4">
      <div class="project-card bg-terminal-darker p-4 rounded-lg border-terminal-border transition-all">
        <h4 class="font-mono text-terminal-green font-bold mb-2">Bot WhatsApp Nika</h4>
        <p class="text-xs text-terminal-comment mb-3">Multi-device WA bot dengan fitur auto reply, download, game, dan panel admin.</p>
        <div class="flex gap-2 text-xs">
          <span class="px-2 py-1 bg-terminal-purple/20 text-terminal-purple rounded">Node.js</span>
          <span class="px-2 py-1 bg-terminal-cyan/20 text-terminal-cyan rounded">Baileys</span>
        </div>
      </div>
      <div class="project-card bg-terminal-darker p-4 rounded-lg border-terminal-border transition-all">
        <h4 class="font-mono text-terminal-green font-bold mb-2">Terminal Portfolio</h4>
        <p class="text-xs text-terminal-comment mb-3">Portfolio interaktif dengan tema terminal, typing animation, dan media player.</p>
        <div class="flex gap-2 text-xs">
          <span class="px-2 py-1 bg-terminal-yellow/20 text-terminal-yellow rounded">HTML</span>
          <span class="px-2 py-1 bg-terminal-pink/20 text-terminal-pink rounded">Tailwind</span>
        </div>
      </div>
    </div>
  </div>

  <!-- TESTIMONIALS -->
  <div class="glass-card rounded-xl p-6 max-w-4xl mx-auto mt-8">
    <h3 class="text-xl font-bold mb-6 text-center font-mono text-terminal-yellow">TESTIMONIALS</h3>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="testimonial-card bg-terminal-darker p-4 rounded-lg border-terminal-border transition-all">
        <p class="text-xs italic mb-3">"SC nya mantap bro, support fast respon. Recommended!"</p>
        <p class="text-xs text-terminal-green font-mono">- User A</p>
      </div>
      <div class="testimonial-card bg-terminal-darker p-4 rounded-lg border-terminal-border transition-all">
        <p class="text-xs italic mb-3">"Bot nya stabil, fitur lengkap. Worth it banget."</p>
        <p class="text-xs text-terminal-green font-mono">- User B</p>
      </div>
      <div class="testimonial-card bg-terminal-darker p-4 rounded-lg border-terminal-border transition-all">
        <p class="text-xs italic mb-3">"Developer nya jujur, gak nipu. Gas terus bang."</p>
        <p class="text-xs text-terminal-green font-mono">- User C</p>
      </div>
    </div>
  </div>

  <!-- FAQ -->
  <div class="glass-card rounded-xl p-6 max-w-2xl mx-auto mt-8">
    <h3 class="text-xl font-bold mb-6 text-center font-mono text-terminal-pink">FAQ</h3>
    <div class="space-y-3">
      <div class="faq-item bg-terminal-darker p-3 rounded-lg border-terminal-border cursor-pointer" onclick="toggleFAQ(this)">
        <div class="flex justify-between items-center">
          <p class="text-xs font-mono">Apakah ada garansi?</p>
          <span class="text-terminal-cyan">+</span>
        </div>
        <div class="faq-answer">
          <p class="text-xs text-terminal-comment mt-2">Garansi update permanen selama produk masih aktif dikembangkan.</p>
        </div>
      </div>
      <div class="faq-item bg-terminal-darker p-3 rounded-lg border-terminal-border cursor-pointer" onclick="toggleFAQ(this)">
        <div class="flex justify-between items-center">
          <p class="text-xs font-mono">Bisa request fitur custom?</p>
          <span class="text-terminal-cyan">+</span>
        </div>
        <div class="faq-answer">
          <p class="text-xs text-terminal-comment mt-2">Bisa, kontak aja via WhatsApp. Harga tergantung kompleksitas.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- CONTACT FORM -->
  <div class="glass-card rounded-xl p-6 max-w-2xl mx-auto mt-8">
    <h3 class="text-xl font-bold mb-6 text-center font-mono text-terminal-green">CONTACT ME</h3>
    <form onsubmit="sendContact(event)" class="space-y-4">
      <input type="text" id="contactName" placeholder="Nama" required class="w-full px-3 py-2 bg-terminal-darker border-terminal-border rounded text-xs font-mono focus:outline-none focus:border-terminal-green">
      <input type="email" id="contactEmail" placeholder="Email" required class="w-full px-3 py-2 bg-terminal-darker border-terminal-border rounded text-xs font-mono focus:outline-none focus:border-terminal-green">
      <textarea id="contactMsg" placeholder="Pesan" rows="4" required class="w-full px-3 py-2 bg-terminal-darker border-terminal-border rounded text-xs font-mono focus:outline-none focus:border-terminal-green"></textarea>
      <button type="submit" class="w-full py-2 bg-gradient-to-r from-terminal-green to-terminal-cyan text-terminal-darker font-mono font-bold rounded hover:scale-105 transition-all">Kirim Pesan</button>
    </form>
  </div>

  <!-- LIVE STATS -->
  <div class="glass-card rounded-xl p-6 max-w-4xl mx-auto mt-8">
    <h3 class="text-xl font-bold mb-6 text-center font-mono text-terminal-cyan">LIVE STATS</h3>
    <div class="grid grid-cols-3 gap-4 text-center">
      <div>
        <div class="text-2xl font-bold text-terminal-green stat-number" id="visitorCount">0</div>
        <p class="text-xs text-terminal-comment font-mono">Visitors</p>
      </div>
      <div>
        <div class="text-2xl font-bold text-terminal-purple stat-number">15+</div>
        <p class="text-xs text-terminal-comment font-mono">Projects</p>
      </div>
      <div>
        <div class="text-2xl font-bold text-terminal-yellow stat-number">50+</div>
        <p class="text-xs text-terminal-comment font-mono">Clients</p>
      </div>
    </div>
  </div>

  <footer class="mt-12 text-center text-terminal-comment text-sm pb-8">
    <p class="font-mono">© AsepXxnx using JavaScript & TailwindCSS</p>
  </footer>
</main>

<!-- BACK TO TOP -->
<button onclick="scrollToTop()" class="back-to-top p-3 rounded-full bg-terminal-card hover:scale-110 transition-all">
  <svg class="w-5 h-5 text-terminal-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
  </svg>
</button>

<script>
// HIDE LOADING SCREEN
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loadingScreen').classList.add('hide');
  }, 2000);
});

// EFEK SALJU
let snowCount = 0;
const MAX_SNOW = 25;

function createSnow() {
  if (snowCount >= MAX_SNOW) return;
  const snow = document.createElement('div');
  snow.classList.add('snowflake');
  snow.innerHTML = '❄';
  const startLeft = Math.random() * 100;
  const drift = (Math.random() - 0.5) * 200 + 'px';
  const size = Math.random() * 8 + 10;
  const duration = Math.random() * 4 + 4;
  snow.style.left = startLeft + '%';
  snow.style.fontSize = size + 'px';
  snow.style.opacity = Math.random() * 0.6 + 0.4;
  snow.style.setProperty('--drift', drift);
  snow.style.animationDuration = duration + 's';
  document.body.appendChild(snow);
  snowCount++;
  setTimeout(() => {
    snow.remove();
    snowCount--;
  }, duration * 1000);
}
setInterval(createSnow, 400);

// COUNTDOWN 7 HARI
function initCountdown() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);
  setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate.getTime() - now;
    if (distance < 0) return;
    document.getElementById('days').textContent = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    document.getElementById('hours').textContent = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    document.getElementById('minutes').textContent = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    document.getElementById('seconds').textContent = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
  }, 1000);
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener("click", function showIntroOnce() {
    const intro = document.getElementById("clickIntro");
    intro.style.pointerEvents = "auto"; intro.style.opacity = "1";
    setTimeout(() => { intro.style.opacity = "0"; setTimeout(() => intro.remove(), 600); }, 1800);
    document.removeEventListener("click", showIntroOnce);
  });

  setTimeout(typeCode, 1000);
  initVisitorCount();
  initBackToTop();
  initCountdown();
  loadDonghuaPlaylist();
  loadMusicPlaylist();
});

// TYPING ANIMATION
const typingCode = ['// AsepXxnx JS Brain v1.0', '// Generated: 2026-05-15', ''];
for(let i=1; i<=50; i++){
  typingCode.push(`const var${i} = ${i};`);
  typingCode.push(`function func${i}(a){ return a + ${i}; }`);
}
let lineIndex = 0, charIndex = 0;
const typingLine = document.getElementById('typingLine');
const codeContainer = document.getElementById('codeContainer');
const terminalContent = document.getElementById('terminalContent');

function typeCode() {
  if (lineIndex >= typingCode.length) {
    typingLine.innerHTML = '<span class="typing-cursor"></span>';
    return;
  }
  const currentLine = typingCode[lineIndex] || '';
  if (charIndex <= currentLine.length) {
    typingLine.innerHTML = `<span class="text-terminal-green">${currentLine.substring(0, charIndex)}</span><span class="typing-cursor"></span>`;
    charIndex++;
    setTimeout(typeCode, 20);
  } else {
    codeContainer.innerHTML += `<div class="code-line">${currentLine}</div>`;
    terminalContent.scrollTop = terminalContent.scrollHeight;
    lineIndex++;
    charIndex = 0;
    typingLine.innerHTML = '';
    setTimeout(typeCode, 50);
  }
}

// DOWNLOADER
let currentTab = 'ig';
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.downloader-tab').forEach(t => {
    t.classList.remove('active', 'bg-terminal-cyan', 'text-terminal-darker');
    t.classList.add('bg-terminal-darker', 'text-terminal-comment');
  });
  document.querySelectorAll('.downloader-content').forEach(c => c.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.add('active', 'bg-terminal-cyan', 'text-terminal-darker');
  document.getElementById(`tab-${tab}`).classList.remove('bg-terminal-darker', 'text-terminal-comment');
  document.getElementById(`content-${tab}`).classList.add('active');
}

async function resolveShortUrl(url) {
  try {
    const res = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
    return res.url;
  } catch {
    return url;
  }
}

async function fetchWithFallback(urls) {
  for (let url of urls) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const data = await res.json();
      if (data) return data;
    } catch (err) {
      console.log('API gagal:', url, err);
    }
  }
  throw new Error('Semua API down bro');
}

async function downloadIG() {
  const url = document.getElementById('igUrl').value.trim();
  const btnText = document.getElementById('igBtnText');
  const loader = document.getElementById('igLoader');
  const result = document.getElementById('igResult');
  if (!url) {
    result.innerHTML = '<p class="text-terminal-red text-xs">Masukin link dulu bro</p>';
    return;
  }
  btnText.textContent = 'Loading...';
  loader.classList.remove('hidden');
  result.innerHTML = '';
  try {
    const apis = [`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.tikmate.app/api/lookup?url=${encodeURIComponent(url)}`)}`];
    const data = await fetchWithFallback(apis);
    if (data.code === 0 && data.data) {
      result.innerHTML = `<div class="bg-terminal-darker p-3 rounded border-terminal-border">
        <img src="${data.data.cover}" class="w-full rounded mb-2">
        <a href="${data.data.wm}" target="_blank" class="block w-full py-2 bg-terminal-green text-terminal-darker text-center font-mono font-bold rounded hover:opacity-80 mb-2">Download Video</a>
        <a href="${data.data.audio}" target="_blank" class="block w-full py-2 bg-terminal-cyan text-terminal-darker text-center font-mono font-bold rounded hover:opacity-80">Download Audio</a>
      </div>`;
    } else {
      result.innerHTML = '<p class="text-terminal-red text-xs">Gagal download, cek linknya</p>';
    }
  } catch (err) {
    result.innerHTML = '<p class="text-terminal-red text-xs">Error: Semua API down</p>';
  }
  btnText.textContent = 'Download';
  loader.classList.add('hidden');
}

async function downloadTT() {
  let url = document.getElementById('ttUrl').value.trim();
  const btnText = document.getElementById('ttBtnText');
  const loader = document.getElementById('ttLoader');
  const result = document.getElementById('ttResult');
  if (!url) {
    result.innerHTML = '<p class="text-terminal-red text-xs">Masukin link dulu bro</p>';
    return;
  }
  btnText.textContent = 'Loading...';
  loader.classList.remove('hidden');
  result.innerHTML = '';
  try {
    if (url.includes('vt.tiktok.com') || url.includes('vm.tiktok.com')) {
      url = await resolveShortUrl(url);
    }
    const apis = [
      `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.tikmate.app/api/lookup?url=${encodeURIComponent(url)}`)}`,
      `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`)}`
    ];
    const data = await fetchWithFallback(apis);
    let videoUrl = null, audioUrl = null, cover = null;
    if (data.code === 0 && data.data) {
      videoUrl = data.data.wm;
      audioUrl = data.data.audio;
      cover = data.data.cover;
    } else if (data.data && data.data.play) {
      videoUrl = data.data.play;
      audioUrl = data.data.music;
      cover = data.data.cover;
    }
    if (videoUrl) {
      result.innerHTML = `<div class="bg-terminal-darker p-3 rounded border-terminal-border">
        ${cover? `<img src="${cover}" class="w-full rounded mb-2">` : ''}
        <a href="${videoUrl}" target="_blank" class="block w-full py-2 bg-terminal-green text-terminal-darker text-center font-mono font-bold rounded hover:opacity-80 mb-2">Download Video</a>
        ${audioUrl? `<a href="${audioUrl}" target="_blank" class="block w-full py-2 bg-terminal-cyan text-terminal-darker text-center font-mono font-bold rounded hover:opacity-80">Download Audio</a>` : ''}
      </div>`;
    } else {
      result.innerHTML = '<p class="text-terminal-red text-xs">Gagal parse hasil, coba link lain</p>';
    }
  } catch (err) {
    result.innerHTML = '<p class="text-terminal-red text-xs">Error: Semua API down. Coba lagi nanti.</p>';
  }
  btnText.textContent = 'Download';
  loader.classList.add('hidden');
}

async function downloadSP() {
  const url = document.getElementById('spUrl').value.trim();
  const btnText = document.getElementById('spBtnText');
  const loader = document.getElementById('spLoader');
  const result = document.getElementById('spResult');
  if (!url) {
    result.innerHTML = '<p class="text-terminal-red text-xs">Masukin link Spotify dulu bro</p>';
    return;
  }
  btnText.textContent = 'Loading...';
  loader.classList.remove('hidden');
  result.innerHTML = '';
  try {
    const apis = [`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.spotifydown.com/download/${encodeURIComponent(url)}`)}`];
    const data = await fetchWithFallback(apis);
    if (data.link || data.downloadUrl) {
      result.innerHTML = `<div class="bg-terminal-darker p-3 rounded border-terminal-border">
        ${data.thumb || data.image? `<img src="${data.thumb || data.image}" class="w-full rounded mb-2">` : ''}
        <p class="text-xs text-terminal-text mb-2">${data.title || 'Spotify Track'}</p>
        <a href="${data.link || data.downloadUrl}" target="_blank" class="block w-full py-2 bg-terminal-green text-terminal-darker text-center font-mono font-bold rounded hover:opacity-80">Download MP3</a>
      </div>`;
    } else {
      result.innerHTML = '<p class="text-terminal-red text-xs">Gagal download, coba link lain</p>';
    }
  } catch (err) {
    result.innerHTML = '<p class="text-terminal-red text-xs">Error: Semua API Spotify down.</p>';
  }
  btnText.textContent = 'Download';
  loader.classList.add('hidden');
}

// DONGHUA PLAYER
const donghuaData = {
  btth: {
    name: "Battle Through the Heavens",
    episodes: [
      { src: "https://files.catbox.moe/m8cejn.mp4", type: "video", title: "BTTH Episode 199 - Sub Indo HD" }
    ]
  },
  renegade: {
    name: "Renegade Immortal",
    episodes: [
      { src: "https://files.catbox.moe/p79ng7.mp4", type: "video", title: "Renegade Immortal Episode 139 - Sub Indo HD" },
      { src: "https://files.catbox.moe/r8hnvu.mp4", type: "video", title: "Renegade Immortal Episode 140 - Sub Indo HD" }
    ]
  }
};
const musicData = [
  { src: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778891648101.mp4", title: "Golden Brown - Slowed Loop" },
  { src: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778891632233.mp4", title: "Si Ai - Afro Remix" },
  { src: "https://raw.githubusercontent.com/AsepXyz12/bot-wa-db/main/uploads/1778889704904.mpeg", title: "Beauty And A Beat" }
];
function loadDonghuaPlaylist() {
  const btthDiv = document.getElementById('btthPlaylist');
  const riDiv = document.getElementById('riPlaylist');

  btthDiv.innerHTML = btthPlaylist.map((item, i) =>
    `<div onclick="playDonghua('btth', ${i})" class="playlist-item p-2 rounded-lg border-terminal-border cursor-pointer hover:border-terminal-purple transition-all">
      <p class="text-xs font-mono text-terminal-text">${item.title}</p>
    </div>`
  ).join('');

  riDiv.innerHTML = riPlaylist.map((item, i) =>
    `<div onclick="playDonghua('ri', ${i})" class="playlist-item p-2 rounded-lg border-terminal-border cursor-pointer hover:border-terminal-purple transition-all">
      <p class="text-xs font-mono text-terminal-text">${item.title}</p>
    </div>`
  ).join('');
}

function loadMusicPlaylist() {
  const musicDiv = document.getElementById('musicPlaylist');
  musicDiv.innerHTML = musicPlaylist.map((item, i) =>
    `<div onclick="playMusic(${i})" class="music-playlist-item p-2 rounded-lg border-terminal-border cursor-pointer hover:border-terminal-pink transition-all">
      <p class="text-xs font-mono text-terminal-text">${item.title}</p>
    </div>`
  ).join('');
}

function switchDonghua(type) {
  document.querySelectorAll('.donghua-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-gradient-to-r', 'from-terminal-purple', 'to-terminal-cyan', 'text-terminal-darker');
    btn.classList.add('bg-terminal-darker', 'text-terminal-comment');
  });
  document.getElementById(`donghua-${type}`).classList.add('active', 'bg-gradient-to-r', 'from-terminal-purple', 'to-terminal-cyan', 'text-terminal-darker');

  document.querySelectorAll('.donghua-content').forEach(c => c.classList.add('hidden'));
  document.getElementById(`content-${type}`).classList.remove('hidden');
}

function playDonghua(type, index) {
  const audio = document.getElementById(type === 'btth'? 'btthAudio' : 'riAudio');
  const nowPlaying = document.getElementById(type === 'btth'? 'btthNowPlaying' : 'riNowPlaying');
  const playlist = type === 'btth'? btthPlaylist : riPlaylist;

  audio.src = playlist[index].url;
  audio.play();
  nowPlaying.textContent = playlist[index].title;

  document.querySelectorAll(`#content-${type}.playlist-item`).forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

function playMusic(index) {
  const audio = document.getElementById('musicAudio');
  const nowPlaying = document.getElementById('musicNowPlaying');

  audio.src = musicPlaylist[index].url;
  audio.play();
  nowPlaying.textContent = musicPlaylist[index].title;

  document.querySelectorAll('#musicPlaylist.music-playlist-item').forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

function setVolume(audioId, volume) {
  document.getElementById(audioId).volume = volume;
}

// UTILS
function toggleTheme() {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  const icon = document.getElementById('themeIcon');
  if (document.body.classList.contains('light')) {
    icon.innerHTML = '<path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>';
  } else {
    icon.innerHTML = '<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>';
  }
}

function toggleFAQ(el) {
  el.classList.toggle('active');
  const answer = el.querySelector('.faq-answer');
  const plus = el.querySelector('span');
  if (el.classList.contains('active')) {
    answer.style.maxHeight = answer.scrollHeight + 'px';
    plus.textContent = '-';
  } else {
    answer.style.maxHeight = '0';
    plus.textContent = '+';
  }
}

function sendContact(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const msg = document.getElementById('contactMsg').value;
  
  // Kirim ke WhatsApp
  const text = `Halo AsepXxnx!\n\nNama: ${name}\nEmail: ${email}\nPesan: ${msg}`;
  const waUrl = `https://wa.me/62881036109288?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
  
  alert('Pesan siap dikirim ke WhatsApp!');
  e.target.reset();
}

// VISITOR COUNT
function initVisitorCount() {
  let count = localStorage.getItem('visitorCount') || 0;
  count = parseInt(count) + 1;
  localStorage.setItem('visitorCount', count);
  document.getElementById('visitorCount').textContent = count;
}

// BACK TO TOP
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
</body>
</html>
