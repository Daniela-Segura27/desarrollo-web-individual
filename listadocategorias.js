$(function () {
    $("#resizable").resizable();
});

$(function () {
    $("#accordion").accordion();
});

$(function () {
    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $("#dialog1").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $("#dialog2").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $("#opener").on("click", function () {
        $("#dialog").dialog("open");
    });

    $("#opener1").on("click", function () {
        $("#dialog1").dialog("open");
    });

    $("#opener2").on("click", function () {
        $("#dialog2").dialog("open");
    });
    
});