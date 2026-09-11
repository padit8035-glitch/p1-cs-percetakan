(function () {
  const root = typeof window !== "undefined" ? window : globalThis;
  root.answerLocal = function (query) {
    const q = (query || "").toLowerCase();
    if (!q.trim()) return root.WA_FALLBACK;
    const list = root.KNOWLEDGE || [];
    for (const item of list) {
      if (item.keywords.some((k) => q.includes(k))) {
        return `${item.name}\nHarga: ${item.price}\n${item.desc}\nEstimasi: ${item.eta}`;
      }
    }
    return root.WA_FALLBACK;
  };
})();