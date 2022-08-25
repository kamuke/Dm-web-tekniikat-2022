$(document).ready(function() {

    ///// Exercise 1 /////

    // Add id to second paragraph
    $("p:eq(1)").attr("id", "sp");

    // Remove first paragraph
    $("#fp").remove();

    // Change first div's background and font color
    $("#fdiv").css("background-color", "grey");
    $("#fdiv").css("color", "white");

    ///// Exercise 2 /////

    // When clicking button, add paragraph to first div
    $("#btn").click(function() {
        $("#fdiv").append("<p id='tp'>Hello user</p>")
    });

    ////// Exercise 3 /////

    // Hide fourth paragraph 
    $("#4p").css("visibility", "hidden");
    
    // When hovering last div, show fourth paragraph and hide when mouse is mouse is outside of last div
    $("#sdiv").hover(
        function() {
            $("#4p").text("About to select a link ...");
            $("#4p").css("visibility", "visible");
        },
        function() {
            $("#4p").css("visibility", "hidden");
        });
});