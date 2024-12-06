import { ConfigEnv, defineConfig, UserConfig } from "vite";

export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
  return {
    server: {
      port: 3000,
    },
  };
});
