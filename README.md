# jquery-ui | jquery sortable

1. First we must build up HTML code. All we need to have is a list of numbers (We must jumble all the numbers)

```
<ul id="sort">
        <!--display numbers and shuffle every refresh-->
</ul>
```

2. We must also style our list so that they will be aligned horizontally.

```
#sort {
    list-style: none;
    width: 430px;
    border: 1px solid;
    padding: 20px;
    margin: 0 auto;
    height: 315px;
}

#sort li {
    display: inline-block;
    float: left;
    width: 100px;
    height: 100px;
    background: yellow;
    font: 600 16px/100px "Arial";
    text-align: center;
    margin: 0;
    border: 3px solid white;
}
```

3. In our html file, we must declare our script tags containing our jquery and jquery ui codes.

````
<script src="js/jquery-1.12.4.js"></script>
<script src="js/jquery-ui.js"></script>
````

*We must put these script tags in our `<head>` section in our html file*

4. After the `<body>`, we will declare a script tag that contains our jquery function that calls the ``sortable()``; and to make our lists draggable.

````
$(document).ready(function(){
    $("#sort").sortable();
    $("#sort").disableSelection();
});

````

5. Here comes the logic! We declare and initialize and array of numbers from 1-12. Then we create a function that will shuffle all the numbers.

````
var arr = [12,8,10,2,1,9,5,11,4,7,6,3];
var myarr = shuffleNum(arr);

function shuffleNum(myArr){
            for (var i = myArr.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = myArr[i];
                myArr[i] = myArr[j];
                myArr[j] = temp;
            }

            return myArr;
        }
````
*The `Math.random()` function returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range.*

SOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

6. Next is we will create a function that will display the newly shuffled array to the DOM using a `ul`:

But FIRST! We must call the function: 
````
storeToArray(arr);
````

Next is we will now write the `storeToArray()`

````
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
````

7. This does not end our game. We have to check if sorted array is "already" sorted by adding a button to your page.

HTML 
````
<div class="button-c">
   <button class="btn-check">CHECK SORT</button>
</div>
````

JS: 
````
$(".btn-check").on("click", function(){
        var elemArr = document.getElementsByTagName("li");
        var arrCheck = jQuery.makeArray(elemArr);
        arrCheck = arrCheck.map(data => data.innerHTML);
        var int;
        var len = arrCheck.length;
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
 ````
 
 *In my case, I used jquery event click for this one.*
*Also, as you can see, there is another function called `isSorted()` that will check if array/tiles are already sorted.*
*We separated that function for readability purposes.*

JS:

````
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
}
````

*NOTE: The isSorted() will return a boolean value.
