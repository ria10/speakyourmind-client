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
    
    const content = await rawResponse.json();
   
  
    console.log(content);
    Toastify({
        text: "Post created successfully",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function(){} // Callback after click
      }).showToast();

    let h5 = document.createElement('h5') 
    h5.textContent = content.text
    const containerDiv = document.getElementById('container');
    let p = document.createElement('p')

    p.textContent = content.date

    containerDiv.insertBefore(p, containerDiv.firstChild)

    containerDiv.insertBefore(h5, containerDiv.firstChild)

    

    


   
    //document.getElementById('container').appendChild(p)

    

   //window.location.href = "index.html"

   
  


    
  })

  window.onload = async function (){
      const rawResponse  = await fetch('http://localhost:3000/posts')
      const content = await rawResponse.json()

      console.log(content)

      for (post of content){
        let h5 = document.createElement('h5') 
        h5.textContent = post.text
        let p = document.createElement('p')
        p.textContent = post.date
        document.getElementById('container').append(h5)
        document.getElementById('container').append(p) 
        
        h5.setAttribute('id', post.id);
   

        h5.addEventListener('click', async ()=>{
            const mussi = h5.getAttribute('id');
            console.log(mussi)
            localStorage.setItem('reqId', mussi)
            const items = localStorage.getItem('reqId')
            console.log(items)
            const item = await fetch(`http://localhost:3000/posts/${mussi}`)

            const postData = await item.json();

            window.location.replace('singlepost.html')

        })

      }
     

  }



  document.querySelector('#getGiph').addEventListener('click', (e)=>{
      e.preventDefault();

      document.querySelector('#giphForm').classList.remove('hideClass')

  })

  document.querySelector('#getGiphButton').addEventListener('click', async (e)=>{
      e.preventDefault();
      const api_key = "XHHSRhHzei2l9q5PR4CZCCn3R3ZVEH81"
      const giphyType = document.getElementById('giphy').value

      const giphs = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=3&rating=g&q=${giphyType}`)

      const result = await giphs.json()
      console.log(result.data)
      for(let i= 0; i < result.data.length; i++){
          console.log(result.data[i].images.downsized.url)
          const allImgs = document.querySelectorAll('.selectedImg');
          for(let j= 0; j < allImgs.length; j++){
              allImgs[j].src = result.data[i].images.downsized.url
          }
      }
      
      
      
    //   for (giph in result){
    //       console.log(giph)
    //       const allImgs = document.querySelectorAll('.selectedImg');
    //       for(img of allImgs){
    //           img.src = giph
    //       }
    //   }

    

  })



  








