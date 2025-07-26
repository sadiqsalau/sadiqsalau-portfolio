import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), imagetools()],
});
