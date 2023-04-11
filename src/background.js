import './style.css';
import MyImage from './img_one.jpg'

function Background() {
    const background = document.createElement('div');
    const myImage = new Image();
    myImage.src = MyImage;
    background.appendChild(myImage);
    const mainContainer = document.getElementById('mainContainer');
    mainContainer.appendChild(background);
    return mainContainer;
}

