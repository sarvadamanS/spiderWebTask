import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5174, // Specify the port you want to use
  },
  plugins: [react()],
});
