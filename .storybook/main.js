const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.resolve.alias = {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "../src"),
    };

    config.module.rules.push({
      test: /\.svg$/,
      // If you want to import svg in css files
      // You need to configure another rule to use file-loader for that
      issuer: /\.(vue|js|ts|svg)$/,
      use: [
        // This loader compiles .svg file to .vue file
        // So we use `vue-loader` after it
        "vue-loader",
        "svg-to-vue-component/loader",
      ],
    });
    // Return the altered config
    return config;
  },
};
