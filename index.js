// let tab = $(".tab");
// let activeTab = tab.find(".active");
// let activeWidth = activeTab.innerWidth();

// $(".selector").css({
//   left: activeTab.position.left + "px",
//   width: activeWidth + "px",
//   height: activeTab.innerHeight() + "px"
// });

// $(".tab").on("click", "a", function (e) {
//   e.preventDefault();
//   $(".tab a").removeClass("active");
//   $(this).addClass("active");
//   var activeWidth = $(this).innerWidth();
//   var itemPosition = $(this).position();
//   $(".selector").css({
//     left: itemPosition.left + "px",
//     top: itemPosition.top + "px",
//     width: activeWidth + "px",
//     height: $(this).innerHeight()
//   });
// });

// JAVASCRIPT version

let tab = document.getElementsByClassName("tab")[0];
let activeTab = tab.querySelectorAll(".active");
let activeWidth = activeTab.innerWidth;
let selector = document.getElementsByClassName("selector")[0];

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

selector.style.left = getOffset(activeTab).left + "px";
selector.style.width = activeWidth + "px";
selector.style.height = activeTab.innerHeight + "px";

tab.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelectorAll(".tab a")[0].classList.remove("active");
  this.classList.add("active");
  var activeWidth = this.innerWidth;
  var itemPosition = {
    top: this.offsetTop,
    left: this.offsetLeft
  }
  selector.style.left = getOffset(itemPosition).left + "px";
  selector.style.top = getOffset(itemPosition).top + "px";
  selector.style.width = activeWidth + "px";
  selector.style.height = this.innerHeight + "px";
})