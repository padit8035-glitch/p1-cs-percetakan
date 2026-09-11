# AI CS Percetakan — oleh Arya (ex-operator cutting)
Saya operator mesin cutting pivot ke AI automation.

Masalah: CS percetakan ditanya harga berulang (banner, stiker, brosur).
Solusi: chatbot 2 mode — lokal (tanpa key) + LLM (dengan guardrail tabel harga).

Workflow: input -> cari keyword di knowledge.js -> ketemu? jawab harga : fallback WA.
Versi AI: input + tabel harga + "Jangan karang harga" -> LLM -> jawaban.

Cara coba: buka index.html, klik chip contoh, coba "bisa bikin pesawat?" (harus fallback WA).
Test: `node brain.test.js` (pass 4), `node llm.test.js` (pass 2).