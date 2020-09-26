$(document).ready(function () {
  $("img").click(function () {
    var temp = $(this).attr("src");
    var newSrc = $(this).attr("alt-src");
    $(this).attr("src", newSrc);
    $(this).attr("alt-src", temp);
  });
});
