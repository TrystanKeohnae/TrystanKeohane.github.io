$(document).ready(function(){
  $("#hide").click(function(){
    alert("Hello from my page");
    $("iframe").hide();
  });
  $("#show").click(function(){
       $("iframe").show();
  });
});
