document.getElementById("open_modal").addEventListener("click", function () {
    document.getElementById("modal").classList.add("open");
});
document.getElementById("close_modal").addEventListener("click", function () {
    document.getElementById("modal").classList.remove("open");
});

document.getElementById("button").addEventListener("click", function () {
    alert("Форма отправлена!");
    document.getElementById("modal").classList.remove("open");
});

document.getElementById("newsletter").addEventListener("click", function () {
    alert("Вы подписались на рассылку!\nТеперь на вашу почту будут приходить различные уведомления! :D");
});
