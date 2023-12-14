let imgbox = document.getElementById('imgbox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');
function generateQR(event) {
    console.log(event);
    event.preventDefault();
    if (qrText.value.length > 0) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgbox.style.display="block"
    imgbox.classList.add('show-img');
    qrText.value=""
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        },1000);
    }
}