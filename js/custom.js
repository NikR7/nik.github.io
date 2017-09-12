$(document).ready(function() {
  var owl = $("#owl-demo");
  owl.owlCarousel({
    navigation : true,
    singleItem : true,
    pagination :false,
    transitionStyle : "fadeUp"
  });
  //Select Transtion Type
  $("#transitionType").change(function(){
    var newValue = $(this).val();
    //TransitionTypes is owlCarousel inner method.
    owl.data("owlCarousel").transitionTypes(newValue);
    //After change type go to next slide
    owl.trigger("owl.next");
  });
});