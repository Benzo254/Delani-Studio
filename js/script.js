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

$('.image-frame').hover(function(){
  $('.image-caption',this).slideToggle('slow');
}, function(){
  $('.image-caption',this).slideToggle('slow');
  });

  $("form").submit(function(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('textarea').value;
    if (name !=="" && email !=="" && message !==""){
      alert("Thank you" + " "+ name + " "+ "we have received your message. Thank you for reaching out to us. ");
    }
    event.preventDefault();
    
  });
});

