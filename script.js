  const submitBtn = document.querySelector('.submit-btn');
  const textInput = document.querySelector('#inputJournal')
  const form = document.querySelector('form')


//   submitBtn.addEventListener('click', async(e)=>{
//       e.preventDefault();
//       const post = textInput.value
//       const payload = {
//           "text":post
//       }
//       console.log(post)
//      const data = await fetch('http://localhost:50001/posts/',{headers:{'Accept':'application/json', 'content-Type':'application/json'}}, {method:"POST", body:JSON.stringify(payload)} )
//     const res = await data.json();
//     console.log(res);
//   })


form.addEventListener('submit', async (e)=>{
  e.preventDefault();
    const post = textInput.value
    console.log(post)
    const payload = {
        "text":post
    }
    const rawResponse = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 1, b: 'Textual content'})
    });
    const content = await rawResponse.json();
  
    console.log(content);
  });






