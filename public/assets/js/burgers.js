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

    $(".change-devoured").on("click", function(e){
        e.preventDefault();
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredStatus = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredStatus
        }).then(
            function(){
                console.log("this burger is now", newDevoured);
                location.reload();
            }
        );

    });















});