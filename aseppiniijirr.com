<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Database Manager</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  
  <style>
    :root {
      --primary: #4361ee;
      --primary-dark: #3a56d4;
      --secondary-dark: white;
      --danger: #ef4444;
      --dark: #1e293b;
      --light: #f1f5f9;
      --gray: #64748b;
      --gray-light: #e2e8f0;
      --online-green: #38c172;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Poppins', sans-serif;
      background-color: var(--light);
      display: flex;
      justify-content: center;
      align-items: center; 
      min-height: 100vh;
      padding: 1rem;
    }

    .container {
      background-color: var(--secondary-dark);
      border-radius: 1.5rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      width: 90%;
      max-width: 600px;
      overflow: hidden;
      animation: fadeInUp 0.5s ease-out forwards;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-10px); }
      75% { transform: translateX(10px); }
    }

    .header-image-wrapper {
      position: relative;
      height: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-top-left-radius: 1.5rem;
      border-top-right-radius: 1.5rem;
    }

    .header-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.7);
    }

    .profile-info {
      position: relative;
      z-index: 10;
      text-align: center;
    }
    
    .profile-picture {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid white;
      box-shadow: 0 0 0 4px var(--primary), 0 0 15px rgba(67, 97, 238, 0.9);
      margin-bottom: 10px;
    }

    .profile-name {
      font-size: 1.25rem;
      font-weight: 600;
      color: white;
      margin-top: 5px;
    }
    
    .online-status {
      display: inline-block;
      padding: 3px 15px;
      background-color: var(--online-green);
      color: white;
      font-size: 0.8rem;
      font-weight: 500;
      border-radius: 20px;
      margin-top: 8px;
    }

    .content-area {
      padding: 2rem;
    }

    .main-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--dark);
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .form-group {
      margin-bottom: 1.25rem;
      position: relative;
    }

    .password-wrapper {
      position: relative;
    }

    .form-control {
      background-color: white;
      color: var(--dark);
      width: 100%;
      padding: 0.85rem 1rem 0.85rem 3rem;
      border: 1px solid var(--gray-light);
      border-radius: 0.75rem;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .form-control:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
    }

    .input-icon {
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
      color: var(--gray);
    }

    .toggle-password {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      color: var(--gray);
      cursor: pointer;
    }

    .btn {
      width: 100%;
      padding: 0.9rem;
      border-radius: 0.75rem;
      font-size: 1.05rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }

    .btn-primary {
      background-color: var(--primary);
      color: white;
      margin-bottom: 1rem;
    }

    .btn-primary:hover {
      background-color: var(--primary-dark);
    }

    .btn-secondary {
      background-color: var(--gray-light);
      color: var(--dark);
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: var(--gray);
    }

    .json-viewer {
      background: #1e293b;
      color: #e2e8f0;
      padding: 1.5rem;
      border-radius: 1rem;
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
      max-height: 400px;
      overflow: auto;
      margin-top: 1rem;
      display: none;
    }

    .action-buttons {
      display: none;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .action-buttons.show {
      display: flex;
    }

    .hidden { display: none !important; }

    @media (max-width: 768px) {
      .action-buttons { flex-direction: column; }
    }
  </style>
</head>
<body>
  <!-- Login Page -->
  <div class="container" id="loginPage">
    <div class="header-image-wrapper">
      <img src="https://files.catbox.moe/7gfnco.jpg" alt="Background" class="header-image">
      <div class="profile-info">
        <img src="https://files.catbox.moe/jolozc.jpg" alt="Profile" class="profile-picture" id="profilePic">
        <div class="profile-name" id="ownerName">Asep</div>
        <div class="online-status">ONLINE</div>
      </div>
    </div>
    
    <div class="content-area">
      <div class="main-title" id="title">Database Manager</div>

      <form class="login-form" id="loginForm">
        <div class="form-group">
          <div class="password-wrapper">
            <i class="fas fa-lock input-icon"></i>
            <input type="password" id="password" class="form-control" placeholder="Masukkan password" required>
            <i class="fas fa-eye toggle-password" id="togglePassword"></i>
          </div>
        </div>
        
        <label class="checkbox-label">
          <input type="checkbox" id="rememberMe"> Ingat sesi login
        </label>
        
        <button type="submit" class="btn btn-primary" id="loginBtn">
          <i class="fas fa-lock"></i>
          Login
        </button>
      </form>
    </div>
  </div>

  <!-- Dashboard Page -->
  <div class="container hidden" id="dashboardPage">
    <div class="header-image-wrapper" style="height: 180px;">
      <img src="https://files.catbox.moe/7gfnco.jpg" alt="Background" class="header-image">
      <div class="profile-info">
        <div class="profile-name" id="dashboardTitle">Database Manager</div>
      </div>
    </div>
    
    <div class="content-area">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h3 style="color: var(--dark);">Database Viewer</h3>
        <button class="btn btn-secondary" onclick="logout()" style="width: auto; padding: 0.6rem 1.2rem; font-size: 0.9rem;">
          <i class="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>

      <button class="btn btn-primary" onclick="loadDatabase()">
        <i class="fas fa-download"></i> Load ./database/database.json
      </button>

      <div class="action-buttons" id="actionButtons">
        <button class="btn btn-secondary" onclick="copyJSON()">
          <i class="fas fa-copy"></i> Copy
        </button>
        <button class="btn btn-secondary" onclick="downloadJSON()">
          <i class="fas fa-download"></i> Download
        </button>
      </div>

      <pre id="jsonViewer" class="json-viewer">Klik tombol di atas untuk load database</pre>
    </div>
  </div>

  <script>
    // CONFIG
    const CONFIG = {
      password: "AsepXTrinityV1",
      owner: "AsepXyz12",
      repo: "bot-wa-db",
      branch: "main",
      databasePath: "database/database.json",
      title: "Database Manager",
      ownerName: "Asep",
      profilePicture: "https://files.catbox.moe/jolozc.jpg"
    };

    const STORAGE_KEY = "db_manager_session";
    let databaseData = null;

    // Helper buat bikin URL raw github
    function buildRawUrl() {
      return `https://raw.githubusercontent.com/${CONFIG.owner}/${CONFIG.repo}/${CONFIG.branch}/${CONFIG.databasePath}`;
    }

    // Init
    function init() {
      document.getElementById('title').textContent = CONFIG.title;
      document.getElementById('dashboardTitle').textContent = CONFIG.title;
      document.getElementById('ownerName').textContent = CONFIG.ownerName;
      document.getElementById('profilePic').src = CONFIG.profilePicture;

      // Cek session
      const session = localStorage.getItem(STORAGE_KEY);
      if (session) {
        const data = JSON.parse(session);
        if (data.password === CONFIG.password) {
          showDashboard();
          return;
        }
      }
      showLogin();
    }

    function showLogin() {
      document.getElementById('loginPage').classList.remove('hidden');
      document.getElementById('dashboardPage').classList.add('hidden');
    }

    function showDashboard() {
      document.getElementById('loginPage').classList.add('hidden');
      document.getElementById('dashboardPage').classList.remove('hidden');
    }

    // Login
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('loginBtn');
      const input = document.getElementById('password');
      const remember = document.getElementById('rememberMe').checked;

      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
      btn.disabled = true;

      await new Promise(r => setTimeout(r, 600));

      if (input.value === CONFIG.password) {
        if (remember) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify({ password: input.value }));
        }
        Swal.fire({ icon: 'success', title: 'Login berhasil!', timer: 1500, showConfirmButton: false });
        setTimeout(showDashboard, 1000);
      } else {
        document.querySelector('#loginPage .container').style.animation = 'shake 0.4s';
        setTimeout(() => document.querySelector('#loginPage .container').style.animation = '', 400);
        Swal.fire({ icon: 'error', title: 'Password salah!', timer: 2000, showConfirmButton: false });
        btn.innerHTML = '<i class="fas fa-lock"></i> Login';
        btn.disabled = false;
        input.value = '';
      }
    });

    // Toggle password
    document.getElementById('togglePassword').addEventListener('click', function() {
      const password = document.getElementById('password');
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      this.classList.toggle('fa-eye');
      this.classList.toggle('fa-eye-slash');
    });

    // Load database dari ./database/database.json
    async function loadDatabase() {
      try {
        const url = buildRawUrl() + '?t=' + Date.now();
        const res = await fetch(url);
        if (!res.ok) throw new Error('File tidak ditemukan');
        
        databaseData = await res.json();
        document.getElementById('jsonViewer').textContent = JSON.stringify(databaseData, null, 2);
        document.getElementById('jsonViewer').style.display = 'block';
        document.getElementById('actionButtons').classList.add('show');
        
        Swal.fire({ icon: 'success', title: 'Database loaded!', timer: 1500, showConfirmButton: false });
      } catch (err) {
        Swal.fire({ icon: 'error', title: 'Error', text: err.message });
        document.getElementById('jsonViewer').textContent = 'Error: Pastikan file ./database/database.json ada di repo';
        document.getElementById('jsonViewer').style.display = 'block';
      }
    }

    // Copy JSON
    function copyJSON() {
      if (!databaseData) return Swal.fire({ icon: 'warning', title: 'Load database dulu' });
      navigator.clipboard.writeText(JSON.stringify(databaseData, null, 2));
      Swal.fire({ icon: 'success', title: 'JSON disalin!', timer: 1500, showConfirmButton: false });
    }

    // Download JSON
    function downloadJSON() {
      if (!databaseData) return Swal.fire({ icon: 'warning', title: 'Load database dulu' });
      const blob = new Blob([JSON.stringify(databaseData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'database.json';
      a.click();
      URL.revokeObjectURL(url);
    }

    // Logout
    function logout() {
      Swal.fire({
        title: 'Logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem(STORAGE_KEY);
          showLogin();
          document.getElementById('password').value = '';
          document.getElementById('jsonViewer').style.display = 'none';
          document.getElementById('actionButtons').classList.remove('show');
        }
      });
    }

    // Jalankan
    init();
  </script>
</body>
</html>
