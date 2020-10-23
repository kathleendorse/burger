$(function(){

    //FUCKIN WORKS!
    $(".create-form").on("submit", function(e){
        e.preventDefault();
        var newburger = {
        name: $("#burg").val().trim(),
        devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(
            function(){
                console.log("created new burger");
                location.reload();
            }
        );
    });

    // $(".change-devoured").on("click", function(e){
    //     e.preventDefault();



    // });















});