import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
    },
    plugins: [preact(), viteTsconfigPaths(), svgrPlugin()],
    resolve: {
      alias: {
        react: "preact/compat",
        "react-dom": "preact/compat",
      },
    },
  };
});
