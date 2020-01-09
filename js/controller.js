$(document).ready(function(){
    $("#sort").sortable();
    $("#sort").disableSelection();

        // var elemArr = document.getElementsByClassName("sort-ui");
        // var arr = jQuery.makeArray(elemArr);
        // arr = arr.map(data => data.innerHTML);
        var arr = [];

    function generateNum(){
        var min=1;
        var max=12;
        return Math.floor(Math.random() * (+max - +min)) + +min;
        // document.write("Random Number Generated : " + random );
    }

    function storeToArray() {
        var i = 0;
        var ul = document.getElementById("sort");
        var li;
        while(i < 12) {
            var rec = generateNum();

            arr[i] = rec;
            li = document.createElement("li");
            li.appendChild(document.createTextNode(arr[i]));
            ul.appendChild(li);
            ++i;
        }
    }

    storeToArray();

    $(".btn-check").on("click", function(){
        var elemArr = document.getElementsByTagName("li");
        var arrCheck = jQuery.makeArray(elemArr);
        arrCheck = arrCheck.map(data => data.innerHTML);
        var int;
        var len = arrCheck.length;
        // for(int = 0; int < len-1; int++) {
        //     if(arrCheck[int] > arrCheck[int+1]){
        //         alert("This Group is Not Sorted");
        //     } else if(arrCheck[int] == arrCheck[int+1]) {
        //         alert("Congratulations!! This Group is Sorted");
        //     } else {
        //         alert("Congratulations!! This Group is Sorted");
        //     }
        // }
        var compare = isSorted(arrCheck);
        console.log(compare);
        if(compare == true) {
            alert("Congratulations!! This Group is Sorted");
            console.log("g");
        }
        else {
            alert("This Group is Not Sorted");
            console.log("h");
        }
    });

    function isSorted(arrCheck) {
        var sortVal = 0;
        var len = arrCheck.length;
        console.log(arrCheck);
        for(int = 0; int < len-1; int++) {
            if(arrCheck[int] > arrCheck[int+1]){
                sortVal = false;
            } else if(arrCheck[int] == arrCheck[int+1]) {
                 sortVal = true;
            }
            else {
                sortVal = true;
            }
        }

        return sortVal;
    }
});