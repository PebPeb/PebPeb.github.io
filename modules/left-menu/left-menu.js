fetch("/modules/left-menu/left-menu.html")
  .then(response => {
    if (!response.ok) {
      console.error("Fetch error:", response.status, response.statusText);
    }
    return response.text();
  })
  .then(data => {
    const nav = document.querySelector(".left-menu-container");
    if (!nav) {
      console.error("No element with class 'left-menu' found.");
      return;
    }
    nav.innerHTML = data;
    console.log("left-menu inserted successfully.");

    const btn = document.getElementById("mobile-menu-btn");
    btn.addEventListener("click", () => {
      const leftMenu = document.querySelector(".left-menu");
      leftMenu.classList.toggle("show");  
    });

  })
  .catch(error => {
    console.error("Fetch failed:", error);
  });
