const button = document.querySelector('.button');
const box = document.querySelector('.empty');
const para = document.createElement('p');


async function fetchData() {                   
                                                    //try /catch
    try{
        const respone = await fetch(`https://dummyjson.com/posts`);
    const result = await respone.json();            // async /await
    
    box.innerHTML='';
    result.posts.forEach(element => {
        const post = document.createElement('div');
        box.appendChild(post);
        post.innerHTML=`<h2 class="head">${element.title}</h2> <br> ${element.body}<hr><br>`
    });
    }catch(error){
        para.innerHTML='';
        para.innerHTML=`Error fetching data <br> ${error}`;
    }

};


button.addEventListener('click',function(){
    box.classList.remove('hidden');
    
    para.innerHTML=`Loading......`;
    box.appendChild(para);

    fetchData();
})