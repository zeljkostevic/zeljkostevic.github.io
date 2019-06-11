// # src / dark-mode.js
// Copyright (c) 2018 Milovan Tomašević <https://milovantomasevic.com/>

import { importTemplate } from "../common";

requestIdleCallback(() => {
  const darkMode = importTemplate("_dark-mode-template");
  if (darkMode) {
    const navbarEl = document.querySelector("#_navbar > .content > .nav-btn-bar");
    navbarEl.appendChild(darkMode);

    document.body.classList.remove("no-color-transition");

    document.getElementById("_dark-mode").addEventListener("click", e => {
      e.preventDefault();
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
      } else {
        document.body.classList.add("dark-mode");
      }
    });
  }
});
