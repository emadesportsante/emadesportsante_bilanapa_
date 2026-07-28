EMADE — Bilan de risque de chute
Déploiement sur Vercel (sans terminal, tout par le navigateur)
Étape 1 — Créer un compte GitHub (si tu n'en as pas)
Va sur https://github.com/signup
Crée un compte gratuit
Étape 2 — Créer un dépôt (repository)
Sur github.com, clique sur le bouton vert "New" (ou le "+" en haut à droite → "New repository")
Nom du dépôt : `emade-bilan-chute`
Laisse-le en Public (ou Private, peu importe pour Vercel)
Ne coche aucune case supplémentaire
Clique sur "Create repository"
Étape 3 — Uploader les fichiers
Sur la page du dépôt fraîchement créé, clique sur "uploading an existing file"
Glisse-dépose TOUT le contenu de ce dossier (garde la structure : `src/App.jsx`, `src/main.jsx`, `index.html`, `package.json`, `vite.config.js`, `.gitignore`)
En bas de page, clique sur "Commit changes"
Étape 4 — Connecter Vercel
Va sur https://vercel.com/signup
Choisis "Continue with GitHub" et autorise l'accès
Une fois sur ton tableau de bord Vercel, clique sur "Add New..." → "Project"
Sélectionne le dépôt `emade-bilan-chute` dans la liste, clique sur "Import"
Vercel détecte automatiquement que c'est un projet Vite — ne change rien aux réglages
Clique sur "Deploy"
Étape 5 — C'est en ligne
Après 1-2 minutes, Vercel te donne une URL du type `emade-bilan-chute.vercel.app`. Ton app est accessible publiquement.
Pour mettre à jour l'app plus tard
Tout changement de fichier sur GitHub (via l'upload ou en demandant à Claude de te régénérer les fichiers) redéploie automatiquement le site sur Vercel en quelques minutes — rien à refaire manuellement côté Vercel.
Modifier l'adresse email de réception des prospects
Dans `src/App.jsx`, cherche la ligne :
```js
const ADMIN_EMAIL = "emade.sportsante@gmail.com";
```
