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

    //TO REMOVE A ROW IN A TABLE
    $('.table tr button').click(function () {
        $(this).parent().parent().remove();
        return false;
    });

    //TO ADD A NEW LABEL
    $('input').on('keypress', function (e) {
        if (e.keyCode == 13) {
            $("#myTable")
                .append($('<tr>')
                    .append($('<td>')
                        .css('text-align', 'left')
                        .append($('<button type="button" class="btn btn-default btn-circle">')
                            .append($('<i class="glyphicon glyphicon-remove">'))
                        )
                        .append(' ' + $(this).val())
                    )

                )
            $(this).val('');
        }

        //TO REMOVE A ROW IN A TABLE
        $('.table tr button i').click(function () {
            $(this).parent().parent().remove();
            return false;
        });

    });




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


// SELECT2 AND SEMANTIC UI
$(document).ready(function () {

    // SELECT2 STUFF
    $(".js_select2").select2({
        placeholder: {
            id: '-1', // the value of the option
            text: 'Opret'
        }
    });

    $(".js_select2Templates").select2({
        placeholder: {
            id: '-1', // the value of the option
            text: 'Tilføj medarbejder'
        }
    });

    $(".modal .js_select2").select2();



    // SEMANTIC UI STUFF
    $('.ui.checkbox').checkbox();
});
