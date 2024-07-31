const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
      const image = {};
      image.src = URL.createObjectURL(blob);
      console.log(image);
  })



// new Promise(function (resolve,reject) {
//     const err = true 
//     if (!err) {
//         setTimeout(function() {
//             console.log('hello');
//             resolve({
//                 Usname : 'ramia',
//                 pas : 'aimar@123'
//             });
//           }, 1000);      
//     }
//     else{
//         reject('101 naman to you');
//     }
  
// })


// fetch('https://api.github.com/users/manikng') //fetch se data string format mai aata hai to use json mai convert karne ke liye .json() use karna padega
// .then((resp)=>{
// //   console.log(resp)
//   const data = resp.json();
//   //if you do not return anything then what will the next .then() recieves
//   //if it recieves nothing it will pass to catch its error
//   return data;
  
// }).then((data)=>{
//     console.log('username password is : ',data);
//     const userdetail  = data.login +' '+ data.id;
//     return userdetail;
// }).then((Udet)=>{
//     console.log(Udet);
// })
// .catch((err)=>{
//     console.log("E E E R R R OO O RRR :",err);
// }).finally(()=>{
//     console.log("thank you")
// })


// async function abc() {
//     // error = true 
//  try {
//     const data  = await fetch('https://api.githklub.com/users/manikng');
//     const Cmpltedata  = await data.json();
//     console.log(Cmpltedata);    
//  } catch (error) {
//     console.log('OOPSOSOSOSOSOSOSOSOSOSOS ');
//     console.log('I WIILL BE BACK RIGHT ');

//  }
//   }
//   abc();