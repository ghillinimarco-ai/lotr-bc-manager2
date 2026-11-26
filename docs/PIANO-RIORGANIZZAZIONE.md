# Piano di riorganizzazione — LOTR Battle Company Roster

## Stato di partenza

- Versione di riferimento: commit `fe2b8b9c4ab4cf27bee031590c6566dbdb2dbb0a` sul branch `main`.
- Pubblicazione GitHub Pages verificata dall'utente su smartphone.
- APK debug v46 installato e verificato dall'utente su Android.
- I workflow `.github/workflows/pages.yml` e `.github/workflows/build-apk.yml` sono già presenti e funzionanti.
- Il repository usa `www/` come cartella web e Capacitor con `webDir: "www"`; al momento non è necessario introdurre Vite.

## Obiettivi

1. Conservare il comportamento e l'aspetto attuale.
2. Rendere le modifiche localizzate e verificabili.
3. Mantenere compatibilità con i roster già salvati e con la chiave localStorage `lotr_bc_v2`.
4. Continuare a distribuire la web app e generare l'APK tramite GitHub Actions, senza toolchain locale sul PC.

## Rischi tecnici osservati

- `www/index.html` è un file HTML monolitico di circa 8,1 MB e 4.789 righe.
- Contiene CSS inline, dati applicativi, immagini SVG codificate in Base64, logica principale e numerose personalizzazioni/patch.
- Più patch avvolgono `window.render` e dipendono dall'ordine con cui vengono eseguite.
- Le funzionalità condividono variabili e funzioni globali/lessicali come `D`, `S`, `save`, `render` e `endBattle`.
- I roster sono persistiti in localStorage. L'uso di IndexedDB presente nel file riguarda il riferimento alla cartella di backup, non sostituisce lo storage dei roster.

## Strategia incrementale

### Fase 0 — Congelare la baseline
Non modificare direttamente `main`. Usare un branch di lavoro e mantenere il branch di backup `backup/versione-funzionante-2026-11-26`.

### Fase 1 — Separazione senza refactoring logico
Estrarre prima CSS, dati/immagini statiche e risorse in file esterni, preservando esattamente il loro ordine di caricamento. Nessuna modifica alle regole di gioco o ai dati.

### Fase 2 — JavaScript in script ordinati
Separare il core dalle personalizzazioni in file classici caricati nell'ordine originario. In questa fase non trasformare subito tutto in ES modules: le patch si appoggiano a binding globali e wrapper di `window.render`; cambiare il modello di scope richiede un passaggio dedicato.

### Fase 3 — Moduli funzionali
Dopo i test di regressione, estrarre progressivamente funzionalità autonome (audio, tutorial, battaglie/ferite, import-export, gestione foto, interfaccia), introducendo API esplicite e riducendo le dipendenze globali.

### Fase 4 — Storage e compatibilità
Valutare separatamente lo spostamento delle immagini utente da localStorage a IndexedDB. Prima introdurre migrazione, fallback ed export di sicurezza; non cambiare la struttura dei roster senza test sui dati esistenti.

### Fase 5 — Verifica e rilascio
Per ogni intervento: controlli statici, test delle funzionalità interessate, prova su GitHub Pages e build APK. Integrare in `main` solo dopo la verifica.

## Regola di rilascio

Il branch `main` resta la versione pubblicata e funzionante. Le prove e le modifiche strutturali avvengono sul branch `refactor/analisi-e-modularizzazione`; niente merge automatico senza verifica.
