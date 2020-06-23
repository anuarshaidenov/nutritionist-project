let form = document.querySelector('.section-signup__left--signup-form');
let submitBtn = document.querySelector('#submit-btn');
let name = document.querySelector('#name');
let number = document.querySelector('#phone');
let description = document.querySelector('#description');
let error = document.querySelector('.error');
let success = document.querySelector('.success');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    fetch(form.getAttribute('action'), {
        method: 'POST',
        headers: {
            'Accept' : 'application/x-www-form-i-urlencoded;charset=UTF-8',
            'Content-type' : 'application/x-www-form-i-urlencoded;charset=UTF-8'
        },
        body: new URLSearchParams(formData).toString()
    })
    .then(res => {
        if (res) {
            success.classList.add('message-show');
        }
    });
});




// submitBtn.addEventListener('click', (event) =>{
//     event.preventDefault();

//     if(number.value == null || number.value == ""){
//         error.classList.add('message-show');
//     } else {
//         let fetchData = {
//             method: 'POST',
//             body: JSON.stringify({name: name.value, number: number.value, description: description.value}),
//             headers: {"Content-Type": "application/json"}
//         }
        

//         fetch('/signup', fetchData)
//             .then(res => {
//                 if (res.ok) {
//                     console.log('email has been sent');
//                     success.classList.add('message-show');
//                 } else {
//                     error.classList.add('message-show');
//                 }
//             })
//     }

// })

