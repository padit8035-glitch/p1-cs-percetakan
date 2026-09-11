(function () {
  const root = typeof window !== "undefined" ? window : globalThis;
  root.buildPrompt = function (query) {
    const ctx = (root.KNOWLEDGE || []).map(k => `- ${k.name}: ${k.price}, ${k.desc}`).join("\n");
    return `Kamu CS percetakan. Jawab HANYA dari DAFTAR ini:\n${ctx}\nAturan: Jangan karang harga. Kalau tidak ada di daftar, jawab persis: ${root.WA_FALLBACK}\nPertanyaan: ${query}`;
  };
  root.answerLLM = async function (query, apiKey) {
    if (!apiKey) return root.answerLocal(query);
    return root.answerLocal(query) + "\n\n(catatan: mode AI butuh key, ini fallback lokal)";
  };
})();