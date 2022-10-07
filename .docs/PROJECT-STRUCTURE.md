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
│   │   ├── components/ #local components (used by PageName1 page only)
│   │   │   ├── LocalComponent1/
│   │   │   │   ├── LocalComponent1.tsx #component file names are in PascalCase
│   │   │   │   ├── local-component.module.scss #SCSS file names are in kebab-case
│   │   │   │   └── index.ts #re-exports the React component from LocalComponent.tsx
│   │   │   └── LocalComponent2/
│   │   ├── page-name1.module.scss #this single SCSS file is used by all local components in the page
│   │   ├── PageName1.tsx #PageName1 component
│   │   ├── index.pg.ts #re-exports PageName1 component as a "default export"
│   │   └── hooks/ #contains local custom hooks (used by PageName1 page only)
│   ├── page-name2/
│   ├── _app.pg.ts #walking-pal-web's root App component
│   ├── _document.pg.ts #ref- https://nextjs.org/docs/advanced-features/custom-document
│   ├── _global.scsss #contains global styles. (Rarely used)
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

**Credits**: This ASCII tree was generated using [tree.nathanfriend.io](<https://tree.nathanfriend.io/?s=(%27options!(%27fancy!true~fullPath!false~trailingSlash!true~rootDot!true)~source!(%27source!%27.docs5markdownOile7and%20%5Bo%20writ8th8%5EationOilesQassetsV%5Bhroughout%20%40*gif*6some-gif.gif5gif%2C%20png%2C%20svg%20name7must%20b8in%20kebab-case*6%5DK5import7all%20th8gifOile7in%20th8%60gif%2F%60%20directory%20and%3D7them*6...%7Bother%20gifs%7D*png*svgQc3sVgHF%24*GHC31*6GHC3%2B6gH-c31Z*%25GHC31Kx%20%7Balong%20with%20any%20other%20accompanied%3Ds%7D*6c3UtilityK5utilityOunction%209th8GHC31%20ReactF%20*GHC32%2FQhooksVgH%3C%24%5C%5C*useWindowResizeKQpages*apiVNextj7APIXs*6route1Vroute1X*66%5D%7Froute1X%20logic*6q79endpoints*6%5D%7Froot%20%7B%2F%7DX%20handler*%3E1*FsVlocalF%26%5C%5C*6%3F1*66%3F%2B66local-c3Z*6%25%3FKx*6%3F2%2F*%20%3E1%7Cthi7singl8SCSSOil8i79all%20localF7in%20th8page*%20MKx5MF*%20%5D.pgJMF%20a7a%20%5C%27default%3D%5C%27*%20hooksVcontain7local%3C%26*%3E2%2F*_app%7F%40%227root%20AppF*_%5E%7Fref-%20https%3A%2F%2Fnextjs.org%2Fdocs%2Fadvanced-features%2Fcustom-%5E*_gH.scsss5contain7gH%20styles.%20%7BRarely%20used%7D*404%7Fcustom%20404%20error%20pageQpublicVdo%20not%20add%20or%20edit%20anyOile7insid8thisQtheme*%3B5Them8ProviderF*themeK5generate7theme7forFs.%20StrictlyOollow%20STYLE-GUIDE.md%20when%20editing%20this*%5DJeverythingOrom%20%3BQtypesVgH%20TypeScript%20typesQqsQ.gitignoreQpackage.json%27)~version!%271%27)*Q63omponent5%20%236%20%207s%208e%209used%20by%20BOil8name7ar8in%20F%20c3HlobalJK5re-export7K.tsMPageName1O%20fQ%5CnV%2F5X%20endpointZ%7CSCSSBkebab-casequtilsVmiscellaneou7utilitie%247%7B9mor8than%20on8page%7D%256%5DJth8ReactFOrom%20%267%7B9M%20pag8only%7D%2B1Kx5c3BPascalCase*%3BWPThemeProviderKx%3C%20custom%20hook%3D%20export%3Epage-name%3FLocalC3%40walking-pal-web%5Basset7used%20t%5Dindex%5Edocument%7C.module.scss5%7F.pgK5%01%7F%7C%5E%5D%5B%40%3F%3E%3D%3C%3B%2B%26%25%24qZXVQOMKJHFB987653*>)
