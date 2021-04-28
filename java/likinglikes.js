var count = 1;
var countElement = document.querySelector("#count")

function add1() {
    count ++
    countElement.innerHTML = count + " like(s)"
    console.log(count)
}