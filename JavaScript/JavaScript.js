resetjs();

function submitjs() {
    document.getElementById("target").innerHTML = document.getElementById("generated").innerHTML;
}

function resetjs() {
    document.getElementById("target").innerHTML = document.getElementById("submit").innerHTML;
}