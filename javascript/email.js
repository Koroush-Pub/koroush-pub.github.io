
function textChange(){

document.querySelector('#send_b').classList.remove("send_butt")
document.querySelector('#send_b').classList.add("send_butt_after")

document.querySelector("#send_b").value = "I will respond as soon as possible!"

}

function secret() {
  console.log("Hello fellow adventurer,")
  console.log("If you need to encrypt your message, this is my public key :")
  console.log("https://drive.google.com/file/d/1JbHizJWRPcGDkboUbWLZORixuf5QZsfi/view?usp=sharing")

}

// document.getElementById('send_b').disabled = !cansubmit;
document.querySelector('.send_butt').addEventListener('click',textChange)
secret()
