# AI Customer Service — Printing Shop

[![test](https://github.com/padit8035-glitch/p1-cs-percetakan/actions/workflows/test.yml/badge.svg)](https://github.com/padit8035-glitch/p1-cs-percetakan/actions/workflows/test.yml) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A customer-service chatbot for a small printing business, built after running the cutting machine myself. Customers kept asking the same pricing questions, so the answers are now automated — with a hard rule that the bot never invents a price.

**No API key required.** The default mode is a local keyword matcher; an optional LLM mode is layered on top with the price list injected into the prompt.

## How it works

```
question -> keyword match against knowledge.js
              | hit  -> product name, price, spec, ETA
              | miss -> WhatsApp fallback (never a guess)
```

The LLM mode (`llm.js`) builds a prompt that contains the full price list plus an explicit *do not invent prices* instruction, and falls back to the local answer when no key is present.

## Files

| File | Role |
| --- | --- |
| `index.html` | Chat UI, no build step |
| `knowledge.js` | Price list: 5 products, keywords, spec, ETA |
| `brain.js` | Local matcher — keyword lookup, WhatsApp fallback |
| `llm.js` | Prompt builder + LLM path with local fallback |
| `brain.test.js`, `llm.test.js` | Tests (`node:test`) |

## Run

Open `index.html` in a browser. No server, no dependencies.

## Test

```bash
node brain.test.js   # 4 tests: price hits + fallback
node llm.test.js     # 2 tests: prompt contents + keyless fallback
```

Coverage includes the important case: an off-list question (`"bisa bikin pesawat?"`) must fall back to WhatsApp instead of producing a price.

## Notes

- Prices are illustrative sample data for the portfolio piece.
- Indonesian-language knowledge base, English UI scaffolding.

MIT licensed.
