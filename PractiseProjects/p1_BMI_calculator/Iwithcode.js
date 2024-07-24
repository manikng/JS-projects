// const form = document.querySelector('form');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   console.log("is default prevented : ",e.defaultPrevented);
//   // const het = document.querySelector('#height');this is wrong
//   //why because we are in form and form ke ander cheeje different hoti hai 
//   //bcz hame uski value chahiye hoti hai
//   // const het =document.querySelector('#height').value; it is also wrong because 
//   //value to hai but integer nahi hai to int mai convert karna padega bcz form mai value text node ki tarah hi ja rahi hai na
//   // const het =Number(document.querySelector('#height').value); it is also incorrect because number mai tabhi convert ho payega jab string mai koi number hoga if a dala to execute to hoga but error hoga 
//   //so use parseInt
//   const het =parseInt(document.querySelector('#height').value); 
//   const wet =parseInt(document.querySelector('#weight').value);
//   const res = document.querySelector('#results');
//   if(het === ''||het < 0 ||isNaN(het)){
//     res.innerHTML = `Please Enter a Valid height your Heigt lue is ${het}`;
//   }
//   else if ( wet === ''||isNaN(wet) ||wet < 0 ){
//     res.innerHTML = `Please Enter a Valid weight  your weight  value is ${wet}`;
//   }
//   else {
//     const bmi = Number(wet / ((het * het) / 10000)).toFixed(2);
//     document.querySelector('.cal').innerHTML = bmi;
//     res.innerHTML = `BMI is ${bmi}`;
//   //   switch(bmi){
//   //     case (bmi <= 18.6) :res.innerText = `your BMI is ${bmi} and you are underweight`;
//   //     break;
//   //     case (bmi > 18.6 && bmi <24.9) :res.innerText = `CONGRATULATIONS LETS CELEBRATIONS ON BEING NORMAL ...'\n'
//   //     your BMI is ${bmi} and you are underweight`;
//   //     break;
//   //     case (bmi  > 24.9) :res.innerText = `DANGER DANGER DANGER ... '\n'your BMI is ${bmi} and you are OVERweight`;
//   //     break;
//   //     default : res.innerHTML = "kya khu mai ab ";
//   //     break;
//   //   }//switch ended 

    
//   // }
  
//   }
  
// });
// const form = document.querySelector('form');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   console.log("is default prevented:", e.defaultPrevented);

//   const het = parseInt(document.querySelector('#height').value); 
//   const wet = parseInt(document.querySelector('#weight').value);
//   const res = document.querySelector('#results');

//   if (isNaN(het) || het <= 0) {
//     res.innerHTML = `Please Enter a Valid height. Your height value is ${het}`;
//   } else if (isNaN(wet) || wet <= 0) {
//     res.innerHTML = `Please Enter a Valid weight. Your weight value is ${wet}`;
//   } else {
//     const bmi = (wet / ((het * het) / 10000)).toFixed(2);
//     document.querySelector('.cal').innerHTML = bmi;
//     res.innerHTML = `BMI is ${bmi}`;

//     if (bmi <= 18.6) {
//       res.innerText = `Your BMI is ${bmi} and you are underweight.`;
//     } else if (bmi > 18.6 && bmi < 24.9) {
//       res.innerText = `CONGRATULATIONS! LET'S CELEBRATE BEING NORMAL! Your BMI is ${bmi}.`;
//     } else if (bmi >= 24.9) {
//       res.innerText = `DANGER DANGER DANGER... Your BMI is ${bmi} and you are overweight.`;
//     } else {
//       res.innerHTML = "Something went wrong!";
//     }
//   }
// });
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log("is default prevented:", e.defaultPrevented);

  const het = parseInt(document.querySelector('#height').value); 
  const wet = parseInt(document.querySelector('#weight').value);
  const res = document.querySelector('#results');

  if (isNaN(het) || het <= 0) {
    res.innerHTML = `Please Enter a Valid height. Your height value is ${het}`;
  } else if (isNaN(wet) || wet <= 0) {
    res.innerHTML = `Please Enter a Valid weight. Your weight value is ${wet}`;
  } else {
    const bmi = (wet / ((het * het) / 10000)).toFixed(2);
    document.querySelector('.cal').innerHTML = bmi;
    res.innerHTML = `BMI is ${bmi}`;
//jb bhi u want to use complex statements in case like      case (bmi <= 18.6): so conditional 
//statements in case state beside simple number like 1,2,3,4, etc case 1: case 2: etc 
//in that case whenever u have to use conditional checks inside the switch statement u have to make that 
//switch(true)->lead true answers make like that besides of switch(val)->it will lead incorrect ans always
    switch (true) {
      case (bmi <= 18.6):
        res.innerText = `Your BMI is ${bmi} and you are underweight.`;
        break;
      case (bmi > 18.6 && bmi < 24.9):
        res.innerText = `CONGRATULATIONS! LET'S CELEBRATE BEING NORMAL! Your BMI is ${bmi}.`;
        break;
      case (bmi >= 24.9):
        res.innerText = `DANGER DANGER DANGER... Your BMI is ${bmi} and you are overweight.`;
        break;
      default:
        res.innerHTML = "Something went wrong!";
        break;
    }
  }
});
