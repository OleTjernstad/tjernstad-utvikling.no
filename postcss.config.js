module.exports = {
  plugins: {
    "postcss-flexbugs-fixes": {},
    "postcss-custom-media": { preserve: true },
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "nesting-rules": true,
        "media-query-ranges": true,
        "cascade-layers": false,
      },
    },
  },
};
