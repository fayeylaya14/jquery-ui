// Element for puzzle piece
const PuzzlePiece = ({ num }) => `
    <li>${num}</li>
`;

const CORRECT_ARRAY = [1,2,3,4,5,6,7,8,9,10,11,12];

$(function () {
    $("#puzzle-container").sortable();
    $("#puzzle-container").disableSelection();

    let shuffledArray = shuffle(CORRECT_ARRAY);

    renderPuzzle(shuffledArray);
});

$(".btn-check").on("click", function () {
    let answerArray = $("li").toArray().map(data => data.innerHTML);

    if(isEqualArray(CORRECT_ARRAY, answerArray)) {
        alert("Congratulations!! This Group is Sorted");
    } else {
        alert("This Group is Not Sorted");
    }
});


// functions

function shuffle(array) {
    let copyArray = [...array];
    for (let i = copyArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = copyArray[i];
        copyArray[i] = copyArray[j];
        copyArray[j] = temp;
    }
    return copyArray;
}

function isEqualArray(array1, array2) {
    return array1.toString() == array2.toString()
}

function renderPuzzle(numberArray) {
    let puzzleContainer = $('#puzzle-container');

    for (const number of numberArray) {
        puzzleContainer.append(PuzzlePiece({ num: number }));
    }
}
