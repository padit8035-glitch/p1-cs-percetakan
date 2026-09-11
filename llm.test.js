const assert = require("node:assert");
const { test } = require("node:test");
global.window = {};
require("./knowledge.js");
require("./brain.js");
require("./llm.js");
test("prompt nempel harga + anti-ngarang", () => {
  const p = window.buildPrompt("stiker berapa?");
  assert.ok(p.includes("Rp15.000"));
  assert.ok(p.includes("Jangan karang harga"));
  assert.ok(p.includes("stiker berapa?"));
});
test("tanpa key fallback ke lokal", async () => {
  const out = await window.answerLLM("banner berapa?", "");
  assert.ok(out.includes("Rp25.000"));
});