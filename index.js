
  const res = document.querySelector('.item');
  const counterNum = document.querySelector('#numberCount');
  const arr = ['item', 'item1', 'item2'];
  let count = 0;
  let timer;

  function slider(){
    timer = setTimeout(work, 1500);
  }

  function work() {
     counter()
     res.className = arr[count];
      count +=1;
     if (count === arr.length ) {
      count = 0;
    }
    slider();
}

  const counter = ()=>{
    numbers = `<div>${count + 1}</div>`;
    counterNum.innerHTML = numbers;
  }

slider();

