import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5255',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': '*', // Adjust this according to your needs
          'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Add the headers you need
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Add the methods you need
          'Access-Control-Allow-Credentials': 'true', // Depending on your setup, you might need this for credentials
        },
      },
    },
  },
  plugins: [react()],
});
