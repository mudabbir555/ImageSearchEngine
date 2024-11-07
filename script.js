const access_key = "XTiruBF4GhZIHcLdBg1Rx2EroIZp8CzYFXCohI4UMt8"

const searchform = document.getElementById("search-form")
const searchbox = document.getElementById("search-box")
const searchresults = document.getElementById("search-result")
const showmore = document.getElementById("show-more")

let keyword = "";
let page = 1;

async function searchimg(){ 
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    
    results.map((result)=>{
        const image = document.createElement('img')
        image.src=result.urls.small;
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank"

        imageLink.appendChild(image)
        searchresults.appendChild(imageLink)
    })

}
searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1
    searchimg();    
})