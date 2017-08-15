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
        $('.table tr button').click(function () {
            $(this).parent().parent().remove();
            return false;
        });

    });
});

//Hide task, person and project under Tid&Materialer > Faktureringsmetode

$(document).ready(function () {
    $("#js_dropdownTidFaktureringSelect").change(function (e) {
        $(".js_tableFaktureringOpgaveHide").hide();
        $(".js_tableFaktureringPersonHide").hide();
        $(".js_tableFaktureringProjectHide").hide();

        if ($("#js_dropdownTidFaktureringSelect").val() === "Task") {
            $(".js_tableFaktureringOpgaveHide").show();
        }
        if ($("#js_dropdownTidFaktureringSelect").val() === "Person") {
            $(".js_tableFaktureringPersonHide").show();
        }
        if ($("#js_dropdownTidFaktureringSelect").val() === "Project") {
            $(".js_tableFaktureringProjectHide").show();
        }
    });
});

$(document).ready(function () {
    $("#js_dropdownTidBudgetSelect").change(function (e) {
        $(".js_tableBudgetProjektTimerHide").hide();
        $(".js_tableBudgetProjektPrisHide").hide();
        $(".js_tableBudgetOpgaveTimerHide").hide();
        $(".js_tableBudgetPersonTimerHide").hide();
        $(".js_tableBudgetOpgavePrisHide").hide();

        if ($("#js_dropdownTidBudgetSelect").val() === "ProjektTimer") {
            $(".js_tableBudgetProjektTimerHide").show();
        }
        if ($("#js_dropdownTidBudgetSelect").val() === "ProjektPris") {
            $(".js_tableBudgetProjektPrisHide").show();
        }
        if ($("#js_dropdownTidBudgetSelect").val() === "OpgaveTimer") {
            $(".js_tableBudgetOpgaveTimerHide").show();
        }
        if ($("#js_dropdownTidBudgetSelect").val() === "PersonTimer") {
            $(".js_tableBudgetPersonTimerHide").show();
        }
        if ($("#js_dropdownTidBudgetSelect").val() === "OpgavePris") {
            $(".js_tableBudgetOpgavePrisHide").show();
        }

    });
});

//Tooltip hover for the questionmark

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
