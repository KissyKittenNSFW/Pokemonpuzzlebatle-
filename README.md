# 🏆 Pokémon Unite Clone

Game MOBA 5v5 bertema Pokémon, dibuat dengan **HTML, CSS, dan JavaScript murni** (vanilla, tanpa framework atau library eksternal selain Google Fonts). Bisa langsung dimainkan di browser tanpa proses build apa pun.

![status](https://img.shields.io/badge/status-playable-brightgreen)
![tech](https://img.shields.io/badge/tech-HTML%2FCSS%2FJS-orange)
![license](https://img.shields.io/badge/license-MIT-blue)

## 🎮 Demo

Buka langsung file `index.html` di browser, atau mainkan via GitHub Pages (lihat bagian [Deploy](#-deploy-ke-github-pages) di bawah).

## ✨ Fitur

- Mode pertandingan **5v5** melawan bot dengan AI sederhana
- Pemilihan Pokémon (hero) dengan role berbeda: attacker, defender, dll
- Sistem **level up**, **skill/ability**, dan **Unite Move** (ultimate)
- **Aegis energy**, wild Pokémon, dan goal zone seperti game aslinya
- Efek visual: damage number, kill VFX, screen shake, combo counter, dan animasi serangan
- Minimap real-time, kill feed, dan HUD lengkap
- Kontrol joystick analog untuk mobile + dukungan keyboard untuk desktop
- Semua dalam **vanilla JS**, tanpa dependensi build tools

## 📁 Struktur Proyek

```
pokemon-unite-clone/
├── index.html      # Markup halaman & struktur UI (menu, layar game, HUD)
├── style.css       # Seluruh styling, animasi, dan tema visual
├── game.js         # Seluruh logika game: data hero, AI bot, fisika, render canvas
├── README.md        # Dokumentasi ini
├── LICENSE          # Lisensi MIT
└── .gitignore        # File/folder yang diabaikan git
```

## 🚀 Cara Menjalankan

### Opsi 1 — Buka langsung
Cukup double-click `index.html`, atau buka lewat browser:
```
file:///path/ke/folder/pokemon-unite-clone/index.html
```

### Opsi 2 — Local server (disarankan, agar font & asset lebih stabil)
```bash
# Python 3
python3 -m http.server 8000

# atau Node.js
npx serve .
```
Lalu buka `http://localhost:8000` di browser.

## 🕹️ Cara Bermain

1. Klik **PLAY** di menu utama
2. Pilih Pokémon yang ingin dimainkan
3. Gunakan joystick (mobile) atau tombol **WASD/arrow keys** (desktop) untuk bergerak
4. Tekan tombol skill 1, 2, 3 untuk menyerang/skill, dan tombol **Unite** saat energi penuh
5. Kumpulkan skor dari wild Pokémon lalu masukkan ke goal zone tim kamu
6. Tim dengan skor tertinggi saat waktu habis menang!

## 🌐 Deploy ke GitHub Pages

1. Push repo ini ke GitHub
2. Masuk ke **Settings → Pages**
3. Pilih branch `main` dan folder root (`/`)
4. Tunggu beberapa menit, game akan live di `https://<username>.github.io/<repo-name>/`

## 🛠️ Tech Stack

- HTML5 (Canvas API untuk rendering game)
- CSS3 (animasi, gradient, responsive layout)
- JavaScript ES6+ (vanilla, tanpa framework)
- Font: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) via Google Fonts

## 📝 Catatan

Ini adalah proyek **fan-made / non-komersial** yang dibuat untuk tujuan belajar dan hiburan. Pokémon dan Pokémon UNITE adalah merek dagang milik **Nintendo, Game Freak, dan The Pokémon Company**. Proyek ini tidak berafiliasi atau didukung oleh pihak-pihak tersebut.

## 📄 Lisensi

Kode sumber proyek ini dirilis di bawah lisensi [MIT](LICENSE). Aset/nama Pokémon tetap menjadi hak cipta pemiliknya masing-masing.

---

Dibuat dengan ❤️ menggunakan Claude.
