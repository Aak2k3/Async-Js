
const button = document.querySelector('.button');
const box = document.querySelector('.empty')
const para = document.createElement('p');


button.addEventListener('click',function(){           //event listener button
        box.classList.remove('hidden');
        
        para.innerHTML=`Loading.....`;
        box.appendChild(para);

        fetchData()

})
    
function fetchData(){
        fetch(`https://dummyjson.com/post`)
        .then(response =>{
                setTimeout(() => {          // 5 second timeout for loading
                        if(!response.ok){
                                para.innerHTML ='';
                                para.innerHTML=`Operation timed out.`
                              return ; 
                        }
                }, 5000);

                return response.json()})    //parsing the response
        .then(data  => 
                {box.innerHTML='';
                data.posts.forEach(pos => {
                
                const post = document.createElement('div');
                post.innerHTML=`<h2 class="head">${pos.title}</h2> <br> ${pos.body}<hr><br>`
                box.appendChild(post);
        })})
        .catch(err=> para.innerHTML=` Error in fetching data <br> ${err} `);  //error
}








