const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "zhuroff";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "melodymap-lib-api",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {});
};
