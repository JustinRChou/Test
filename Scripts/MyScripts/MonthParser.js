'use strict'

function test2() {
    var abc = 0;
    $.getJSON("../data/months.json", function (data) {
        var str = "", abc=0;
        $.each(data, function (obj) {
            var days = data[obj].Days;
            var i = 1;
            var start, startDayName;
            if (data[obj].StartDay){
                startDayName = data[obj].StartDay;
                abc = NameToDay(startDayName);
            }
            if (data[obj].Days.includes("-")) {
                var tmp = data[obj].Days.split('-');
                i = parseInt(tmp[0]);
                days = parseInt(tmp[1]);
            }
            for (start = i ; i <= days; i++) {
                str += createDiv(data[obj].Month + "/" + formatDay(i) + " " + getDayName(abc++), abc);
            }
        });
        $("#test").html(str);
        bindDrag();
        //var asw = $(".divCal");
        //$.each(asw, function (a) {
        //    alert(a);
        //});

        //$("#drag4").draggable();
        //setTimeout(function () {
        //    var asw = $(".divCal");
        //    alert(asw);
        //}, 2000);
 
        //$(".divCal").each(object, function (object) {
        //    object.droppable({
        //        drop: function (event, ui) {
        //            alert("a");
        //        }
        //    });
        //});
        //$("#div6").droppable({
        //    drop: function (event, ui) {
        //        alert("a");
        //    }
        //});

        //var isDragging = false;
        //$(".divCal")
        //    .mousedown(function () {
        //        isDragging = false;
        //    })
        //    .mousemove(function () {
        //        isDragging = true;
        //    })
        //    .mouseup(function () {
        //        var wasDragging = isDragging;
        //        isDragging = false;
        //        if (!wasDragging) {
        //            $("#throbble").toggle();
        //        }
        //    });
    });
}

function createDiv(str, abc) {
    var tmp = '<div class="container-fluid marginBottom"><div class="col-6"><div class="row"><div class="span2 setupBorder"><div style="border-bottom: 2px solid black;">';
    tmp += str;
    tmp += '</div><div id="">Data here asdasd asdasdasd</div></div>';


    tmp += ' <div class="span10 divCal" id="div' + abc +'" style="height:200px;border: 2px solid black;width:80%;" data-count="0" data-max-count="3" >';
    tmp += ' </div> </div> </div> </div>';     
                
                   

    return tmp;
}

function formatDay(day) {
    if (parseInt(day) < 10) {
        return "0" + day;
    }
    return day;
}

function getDayName(day) {
    var result = (day% 7);
    return DayToName(result);
}

function NameToDay(startName) {
    switch (startName) {
        case "Monday":
            return 0;
        case "Tuesday":
            return 1;
        case "Wednesday":
            return 2;
        case "Thursday":
            return 3;
        case "Friday":
            return 4;
        case "Saturday":
            return 5;
        case "Sunday":
            return 6;
    }
}

function DayToName(day) {
    var name = "";
    switch (day) {
        case 0:
            name = "Monday";
            break;
        case 1:
            name = "Tuesday";
            break;
        case 2:
            name = "Wednesday";
            break;
        case 3:
            name = "Thursday";
            break;
        case 4:
            name = "Friday";
            break;
        case 5:
            name = "Saturday";
            break;
        case 6:
            name = "Sunday";
            break;
    }
    return name;
}