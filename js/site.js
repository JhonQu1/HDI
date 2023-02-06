// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function generateOTP() {
    var digits = "0123456789";
    let OTP = '';

    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];

    }
    var span = document.querySelector('.codigoOTP span');
    span.innerHTML = OTP;
}



    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
        myInput.focus()
    })



    const numeroDocumento = document.getElementById("numeroDocumento")
    const formulario = document.getElementById("")
                                        