'use strict'
function loadEvents() {
    var path = "../data/events.json";
    if (!UrlExists(path)) {
        path = "../Test/data/events.json";
    }
    $.getJSON(path, function (data) {
        var str = "", abc = 0;
        $.each(data, function (obj) {
            str += JSON.stringify(data[obj]);
        });
        $("#event").html(str);
        //bindDrag2();
    });
}

function createEventHTML() {

}

function bindDrag2() {
    var asw = $(".divEvent");
    $.each(asw, function (a) {
        $(asw[a]).draggable(
            {
                snap: true,
                containment: "div"
            }
        )
        $(asw[a]).sortable();
        $(asw[a]).disableSelection();
    });
}