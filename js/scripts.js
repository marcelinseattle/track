$(document).ready(function(){
  $("form#question").submit(function(event){
    event.preventDefault();
    var person = $("input#person").val();
    var math = parseInt($("input#math").val());
    var city = $("input[name=city]:checked").val();
    var type = $("input[name=type]:checked").val();
    var company = $("input[name=company]:checked").val();

    $(".ruby").hide();
    $(".php ").hide();
    $(".css").hide();
    $(".design").hide();


    if (math !== 4) {
     alert("Sorry... but for now, your first step should be Khan Academy Math Track!");

   } else {
    if (city === "portland") {
    if (company === "start-up" && type === "back-end") {
     $(".person").text(person);
     $(".ruby").show();

   } else if (company === "start-up" && type === "front-end") {
     $(".person").text(person);
     $(".script").show();

   } else if (companyInput === "large" && type === "back-end") {
      $(".person").text(person);
     $(".php").show();

   } else if (company === "large" && type === "front-end") {
     $(".person").text(person);
     $(".css").show();
   }

 } else if (city === "seattle") {
   if (company === "start-up" && type === "back-end") {
     $(".person").text(person);
     $(".ruby").show();

   } else if (company === "start-up" && type === "front-end") {
     $(".person").text(person);
     $(".script").show();

   } else if (company === "large" && type === "back-end") {
     $(".person").text(person);
     $(".php").show();

   } else if (company === "large" && type === "front-end") {
     $(".person").text(person);
     $(".css").show();
   }
 }
}
});
});
