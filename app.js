const CONFIG = {
  password: "AsepXTrinityV1", // password khusus buyer
  owner: "AsepXyz12",
  repo: "bot-wa-db", 
  branch: "main",
  databasePath: "database/database.json"
};

const STORAGE_KEY = "buyer_session";

class BuyerApp {
  constructor() {
    this.checkSession();
    this.bindEvents();
  }

  checkSession() {
    const session = localStorage.getItem(STORAGE_KEY);
    if (session) {
      this.showAddPage();
    } else {
      this.showLogin();
    }
  }

  bindEvents() {
    document.getElementById('loginForm')?.addEventListener('submit', (e) => this.login(e));
    document.getElementById('addForm')?.addEventListener('submit', (e) => this.addNumber(e));
    document.getElementById('logoutBtn')?.addEventListener('click', () => this.logout());
  }

  login(e) {
    e.preventDefault();
    const pass = document.getElementById('passwordInput').value;
    
    if (pass === CONFIG.password) {
      localStorage.setItem(STORAGE_KEY, 'true');
      this.showSuccess('Login berhasil');
      setTimeout(() => this.showAddPage(), 800);
    } else {
      this.showError('Password salah bro');
      document.querySelector('.login-card').classList.add('shake');
      setTimeout(() => document.querySelector('.login-card').classList.remove('shake'), 400);
    }
  }

  showLogin() {
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('addPage').classList.add('hidden');
  }

  showAddPage() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('addPage').classList.remove('hidden');
  }

  logout() {
    localStorage.removeItem(STORAGE_KEY);
    this.showLogin();
  }

  async addNumber(e) {
    e.preventDefault();
    const number = document.getElementById('waNumber').value.trim();
    const name = document.getElementById('waName').value.trim();

    if (!number.startsWith('62')) {
      return this.showError('Nomor harus diawali 62');
    }

    // Karena GitHub Pages read-only, kita pake 2 opsi:
    // Opsi A: Kirim ke webhook lu / bot WA lu
    // Opsi B: Download JSON editan buat lu upload manual

    const newEntry = {
      number: number,
      name: name,
      added_at: new Date().toISOString(),
      status: "active"
    };

    // Download file JSON buat lu
    const blob = new Blob([JSON.stringify(newEntry, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `add_${number}.json`;
    a.click();

    this.showSuccess(`Nomor ${number} siap. File JSON udah ke-download. Kirim ke owner buat di-merge`);
    
    document.getElementById('addForm').reset();
  }

  showSuccess(msg) {
    Swal.fire({icon: 'success', title: msg, timer: 2000, showConfirmButton: false});
  }
  showError(msg) {
    Swal.fire({icon: 'error', title: msg, timer: 2000, showConfirmButton: false});
  }
}

new BuyerApp();
