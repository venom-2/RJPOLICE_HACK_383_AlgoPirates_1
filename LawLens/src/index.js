import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import global_en from "./translations/en/global.json";
// import global_es from "./translations/es/global.json";
// import i18next from "i18next";

// i18next.init({
//   interpolation: {escapeValue: false},
//   lng: "en",
//   resources: {
//     en:{
//       global: global_en
//     },
//     es:{
//       global: global_es
//     },
//   },
// });
ReactDOM.render(
  <React.StrictMode>
    {/* <i18next.Provider i18n={i18next}> */}
    <App />
    {/* </i18next.Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
