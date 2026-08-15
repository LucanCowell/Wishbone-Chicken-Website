
// Filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");
const storeItems = document.querySelectorAll(".store-item");

filterButtons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    e.preventDefault();

    const filter = button.dataset.filter;

    storeItems.forEach(function(item) {
      if (filter === "all") {
        item.style.display = "block";
      } else if (item.dataset.item === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

filterButtons.forEach(btn => btn.classList.remove("active-filter"));
button.classList.add("active-filter");