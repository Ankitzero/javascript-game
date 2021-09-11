let b = null;
let arr =[];
function fun(a) {
    if(arr.length == 2) {
        b = arr.shift();
        b.style.backgroundColor = "blue";
        b.style.color = "white";
    }
    a.style.backgroundColor = "red";
    a.style.color = "white";
    arr.push(a);
}