const scriptURL = 'https://script.google.com/macros/s/AKfycbzYw4YklOXDiZXABGy9dN91-HOUt4MjdNrHk-9sl7i24MJecVc3jOOD7c43jz8LeFmG/exec';
const form = document.forms['contact-portofolio'];
const btnSend = document.querySelector('.btn-send');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.alert');

form.addEventListener('submit', e => {
  e.preventDefault()
  // Ketika tombol submit di klik
  btnLoading.classList.toggle('d-none');
  btnSend.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      btnLoading.classList.toggle('d-none');
      btnSend.classList.toggle('d-none');
      myAlert.classList.toggle('d-none');
      form.reset();
      console.log('Success!', response); })
    .catch(error => console.error('Error!', error.message))
})

AOS.init();
gsap.registerPlugin(TextPlugin);
gsap.to('.nama', {duration: 2, text: 'Hello, I am Muhammad Daffa Mahendra Putra' })