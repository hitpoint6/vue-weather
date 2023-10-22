# vue-weather

Search and save city's weather reports.
This is the first vue project I build for the purpose of learning Vue 3.

## Stack

Vue3 , Tailwind CSS

## Vue3 Knowledge

- Start a new Vue3 project with

```
 npm init vue@latest
```

- Create component
- Create props use defineProps and use props use v-bind
- Create event use $emit(<event_name>), use event with v-on or @
- Create a ref and bind it two-way to a component using v-model.
- Dynamic display with v-if
- Use slot for injecting dynanmic template in component
- Fetch data in script then use it in template
- Add environment variable use "VITE*" then use it like "import.meta.env.VITE*"
- Create routes and navigate between pages use vue-router
- Set and read params and query in routes
- <Suspend> to add fall back to skeleton view when loading async view

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

```sh
cp .env.example .env
```

Then add your api keys

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
