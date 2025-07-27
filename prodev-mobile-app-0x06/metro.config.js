const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
    const config = getDefaultConfig(__dirname);
    config.transformer.babelTransformerPath = require.resolve("react-native-css-transformer");
    config.resolver.assetExts.push("css");

    return config;
})();
