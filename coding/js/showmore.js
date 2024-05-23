// $(".product__list").each(function () {
//   var $this = $(this),
//       $lis = $this.children(),
//       $a = $("<a class='product__show-more' href='javascript:void(0)'>Less</a>")
//   if ($lis.length > 4) {
//     $this.after($a);
//     $a.click(function () {
//       $lis.slice(8).toggle();
//       $a.html($a.html() === "More" ? "Less" : "More")
//     }).click();
//   }
// });

$(document).ready(function(){
  var list = $(".product__list li");
  var numToShow = 8;
  var button = $("#next");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();

  button.click(function(){
      var showing = list.filter(':visible').length;
      list.slice(showing - 1, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      if (nowShowing >= numInList) {
        button.hide();
      }
  });
});