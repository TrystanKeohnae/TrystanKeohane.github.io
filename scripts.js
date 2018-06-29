$(document).ready(function(){
  $("#hide").click(function(){
    alert("Sup fam, you aint seeing the Flames anymore Ha!");
    $("iframe").hide();
  });
  $("#show").click(function(){
       $("iframe").show();
  });
});
