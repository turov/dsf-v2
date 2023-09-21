const blocks = document.querySelectorAll('.js-floated');

// То значение, на которое мы смещаем в при классе sunk см. стили
const OFFSET = 1000;

// block.classList.add('sunk');

blocks.forEach(block => {
    block.classList.add('sunk');
    window.onscroll = () => {
        if ((window.pageYOffset + window.innerHeight) >= (block.offsetTop - OFFSET)) {
            block.classList.remove('sunk');
        }
    };
})

// window.onscroll = () => {
//     if ((window.pageYOffset + window.innerHeight) >= (block.offsetTop - OFFSET)) {
//         block.classList.remove('sunk');
//     }
// };