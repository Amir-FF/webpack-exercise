import './sass/style.scss';
import Button from './components/button/Button.js';
import Image from './components/image/Image.js';
import bootstrap from 'bootstrap'
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

const button = new Button();
button.render();

const image = new Image();
image.render();