let sidebar = document.getElementById("courseSidebar");
let mainbar = document.getElementsByClassName("lecture-content")[0];
let topside = document.getElementsByClassName("lecture-left")[0];

let node = document.createElement("div");
node.className = "nav-btn";
node.innerHTML = "Toggle Sidebar";
node.setAttribute("class", "toggle-sidebar-custom-ext");

let mainbarStyles = mainbar.getAttribute("style");

node.addEventListener("click", function () {
  console.log("clicked");
  if (sidebar.style.display !== "none") {
    sidebar.style.display = "none";
    console.log(mainbar);
    mainbar.setAttribute("style", "margin-left: 0px");
    return;
  }
  sidebar.style.display = "block";
  mainbar.setAttribute("style", mainbarStyles);
});

topside.prepend(node);
