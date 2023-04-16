function createContent() {
    const content = document.createElement("div");
    content.setAttribute("id","contentContainer");

    const homeContainer = content.appendChild(createTypeElementWithId("div", "homeContainer"));
    const aboutContainer = content.appendChild(createTypeElementWithId("div", "aboutContainer"));
    const menuContainer = content.appendChild(createTypeElementWithId("div","menuContainer"));
    const hoursContainer = content.appendChild(createTypeElementWithId("div", "hoursContainer"));
    const contactsContainer = content.appendChild(createTypeElementWithId("div", "contactsContainer"));

    const shopName = createTypeElementWithId("h1", "shopName");
    shopName.textContent = "Gelateria FraMa";
    homeContainer.appendChild(shopName);
    
    const aboutUs = createTypeElementWithId("p", "aboutUs");
    aboutUs.textContent = "From an ancient fourth generation family of ice cream makers from Germany " + 
                        "who settled first in Zoldo Alto and then in Ancona, owners of the historic " + 
                        "and oldest ice cream shop in Ancona. Come and try our ice cream that mixes " + 
                        "tradition and modernity, bringing innovation to the cone every year."
    aboutContainer.appendChild(aboutUs);

    const firstRowMenuContainer = createTypeElementWithId("div", "firstRow");
    const secondRowMenuContainer = createTypeElementWithId("div", "secondRow");
    menuContainer.appendChild(firstRowMenuContainer);
    menuContainer.appendChild(secondRowMenuContainer);

    const flavorsArray = ["Stracciatella", "Cioccolato", "Limone", "Pino Pinguino", "Pura Vida", "La Bella Siciliana",
                    "Ciak Si Gira", "Etna"];
    const descrArray = ["Stracciatella is a flavor of ice cream based on milk and cream with dark chocolate, born in Bergamo.",
                        "Chocolate ice cream is one of the most appreciated flavors by those with a sweet tooth. With a creamy consistency and intense flavour, it goes perfectly with different flavors of ice cream.",
                        "Lemon is a thirst-quenching and digestive flavour, which is why it is required all year round and goes easily with all fruit flavours. For the realization of the lemon flavor only natural and high quality products are used, such as the IGP Sorrento lemon.",
                        "Unique and inimitable for its creaminess and ability to wrap the ice cream in a soft embrace with an intense chocolate and hazelnut flavour. Also ideal for creating delicious soft ice creams and for preparing exquisite drinks, both refreshing and hot.",
                        "Pumpkin seed ice cream with a blueberry variegate.",
                        "Ricotta-based ice cream with pistachio wafer variegate and lemon biscuits.",
                        "Ciak Si Gira ice cream is a fiordipanna with caramelized popcorn.",
                        "Etna ice cream is a salted pistachio variegated with almonds."]
    

    for (let i = 0; i < 8; i++) {
        const div = document.createElement("div");
        div.setAttribute("id", "card" + i);
        if (i < 4) {
            firstRowMenuContainer.appendChild(div);
        }
        else {
            secondRowMenuContainer.appendChild(div);
        }
        const titles = document.createElement("h2");
        div.appendChild(titles);
        const descr = document.createElement("p");
        div.appendChild(descr);
        titles.textContent = flavorsArray[i];
        descr.textContent = descrArray[i];
    }

    const hoursArray = ["Opening Hours | March - October", "Monday 14.00 - 24.00", "Tuesday 14.00 - 24.00", 
                    "Wednesday 14.00 - 24.00", "Thursday 14.00 - 24.00", "Friday 14.00 - 24.00", "Saturday 12.00 - 24.00",
                    "Sunday 12.00 - 24.00"]
    const openingHoursContainer = document.createElement("div");
    hoursContainer.appendChild(openingHoursContainer);
    for (let i = 0; i < 8; i++) {
        const div = document.createElement("p");
        div.setAttribute("id", "row" + i);
        openingHoursContainer.appendChild(div);
        div.textContent = hoursArray[i];
    }

    const contactsArray = ["Contact us or come and see us! - Ancona, Via FraMa 2301", "3963352411", "lfJob@gmail.com", "GitHub - MrP4l"]
    const contacts = document.createElement("div");
    contactsContainer.appendChild(contacts);
    for (let i = 0; i < 4; i++) {
        const div = document.createElement("p");
        div.setAttribute("id", "row" + i);
        contacts.appendChild(div);
        div.textContent = contactsArray[i];
    }

    return content;
}

function createTypeElementWithId(type, id) {
    const element = document.createElement(type);
    element.setAttribute("id", id);

    return element;
}

function appendContent() {
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.appendChild(createContent());
}

export default appendContent;