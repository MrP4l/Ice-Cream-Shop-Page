function createContent() {
    const content = document.createElement("contentContainer");
    content.setAttribute("id","contentContainer");

    content.appendChild(createContentChild("homeContainer"));
    content.appendChild(createContentChild("aboutContainer"));
    content.appendChild(createContentChild("menuContainer"));
    content.appendChild(createContentChild("hoursContainer"));
    content.appendChild(createContentChild("contactsContainer"));

    return content;
}

function createContentChild(id) {
    const contentChild = document.createElement("div")
    //content.appendChild(contentChild);
    contentChild.setAttribute("id", id);

//Add all the sub children
    return contentChild;
}

function appendContent() {
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.appendChild(createContent());
}

export default appendContent;