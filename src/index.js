import React from "react";
import ReactDom from "react-dom/client";
import App from "./ClassComponents/App";
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

// var data = [45, 78, 45, 78, 9, 6];
// data.filter((value, index) => {
//   console.log(data.indexOf(value) === index);
//   console.log(data.indexOf(value), "*******");
// });

// console.log("123");
