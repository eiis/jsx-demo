/// <reference types="vite/client" />


//告诉 TypeScript 如何理解 .vue 文件的导入
declare module '*.vue' {
  import type { defineComponent } from 'vue'
  const component: defineComponent
  export default component
}
