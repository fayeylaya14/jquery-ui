# jquery-ui | jquery sortable

1. First we must build up HTML code. All we need to have is a list of numbers (We must jumble all the numbers)

```
<ul id="sort">
        <li class="sort-ui">9</li>
        <li class="sort-ui">5</li>
        <li class="sort-ui">2</li>
        <li class="sort-ui">12</li>
        <li class="sort-ui">1</li>
        <li class="sort-ui">6</li>
        <li class="sort-ui">4</li>
        <li class="sort-ui">11</li>
        <li class="sort-ui">3</li>
        <li class="sort-ui">10</li>
        <li class="sort-ui">8</li>
        <li class="sort-ui">7</li>
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
