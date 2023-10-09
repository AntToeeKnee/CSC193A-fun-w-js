const biggerButton = document.querySelector('#b1');
biggerButton.addEventListener('click', () => {
    alert('Hello World');
});

document.getElementById("user-input").style.fontSize = "24pt";

document.getElementById("b2").onchange = () => {
    document.getElementById("user-input").style.fontWeight = "bold";
    document.getElementById("user-input").style.color = "blue";
    document.getElementById("user-input").style.textDecoration = "underline";
    alert('Font Changed')
}

document.getElementById("b3").onchange = () => {
    document.getElementById("user-input").style.fontWeight = "normal";
    document.getElementById("user-input").style.color = "black";
    document.getElementById("user-input").style.textDecoration = "none";
    alert('Font Changed')
}