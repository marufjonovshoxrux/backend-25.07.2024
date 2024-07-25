// import Toastify from 'toastify-js'
// import "toastify-js/src/toastify.css"
// Toastify({
//   text: "This is a toast",
//   className: "info",
//   style: {
//     background: "linear-gradient(to right, #00b09b, #96c93d)",
//   }
// }).showToast();



const form = document.forms.namedItem('signon')


form.onsubmit = async (e) => {
    e.preventDefault();


    const Bank = {
        email: new FormData(form).get('email'),
        name: new FormData(form).get('name'),
        surname: new FormData(form).get('surname'),
        password: new FormData(form).get('password'),

    }

    console.log(Bank);
}