
// const res = document.querySelector('.item');
// const ceil = document.querySelector('.reset');
//
// function work() {
//   if (this.innerText === 'нажали') {
//     ceil.innerText = 'нажать';
//     res.className = 'item';
//     return;
//   }
//   if (this.innerText === 'нажать') {
//     ceil.innerText = 'нажали';
//     res.className = 'item1';
//     return;
//   }
//   }
//
//   ceil.addEventListener("click", work);

  // const res = document.querySelector('.item');
  // const ceil = document.querySelector('.reset');
  
  // function work() {
  //   if (this.innerText === 'нажали') {
  //     ceil.innerText = 'нажать';
  //     res.className = 'item';
  //     return;
  //   } else {
  //     ceil.innerText = 'нажали';
  //     res.className = 'item1';
  //     return;
  //   }
  //   }
  
  //   ceil.addEventListener("click", work);

// let res = document.getElementsByClassName('.item');
// const ceil = document.getElementsByClassName('.reset');
// stepCount = 0;

// function work() {
//   document.querySelector('reset').innerHTML = 'r';
//   stepCount +=1;
// }
// ceil.addEventListener("click", work);


//   const res = document.querySelector('.item');
//   const ceil = document.querySelector('.reset');
//   const arr = ['item', 'item1', 'item2'];
//   let count = 2;

//   function work() {
//   if (count === 1) {
//       res.className = arr[0];
//        } else if (count === 2) {
//       res.className = arr[1];
//     } else if (count === 3) {
//       res.className = arr[2];
//                 count = 0;
//     }
//     count += 1;
// }
//     ceil.addEventListener("click", work);
  

// // Автослайдер

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

// ______________________________________________

//   const res = document.querySelector('#kvadro');
//   const resetButton = document.querySelector('.reset');
//   const counter = document.querySelector('#newId');
//   const arr = ['kvadrat', 'item1', 'item2', 'item3'];
//   let count = 0;

//   function work() {
//     count +=1;
//   if (count === 0) {
//      res.className = arr[0];
//       } else if (count === 1) {
//      res.className = arr[1];
//     } else if (count === 2) {
//       res.className = arr[2];
//     }else if (count === 3) {
//       res.className = arr[3];
//     } else if (count === 4) {
//       res.className = arr[0];
//       count = 0;
//     } 
   
//     // for (i = 0; i < arr.length; i++){
//     //   res.addEventListener("click", work); 
//     // }
// }

// const workout = ()=>{
//   work()
//   numberCount = `${count}`
//   counter.innerHTML = numberCount;
// }

// function resetResponse(){
//   count = 0;
//   numberCount = `${count}`
//   counter.innerHTML = numberCount;
//   res.className = arr[0];
// }

// // const autoChange = setInterval(()=>{
// //   workout()
// // }, 1000);

//   counter.addEventListener("click", workout);
//   resetButton.addEventListener("click", resetResponse);
// ____________________________________________________________________________________________________________




// const ceil = document.querySelector('.reset');
// let arr = [
//   {
//     id:1;
//     title:'120';
//     img:'done'
//   },
//   {
//     id:1;
//     title:'120';
//     img:'done'
//   },
//   {
//     id:1;
//     title:'120';
//     img:'done'
//   }
// ]
