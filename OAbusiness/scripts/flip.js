    $(".flip").flip({
        trigger: "manual",
        axis: "y"
    });

    $(document).on("click", "#flip-btn", function() {
        $(".flip").flip(true);
       
    });

    $(document).on("click", "#unflip-btn", function() {
        $(".flip").flip(false);
        
    });

