fetch("/navbar/navbar.html")
  .then(response => {
    if (!response.ok) {
      console.error("Fetch error:", response.status, response.statusText);
    }
    return response.text();
  })
  .then(data => {
    const nav = document.querySelector(".navbar");
    if (!nav) {
      console.error("No element with class 'navbar' found.");
      return;
    }

    const title = nav.getAttribute("bar-title") || "";
    const args = {
      bar_title: title
    };

    Object.keys(args).forEach(key => {
      data = data.replaceAll(`{{${key}}}`, args[key]);
    });

    nav.innerHTML = data;
    console.log("Navbar inserted successfully.", args);
  })
  .catch(error => {
    console.error("Fetch failed:", error);
  });
