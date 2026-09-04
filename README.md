# Screen

A live companion for Dungeon Masters. Screen helps a human DM in the moment at the table and quietly logs the session so the next game starts smarter. It never tries to be the DM.

This repo is an early prototype focused on the MVP: the **Panic Button** (fast, low-friction improvisation) plus **one-tap session logging** and an **auto-recap**.

## Design rule
Any live action must be usable in under ~3 seconds, without breaking eye contact with players.

## Prototype scope
- **Panic Button (five generators):**
  - **Instant NPC** - name, role, personality, voice cue, want, and secret.
  - **Tavern Rumors** - three rumors, one true, one false, one misleading (color-coded).
  - **Quick Shop** - a shopkeeper plus four randomly priced items.
  - **Instant Scene** - a location with sight, sound, smell, a notable feature, and a lurking danger. The "describe this room" button for places you didn't prep.
  - **Complication** - a scene twist to inject when things stall.
  - Every result has a **Reroll**.
- **One-tap logging:** flag any generated beat (or a quick typed note) as Remember, Unresolved, or Callback.
- **Auto-recap:** turn the session log into a "Previously on..." recap you can copy for next time.
- **Local persistence:** the session log is saved in the browser (localStorage). No account, no server.

## Run it locally
No build step. Open `index.html` in any modern browser, or serve the folder:

```
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying with GitHub Pages
This is a static site (a root `index.html`), so there is no build step and no workflow needed.

One-time setup in the repo: **Settings > Pages > Build and deployment > Source: "Deploy from a branch" > Branch: `main`, folder: `/ (root)` > Save.** Give it a minute to build, and the live URL will be:

```
https://valkorion88.github.io/Screen/
```

Every later push to `main` republishes automatically.

## Use it on mobile
The app is a mobile web app: `manifest.webmanifest` and the icon / meta tags let you **Add to Home Screen** for a full-screen, app-like launch (no browser chrome). Once Pages is live, open the URL above on your phone and:
- **iOS Safari:** Share > Add to Home Screen.
- **Android Chrome:** menu > Add to Home screen / Install app.

## Files
- `index.html` - app shell and layout
- `styles.css` - dark, table-friendly, large touch targets
- `data.js` - generator content tables (names, roles, traits, rumors, shop items, scenes, complications)
- `app.js` - generators, session log, recap, persistence
- `manifest.webmanifest`, `icon.svg` - mobile install / home-screen support

## Roadmap (post-MVP)
- Context-aware generation (tie NPCs, rumors, and scenes to the current location and campaign)
- Living campaign memory: NPC ledger, open plot threads, promises made
- Voice capture and auto-transcription of sessions
- Rules lookup and a combat / spotlight tracker

## Status
Prototype / proof of concept for testing the interaction. Generated content is original placeholder flavor, not official D&D material, and this project is not affiliated with Wizards of the Coast.
