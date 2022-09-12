const main = document.querySelector('main')
const btns = main.querySelectorAll('ul li');

btns.forEach((btn, idx) => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    main.className = `bg${idx + 1}`;

    for (el of btns) el.classList.remove('on')
    btn.classList.add('on');
  })
})