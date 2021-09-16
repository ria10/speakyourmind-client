const submitBtn = document.querySelector(".submit-btn");
const textInput = document.querySelector("#inputJournal");
const baseUrl = "https://speak-your-mind-server.herokuapp.com";

h5 = document.querySelector(".post-text");
p = document.querySelector(".post-date");

// adding event listener for submit button so that the post shows up in the right section
submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const rawResponse = await fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: textInput.value }),
  });

  const content = await rawResponse.json();

  // adding toastify notif to show the post has been created
  Toastify({
    text: "Post created successfully",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    stopOnFocus: true, // Prevents dismissing of toast on hover
    onClick: function () {}, // Callback after click
  }).showToast();

  h5.textContent = content.text;
  p.textContent = content.date;
  h5.setAttribute("id", content.id);

  containerDiv.insertBefore(p, containerDiv.firstChild);

  containerDiv.insertBefore(h5, containerDiv.firstChild);
});

// adding event listener for clicking on the text posts in the right section
h5.addEventListener("click", async () => {
  const mussi = h5.getAttribute("id");
  console.log(mussi);
  localStorage.setItem("reqId", mussi);
  const items = localStorage.getItem("reqId");
  console.log(items);
  const item = await fetch(`https://speak-your-mind-server.herokuapp.com/posts/${mussi}`);

  const postData = await item.json();

  window.location.replace("singlepost.html");
});
// getting all posts when the window loads
window.onload = async function () {
  const rawResponse = await fetch("https://speak-your-mind-server.herokuapp.com/posts");
  const content = await rawResponse.json();

  for (post of content) {
    if (post.text.includes("giphy")) {
      const image = document.createElement("img");
      image.src = post.text;
      let parag = document.createElement("p");
      parag.textContent = post.date;
      image.setAttribute("id", post.id);
      document.getElementById("container").append(image);
      document.getElementById("container").append(parag);
      image.addEventListener("click", async () => {
        const requiredGiph = image.getAttribute("id");
        console.log(requiredGiph);
        localStorage.setItem("giphId", requiredGiph);
        const items = localStorage.getItem("giphId");
        console.log(items);
        const item = await fetch(`https://speak-your-mind-server.herokuapp.com/${requiredGiph}`);

        const postData = await item.json();

        window.location.replace("giph.html");
      });
    } else {
      let h5 = document.createElement("h5");
      h5.textContent = post.text;
      let p = document.createElement("p");
      p.textContent = post.date;
      document.getElementById("container").append(h5);
      document.getElementById("container").append(p);

      h5.setAttribute("id", post.id);
      h5.addEventListener("click", async () => {
        const mussi = h5.getAttribute("id");
        console.log(mussi);
        localStorage.setItem("reqId", mussi);
        const items = localStorage.getItem("reqId");
        console.log(items);
        const item = await fetch(`https://speak-your-mind-server.herokuapp.com/posts/${mussi}`);

        const postData = await item.json();

        window.location.replace("singlepost.html");
      });
    }
  }
};
// removing the visibility hidden for the searching a gif section
document.querySelector("#getGiph").addEventListener("click", (e) => {
  e.preventDefault();

  document.querySelector("#giphForm").classList.remove("hideClass");
});

//adding event listener for the gif search
document
  .querySelector("#getGiphButton")
  .addEventListener("click", async (e) => {
    e.preventDefault();

    document.querySelector("#giphList").classList.remove("hideClass");
    const api_key = "XHHSRhHzei2l9q5PR4CZCCn3R3ZVEH81";
    const giphyType = document.getElementById("giphy").value;

    const giphs = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=1&rating=g&q=${giphyType}`
    );

    const result = await giphs.json();
    console.log(result.data);

    result.data[0].images.fixed_height.url;
    const imgs = document.querySelector(".selectedImg");

    imgs.src = result.data[0].images.fixed_height.url;
    localStorage.setItem("imgUrl", imgs.src);
  });

// adding event listener for choosing the gif
document
  .querySelector("#getListButton")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    const imgUrl = localStorage.getItem("imgUrl");
    console.log(imgUrl);
    const rawResponse = await fetch(`${baseUrl}/posts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: imgUrl }),
    });

    const content = await rawResponse.json();
    console.log(content);

    console.log(content);
    Toastify({
      text: "Post created successfully",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      stopOnFocus: true, // Prevents dismissing of toast on hover
      onClick: function () {}, // Callback after click
    }).showToast();

    const img = document.createElement("img");
    img.src = content.text;
    p.textContent = content.date;
    img.setAttribute("id", content.id);
    const containerDiv = document.querySelector("#container");

    containerDiv.insertBefore(p, containerDiv.firstChild);

    containerDiv.insertBefore(img, containerDiv.firstChild);
  });

  // character input

  function charcountupdate(str) {
    var lng = str.length;
    document.getElementById("charcount").innerHTML = lng + '/200';
  }