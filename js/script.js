$(document).ready(function(){
$("#design,#design-hide").click(function(){
$("#design, #design-hide").toggle();
});

$("#dev,#dev-hide").click(function(){
  $("#dev, #dev-hide").toggle();
  });

  $("#prod,#prod-hide").click(function(){
    $("#prod, #prod-hide").toggle();
    prod
});
});

$(document).ready(function() {
  $('.image-frame').hover(function(){
  $('.image-caption',this).slideToggle('slow');
}, function(){
  $('.image-caption',this).slideToggle('slow');
  });
});
