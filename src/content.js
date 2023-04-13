function createContent() {
    const content = document.createElement("contentContainer");
    header.setAttribute("id","contentContainer");

    createContentChild(homeContainer);
    createContentChild(aboutContainer);
    createContentChild(menuContainer);
    createContentChild(hoursContainer);
    createContentChild(contactsContainer);

    return content;
}

function createContentChild(id) {
    const contentChild = document.createElement("div")
    content.appendChild(contentChild);
    contentChild.setAttribute("id", id);

//Add all the sub children
    return contentChild;
}

function appendContent() {
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.appendChild(createContent());
}