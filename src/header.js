function createHeader() {
    const header = document.createElement("header");
    header.setAttribute("id","header");

    header.appendChild(createHeaderChild("Home"));
    header.appendChild(createHeaderChild("About"));
    header.appendChild(createHeaderChild("Ice-creams"));
    header.appendChild(createHeaderChild("Hours"));
    header.appendChild(createHeaderChild("Contacts"));

    return header;
}

function createHeaderChild(text) {
    const headerChild = document.createElement("div")
    headerChild.textContent = text

    return headerChild;
}

function appendHeader() {
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.appendChild(createHeader());
}

export default appendHeader;