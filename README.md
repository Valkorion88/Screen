# Screen

A live companion for Dungeon Masters. Screen helps a human DM in the moment at the table and quietly logs the session so the next game starts smarter. It never tries to be the DM.

This repo is an early prototype focused on the MVP: the **Panic Button** (fast, low-friction improvisation) plus **one-tap session logging** and an **auto-recap**.

## Design rule
Any live action must be usable in under ~3 seconds, without breaking eye contact with players.

## Prototype scope
- **Panic Button:** generate an instant NPC, three tavern rumors (one true, one false, one misleading), a quick shop, or a scene complication.
- **One-tap logging:** flag any generated beat (or a quick typed note) as Remember, Unresolved, or Callback.
- **Auto-recap:** turn the session log into a "Previously on..." recap you can copy for next time.
- **Local persistence:** the session log is saved in the browser (localStorage). No account, no server.

## Run it
No build step. Open `index.html` in any modern browser, or serve the folder:

```
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files
- `index.html` - app shell and layout
- `styles.css` - dark, table-friendly, large touch targets
- `data.js` - generator content tables (names, traits, rumors, shop items, complications)
- `app.js` - generators, session log, recap, persistence

## Roadmap (post-MVP)
- Context-aware generation (tie NPCs and rumors to the current location and campaign)
- Living campaign memory: NPC ledger, open plot threads, promises made
- Voice capture and auto-transcription of sessions
- Rules lookup and a combat / spotlight tracker

## Status
Prototype / proof of concept for testing the interaction. Generated content is original placeholder flavor, not official D&D material, and this project is not affiliated with Wizards of the Coast.
