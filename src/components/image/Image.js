import webpackImage from './webpack_image.png';

class Image{
    render() {
        const img = document.createElement('img');
        img.alt = 'webpackImage';
        img.src = webpackImage;
        img.width = 450;
        const body = document.querySelector("body");
        body.appendChild(img);
    }
}

export default Image;