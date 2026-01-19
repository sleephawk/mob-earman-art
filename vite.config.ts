import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        // Split chunks manually - help from GPT
        manualChunks(id) {
          if (id.includes("node_modules/three")) {
            return "three";
          }
          if (id.includes("node_modules/@react-three/drei")) {
            return "drei";
          }
          if (
            id.includes(path.resolve(__dirname, "src/components/3D/MobV6.tsx"))
          ) {
            return "mobv6";
          }
          // Optional: any other big GLTF components
          if (id.includes(path.resolve(__dirname, "src/components/3D"))) {
            return "mob-others";
          }
        },
      },
    },
  },
});
