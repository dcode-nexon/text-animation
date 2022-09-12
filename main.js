const main = document.querySelector('main')
const btns = main.querySelectorAll('ul li');
const boxs = main.querySelectorAll('article');

boxs.forEach((box, idx) => {
  const h1 = box.querySelector('h1');
  const txt = h1.innerText;
  let tags = '';

  for (el of txt) tags += `<span>${el}</span>`;
  h1.innerHTML = tags;
})

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