
const menuBtn = document.getElementById("menuBtn");
const categories = document.getElementById("categories");
const searchBtn = document.getElementById("searchBtn");
const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");

menuBtn.addEventListener("click", function () {
    categories.classList.toggle("open");
});

searchBtn.addEventListener("click", function () {
    searchPanel.classList.toggle("open");

    if (searchPanel.classList.contains("open")) {
        searchInput.focus();
    } else {
        searchInput.value = "";
    }
});
