const btns = document.querySelectorAll('ul li');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    for (el of btns) el.classList.remove('on')
    btn.classList.add('on');
  })
})