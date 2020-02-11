$("#randButton").on("click", function () {
    $("#randNumber").empty();
    for (x=0; x<9; x++) {
        let randNum = (Math.floor(Math.random()*10))
        $("#randNumber").append(randNum, " ");
    }

})

