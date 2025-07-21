import js from "@eslint/js";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import pluginVue from "eslint-plugin-vue";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
    js.configs.recommended,
    ...pluginVue.configs["flat/essential"],

    {
        name: "app/files-to-lint",
        files: ["**/*.{js,mjs,jsx,vue}"],
        plugins: {
            vue: pluginVue, // 👈 this is required!
        },
        rules: {
            "vue/multi-word-component-names": "off", // 👈 this will now work
        },
    },

    globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),

    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
    },

    skipFormatting,
]);
