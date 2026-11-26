# Analisi tecnica — LOTR Battle Company Roster

## Baseline verificata

- Repository: `ghillinimarco-ai/lotr-bc-manager2`
- Commit di riferimento: `fe2b8b9c4ab4cf27bee031590c6566dbdb2dbb0a`
- Blob SHA-1 di `www/index.html`: `cc46ead62f265e71e5ea4c9117c9bc06e56e237f`
- La copia locale fornita per l'analisi ha lo stesso SHA Git del file nel repository.
- Dimensione HTML: circa 8,1 MB; 4.789 righe.

## Struttura rilevata

- Un documento HTML principale: `www/index.html`.
- Otto blocchi CSS statici inline nella sezione head.
- Quattro blocchi script inline:
  1. registrazione del service worker limitata all'host GitHub Pages;
  2. gestione del video introduttivo;
  3. core applicativo, dati incorporati e patch;
  4. gestione della musica di sottofondo.
- Il grande script centrale include il database statico delle armate, immagini SVG incorporate come Data URI e la logica applicativa.
- Sono presenti stili creati dinamicamente dal JavaScript: non vanno confusi con gli otto blocchi statici.

## Dati e persistenza

- Archivio principale dei roster: `localStorage["lotr_bc_v2"]`.
- Chiave legacy consultata in fallback: `localStorage["lotr_bc_v1"]`.
- IndexedDB contiene il database `roster-fs`, usato dalla gestione del riferimento alla cartella di backup. Non è il database principale dei roster.
- Non cambiare chiavi, schema dei roster o logica di import/export durante la separazione del CSS.

## Risorse del repository

- `www/intro.mp4`: video introduttivo.
- `www/manifest.webmanifest`: manifest PWA.
- `www/sw.js`: service worker.
- `www/music/Brano (1).mp3`, `Brano (2).mp3`, `Brano (3).mp3`: musica.
- `icon-only.png`: sorgente icona usata dai workflow per generare icone web e Android.
- Le immagini SVG BENE, MALE e LUPO sono incorporate nell'HTML come Data URI.
- `www/music/test.txt` è presente nella cartella delle risorse e va valutato per una futura pulizia, non eliminato durante questo intervento.

## Dipendenze e rischi di refactoring

- Il codice è organizzato in un core e in blocchi patch/custom con ordine di esecuzione significativo.
- Numerose patch avvolgono o sostituiscono `window.render` e altre funzioni globali.
- Non convertire il JavaScript a ES modules e non riordinare gli script nella prima fase.
- Mantenere `www/` come `webDir` di Capacitor: i workflow esistenti già lavorano con questa struttura.
- Non introdurre Vite soltanto per separare i file statici.

## Strategia di primo intervento

1. Separare gli otto blocchi CSS statici in `www/styles.css`, conservando l'ordine originale.
2. Sostituire gli otto blocchi nel documento con un singolo riferimento relativo a `styles.css`.
3. Lasciare gli stili creati dinamicamente dal JavaScript accanto alle rispettive funzionalità.
4. Verificare che il documento sia identico al precedente al netto dei blocchi CSS estratti e del nuovo link.
5. Eseguire i workflow su un branch isolato e provare web e APK prima di integrare in `main`.

## Regola di rilascio

- `main` resta la versione pubblicata e funzionante.
- Il branch `refactor/analisi-e-modularizzazione` è il laboratorio per i cambiamenti.
- Nessun merge automatico senza verifica funzionale di entrambe le versioni.
