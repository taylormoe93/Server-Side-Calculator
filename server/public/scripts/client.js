console.log('hello from client');

$(document).ready(onReady);

function onReady() {
    $('#addButton').on('click', additionFunc); // addition button
    $('#minusButton').on('click', minusFunc); // minus button
    $('#timesButton').on('click', timesFunc); // times button
    $('#divideButton').on('click', divideFunc); // divide button
    $('#equalsButton').on('click', equalsFunc); // equals button
    $('#clearButton').on('click', clearFunc); // clear button
}

let operator = (''); // we make an empty variable for the operator function. 


// OPERATOR FUNCTIONS
/* 
First we make a batch of functions for the operator buttons.
We'll send the operator value to the server and use it to calculate the equation server-side.
We'll use this in conjunction with the two number values from the two inputs.
*/
// When the + button is clicked do this:
function additionFunc() {
    console.log('in additionFunc');
    operator = '+'; // change the operator to a string. We'll use this on the server. 
};

// When the - button is clicked do this:
function minusFunc() {
    console.log('in minusFunc');
    operator = '-';
};

// When the * button is clicked do this:
function timesFunc() {
    console.log('in timesFunc');
    operator = '*';
};

// When the / button is clicked do this:
function divideFunc() {
    console.log('in divideFunc');
    operator = '/';
};


// EQUALS BUTTON
/*
Sends the data to the server as POST.
Clears the inputs and operator variable.
Then a function that calls a GET for the data.
*/
function equalsFunc() {
    console.log('in equal function')
      $.ajax({
        method: 'POST',
        url: '/calculator',
        data: {
            num1: $('#input1').val(),
            operator: operator,
            num2: $('#input2').val(),
        }
    }).then(function(response) {
        console.log(response);
        getAnswer(); 
    });
}

function getAnswer(){
    console.log('in getAnswer');
    $.ajax({
        method: 'GET',
        url: '/calculator',
    }).then(function(response){
        $('#output').val('')
        renderToDOM(response);
    })
}

function clearFunc() {
    console.log('in clearFunc');
    $('#input1').val('');
    $('#input2').val('');
}

// RENDER TO DOM
// console log to make sure it works
// empty answer to prevent duplicates
// append answer
function renderToDOM(response){
 console.log('in renderToDOM');
  //avoid duplicates
  // have version with .value just to test
    $('#output').append(`
    <li>${response[0].total}</li> 
    <li>${input1.value} ${operator} ${input2.value}</li>
    `)  
}

// function answerOnDOM(answers) {
//     for(let answer of answers) {
//         $('#answer').append(`${answers.answerOutput}`)
//     }
// }
   

  
  
