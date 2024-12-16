const openModal = (id) => {
    document.getElementById("open-msc-" + id + '00').addEventListener("click",function() {
        console.log("click")
        document.getElementById("modal-msc-" + id).classList.add("open")
    });
};

const closeModal = (id) => {
    document.getElementById("close_modal-" + id).addEventListener("click",function() {
        document.getElementById("modal-msc-" + id).classList.remove("open")
    });
}

for (let i=1; i<31; i++) {
    openModal(i);
    closeModal(i);
};
