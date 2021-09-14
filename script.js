const submitBtn = document.querySelector('.submit-btn');
const textInput = document.querySelector('#inputJournal')
const baseUrl = 'http://localhost:3000'


submitBtn.addEventListener('click', async(e)=>{
e.preventDefault();
const rawResponse = await fetch(`${baseUrl}/posts`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({text: textInput.value})
});

Toastify({
  text: "This is a toast",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  stopOnFocus: true, // Prevents dismissing of toast on hover
  onClick: function(){} // Callback after click
}).showToast();
const content = await rawResponse.json();

console.log(content);

let h3 = document.createElement('h3') 
h3.textContent = content.text
document.getElementById('container').appendChild(h3);

let p = document.createElement('p')

p.textContent = content.date
document.getElementById('container').appendChild(p)
})

window.onload = async function (){
const rawResponse  = await fetch('http://localhost:3000/posts')
const content = await rawResponse.json()

console.log(content)

for (post of content){
  let h3 = document.createElement('h3') 
  h3.textContent = post.text
  let p = document.createElement('p')
  p.textContent = post.date
  document.getElementById('container').append(h3)
  document.getElementById('container').append(p)   
  
}   
}

// making toasty messages, can configure default in the options

toasty.error("This is an invalid entry. Please enter between 2-1000 characters.")

//   const form = document.querySelector('form')

//   (async () => {
//     const rawResponse = await fetch('http://localhost:50001/posts', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({text: "Ria10"})
//     });
//     const content = await rawResponse.json();

//     console.log(content);
//   })();





