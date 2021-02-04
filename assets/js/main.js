const checkPass = document.querySelector('#check');
const checkInput = document.querySelector('#pass');

checkPass.addEventListener('click', function () {
    let type = checkInput.getAttribute('type') === 'password' ? 'text' : 'password';
    checkInput.setAttribute('type', type);
})