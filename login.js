// login.js
document.addEventListener("DOMContentLoaded", () => {
  const backdrop = document.getElementById("loginBackdrop");
  const userEl = document.getElementById("loginUser");
  const passEl = document.getElementById("loginPass");
  const errEl = document.getElementById("loginError");
  const btnCancel = document.getElementById("loginCancel");
  const btnSubmit = document.getElementById("loginSubmit");
  const titleEl = document.getElementById("loginTitle");
  let pendingClick = null;
  let requiredPass = "1"; // default
  const requiredUser = "ppic"; // username sama untuk semua

  // tampilkan modal login
  function showLogin(targetCard, passNeeded, title = "Masuk Akses Sistem") {
    pendingClick = targetCard;
    requiredPass = passNeeded;
    if (titleEl) titleEl.textContent = title;
    backdrop.classList.add("show");
    userEl.value = "";
    passEl.value = "";
    errEl.style.display = "none";
    userEl.focus();
  }

  // sembunyikan modal
  function hideLogin() {
    backdrop.classList.remove("show");
    pendingClick = null;
  }

  // proses login
  function tryLogin() {
    const u = userEl.value.trim();
    const p = passEl.value.trim();

    if (u === requiredUser && p === requiredPass) {
      const target = pendingClick;
      const onclickCode = target ? target.dataset.onclickBackup : null;
      hideLogin();

      // langsung jalankan onclick card
      if (onclickCode) {
        new Function(onclickCode)();
      }
    } else {
      errEl.style.display = "block";
    }
  }

  // pasang proteksi ke setiap card
  document.querySelectorAll(".card-hover").forEach(card => {
    const onclickCode = card.getAttribute("onclick") || "";
    const lower = onclickCode.toLowerCase();

    // abaikan card yang bebas login
    if (
      lower.includes("showwkbkode") ||      // WKB KODE
      lower.includes("showmonitoring") || // MONITORING
      lower.includes("https://ppicwkb.github.io/wkbkode/") 
      
    ) return;

    // simpan onclick asli dan hapus supaya tidak langsung jalan
    card.dataset.onclickBackup = onclickCode;
    card.removeAttribute("onclick");

    card.addEventListener("click", e => {
      e.preventDefault();
      e.stopImmediatePropagation();

      // pilih password sesuai card
      let passNeeded = "4";
      let title = "Masuk Akses Sistem";

      if (lower.includes("showorderoptions")) {
        passNeeded = "4";
        title = "Login Akses ORDER";
      } else if (lower.includes("showstokoptions")) {
        passNeeded = "4";
        title = "Login Akses STOK";
      } else if (lower.includes("showcsoptions")) {
        passNeeded = "4";
        title = "Login Akses STOK CS";
      }

      showLogin(card, passNeeded, title);
    });
  });

  // tombol dan input
  btnCancel.addEventListener("click", hideLogin);
  btnSubmit.addEventListener("click", tryLogin);

  [userEl, passEl].forEach(inp =>
    inp.addEventListener("keydown", e => {
      if (e.key === "Enter") tryLogin();
      if (e.key === "Escape") hideLogin();
    })
  );

  backdrop.addEventListener("click", e => {
    if (e.target === backdrop) hideLogin();
  });
});







