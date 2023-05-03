const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');



    if (tuboPosition <= 50 && tuboPosition > -85 && marioPosition < 85) {

        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './mario-morrendo.png';
        mario.style.width = '120px';
        mario.style.marginLeft = '30px'

        clearInterval(loop)
    }

}, 10); 

document.addEventListener('keydown', jump);