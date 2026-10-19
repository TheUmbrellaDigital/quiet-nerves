

// FAQ

document.querySelectorAll(".accordion .item .header").forEach((header) => {
  header.addEventListener("click", function () {
    const item = this.parentNode;
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      document
        .querySelectorAll(".accordion .item")
        .forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    }
  });
});