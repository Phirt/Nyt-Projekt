$(document).ready(function () {


    //ADD ACTIVE CLASS TO BUTTON WHEN PRESSED
    $('#accordion .btn').on('click', function () {
        //CHECK IF CLASS HAS ACTIVE
        if ($(this).hasClass('active')) {
            $('#accordion .btn').removeClass('active');
            return true;
        }
        //REMOVE ACTIVE CLASS ON ALL BUTTONS 
        $('#accordion .btn').removeClass('active');

        //ADD ACTIVE CLASS TO THE SPECIFIC BUTTON PRESSED
        $(this).addClass('active');
    })
});

//Hide task, person and project

$(document).ready(function () {
    $("#js_Select").change(function (e) {
        $(".js_taskHide").hide();
        $(".js_personHide").hide();
        $(".js_projectHide").hide();

        if ($("#js_Select").val() === "Task") {
            $(".js_taskHide").show();
        }
        if ($("#js_Select").val() === "Person") {
            $(".js_personHide").show();
        }
        if ($("#js_Select").val() === "Project") {
            $(".js_projectHide").show();
        }
    });
});

//Tooltip hover for the questionmark

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});