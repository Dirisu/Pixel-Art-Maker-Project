// Select color input/////////////////////////////////////////////////////////////////////////////////////////////////////////
var color = document.getElementById('colorPicker');
var sizePicker = document.getElementById('sizePicker');
var table = document.getElementById('pixelCanvas');


// Select size input/////////////////////////////////////////////////////////////////////////////////////////////////////////////
let width = document.getElementById('inputWidth').value;
let height = document.getElementById('inputHeight').value;


// The submit button is handled here//////////////////////////////////////////////////////////////////////////////////////////////
sizePicker.addEventListener('click', (e) => {
    e.preventDefault();
    width = document.getElementById('inputWidth').value;
    height = document.getElementById('inputHeight').value;
    table.firstElementChild.remove();
    makeGrid(height, width)
});

function makeGrid(height, width) {
    for(var a = 0; a < height; a++){
        let row = table.insertRow(a);
        for(var b = 0; b < width; b++){
            let cell = row.insertCell(b);
            // Here's where color is added to the individual cells/////////////////////////////////////////////////////////////////
            cell.addEventListener('click', (e) => {
                cell.style.background = color.value;
            });
        }
    }

}
// The default grid is set at 15 x 15 (N x M)/////////////////////////////////////////////////////////////////////////////////////
makeGrid(15, 15); 
