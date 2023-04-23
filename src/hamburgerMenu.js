function hamburgerMenu() {
    const mediaQuery = window.matchMedia('(max-width: 425px)');

    const firstChild = header.firstChild;
    const icon = document.querySelector(".icon");

    if (mediaQuery.matches) {
        header.classList.add("hamburgerHeader");
        header.classList.add("close");
        if (firstChild != icon) {
            createIcon();
        }
        addOpenClose();
    } else {
        header.classList.remove("hamburgerHeader");
        if (firstChild === icon) {
            header.removeChild(icon);
        }
    }

}

function addOpenClose() {
    let open = true;
    const icon = document.querySelector(".icon");
  
    icon.addEventListener("click", () => {
      if (open === true) {
        textContainer.classList.add("inv");
        header.classList.remove("close");
        open = false;
    } else {
        textContainer.classList.remove("inv");
        header.classList.add("close");
        open = true;
      }
    });

    const children = header.children;

    for (let i = 1; i < children.length; i++) {
        const child = children[i];
        child.addEventListener("click", () => {
          textContainer.classList.remove("inv");
          header.classList.add("close");
          open = true;
        });
    }
}

function createIcon() {

    const hamburgerIcon = document.createElement("i");
    hamburgerIcon.classList.add("fa");
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.add("fa-2x");
    hamburgerIcon.classList.add("icon");
    hamburgerIcon.ariaHidden = true;
    header.prepend(hamburgerIcon);
    
    return hamburgerIcon;
}

function createHamburger() {
    hamburgerMenu();
    window.addEventListener('resize', hamburgerMenu);
}


export default createHamburger;