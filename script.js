const submitBtn = document.querySelector('.submit-btn');
const textInput = document.querySelector('#inputJournal')

submitBtn.addEventListener('click', async(e)=>{
      e.preventDefault();
      const rawResponse = await fetch('http://localhost:3000/posts', {
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










