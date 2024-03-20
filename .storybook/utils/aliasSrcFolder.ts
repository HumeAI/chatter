import path from "path";
import type { Configuration } from "webpack";

export function aliasSrcFolder(config: Configuration): Configuration {
  const ROOT_DIR = path.resolve(__dirname, "..", "..");

  if (!config.resolve) config.resolve = {};
  if (!config.resolve.alias) config.resolve.alias = {};

  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(ROOT_DIR, "src"),
  };

  return config;
}
