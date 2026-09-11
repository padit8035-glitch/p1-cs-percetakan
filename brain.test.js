const assert = require("node:assert");
const { test } = require("node:test");
global.window = {};
require("./knowledge.js");
require("./brain.js");
test("jawab cutting stiker dengan harga", () => {
  const out = window.answerLocal("cutting stiker berapa?");
  assert.ok(out.includes("Rp15.000"));
});
test("jawab banner dengan harga", () => {
  const out = window.answerLocal("banner 2x1 berapa?");
  assert.ok(out.includes("Rp25.000"));
});
test("pertanyaan ngawur fallback ke WA", () => {
  const out = window.answerLocal("bisa bikin pesawat?");
  assert.ok(out.includes("WA"));
});test("jawab kartu nama dengan harga", () => {
  const out = window.answerLocal("kartu nama berapa?");
  assert.ok(out.includes("Rp50.000"));
});