const moon = document.getElementById('returnBlack');

function returnBlack(black) {
    const body = document.getElementById("body");
    const footer = document.getElementById("footer");
    const sun = document.getElementById("sun");
    const header = document.getElementById("header");
    const line = document.getElementById("line");


    if (black) {
        body.classList.add("black");
        footer.classList.add("black");
        moon.classList.add("black");
        header.classList.add("black");
        line.classList.add("black");

        moon.id = "removeBlack";
        sun.src = "./assest/image/result_islam8438-no-bg-preview (carve.photos).png";
    } else {
        body.classList.remove("black");
        footer.classList.remove("black");
        moon.classList.remove("black");
        header.classList.remove("black");
        line.classList.remove("black");

        moon.id = "returnBlack";
        sun.src = "./assest/image/result_3dac58864881d859b7da50510e9daa13-no-bg-preview%20(carve.photos).png";
    }
}

moon.addEventListener("click", function() {
    const black = moon.id === "returnBlack";

    returnBlack(black);

    localStorage.setItem("theme", black ? "black" : "");

    console.log(moon.id);
});

window.addEventListener("load", function() {
    const saveLocal = localStorage.getItem("theme");
    if (saveLocal === "black") {
        returnBlack(true);
    } else {
        returnBlack(false);
    }
});