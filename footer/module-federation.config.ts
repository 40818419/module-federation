export const mfConfig = {
  name: "footer",
  filename: "remoteEntry.js",
  exposes: {
    './Footer': "./src/Footer.tsx",
  },
  shared: ["react", "react-dom"],
};
