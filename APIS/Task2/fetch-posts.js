
const fun = async ()=>{
   try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();

    const postContainer=document.getElementById('posts');
    
    result.forEach(post => {
        const eachdiv=document.createElement('div');
        eachdiv.innerHTML= `
        <h3>${post.title}</h3>
        <h4>${post.userId}</h4>
        <h4>${post.id}</h4>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(eachdiv);
    });
   }
   catch(err){
    console.log(err);
   }
}

fun();