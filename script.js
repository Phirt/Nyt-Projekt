$(document).ready(function () {


    //ADD ACTIVE CLASS TO BUTTON WHEN PRESSED
    $('#accordion .btn').on('click', function () {

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
            console.log($("#js_Select").val());
            $(".js_taskHide").show();
            //$('td:nth-child(2)').show();
        }
        if ($("#js_Select").val() === "Person") {
            console.log($("#js_Select").val());
            $(".js_personHide").show();
        }
        if ($("#js_Select").val() === "Project") {
            console.log($("#js_Select").val());
            $(".js_projectHide").show();
        }
    });
});