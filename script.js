// all code is contained within the button's on click function
$("#randButton").on("click", function () {
     // remove contents of randNumber h2. This is nessecary so nine new numbers aren't 
     // added with each click, while the old ones remain. 
    $("#randNumber").empty();
    // looping 9 times to create 9 random numbers
    for (x=0; x<9; x++) {
        let randNum = (Math.floor(Math.random()*10)) // Generate a random number between 0 and 9
        $("#randNumber").append(randNum, " "); // append each number to the randNumber h2
    }

})

