(function () {
  const KNOWLEDGE = [
    { id: "banner", keywords: ["banner", "spanduk", "mm"], name: "Cetak Banner MM", price: "Rp25.000/m", desc: "Banner indoor/outdoor, finishing mata ayam", eta: "1-2 hari" },
    { id: "stiker", keywords: ["stiker", "sticker", "cutting"], name: "Cutting Stiker", price: "Rp15.000/A3+", desc: "Stiker vinyl + cutting custom (keahlian Arya)", eta: "1 hari" },
    { id: "brosur", keywords: ["brosur", "flyer", "pamflet"], name: "Brosur A5", price: "Rp1.500/lbr (min 100)", desc: "Art paper 150gsm full colour", eta: "2-3 hari" },
    { id: "kartu", keywords: ["kartu nama", "kartu", "id card"], name: "Kartu Nama", price: "Rp50.000/box (isi 100)", desc: "Art carton 260gsm + laminasi doff", eta: "1 hari" },
    { id: "jam", keywords: ["jam", "buka", "tutup", "lokasi", "alamat"], name: "Info Toko", price: "-", desc: "Senin-Sabtu 08.00-17.00, Minggu tutup", eta: "-" },
  ];
  const WA_FALLBACK = "Maaf, itu di luar daftar saya. Hubungi CS via WA 0812-0000-0000 untuk hitungan custom.";
  const root = typeof window !== "undefined" ? window : globalThis;
  root.KNOWLEDGE = KNOWLEDGE;
  root.WA_FALLBACK = WA_FALLBACK;
})();
