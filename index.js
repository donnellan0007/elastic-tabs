let tab = $(".tab");
let activeTab = tab.find(".active");
let activeWidth = activeTab.innerWidth();

$(".selector").css({
  left: activeTab.position.left + "px",
  width: activeWidth + "px",
  height: activeTab.innerHeight() + "px"
});

$(".tab").on("click", "a", function (e) {
  e.preventDefault();
  $(".tab a").removeClass("active");
  $(this).addClass("active");
  var activeWidth = $(this).innerWidth();
  var itemPosition = $(this).position();
  $(".selector").css({
    left: itemPosition.left + "px",
    top: itemPosition.top + "px",
    width: activeWidth + "px",
    height: $(this).innerHeight()
  });
});
