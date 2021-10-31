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
let activeTab = tab.querySelector(".active");
let activeWidth = activeTab.offsetWidth;
let selector = document.getElementsByClassName("selector")[0];

 
selector.style.left = activeTab.offsetLeft + "px"; 
selector.style.width = activeWidth + "px"; 
selector.style.height = activeTab.offsetHeight + "px"; 
 
tab.addEventListener("click", (e) => { 
  e.preventDefault();
  let anchor = document.getElementsByTagName("a")

  Array.from(document.querySelectorAll("a")).forEach(function(e) {
    e.classList.remove("active");
  });


  e.target.classList.add("active"); 
  var activeWidth = e.target.offsetWidth; 
  var itemPosition = { 
    top: e.target.offsetTop, 
    left: e.target.offsetLeft 
  }

  console.log(activeTab.offsetWidth)



  selector.style.left = itemPosition.left + "px"; 
  selector.style.top = itemPosition.top + "px"; 
  selector.style.width = activeWidth + "px"; 
  selector.style.height = e.target.offsetHeight + "px"; 
})