let container = document.querySelector(".container");

let API = "https://restcountries.com/v3.1/all";

fetch(API)
  .then((data) => data.json())
  .then((unp) => {
   unp.forEach((el)=>{
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
  });
