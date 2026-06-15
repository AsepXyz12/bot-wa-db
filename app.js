const CONFIG = {
  password: "AsepXTrinityV1",
  owner: "AsepXyz12", // ISI: username github lu
  repo: "bot-wa-db", // ISI: nama repo github lu
  branch: "main",
  databasePath: "database/database.json",
  title: "Database Manager",
  ownerName: "Asep",
  backgroundUrl: "",
  profilePicture: "",
  accentColor: "#6d5dfc"
};

const STORAGE_KEY = "db_manager_session";

class DatabaseManager {
  constructor() {
    this.data = null;
    this.settings = this.loadSettings();
    this.searchDebounce = null;
    this.init();
  }

  init() {
    this.createParticles();
    this.applySettings();
    this.checkSession();
    this.bindEvents();
  }

  buildRawUrl() {
    return `https://raw.githubusercontent.com/${CONFIG.owner}/${CONFIG.repo}/${CONFIG.branch}/${CONFIG.databasePath}`;
  }

  loadSettings() {
    const saved = localStorage.getItem('db_manager_settings');
    return saved? JSON.parse(saved) : {
      password: CONFIG.password,
      title: CONFIG.title,
      ownerName: CONFIG.ownerName,
      backgroundUrl: CONFIG.backgroundUrl,
      profilePicture: CONFIG.profilePicture,
      accentColor: CONFIG.accentColor
    };
  }

  saveSettings() {
    localStorage.setItem('db_manager_settings', JSON.stringify(this.settings));
  }

  applySettings() {
    document.documentElement.style.setProperty('--accent', this.settings.accentColor);
    document.getElementById('loginTitle').textContent = this.settings.title;
    document.getElementById('sidebarTitle').textContent = this.settings.title;
    document.getElementById('userName').textContent = this.settings.ownerName;

    if (this.settings.backgroundUrl) {
      document.querySelector('.bg-gradient').style.backgroundImage = `url(${this.settings.backgroundUrl})`;
    }

    if (this.settings.profilePicture) {
      document.getElementById('userAvatar').src = this.settings.profilePicture;
    } else {
      document.getElementById('userAvatar').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(this.settings.ownerName) + '&background=6d5dfc&color=fff';
    }

    document.getElementById('settingTitle').value = this.settings.title;
    document.getElementById('settingOwner').value = this.settings.ownerName;
    document.getElementById('settingBg').value = this.settings.backgroundUrl;
    document.getElementById('settingProfile').value = this.settings.profilePicture;
    document.getElementById('settingAccent').value = this.settings.accentColor;
  }

  createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (15 + Math.random() * 10) + 's';
      container.appendChild(particle);
    }
  }

  checkSession() {
    const session = localStorage.getItem(STORAGE_KEY);
    if (session) {
      const data = JSON.parse(session);
      if (data.password === this.settings.password) {
        this.showDashboard();
        return;
      }
    }
    this.showLogin();
  }

  bindEvents() {
    document.getElementById('loginForm').addEventListener('submit', (e) => this.handleLogin(e));
    document.getElementById('togglePassword').addEventListener('click', () => this.togglePassword());
    document.getElementById('logoutBtn').addEventListener('click', () => this.logout());
    document.getElementById('menuToggle').addEventListener('click', () => this.toggleSidebar());
    document.getElementById('closeSidebar').addEventListener('click', () => this.toggleSidebar());

    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => this.switchPage(e));
    });

    document.getElementById('loadBtn').addEventListener('click', () => this.loadDatabase());
    document.getElementById('refreshBtn').addEventListener('click', () => this.loadDatabase());
    document.getElementById('copyBtn').addEventListener('click', () => this.copyJSON());
    document.getElementById('downloadBtn').addEventListener('click', () => this.downloadJSON());
    document.getElementById('exportBtn').addEventListener('click', () => this.exportJSON());
    document.getElementById('importFile').addEventListener('change', (e) => this.importJSON(e));
    document.getElementById('expandBtn').addEventListener('click', () => this.expandJSON());
    document.getElementById('collapseBtn').addEventListener('click', () => this.collapseJSON());
    document.getElementById('saveSettings').addEventListener('click', () => this.saveSettingsForm());

    document.getElementById('searchInput').addEventListener('input', (e) => {
      clearTimeout(this.searchDebounce);
      this.searchDebounce = setTimeout(() => this.searchJSON(e.target.value), 300);
    });
  }

  async handleLogin(e) {
    e.preventDefault();
    const btn = document.getElementById('loginBtn');
    const input = document.getElementById('passwordInput');
    const remember = document.getElementById('rememberMe').checked;

    btn.classList.add('loading');
    btn.innerHTML = '<span>Memproses...</span><i class="fas fa-spinner fa-spin"></i>';

    await new Promise(r => setTimeout(r, 800));

    if (input.value === this.settings.password) {
      if (remember) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ password: input.value, time: Date.now() }));
      }
      this.showSuccess('Login berhasil!');
      setTimeout(() => this.showDashboard(), 1000);
    } else {
      document.querySelector('.login-card').classList.add('shake');
      setTimeout(() => document.querySelector('.login-card').classList.remove('shake'), 400);
      this.showError('Password salah!');
      btn.classList.remove('loading');
      btn.innerHTML = '<span>Masuk</span><i class="fas fa-arrow-right"></i>';
      input.value = '';
    }
  }

  togglePassword() {
    const input = document.getElementById('passwordInput');
    const icon = document.querySelector('#togglePassword i');
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
      input.type = 'password';
      icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
  }

  showLogin() {
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('dashboardPage').classList.add('hidden');
  }

  showDashboard() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dashboardPage').classList.remove('hidden');
    this.loadDatabase();
  }

  logout() {
    Swal.fire({
      title: 'Yakin logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(STORAGE_KEY);
        this.showLogin();
        this.showSuccess('Logout berhasil');
      }
    });
  }

  toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
  }

  switchPage(e) {
    e.preventDefault();
    const page = e.currentTarget.dataset.page;

    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    e.currentTarget.classList.add('active');

    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.getElementById(page + 'Section').classList.add('active');

    if (window.innerWidth < 768) this.toggleSidebar();
  }

  async loadDatabase() {
    this.showSpinner(true);
    document.getElementById('skeletonLoader').classList.remove('hidden');

    try {
      const url = this.buildRawUrl() + '?t=' + Date.now();
      const res = await fetch(url);
      if (!res.ok) throw new Error('Gagal fetch database');

      this.data = await res.json();
      this.renderJSON(this.data);
      this.updateStats();
      this.showSuccess('Database berhasil dimuat');
    } catch (err) {
      console.error(err);
      this.showError('Gagal load database: ' + err.message);
      document.getElementById('jsonViewer').innerHTML = '<code>Error: Tidak bisa load database.json</code>';
    } finally {
      this.showSpinner(false);
      document.getElementById('skeletonLoader').classList.add('hidden');
    }
  }

  renderJSON(obj, indent = 0) {
    const viewer = document.getElementById('jsonViewer');
    const html = this.syntaxHighlight(obj, indent);
    viewer.innerHTML = html;
  }

  syntaxHighlight(obj, indent = 0) {
    const space = ' '.repeat(indent * 2);
    if (obj === null) return `<span class="json-null">null</span>`;
    if (typeof obj === 'boolean') return `<span class="json-boolean">${obj}</span>`;
    if (typeof obj === 'number') return `<span class="json-number">${obj}</span>`;
    if (typeof obj === 'string') return `<span class="json-string">"${obj}"</span>`;

    if (Array.isArray(obj)) {
      if (obj.length === 0) return '[]';
      const items = obj.map(item => space + ' ' + this.syntaxHighlight(item, indent + 1)).join(',\n');
      return `[\n${items}\n${space}]`;
    }

    if (typeof obj === 'object') {
      const keys = Object.keys(obj);
      if (keys.length === 0) return '{}';
      const items = keys.map(key => {
        return `${space} <span class="json-key">"${key}"</span>: ${this.syntaxHighlight(obj[key], indent + 1)}`;
      }).join(',\n');
      return `{\n${items}\n${space}}`;
    }

    return String(obj);
  }

  updateStats() {
    if (!this.data) return;

    const stats = this.countStats(this.data);
    const jsonStr = JSON.stringify(this.data);

    document.getElementById('totalKeys').textContent = stats.keys;
    document.getElementById('totalObjects').textContent = stats.objects;
    document.getElementById('totalArrays').textContent = stats.arrays;
    document.getElementById('totalValues').textContent = stats.values;
    document.getElementById('fileSize').textContent = (new Blob([jsonStr]).size / 1024).toFixed(2) + ' KB';
    document.getElementById('lastRefresh').textContent = new Date().toLocaleTimeString('id-ID');
  }

  countStats(obj) {
    let keys = 0, objects = 0, arrays = 0, values = 0;

    const count = (o) => {
      if (o === null || typeof o!== 'object') {
        values++;
        return;
      }
      if (Array.isArray(o)) {
        arrays++;
        o.forEach(count);
      } else {
        objects++;
        keys += Object.keys(o).length;
        Object.values(o).forEach(count);
      }
    };

    count(obj);
    return { keys, objects, arrays, values };
  }

  copyJSON() {
    if (!this.data) return this.showWarning('Belum ada data');
    navigator.clipboard.writeText(JSON.stringify(this.data, null, 2));
    this.showSuccess('JSON berhasil disalin');
  }

  downloadJSON() {
    if (!this.data) return this.showWarning('Belum ada data');
    const blob = new Blob([JSON.stringify(this.data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'database.json';
    a.click();
    URL.revokeObjectURL(url);
    this.showSuccess('Download dimulai');
  }

  exportJSON() {
    this.downloadJSON();
  }

  importJSON(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        this.data = JSON.parse(ev.target.result);
        this.renderJSON(this.data);
        this.updateStats();
        this.showSuccess('JSON berhasil diimport');
      } catch {
        this.showError('File JSON tidak valid');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  expandJSON() {
    if (!this.data) return;
    this.renderJSON(this.data);
  }

  collapseJSON() {
    if (!this.data) return;
    const collapsed = Object.keys(this.data).length + ' keys...';
    document.getElementById('jsonViewer').innerHTML = `<code>${collapsed}</code>`;
  }

  searchJSON(query) {
    if (!query ||!this.data) return this.renderJSON(this.data);

    const results = this.searchInObject(this.data, query.toLowerCase());
    if (results) {
      this.renderJSON(results);
    } else {
      document.getElementById('jsonViewer').innerHTML = '<code>Tidak ditemukan</code>';
    }
  }

  searchInObject(obj, query) {
    if (typeof obj === 'string' && obj.toLowerCase().includes(query)) return obj;
    if (typeof obj === 'number' && String(obj).includes(query)) return obj;

    if (Array.isArray(obj)) {
      const filtered = obj.map(item => this.searchInObject(item, query)).filter(Boolean);
      return filtered.length? filtered : null;
    }

    if (typeof obj === 'object' && obj!== null) {
      const result = {};
      for (const [key, value] of Object.entries(obj)) {
        if (key.toLowerCase().includes(query)) {
          result[key] = value;
        } else {
          const filtered = this.searchInObject(value, query);
          if (filtered) result[key] = filtered;
        }
      }
      return Object.keys(result).length? result : null;
    }

    return null;
  }

  saveSettingsForm() {
    this.settings.title = document.getElementById('settingTitle').value;
    this.settings.ownerName = document.getElementById('settingOwner').value;
    const newPass = document.getElementById('settingPassword').value;
    if (newPass) this.settings.password = newPass;
    this.settings.backgroundUrl = document.getElementById('settingBg').value;
    this.settings.profilePicture = document.getElementById('settingProfile').value;
    this.settings.accentColor = document.getElementById('settingAccent').value;

    this.saveSettings();
    this.applySettings();
    this.showSuccess('Settings tersimpan');
  }

  showSpinner(show) {
    document.getElementById('spinnerLoader').classList.toggle('hidden',!show);
  }

  showSuccess(msg) {
    Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: msg, showConfirmButton: false, timer: 3000 });
  }

  showError(msg) {
    Swal.fire({ toast: true, position: 'top-end', icon: 'error', title: msg, showConfirmButton: false, timer: 3000 });
  }

  showWarning(msg) {
    Swal.fire({ toast: true, position: 'top-end', icon: 'warning', title: msg, showConfirmButton: false, timer: 3000 });
  }
}

new DatabaseManager();
