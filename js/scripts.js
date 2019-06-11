$(document).ready(function() {
  $("#pastForm").submit(function(event) {
    event.preventDefault();
    $(".hidden").hide();
    var total1 = 0;
    var total2 = 0;
    var total3 = 0;

    //This loop will give us the total value of all the checked boxes.
    $("input:checkbox[name=pastChoices]:checked").each(function() {
      total1 += (parseInt($(this).val()));
      console.log(total1);
    });
    $("input:checkbox[name=presentChoices]:checked").each(function() {
      total2 += (parseInt($(this).val()));
      console.log(total2);
    });
    $("input:checkbox[name=futureChoices]:checked").each(function() {
      total3 += (parseInt($(this).val()));
      console.log(total3);
    });


    $("#fate").show();

    if (total1 <= 4) {
      $("#past .good").show();
    } else if (total1 <= 8) {
      $("#past .decent").show();
    } else if (total1 <= 12){
      $("#past .wicked").show();
    };
    if (total2 <= 4) {
      $("#present .good").show();
    } else if (total2 <= 8) {
      $("#present .decent").show();
    } else if (total2 <= 12){
      $("#present .wicked").show();
    };
    if (total3 <= 4) {
      $("#future .good").show();
    } else if (total3 <= 8) {
      $("#future .decent").show();
    } else if (total3 <= 12){
      $("#future .wicked").show();
    };
  });
});


// console.log("I am working");
// $(document).ready(function() {
//   alert("hello");
//   console.log("throw rocks");
//   $("#pastForm").submit(function(event) {
//     console.log("Bite me");
//     event.preventDefault();
//     console.log("Bite me worse");
//   });
// });
