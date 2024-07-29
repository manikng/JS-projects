const clrcodediv = document.querySelector('.clrcode');

function startChanging() {
  if (!window.interval) {
    window.interval = setInterval(() => {
      const color = document.body.style.backgroundColor = randomColor();
      clrcodediv.innerHTML = `<h4>${color}</h4>`;
    }, 1000);
  }
}

const randomColor = () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += '0123456789ABCDEF'[Math.floor(Math.random() * 16)];
  }
  return color;
};

document.querySelector('#start').addEventListener('click', startChanging);

document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(window.interval);
  window.interval = null;
});


// let interval;

// document.querySelector('#start').addEventListener('click', () => {
//   if (!interval) {
//     interval = setInterval(() => {
//       document.body.style.backgroundColor = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`;
//       document.querySelector('.clrcode').innerHTML = `<h4>${document.body.style.backgroundColor}</h4>`;
//     }, 1000);
//   }
// });

// document.querySelector('#stop').addEventListener('click', () => {
//   clearInterval(interval);
//   interval = null;
// });




//hue code===================
// document.querySelector('#start').addEventListener('click', () => {
//   if (!window.intervalId) {
//     window.intervalId = setInterval(updateBackgroundColor, 1000);
//   }
// });

// document.querySelector('#stop').addEventListener('click', () => {
//   clearInterval(window.intervalId);
//   window.intervalId = null;
// });

// const colorCodeDiv = document.querySelector('.clrcode');

// function updateBackgroundColor() {
//   const color = getRandomColorWithHue();
//   document.body.style.backgroundColor = color;
//   colorCodeDiv.innerHTML = `<h4>${color}</h4>`;
// }

// function getRandomColorWithHue() {
//   // Generate a random hue value (0 to 360 degrees)
//   const hue = Math.floor(Math.random() * 360);
//   // Use full saturation and lightness for vibrant colors
//   return `hsl(${hue}, 95%, 35%)`;
// }



// // whenever possible try to not create extra variables
// // const start = document.querySelector('#start');
// // const stop = document.querySelector('#stop');
// // var bodyColor = document.body.style.backgroundColor;
// const clrcodediv = document.querySelector('.clrcode');
// let Interval;

// function startChanging() {
  //   if (!Interval) {
//     //if intervl is null then only change clr
//     Interval = setInterval(Changingstart, 1000);}

//   function Changingstart() {
  //     let c = document.body.style.backgroundColor = randomColor();
  //     clrcodediv.innerHTML = `<h4>${c}</h4> `;}
  // }
  // const randomColor = ()=> {
    //   const hexcode = '0123456789ABCDEF';
    //    colorcode = '#';
    //   for (let i = 0; i < 6; i++) {
      //     colorcode += hexcode[Math.floor(Math.random() * 16)];
      //   }
      //   // console.log(colorcode);
      //   return colorcode;
      // };
      
      // const randomColor = function () {
        //   const hex = '0123456789ABCDEF';
        //   let color = '#';
        //   for (let i = 0; i < 6; i++) {
          //     color += hex[Math.floor(Math.random() * 16)];
          //   }
          //   return color;
          // };
          
          // document.querySelector('#start').addEventListener('click', startChanging);
          
          // document.querySelector('#stop').addEventListener('click', function () {
          //   clearInterval(Interval);
          //   Interval = null;
          // });




//new app---------------------------------
// let intervalId;
// const startChangingColor = function () {
//   if (!intervalId) {
//     intervalId = setInterval(changeBgColor, 1000);
//   }

//   function changeBgColor() {
//     document.body.style.backgroundColor = randomColor();
//   }
// };
// const stopChangingColor = function () {
//   clearInterval(intervalId);
//   intervalId = null;
// };

// document.querySelector('#start').addEventListener('click', startChangingColor);

// document.querySelector('#stop').addEventListener('click', stopChangingColor);

//more better

