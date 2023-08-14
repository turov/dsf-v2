const bBtn1 = document.querySelector('.brands-intro__item-1');
const bBtn2 = document.querySelector('.brands-intro__item-2');
const bBtn3 = document.querySelector('.brands-intro__item-3');
const bCnt1 = document.querySelector('.brands-desc-1');
const bCnt2 = document.querySelector('.brands-desc-2');
const bCnt3 = document.querySelector('.brands-desc-3');

bCnt2.style.display = 'none';
bCnt3.style.display = 'none';

bBtn2.onclick = function () {
    bCnt2.style.display = 'block';
    bCnt1.style.display = 'none';
    bCnt3.style.display = 'none';
}
bBtn1.onclick = function () {
    bCnt2.style.display = 'none';
    bCnt1.style.display = 'block';
    bCnt3.style.display = 'none';
}

bBtn3.onclick = function () {
    bCnt2.style.display = 'none';
    bCnt1.style.display = 'none';
    bCnt3.style.display = 'block'
}