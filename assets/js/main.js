let myElement = document.getElementsByClassName('example');
console.log(myElement);
let eLength = myElement.length;
console.log(eLength);

function myFunction() {

    if (myElement[0].style.backgroundColor == 'black') {
        for (let i = 0; i < eLength; i++) {
            myElement[i].style.backgroundColor = 'unset';
            myElement[4].style.color = 'black';
            myElement[4].style.backgroundColor = 'white';
        }
    } else {
        for (let i = 0; i < eLength; i++) {
            myElement[i].style.backgroundColor = 'black';
            myElement[4].style.color = 'white';
        }
    }
}