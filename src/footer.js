function createFooter() {
    const footer = document.createElement("footer");
    footer.setAttribute("id", "footer");

    const year = new Date().getFullYear();

    const paragraph = document.createElement("p");
    paragraph.textContent = "Copyright © " + year + " MrP4l";

    const link = document.createElement("a");
    link.setAttribute("href", "https://github.com/MrP4l");
    link.setAttribute("target", "_blank");

    const icon = document.createElement("i");
    icon.setAttribute("class", "fa fa-github");

    footer.appendChild(paragraph);
    footer.appendChild(link);
    link.appendChild(icon);

    return footer;
}

function appendFooter() {
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.appendChild(createFooter());
}

export default appendFooter;