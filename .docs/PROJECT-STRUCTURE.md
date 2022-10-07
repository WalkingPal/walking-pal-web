# Project File Structure

This ASCII tree represents the project structure. Read through the comments to learn more about the walking-pal-web repo.

```sh
.
├── .docs #markdown files and assets used to write the documentation files
├── assets/ #assets used throughout walking-pal-web
│   ├── gif/
│   │   ├── some-gif.gif #gif, png, svg names must be in kebab-case
│   │   ├── index.ts #imports all the gif files in the `gif/` directory and exports them
│   │   └── ...(other gifs)
│   ├── png
│   └── svg
├── components/ #global components (used by more than one page)
│   ├── GlobalComponent1/
│   │   ├── GlobalComponent1.tsx #component file names are in PascalCase
│   │   ├── global-component1.module.scss #SCSS file names are in kebab-case
│   │   ├── index.ts #re-exports the React component from GlobalComponent1.tsx (along with any other accompanied exports)
│   │   └── componentUtility.ts #utility function used by the GlobalComponent1 React component
│   └── GlobalComponent2/
├── hooks/ #global custom hooks (used by more than one page)
│   └── useWindowResize.ts
├── pages/
│   ├── api/ #Nextjs API endpoints
│   │   ├── route1/ #route1 endpoint
│   │   │   └── index.pg.ts #route1 endpoint logic
│   │   ├── utils/ #miscellaneous utilities used by endpoints
│   │   └── index.pg.ts #root (/) endpoint handler
│   ├── page-name1/
│   │   ├── components/ #local components (used inside page-name1/ only)
│   │   │   ├── LocalComponent1/
│   │   │   │   ├── LocalComponent1.tsx #component file names are in PascalCase
│   │   │   │   ├── local-component.module.scss #SCSS file names are in kebab-case
│   │   │   │   └── index.ts #re-exports the React component from LocalComponent.tsx
│   │   │   └── LocalComponent2/
│   │   ├── page-name1.module.scss #this single SCSS file is used by all the local components in page-name1/
│   │   ├── PageName1.tsx #page-name1/ component
│   │   ├── index.pg.ts #re-exports page-name1/ component (PageName1.tsx) as a "default export"
│   │   └── hooks/ #local custom hooks (used by page-name1/ only)
│   ├── page-name2/
│   ├── _app.pg.ts #walking-pal-web's root App component
│   ├── _document.pg.ts #ref- https://nextjs.org/docs/advanced-features/custom-document
│   ├── _global.scsss #rarely used global styles
│   └── 404.pg.ts #custom 404 error page
├── public/ #do not add or edit any files inside this
├── theme/
│   ├── WPThemeProvider.tsx #Theme Provider component
│   ├── theme.ts #generates themes for components. Strictly follow STYLE-GUIDE.md when editing this
│   └── index.ts #re-exports everything from WPThemeProvider.tsx
├── types/ #global TypeScript types
├── utils/ #miscellaneous utilities
├── .gitignore
└── package.json
```

**Credits**: This ASCII tree was generated using [tree.nathanfriend.io](<https://tree.nathanfriend.io/?s=(%27options!(%27fancy!true~fullPath!false~trailingSlash!true~rootDot!true)~source!(%27source!%27.doc37all%20markdowKfile3and%20%7Fto%20writ8th8%7CatioKfiles.QassetsB7%7FiKth8WebAppVgif*6some-gif.gif%20%23All%20gif%2C%20png%2C%20svg%20name3musMb8%25%3FFThi3import3all%20th8gifZile3iKth8%60gif%2F%60%20directory%20and%20%3C3them.%20*6...%7Botheqgifs%7D*png*svgQc5sB7gH%20c5%26GHC51*6GHC51%2BC5Zile3ar8%5EgH-c51XSCSSZile3ar8%25%3FFJGHC51.tsx%20%7Balong%20with%20any%20otheqaccompanied%20%3Cs%7D*6c5UtilityFthi3mighMhav8any%20utilityZunctioK9th8GHC51%20ReacMC5%20*GHC52%2FQhooksB7gH%3E%26useWindowResize.tsQpages*apiB7ouqNextj3api%3BtsV6route1B%23thi3i3route1%3BtV66%3F.pgFroute1%3BMlogic*6%24e39endpoints*6%3F.pg.t37rooM%7B%2F%7D%3BMhandler*%401*%20c5sB7local%20c5%3DV6%5B1*66%5B1%2BC5Zil8nam8i3%5E6local-c5XSCSSZil8nam8i3%256%3FFJ%5B.tsx*6%5B2%2F*%20%401Xthi3singl8scs3fil8i39all%20local%20c53iKth8Page*%20PageName1%2BContain3th8OC5*%20%3F.pgFre-%3C3OC5%20a3a%20%5C%27defaulM%3C%5C%27*%20hooksB7local%3E%3D*%402%2F*_app.pg.t37WebApp%223rooMApp%20c5*_%7C.pgFref-%20https%3A%2F%2Fnextjs.org%2Fdocs%2Fadvanced-features%2Fcustom-%7C*_gH.scss37gH%20styles.%20%7BRarely%20used%7D*404.pgFouqcustom%20404%20erroqpageQpublicB%23Do%20noMpuMoqediManyZile3insid8thisQtheme*%5D%2BouqThem8Provideqc5*themeFgenerate3ouqtheme3foqc5s.%20StrictlyZollow%20STYLE-GUIDE.md%20wheKediting%20this.*%3FFre-%3C3everythingZrom%20%5D.tsxQtypesB%23contian3gH%20TypeScripMtypesQ%24iesQ.gitignoreQpackage.json%27)~version!%271%27)*Q63s%205omponent6%20%207%23contain38e%209used%20by%20B%2F%20F.t3%23HlobalJthi3fil8re-%3C3th8ReacMC5Zrom%20Kn%20Mt%20OPageName1%20Q%5CnV%5C%5C*X.module.scs3%23Z%20fqr%20%24utilsB%23miscellaneou3utilit%25iKkebab-case*6%263%7B9mor8thaKon8pages%7DV%2B.tsx%20%23%3B%20endpoin%3Cexport%3D3%7B9Opag8only%7D%3E%20custom%20hook%3Findex%40page-name%5BLocalC5%5DWPThemeProvider%5EiKPascalCase*6%7Cdocument%7Fasset3used%20%01%7F%7C%5E%5D%5B%40%3F%3E%3D%3C%3B%2B%26%25%24qZXVQOMKJHFB987653*>)
