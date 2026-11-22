index.html                 accueil (liens vers v1 et v2)
README.md, GUIDE_GITHUB.md
v1/index.html              V1 stable, copie exacte, jamais modifiée
v2/index.html              page du jeu (interface HTML/CSS, importmap Three.js r128)
v2/js/main.js              chef d’orchestre : simulation → rendu → interface → son
v2/js/config.js            tous les réglages, personnage et qualité
v2/js/sim/game.js          LOGIQUE pure (voies, saut, glissade, obstacles, score, collisions)
v2/js/render/view.js       rendu 3D, caméra, qualité automatique
v2/js/render/character.js  personnage : silhouette provisoire + chargement futur (.glb/.fbx)
v2/js/world/savanna.js     environnement (piste, baobabs, acacias, cases, soleil)
v2/js/world/props.js       décors et obstacles
v2/js/ui/ui.js, input.js   écrans, score, toucher/clavier
v2/js/audio/sfx.js         sons synthétisés par code
v2/assets/README.md        mode d’emploi des ressources + registre des licences
