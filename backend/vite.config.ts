// import path from "path";
import { VitePluginNode } from "vite-plugin-node";
import { defineConfig } from "vite";
// import packageJson from "./package.json";

// const getPackageName = () => {
//   return packageJson.name;
// };

// const getPackageNameCamelCase = () => {
//   try {
//     return getPackageName().replace(/-./g, (char) => char[1].toUpperCase());
//   } catch (err) {
//     throw new Error("Name property in package.json is missing.");
//   }
// };

// const fileName = {
//   es: `${getPackageName()}.mjs`,
//   cjs: `${getPackageName()}.ƒcjs`,
//   iife: `${getPackageName()}.iife.js`,
// };

module.exports = defineConfig({
  // base: "./",
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, "src/index.ts"),
  //     name: getPackageNameCamelCase(),
  //     formats: ["es", "cjs", "iife"],
  //     fileName: (format) => fileName[format],
  //   },
  // },
  // ...vite configures
  server: {
    // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
    port: 3000,
  },
  plugins: [
    ...VitePluginNode({
      // Nodejs native Request adapter
      // currently this plugin support 'express', 'nest', 'koa' and 'fastify' out of box,
      // you can also pass a function if you are using other frameworks, see Custom Adapter section
      adapter: "express",

      // tell the plugin where is your project entry
      appPath: "./app.ts",

      // Optional, default: 'viteNodeApp'
      // the name of named export of you app from the appPath file
      exportName: "viteNodeApp",

      // Optional, default: 'esbuild'
      // The TypeScript compiler you want to use
      // by default this plugin is using vite default ts compiler which is esbuild
      // 'swc' compiler is supported to use as well for frameworks
      // like Nestjs (esbuild dont support 'emitDecoratorMetadata' yet)
      // you need to INSTALL `@swc/core` as dev dependency if you want to use swc
      tsCompiler: "esbuild",

      // Optional, default: {
      // jsc: {
      //   target: 'es2019',
      //   parser: {
      //     syntax: 'typescript',
      //     decorators: true
      //   },
      //  transform: {
      //     legacyDecorator: true,
      //     decoratorMetadata: true
      //   }
      // }
      // }
      // swc configs, see [swc doc](https://swc.rs/docs/configuration/swcrc)
      swcOptions: {},
    }),
  ],
  optimizeDeps: {
    // Vite does not work well with optionnal dependencies,
    // you can mark them as ignored for now
    // eg: for nestjs, exlude these optional dependencies:
    // exclude: [
    //   '@nestjs/microservices',
    //   '@nestjs/websockets',
    //   'cache-manager',
    //   'class-transformer',
    //   'class-validator',
    //   'fastify-swagger',
    // ],
  },
});
