document.getElementById("returnBlack").addEventListener("click",function() {
    document.getElementById("body").classList.add("black");
    document.getElementById("footer").classList.add("black");
});

document.getElementById("removeBlack").addEventListener("click",function() {
    document.getElementById("body").classList.remove("black");
    document.getElementById("footer").classList.remove("black");
});

