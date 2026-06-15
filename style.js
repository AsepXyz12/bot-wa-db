:root {
  --accent: #6d5dfc;
  --bg-dark: #0a0a0f;
  --bg-card: rgba(20, 20, 30, 0.6);
  --text-primary: #fff;
  --text-secondary: #a0a0b0;
  --border: rgba(255, 255, 255, 0.1);
  --glass-blur: blur(20px);
  --shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg-dark);
  color: var(--text-primary);
  overflow-x: hidden;
}

/* Background Effects */
.bg-gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 50%, rgba(109, 93, 252, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%);
  z-index: -2;
}

.floating-light {
  position: fixed;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
  animation: float 20s infinite ease-in-out;
  z-index: -1;
}

.light-1 {
  background: var(--accent);
  top: -200px;
  left: -200px;
}

.light-2 {
  background: #00d4ff;
  bottom: -200px;
  right: -200px;
  animation-delay: 10s;
}

@keyframes float {
 0%, 100% { transform: translate(0, 0) scale(1); }
 33% { transform: translate(100px, -100px) scale(1.1); }
 66% { transform: translate(-50px, 100px) scale(0.9); }
}

/* Glass Card */
.glass-card {
  background: var(--bg-card);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow);
}

/* Animations */
.fade-in { animation: fadeIn 0.6s ease-out; }
.fade-up { animation: fadeUp 0.6s ease-out; }
.scale-in { animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes shake {
 0%, 100% { transform: translateX(0); }
 25% { transform: translateX(-10px); }
 75% { transform: translateX(10px); }
}

.shake { animation: shake 0.4s ease-in-out; }

/* Button Ripple */
.btn-primary, .btn-secondary {
  position: relative;
  overflow: hidden;
}

.btn-primary::after, .btn-secondary::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-primary:active::after, .btn-secondary:active::after {
  width: 300px;
  height: 300px;
}

/* Glow Hover */
.glow-hover {
  transition: all 0.3s ease;
}

.glow-hover:hover {
  box-shadow: 0 0 30px rgba(109, 93, 252, 0.4);
  transform: translateY(-2px);
}
