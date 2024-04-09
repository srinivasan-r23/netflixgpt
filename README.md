#Manual Setup of this project#


npm init 
add scripts
remove main
install dep like react, react-dom
install dev dep like parcel, typescript, tailwindcss
npx tsc --init to generate the tsconfig.json file, add jsx: "react-jsx" and include: ['src']
generate main files like index.html, .tsx (make sure to create .tsx file). .css file
createRoot in the index.js and render the root html
add script tag proividing the src of index.tsx, and provide type as module.
npm start


## Tailwind Setup 
- follow the docs, install
- init the tailwind
- replace the config files
- create postcssrc
- paste the config
- index.css paste the derivatives


## React router
- import createBrowser router
- pass the array of element and path
- provide the above created object to RouterProvider and render the same in the app

