$(document).ready(function() {
    // When clicking button, add text to first and second, change img src attributes
    $("button").click(function() {
        $("#advice").text("select your favourite colour among the colours");
        $("#img1").attr("src", "red.jpg");
        $("#img2").attr("src", "blue.jpg");
        $("#img3").attr("src", "yellow.jpg")
        $("#sel").text("your favourite colours in order");
    })

    // When clicking image, hide it and add color to list
    $("img").click(function() {
        $(this).css("visibility", "hidden");
        let color;

        switch($(this).attr("id")) {
            case "img1":
                color = "red";
                break;
            case "img2":
                color = "blue";
                break;
            case "img3":
                color = "yellow";
                break;
            default:
                color = "red";
                break;
        }

        $("ul").append("<li>" + color +"</li>");
    })
});