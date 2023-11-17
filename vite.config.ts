import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import autoImport from "unplugin-auto-import/vite"
import components from "unplugin-vue-components/vite"
import eslint from "vite-plugin-eslint"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ig-planner/",
  plugins: [
    vue(),
    eslint(),
    autoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],

      // global imports to register
      imports: [
        // presets
        "vue",
        "vue-router",
        "pinia",
        // custom
        {
          "vuetify": [
              "useTheme"
          ]
        },
        {
          "@vueuse/core": [
            // named imports
            // 'useMouse', // import { useMouse } from '@vueuse/core',
            // alias
            // ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          axios: [
            // default imports
            ["default", "axios"], // import { default as axios } from 'axios',
          ],
        },
        // example type import
        {
          from: "vue",
          imports: ["App"],
          type: true,
        },
      ],
      // Enable auto import by filename for default module exports under directories
      defaultExportByFilename: false,

      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: [
        "./src/core/**",
        "./src/stores/**",
        "./src/utils/**",
        //
        // './composables' // only root modules
        // './composables/**', // all nested modules
        // ...
      ],

      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: "./src/types/auto-imports.d.ts",

      // Cache the result of resolving, across multiple vite builds.
      // A custom path is supported.
      // When set to `true`, the cache will be stored in `node_modules/.cache/unplugin-auto-import.json`.
      cache: false,

      // Auto import inside Vue template
      // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
      vueTemplate: false,

      // Custom resolvers, compatible with `unplugin-vue-components`
      // see https://github.com/antfu/unplugin-auto-import/pull/23/
      resolvers: [
        /* ... */
      ],

      // Inject the imports at the end of other imports
      injectAtEnd: true,

      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    components({
      // relative paths to the directory to search for components.
      dirs: ["src/components"],

      // valid file extensions for components.
      extensions: ["vue"],

      // search for subdirectories
      deep: true,

      // resolvers for custom components
      resolvers: [],

      // generate `components.d.ts` global declarations,
      // also accepts a path for custom filename
      // default: `true` if package typescript is installed
      dts: "./src/types/components.d.ts",

      // Allow subdirectories as namespace prefix for components.
      directoryAsNamespace: false,

      // Collapse same prefixes (camel-sensitive) of folders and components
      // to prevent duplication inside namespaced component name.
      // works when `directoryAsNamespace: true`
      collapseSamePrefixes: false,

      // Subdirectory paths for ignoring namespace prefixes.
      // works when `directoryAsNamespace: true`
      globalNamespaces: [],

      // Transform path before resolving
      importPathTransform: (v) => v,

      // Allow for components to override other components with the same name
      allowOverrides: false,

      // filters for transforming targets
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],

      // Only provide types of components in library (registered globally)
      types: [],
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "/src"),
    },
  },
})
