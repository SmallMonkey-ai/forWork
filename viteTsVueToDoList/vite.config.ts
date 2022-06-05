import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 自动导入 element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  // 设置服务器端口号
  server: {
    port: 8090
  },
  resolve: {
    // alias: {
    //   "@": path.resolve(__dirname, 'src'),
    //   'com':path.resolve(__dirname,'src/components')
    // }
  }
})
