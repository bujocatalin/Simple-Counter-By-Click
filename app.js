const btns = document.getElementsByClassName('btn');

const decrease = btns[0];
const reset = btns[1];
const increase = btns[2];

let number = 0;

decrease.addEventListener('click', function () {
  number -= 1;
  document.getElementById('actionCount').textContent = number;
  if (number < 0) {
    document.getElementById('actionCount').style.color = 'red';
  } else if (number == 0) {
    document.getElementById('actionCount').style.color = ' rgb(35, 35, 35)';
  }
});

reset.addEventListener('click', function () {
  number = 0;
  document.getElementById('actionCount').textContent = number;
  document.getElementById('actionCount').style.color = ' rgb(35, 35, 35)';
});

increase.addEventListener('click', function () {
  number += 1;
  document.getElementById('actionCount').textContent = number;
  if (number > 0) {
    document.getElementById('actionCount').style.color = 'green';
  } else if (number == 0) {
    document.getElementById('actionCount').style.color = ' rgb(35, 35, 35)';
  }
});
