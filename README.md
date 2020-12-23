# svelte-typescript

npx degit sveltejs/template svelte-typescript-app
cd svelte-typescript-app
node scripts/setupTypeScript.js

npm install --save-dev @rollup/plugin-typescript @tsconfig/svelte typescript svelte-preprocess svelte-check

## rollup.comfig

- import autoPreprocess from 'svelte-preprocess';
- import typescript from '@rollup/plugin-typescript';

export default {
...,
plugins: [
svelte({

-       preprocess: autoPreprocess()
  }),
- typescript({ sourceMap: !production })
  ]
  }

## tsconfig

{
"extends": "@tsconfig/svelte/tsconfig.json",

"include": ["src/**/*", "src/node_modules"],
"exclude": ["node_modules/*", "__sapper__/*", "public/*"],
}

npm run dev
