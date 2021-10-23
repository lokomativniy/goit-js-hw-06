//     <style>
//     .login-form {
//       max-width: 320px;
//       display: flex;
//       flex-direction: column;
//     }

//     .login-form label {
//       margin-bottom: 16px;
//     }

//     .login-form input,
//     .login-form button {
//       width: 100%;
//       padding: 4px;
//       font: inherit;
//     }
//   </style>
// </head>
// <body>
//   <p><a href="index.html">Go back</a></p>

//   <form class="login-form">
//     <label>
//       Email
//       <input type="email" name="email" />
//     </label>
//     <label>
//       Password
//       <input type="password" name="password" />
//     </label>
//     <button type="submit">Login</button>
//   </form>

const form = document.querySelector('.login-form');
console.log(form);
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
   const password = formElements.password.value;
   const formData = new FormData(event.currentTarget)
   console.log(formData);
  if ((mail && password) === '') {
    alert('Пожалуйста заполните поле ')
   };
  const user = {
    email: formElements.email.value,
    password: formElements.password.value,
  };
  console.log(user);
   form.reset()
}
