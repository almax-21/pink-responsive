const rates = document.querySelector('.rates');
const table = rates.querySelector('.rates__table');
const tableDotsList = rates.querySelectorAll('.dots__dot');
const tableDots = Array.prototype.slice.call(tableDotsList);

const addTableDotClickHandler = (dot, index) => {
  dot.onclick = () => {
    tableDots.map((dot) => dot.classList.remove('dots__dot--active'));
    dot.classList.add('dots__dot--active');

    const multiplier = index + 1;
    const percent = multiplier * 33 - 16;  // magic =)
    table.setAttribute('style', `transform: translateX(-${percent}%)`);
  };
};

for (let i = 0; i < tableDots.length; i += 1) {
  addTableDotClickHandler(tableDots[i], i);
}
