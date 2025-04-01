const container = document.querySelector(".container");

container.addEventListener("click", exe);

function exe(e) {
    toUI(e);
    deleteFromUI(e);
    changeContent(e);
}

function toUI(e) {
    if (e.target.className === "add-note") {


        const divtitle = document.createElement("div");
        divtitle.className = "note-title";
        const i = document.createElement("i");
        i.className = "bx bxs-edit-alt prepare";
        const titleDiv = document.createElement("div");
        titleDiv.className = "title-div";
        const h4 = document.createElement("h4");
        h4.textContent = prompt("Not başlığını giriniz: ")
        const i2 = document.createElement("i");
        i2.className = "bx bxs-message-square-x delete"
        const theNoteDiv = document.createElement("div");
        theNoteDiv.className = "note-theNote";
        const p = document.createElement("p");
        p.textContent = prompt("Not içeriğinizi giriniz :");

        theNoteDiv.appendChild(p);

        divtitle.appendChild(i);
        titleDiv.appendChild(h4);
        divtitle.appendChild(titleDiv);
        divtitle.appendChild(i2);

        if (h4.textContent != "" && p.textContent != "") {
            e.target.parentElement.classList.remove("note-wrapper-add");
            e.target.parentElement.classList.add("note-wrapper");
            e.target.parentElement.appendChild(divtitle);
            e.target.parentElement.appendChild(theNoteDiv);
            e.target.remove();
        }
        else {
            alert("Geçersiz başlık ve ya not girimi!!");
        }


    }
}

function deleteFromUI(e) {
    if (e.target.className === "bx bxs-message-square-x delete") {
        const wrapper = e.target.parentElement.parentElement;
        wrapper.classList.add("note-wrapper-add");
        wrapper.classList.remove("note-wrapper");

        const childs = Array.from(e.target.parentElement.parentElement.children);
        childs.forEach((child) => {
            child.remove();
        })

        const button = document.createElement("button");
        button.className = "add-note";
        button.textContent = "Add Note";
        wrapper.appendChild(button);

        // e.target.parentElement.parentElement.classList.add("note-wrapper-add");

    }
}
function changeContent(e) {
    if (e.target.className === "bx bxs-edit-alt prepare") {
        const degistirIconu = e.target;
        const secim = prompt("Başlığı(1) mı yoksa içeriği mi(2) yoksa her ikisini de mi değiştirmek istiyorsunuz?(3) Tuşlama yapınız.");
        if (secim === "1") {
            const yeniBaslik = prompt("Yeni başlığı giriniz: ")
            degistirIconu.parentElement.children[1].children[0].textContent = yeniBaslik;
        }
        else if (secim === "2") {
            const yeniIcerik = prompt("Yeni içeriği yazınız: ")
            degistirIconu.parentElement.parentElement.children[1].children[0].textContent = yeniIcerik;
        }
        else if (secim === "3") {
            const yeniBaslik = prompt("Yeni başlığı giriniz: ");
            degistirIconu.parentElement.children[1].children[0].textContent = yeniBaslik;
            const yeniIcerik = prompt("Yeni içeriği yazınız: ")
            degistirIconu.parentElement.parentElement.children[1].children[0].textContent = yeniIcerik;
        }
        else {
            alert("Hata");
        }
    }
}


























{/* <div class="note-wrapper">
    <div class="note-title">
        <i></i>
        <h4></h4>
        <i></i>
    </div>
</div>  */}