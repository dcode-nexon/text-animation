const main = document.querySelector('main')
const btns = main.querySelectorAll('ul li');
const boxs = main.querySelectorAll('article');

btns.forEach((btn, idx) => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    main.className = `bg${idx + 1}`;

    for (el of btns) el.classList.remove('on');
    for (el of boxs) el.classList.remove('on');
    btns[idx].classList.add('on');
    boxs[idx].classList.add('on');

  })
})