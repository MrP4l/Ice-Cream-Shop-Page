function scrollFromTo(from, to) {
    const button = document.getElementById(from);
    const target = document.getElementById(to);
    button.addEventListener("click", () => {
        target.scrollIntoView({ 
            behavior: 'smooth' 
    })
});
}

function scrollFromToEffect() {
    scrollFromTo("home", "homeContainer");
    scrollFromTo("about", "aboutContainer");
    scrollFromTo("flavors", "menuContainer");
    scrollFromTo("openingHours", "hoursContainer");
    scrollFromTo("contacts", "contactsContainer");
}

export default scrollFromToEffect;
