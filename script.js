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

    //TO ADD A NEW LABEL IN LABEL TABLE
    $('#labelInput').on('keypress', function (e) {
        if (e.keyCode == 13) {
            $("#labelTable")
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
            $('.table tr button').click(function () {
                $(this).parent().parent().remove();
                return false;
            });
        }


    });

    //TO ADD A NEW EMPLOYEE IN EMPLOYEE TABLE
    $('#employeeInput').on('keypress', function (e) {
        if (e.keyCode == 13) {
            $("#employeeTable")
                .append($('<tr>')
                    .append($('<td>')
                        .css('text-align', 'left')
                        .append($('<button type="button" class="btn btn-default btn-circle">')
                            .append($('<i class="glyphicon glyphicon-remove">'))
                        )
                        .append(' ' + $(this).val())
                    )
                    .append($('<td>')
                        .append($('<div class="ui checkbox">')
                            .append($('<input type="checkbox" name="example" value="">')
                            )
                        )
                    )
                    .append($('<td>')
                        .append($('<div class="ui checkbox">')
                            .append($('<input type="checkbox" name="example" value="">')
                            )
                        )
                    )
                    .append($('<td>')
                        .append($('<div class="ui checkbox">')
                            .append($('<input type="checkbox" name="example" value="">')
                            )
                        )
                    )
                    .append($('<td class="js_personHide" style="width: 20%">')
                        .append($('<div class="col-md-4 css_noPaddingLeftRight">')
                            .append($('<div style="float:right; padding-right:5">')
                                .append($('<b>kr.</b>'))
                            )
                        )
                        .append($('<div class="col-md-8 css_noPaddingLeftRight">')
                            .append($('<input class="form-control">'))
                        )
                    )


                )
            $(this).val('');
            $('.table tr button').click(function () {
                $(this).parent().parent().remove();
                return false;
            });

            // TILFØJ SEMANTIC UI PÅ CHECKBOXES 
            $('.ui.checkbox').checkbox();

        }


    });

    //TO ADD A NEW TASK IN TASK TABLE
    $('#taskInput').on('keypress', function (e) {
        if (e.keyCode == 13) {
            $("#taskTable")
                .append($('<tr>')
                    .append($('<td>')
                        .css('text-align', 'left')
                        .append($('<button type="button" class="btn btn-default btn-circle">')
                            .append($('<i class="glyphicon glyphicon-remove">'))
                        )
                        .append(' ' + $(this).val())
                    )
                    .append($('<td>')
                        .append($('<select class="js_select2Fakturabel" style="width:100%">')
                            .append($('<optgroup label="Vælg venligst">')
                                .append($('<option value="ja">Ja</option>'))
                                .append($('<option value="null">-</option>'))
                                .append($('<option value="nej">Nej</option>'))
                            )
                        )
                    )
                    .append($('<td class="js_taskHide">')
                        .append($('<div class="col-md-4 css_noPaddingLeftRight">')
                            .append($('<div style="float:right; padding-right:5">')
                                .append($('<b>kr.</b>'))
                            )
                        )
                        .append($('<div class="col-md-8 css_noPaddingLeftRight">')
                            .append($('<input class="form-control">'))
                        )
                    )
                )
            $(this).val('');

            // SÅ MAN KAN FJERNE ROW
            $('.table tr button').click(function () {
                $(this).parent().parent().remove();
                return false;
            });

            // FOR AT TILFØJE SELECT2 TIL DEN NYE ROW
            $(".js_select2Fakturabel").select2({
                minimumResultsForSearch: -1
            });

        }


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

    $("#opretTemplate").on("click", function () {
        $('#templateCollapse').on('shown.bs.collapse', function () {
            $('html, body').animate({
                scrollTop: $("footer").offset().top
            }, 1);
        })

    });
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

    $(".js_select2Fakturabel").select2({
        minimumResultsForSearch: -1
    });



    $(".modal .js_select2").select2();



    // SEMANTIC UI STUFF
    $('.ui.checkbox').checkbox();


});
