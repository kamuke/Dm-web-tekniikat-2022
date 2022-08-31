$(document).ready(function() {
    // When clicking button, add text to first and second, change img src attributes
    $("button").click(function() {
        $("#advice").text("Select your favourite colour among the colours");
        $("#img1").attr("src", "red.jpg").attr("alt", "red");
        $("#img2").attr("src", "blue.jpg").attr("alt", "blue");
        $("#img3").attr("src", "yellow.jpg").attr("alt", "yellow");
        $("#sel").text("Your favourite colours in order");
    })

    // When clicking image, hide it and add color to list
    $("img").click(function() {
        $("ul").append("<li>" + $(this).attr("alt") +"</li>");
        $(this).remove();
    })
});