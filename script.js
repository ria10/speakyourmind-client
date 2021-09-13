      const submitBtn = document.querySelector('.submit-btn');
      const textInput = document.querySelector('#inputJournal')
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



  submitBtn.addEventListener('click', async(e)=>{
      e.preventDefault();
      const rawResponse = await fetch('http://localhost:50001/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text: textInput.value})
    });
    const content = await rawResponse.json();
  
    console.log(content);
  })


//   form.addEventListener('submit', async (e)=>{
//     e.preventDefault();
//     const post = textInput.value
//     const payload = {
//         "text":post
//     }
//     console.log(post)
//    const data = await fetch('http://localhost:50001/posts/',{headers:{'Accept':'application/json', 'content-Type':'application/json'}}, {method:"POST", body:JSON.stringify(payload)} )
//   const res = await data.json();
//   console.log(res);
//   })





