
const button = document.querySelector('.button');
const box = document.querySelector('.empty')

//callback

function delay(callback){
    setTimeout(()=>{

        callback();
    },5000)
}

button.addEventListener('click',function(){
    box.classList.remove('hidden');
    const para = document.createElement('p');
    para.innerHTML=`Call back function will work in 5 seconds`;
    box.appendChild(para);

    delay(()=>{
        fetch(`https://dummyjson.com/posts`)
            .then(response => response.json()) // Parsing the response(data)
            .then(data => {
                box.innerHTML='';
                data.posts.forEach(pos => {
                    const post = document.createElement('div');
                    post.innerHTML=`<h2 class="head">${pos.title}</h2> <br> ${pos.body}<hr><br>`
                    box.appendChild(post);
                });
            })
    })
})

