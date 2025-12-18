import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "index.html",
        dashboard: "dashboard.html",
        customer_dashboard: "customer_dashboard.html",
        customer_workorder: "customer_workorder.html",
        account_list: "account_list.html",
        news_page: "news_page.html",
        register: "register.html",
        tracking: "tracking.html",
        tracking_2: "tracking_2.html",
        tracking_admin: "tracking_admin.html",
        update_status: "update-status.html",
        not_found: "404.html",
        tablelist: "sdknfklansdlfnaosdbgoiadotablelist.html",
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
