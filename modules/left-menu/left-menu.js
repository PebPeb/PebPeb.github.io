fetch("/modules/left-menu/left-menu.html")
  .then(response => {
    if (!response.ok) {
      console.error("Fetch error:", response.status, response.statusText);
    }
    return response.text();
  })
  .then(data => {
    const nav = document.querySelector(".left-menu");
    if (!nav) {
      console.error("No element with class 'left-menu' found.");
      return;
    }
    nav.innerHTML = data;
    console.log("left-menu inserted successfully.");
  })
  .catch(error => {
    console.error("Fetch failed:", error);
  });
