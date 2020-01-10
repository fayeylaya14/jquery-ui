$(document).ready(function(){
    $("#sort").sortable();
    $("#sort").disableSelection();


        function shuffleNum(myArr){
            for (var i = myArr.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = myArr[i];
                myArr[i] = myArr[j];
                myArr[j] = temp;
            }

            return myArr;
        }
        var arr = [12,8,10,2,1,9,5,11,4,7,6,3];
        var myarr = shuffleNum(arr);
        storeToArray(arr);

    function storeToArray(myarr) {
        var i = 0;
        var ul = document.getElementById("sort");
        var li;
        while(i < 12) {
            li = document.createElement("li");
            li.appendChild(document.createTextNode(arr[i]));
            ul.appendChild(li);
            ++i;
        }
    }

    $(".btn-check").on("click", function(){
        var elemArr = document.getElementsByTagName("li");
        var arrCheck = jQuery.makeArray(elemArr);
        arrCheck = arrCheck.map(data => data.innerHTML);
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
        var sortVal = true;
        var len = arrCheck.length;
        console.log(arrCheck);
        for(int = 0; int < len-1; int++) {
            if(parseInt(arrCheck[int]) > parseInt(arrCheck[int+1])) {
                sortVal = false;
                break;
            }
        }
        return sortVal;
    }
});