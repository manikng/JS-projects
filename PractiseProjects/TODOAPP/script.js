const task = document.querySelector('#usertasklist');
const userIofield = document.querySelector('#input');

function usertaskadder() {
    let userIo = userIofield.value;
    console.log(userIo);
    if (userIo === '') {
        alert('Please enter something to add');
    } else {
       const li = document.createElement('li')
       li.innerText = userIo;
       console.log(li.innerText)
       task.appendChild(li);
    }
    // userIofield.value = '';
}