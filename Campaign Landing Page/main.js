const ulList = document.getElementById("list-items");
const iconToggle = document.getElementById("icon-toggle");
//Adding click events to icon menu
iconToggle.onclick = function() {
    ulList.classList.toggle("show");
}

//removing mobile menu
const items = document.getElementsByClassName("items");

//loop over each item to remove the mobile view
for (let i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        ulList.getElementsByClassName("active")[0].classList.remove("active");
        this.classList.add("active");
        iconToggle.classList.remove("active");
        ulList.classList.remove("active");
        ulList.classList.remove("show");
    }
}