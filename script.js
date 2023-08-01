let container = document.querySelector(".container");
let search = document.querySelector(".search")
let btnSearch = document.querySelector(".btnSearch")
let select1 = document.querySelector('.select-1')
let select2 = document.querySelector('.select-2')
let allData = null

// let API = "https://restcountries.com/v3.1/all";

function getAPI(API){
   fetch(`https://restcountries.com/v3.1/${API}`)
  .then((data) => data.json())
  .then((unp) => {
   allData = unp
   render(unp)
  });
}

getAPI('all')

function render(data){
   container.innerHTML = ""
   data.forEach((el)=>{
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
   if (!search.value.trim()) {
      alert("Заполните поле");
      return;
    }
   getAPI(`name/${search.value}`)
   search.value = ''
})

select1.addEventListener('change', (e)=>{
   let values = e.target.value
   if(values === 'all'){
      render(allData)
   }
   if(values === 'europe'){
      let res = allData.filter((el)=>{
         return el.region === 'Europe'
      })
      render(res)
   }
   if(values === 'asia'){
      let res = allData.filter((el)=>{
         return el.region === 'Asia'
      })
      render(res)
   }
   if(values === 'africa'){
      let res = allData.filter((el)=>{
         return el.region === 'Africa'
      })
      render(res)
   }
   if(values === 'americas'){
      let res = allData.filter((el)=>{
         return el.region === 'Americas'
      })
      render(res)
   }
})

select2.addEventListener('change',(e)=>{
   let values = e.target.value
   if(values === 'a-z'){
      let res = allData.sort((a,b)=>{
         return a.name.common.localeCompare(b.name.common)
      })
      render(res)
   }
   if(values === 'z-a'){
      let res = allData.sort((a,b)=>{
         return b.name.common.localeCompare(a.name.common)
      })
      render(res)
   }
   if(values === 'population'){
      let res = allData.sort((a,b)=>{
         return b.population - a.population
      })
      render(res)
   }
})
// search.addEventListener('input',(e)=>{
//    getAPI(`name/${e.target.value}`)
// }) 

