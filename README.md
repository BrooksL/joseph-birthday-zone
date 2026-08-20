# Joseph's Birthday Zone

A joke 40th birthday site for Joseph Barbier. Two deliberately-awful retro modes with a
button to travel between them:

- **1999** — GeoCities/MySpace shrine. Marquees, blink, Comic Sans, a "MIDI" player that is
  really Web Audio square waves, sparkle cursor trail, party mode, guestbook.
- **1986** — The Chicken Coop BBS, on a beige CRT. Green phosphor, scanlines, ASCII portrait.

The badness is the point. Do not clean it up, modernize the palette, or apply a design system.
Comic Sans stays.

## Running it

Static files, no build step, no dependencies:

```
python3 -m http.server 8000
```

## Updating the guestbook

Everything you need is in **`guestbook.js`** — it is the only file that changes.

1. Drop new card images in `assets/cards/`
2. Edit the `window.GUESTBOOK_ENTRIES` array
3. Commit and push — GitHub Pages redeploys automatically

Downscale new cards to roughly 560px wide before committing.

## Notes

- The site carries `<meta name="robots" content="noindex, nofollow">`. **Do not add a
  `robots.txt`** — a page blocked from crawling never gets read, so the `noindex` would never
  be seen and the URL could still end up indexed.
- `.nojekyll` stops GitHub Pages running the files through Jekyll.
- Recreated from the design handoff at `../design_handoff_birthday_site`. The ASCII art is
  52×26 and its whitespace is load-bearing; don't let an editor reformat it.
