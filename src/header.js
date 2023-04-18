function createHeader() {
    const header = document.createElement("header");
    header.setAttribute("id","header");

    header.appendChild(createHeaderChild("Home")).setAttribute("id", "home");
    header.appendChild(createHeaderChild("About")).setAttribute("id", "about");
    header.appendChild(createHeaderChild("Flavors")).setAttribute("id", "flavors");
    header.appendChild(createHeaderChild("Opening Hours")).setAttribute("id", "openingHours");
    header.appendChild(createHeaderChild("Contacts")).setAttribute("id", "contacts");

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