# Guide GitHub depuis un téléphone

## 1. Préparer (une seule fois)
1. Sur github.com, crée un compte gratuit. Dans Chrome, active « Site pour ordinateur » (menu ⋮).
2. Crée un dépôt public nommé `kora-dash` (coche « Add a README file »).

## 2. Envoyer les fichiers (méthode sûre)
Pour CHAQUE fichier de la liste ci-dessous :
1. Dans le dépôt : **Add file → Create new file**.
2. Dans la case du nom, tape le **chemin complet** (par exemple `v2/js/sim/game.js`). Taper `/` crée les dossiers.
3. Ouvre le fichier téléchargé, copie tout son contenu et colle-le dans l’éditeur de GitHub.
4. **Commit changes**.

Astuce : une fois le chemin tapé, les fichiers suivants du même dossier sont plus rapides.
**Essai possible :** *Add file → Upload files*, puis sélection de plusieurs fichiers. Teste d’abord avec 2 fichiers : sur téléphone, les dossiers risquent d’être aplatis. Si les chemins sont faux, supprime et utilise la méthode sûre. GitHub n’ouvre pas les ZIP : un ZIP envoyé reste un ZIP.
Limites GitHub (navigateur) : 25 Mio par fichier, 100 fichiers à la fois.

## 3. Activer la page
**Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)` → Save.**
Attends environ une minute. Adresse du jeu : `https://TON-NOM.github.io/kora-dash/v2/` (V1 : `…/v1/`).

## 4. Si la page reste vide ou affiche « Chargement impossible »
- Vérifie qu’aucun fichier ne manque et que les noms et majuscules sont identiques.
- Recharge sans cache (actualiser plusieurs fois). Vérifie ta connexion Internet.
- Note le message d’erreur exact et envoie-le moi.

## 5. Correspondance « fichier téléchargé → chemin GitHub »

| Fichier téléchargé | Chemin à taper dans GitHub |
|---|---|
| `README.md` | `README.md` |
| `index.html` | `index.html` |
| `v1__index.html` | `v1/index.html` |
| `v2__assets__README.md` | `v2/assets/README.md` |
| `v2__index.html` | `v2/index.html` |
| `v2__js__audio__sfx.js` | `v2/js/audio/sfx.js` |
| `v2__js__config.js` | `v2/js/config.js` |
| `v2__js__main.js` | `v2/js/main.js` |
| `v2__js__render__character.js` | `v2/js/render/character.js` |
| `v2__js__render__view.js` | `v2/js/render/view.js` |
| `v2__js__sim__game.js` | `v2/js/sim/game.js` |
| `v2__js__ui__input.js` | `v2/js/ui/input.js` |
| `v2__js__ui__ui.js` | `v2/js/ui/ui.js` |
| `v2__js__world__props.js` | `v2/js/world/props.js` |
| `v2__js__world__savanna.js` | `v2/js/world/savanna.js` |
| `GUIDE_GITHUB.md` | (facultatif : ce guide, à la racine) `GUIDE_GITHUB.md` |
