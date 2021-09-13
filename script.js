const submitBtn = document.querySelector(".submit-btn");
const textInput = document.querySelector("#inputJournal");
const form = document.querySelector("form");

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

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const post = textInput.value;
  const payload = {
    text: post,
  };
  console.log(post);
  const data = await fetch(
    "http://localhost:3000/posts/",
    {
      headers: {
        Accept: "application/json",
        "content-Type": "application/json",
      },
    },
    { method: "POST", body: JSON.stringify(payload) }
  );
  const res = await data.json();
  console.log(res);
});
