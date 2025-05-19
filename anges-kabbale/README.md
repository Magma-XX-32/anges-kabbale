
# 🌟 Explorateur des 72 Anges – App React + Tailwind

Une application interactive pour explorer les 72 Anges de la Kabbale selon la tradition de **Kabaleb**, enrichie de dimensions ésotériques (Aboulafia, Ifá, Sceaux, etc.)

---

## ✨ Fonctionnalités

- 🔍 **Recherche dynamique** par nom
- 🎚️ **Filtres** par sphère et vertu
- 📆 **Périodes d’influence précises** avec durée en jours
- ✡️ **Nom hébreu** (forme consonantique & vocalisée)
- 🔄 **Permutation Aboulafia**
- 🧿 **Itone Ifá** associé à chaque ange
- 🧬 **Verset biblique** & hiérarchie céleste
- 🪬 **Affichage des sceaux**
- 🎨 UI stylisée avec **TailwindCSS**

---

## 📁 Données utilisées

Fichier JSON :  
`/public/anges_01_72_complet_kabaleb_dates_fixes.json`

Chaque entrée contient :

```json
{
  "numéro": 1,
  "nom": "Vehuiah",
  "nom_hebreu_consonnes": "והוי",
  "nom_hebreu_avec_voyelles": "וָהוּי",
  "hiérarchie": "Séraphins",
  "sphère": "Kether",
  "élément": "Feu",
  "dates_influence": "21 Mar – 23 Mar",
  "duree_jours": 2.5,
  "vertus": ["Inspiration", "Guérison"],
  "verset": "Psaume 1, verset 1",
  "sceau": "/seals/seal_01.png",
  "permutation_aboulafia": "haiuhev-א",
  "itone_ifa": "Eji Ogbe"
}
```

---

## 🔤 Typographie hébraïque

Ajoutez cette ligne dans `public/index.html` :

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew&display=swap" rel="stylesheet">
```

Puis dans `App.css` :

```css
.font-hebrew {
  font-family: 'Noto Sans Hebrew', sans-serif;
  direction: rtl;
}
```

---

## 🚀 Déploiement

Déployé automatiquement sur [Vercel](https://vercel.com)

---

## 🛠️ En cours…

- Intégration audio 🎧 pour l’écoute des noms hébraïques
- Vue temporelle : filtre par date courante
- Export PDF / SVG des sceaux

---

## 🧙‍♂️ Auteur

Prototype conçu par **MAGMA-XX-32** avec l’assistance de l’archétype G3P3T0,  
au croisement de la Kabbale, de l’Ifá, et des données.

---
