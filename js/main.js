var Ellist = document.querySelector(".list")
var elSearch = document.querySelector(".search_input")
var elKatagory = document.querySelector(".select_kategoria")
var elReyting = document.querySelector(".select_reyting")
var elYear = document.querySelector(".select_year")


const dataa = movies.splice(0)
mapper(dataa)
function mapper(data) {
  data.forEach((e)=>{
    let newLi = document.createElement("li")
    newLi.innerHTML = `<img src="https://i.ytimg.com/vi/${e.ytid}/hq720.jpg" class="card-img-top" alt=""> 
      <h5 class="card-title">${e.Title.toString().split("").splice(0,27).join("")} ... </h5>
      <p class="card-text">${e.Categories.toString().split("").splice(0,29).join("")} ... </p>
      <p class="card-text"> year of release ${e.movie_year} ... </p>
      <p class="card-text"> rating of release ${e.imdb_rating} ... </p>
      <a href="https://www.youtube.com/watch?v=${e.ytid}" target="_blank" class="btn btn-primary">I wanna look TV 😍😍😍</a>`
      Ellist.appendChild(newLi)
})}

elSearch.addEventListener("keyup", (e)=>{
  Ellist.innerHTML = ""
  let searchValue = e.target.value
  const SearchData = []
  dataa.map((item)=>{
    if (item.Title.toString().toLowerCase().indexOf(searchValue.toString())!= -1){
     SearchData.push(item)
    }
    else{
      console.log("yoq");
    }
  })
mapper(SearchData)
})


const listKatagory = []
dataa.forEach((e)=>{
  if(listKatagory.includes(e.Categories) != true){
    listKatagory.push(e.Categories)
    console.log(e.Categories);
  }
  
})
listKatagory.forEach((e)=>{
  let elOption = document.createElement("option") 
  elOption.textContent = e
  elKatagory.appendChild(elOption)
})

const categoryValue = []
elKatagory.addEventListener("change" , (e)=>{
  Ellist.innerHTML = ""
    let changekategiry = e.target.value
  
   dataa.forEach((item)=>{
    if(item.Categories == changekategiry){
      categoryValue.push(item) 
    }
  })
  mapper(categoryValue)
})

elReyting.addEventListener("change", (e)=>{
  Ellist.innerHTML = ""
  let reating = e.target.value
  if(reating == "max"){
    dataa.sort((a,b)=> a.imdb_rating - b.imdb_rating).reverse()
    mapper(dataa)
  }else{
    dataa.sort((a,b)=> a.imdb_rating - b.imdb_rating)
    mapper(dataa)
  } 
    })

elYear.addEventListener("change", (e)=>{
  Ellist.innerHTML = ""
  let year = e.target.value
  if(year == "max"){
    dataa.sort((a,b)=> a.movie_year - b.movie_year).reverse()
    mapper(dataa)
  }else{
    dataa.sort((a,b)=> a.movie_year - b.movie_year)
    mapper(dataa)
  } 
    })

    