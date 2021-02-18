let sidebar = document.getElementById("courseSidebar");
let mainbar = document.getElementsByClassName("lecture-content")[0];
let topside = document.getElementsByClassName("lecture-left")[0];
let isToggleSidebarClicked = localStorage.isToggleSidebarClicked || false;
let node = document.createElement("div");
node.className = "nav-btn";
node.innerHTML = "Toggle Sidebar";
node.setAttribute("class", "toggle-sidebar-custom-ext");
let currentLocation = window.location;
let mainbarStyles = mainbar.getAttribute("style");
let oldLocation;

node.addEventListener("click", function () {
  mainbar = document.getElementsByClassName("lecture-content")[0];
  if (sidebar.style.display !== "none") {
    isToggleSidebarClicked = true;
    oldLocation = currentLocation;
    localStorage.isToggleSidebarClicked = isToggleSidebarClicked;
    sidebar.style.display = "none";
    mainbar.setAttribute("style", "margin-left: 0px !important;");
    return;
  }
  isToggleSidebarClicked = false;
  sidebar.style.display = "block";
  mainbar.setAttribute("style", mainbarStyles);
});

document.addEventListener("DOMContentLoaded", (event) => {
  oldLocation = currentLocation;
  mainbar = document.getElementsByClassName("lecture-content")[0];
  if (sidebar.style.display !== "none") {
    sidebar.style.display = "none";
    mainbar.setAttribute("style", "margin-left: 0px !important;");
    return;
  }
  sidebar.style.display = "block";
  mainbar.setAttribute("style", mainbarStyles);
});

(function (history) {
  var pushState = history.pushState;
  history.pushState = function (state) {
    mainbar = document.getElementsByClassName("lecture-content")[0];
    if (sidebar.style.display !== "none") {
      sidebar.style.display = "none";
      mainbar.setAttribute("style", "margin-left: 0px !important;");
      return;
    }
    sidebar.style.display = "block";
    mainbar.setAttribute("style", mainbarStyles);
    return pushState.apply(history, arguments);
  };
})(window.history);

topside.prepend(node);

setInterval(() => {
  sidebar = document.getElementById("courseSidebar");
  mainbar = document.getElementsByClassName("lecture-content")[0];
  if (sidebar.style.display === "none") {
    mainbar.setAttribute("style", "margin-left: 0px !important;");
    return;
  }
}, 3000);
