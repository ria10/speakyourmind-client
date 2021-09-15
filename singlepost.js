window.onload = async function (){
   const ria =  localStorage.getItem('reqId')
//    const h5  = document.createElement('h5')
//    const p = document.createElement('p')
//    const containerDiv = document.querySelector('.container')
//    const btn = document.createElement('button')
//    btn.textContent = 'Add a comment'
//    btn.setAttribute('class', 'btn btn-primary addBtn')
     const commentsTable = document.querySelector('.commentsTable')
    const likesCount = document.querySelector('#likesCount')
    const laughCount = document.querySelector('#laughCount')
    const cryCount = document.querySelector('#cryCount')

const postText = document.querySelector('#post-text')
const postDate = document.querySelector('#post-date')

  const rawData = await fetch(`http://localhost:3000/posts/${ria}`)

  
  
  
  
  
  
  
const post = await rawData.json()
  
postText.textContent = post.text
postDate.textContent = post.date
likesCount.textContent = post.likes
 
//get comments on pageload
const postComment = await fetch(`http://localhost:3000/post/${ria}/comment`)

const allComments = await postComment.json();

console.log(allComments);



for(comment of allComments){
 const td = document.createElement('td')
 const tr = document.createElement('tr')
 td.innerHTML= `<h6 class="commentText">${comment.text}</h6>  <span>posted on ${comment.date}</span>`;

 commentsTable.insertBefore(tr, commentsTable.firstChild);
 //tr.append(td);

 tr.insertBefore(td, tr.firstChild)

 
}






 document.querySelector('.addBtn').addEventListener('click', (e)=>{
    e.preventDefault()
   const form = document.querySelector('form')
   form.classList.remove('hideClass');
   
 })


 document.querySelector('#commentButton').addEventListener('click', async (e)=>{
    e.preventDefault();
    const textInput = document.querySelector('#inputComment')
    const postComment = await fetch(`http://localhost:3000/post/${ria}/comment`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: textInput.value})
    })

    const allComments = await postComment.json();
    Toastify({
        text: "you successfully added a comment on a post",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function(){} // Callback after click
      }).showToast();

    console.log(allComments);

 
 
 for(comment of allComments){
     const td = document.createElement('td')
     const tr = document.createElement('tr')
     td.innerHTML= `<h6 class="commentText">${comment.text}</h6>  <span>posted on ${comment.date}</span>`;

     commentsTable.insertBefore(tr, commentsTable.firstChild);
     //tr.append(td);

     tr.insertBefore(td, tr.firstChild)

     
 }
 
 })

  document.querySelector('.likesButton').addEventListener('click', async(e)=>{
      e.preventDefault();
      const currentLikes = await fetch(`http://localhost:3000/post/${ria}/likes`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: ""
      })
      const likes = await currentLikes.json()
      console.log(likes)
      likesCount.textContent = likes.length;

  }) 

  likesCount.textContent = post.likes.length


  document.querySelector('.laughButton').addEventListener('click', async(e)=>{
    e.preventDefault();
    const currentLikes = await fetch(`http://localhost:3000/post/${ria}/laugh`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: ""
    })
    const laughed = await currentLikes.json()
    console.log(laughed)
    laughCount.textContent = laughed.length;

}) 

laughCount.textContent = post.laughed.length

document.querySelector('.cryButton').addEventListener('click', async(e)=>{
    e.preventDefault();
    const currentLikes = await fetch(`http://localhost:3000/post/${ria}/crying`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: ""
    })
    const cried = await currentLikes.json()
    console.log(cried)
    cryCount.textContent = cried.length;

}) 

cryCount.textContent = post.cried.length

}





