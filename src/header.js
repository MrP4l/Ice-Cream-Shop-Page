function createHeader() {
    const header = document.createElement("header");
    header.setAttribute("id","header");

    createHeaderChild("Home");
    createHeaderChild("About");
    createHeaderChild("Ice-creams");
    createHeaderChild("Hours");
    createHeaderChild("Contacts");

    return header;
}

function createHeaderChild(text) {
    const headerChild = document.createElement("div")
    header.appendChild(headerChild);
    headerChild.textContent = text

    return headerChild;
}

function appendHeader() {
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.appendChild(createHeader());
}

export default appendHeader;