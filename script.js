let container = document.querySelector(".container");
let search = document.querySelector(".search")
let btnSearch = document.querySelector(".btnSearch")

// let API = "https://restcountries.com/v3.1/all";

function getAPI(API){
   fetch(`https://restcountries.com/v3.1/${API}`)
  .then((data) => data.json())
  .then((unp) => {
   render(unp)
  });
}

getAPI('all')

function render(data){
   container.innerHTML = ""
   data.forEach((el)=>{
      console.log(el);
      container.innerHTML += `
         <div class = 'block'>
            <img class = 'img' src="${el.flags.png}" alt="flag">
            <div class = 'texts'>
               <p class = 'text'>name: ${el.name.common}</p>
               <p class = 'text'>region: ${el.region}</p>
               <p class = 'text'>population: ${el.population}</p>
            </div>
         </div>
      `
   })
}

btnSearch.addEventListener('click',()=>{
   getAPI(`name/${search.value}`)
})

// search.addEventListener('input',(e)=>{
//    getAPI(`name/${e.target.value}`)
// }) 

