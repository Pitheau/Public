

function vote(id){
    var element = document.querySelector(id);
    var newText = parseInt(element.innerText) + 1;
    element.innerText = newText;
}