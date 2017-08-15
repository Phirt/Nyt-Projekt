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
                        .append($('<div class="checkbox">')
                            .append($('<label><input type="checkbox" value=""></label>')
                            )
                        )
                    )
                    .append($('<td>')
                        .append($('<div class="checkbox">')
                            .append($('<label><input type="checkbox" value=""></label>')
                            )
                        )
                    )
                    .append($('<td>')
                        .append($('<div class="checkbox">')
                            .append($('<label><input type="checkbox" value=""></label>')
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
                        .append($('<div class="checkbox">')
                            .append($('<label><input type="checkbox" value=""></label>')
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
});
