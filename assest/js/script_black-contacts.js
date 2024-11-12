document.getElementById("returnBlack").addEventListener("click",function() {
    document.getElementById("header").classList.add("black");
    document.getElementById("line").classList.add("black");
});

document.getElementById("removeBlack").addEventListener("click",function() {
    document.getElementById("header").classList.remove("black");
    document.getElementById("line").classList.remove("black");
});
