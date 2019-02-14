function getFirstSelector(selector) {
  const first = document.querySelector(selector);
  return first;
}

function nestedTarget() {
  const nested = document.getElementById('nested');
  const target = nested.getElementsByClassName('target');
  return target[0];
}

function deepestChild() {
  let grandNode = document.querySelectorAll('#grand-node div');
  return grandNode[grandNode.length - 1];
}

function increaseRankBy(n) {
  const lis = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = Number(lis[i].innerHTML) + parseInt(n)
  }
}
