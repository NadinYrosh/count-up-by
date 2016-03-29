$(document).ready(function() {
  $("form").submit(function(event){
     event.preventDefault();
     $(".output").text("");
     var countTo = parseInt($("#countTo").val());
     var countBy = parseInt($("#countBy").val());

     if (!countBy || !countTo) {
       alert("Bad Input");
     } else if (countBy < 0 || countTo < 0) {
       alert("Bad Input");
     } else if (countBy > countTo) {
       alert("Multiple is higher than final number");
     } else {
       for (var total = countBy; total <= countTo; total += countBy) {
         $(".output").append(total + " ");
       }
     }
  });
});
