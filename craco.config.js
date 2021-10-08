const {
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES,
} = require("@craco/craco");

// emotion
// https://github.com/emotion-js/emotion/issues/1123
const emotionPresetOptions = {};

const emotionBabelPreset = require("@emotion/babel-preset-css-prop").default(
  undefined,
  emotionPresetOptions
);

// craco alias
const CracoAlias = require("craco-alias");
const cracoAliasPlugin = {
  plugin: CracoAlias,
  options: {
    source: "tsconfig",
    baseUrl: "./src",
    tsConfigPath: "./tsconfig.extend.json",
  },
};

module.exports = {
  babel: {
    plugins: [...emotionBabelPreset.plugins],
  },
  plugins: [cracoAliasPlugin],
};
