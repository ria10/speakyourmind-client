const submitBtn = document.querySelector('.submit-btn');
const textInput = document.querySelector('#inputJournal');


const getPost = async (e) => {
    e.preventDefault;
    try {
        const post = textInput.value;
        const data = await fetch('https://localhost:3000/posts', 
        {
            method: 'POST',
            body: JSON.stringify({
                'text': post
            }),
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        console.log(data);
        
    } catch (err) {
        console.warn(err);
    }
}
submitBtn.addEventListener('click', async (e) => {
    e.preventDefault;
    try {
        const post = textInput.value;
        const data = await fetch('https://localhost:3000/posts', 
        {
            method: 'POST',
            body: JSON.stringify({
                'text': post
            }),
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        console.log(data);
        
    } catch (err) {
        console.warn(err);
    }
}
);
