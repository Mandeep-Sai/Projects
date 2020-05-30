window.onload = async() =>{
  let rawData = await fetch('https://striveschool.herokuapp.com/api/movies/anime',{
     method : 'GET',
     headers : new Headers({
       'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU='
     })
   })
  let parsedData = await rawData.json()
  let slides = document.querySelector('.glide__slides')
  parsedData.forEach(element => {
    slides.innerHTML += `
    <li class="glide__slide">
    <img src="${element.imageUrl}" alt="">
    </li>
    `
  });
  new Glide('.glide',{
    type:'carousel',
    perView:3
  }).mount()
}








// let category = ''
// function chunk(array, size) {
//   const chunked_arr = [];
//   let index = 0;
//   while (index < array.length) {
//     chunked_arr.push(array.slice(index, size + index));
//     index += size;
//   }
//   return chunked_arr;
// }
// window.onload = async() =>{
//   let rawData = await fetch('https://striveschool.herokuapp.com/api/movies/anime',{
//     method : 'GET',
//     headers : new Headers({
//       'Authorization': 'Basic dXNlcjE4OlEyejVWN2hFRlU2SktSckU='
//     })
//   })
//   let parsedData = await rawData.json()
//   console.log(parsedData)
//   var size = 5;
//   let chunks = chunk(parsedData ,size)
//   console.log(chunks)
//   let carousel = document.querySelector('.carousel-inner')
//   for(let i=0;i<chunks.length;i++){
//     if(i==0){
//       carousel.innerHTML += `
//     <div class="carousel-item active" id="row${i}">
//     </div>
//     `
//     }else{
//       carousel.innerHTML += `
//     <div class="carousel-item " id="row${i}">
//     </div>
//     `
//     }
//     let row = document.querySelector(`#row${i}`)
//     for(let j=0;j<chunks[i].length;j++){
//       row.innerHTML += `
//       <img src="${chunks[i][j].imageUrl}" style="width:12rem;height:12rem;" alt="...">
//       `
//     }
//   }


// }

// carousel.innerHTML += `
// <div class="carousel-item d-flex">
//   <img src="${element[0].imageUrl}" style="width:12rem;height:12rem" alt="...">
//   <img src="${element[1].imageUrl}" style="width:12rem;height:12rem" alt="...">
//   <img src="${element[2].imageUrl}" style="width:12rem;height:12rem" alt="...">
//   <img src="${element[3].imageUrl}" style="width:12rem;height:12rem" alt="...">
// </div>
// `

// for(let i=0;i<chunks.length;i++){
//   carousel.innerHTML += `
//     <div class="carousel-item d-flex">
//       <img src="${chunks[i][0].imageUrl}" style="width:12rem;height:12rem" alt="...">
//       <img src="${chunks[i][1].imageUrl}" style="width:12rem;height:12rem" alt="...">
//       <img src="${chunks[i][2].imageUrl}" style="width:12rem;height:12rem" alt="...">
//       <img src="${chunks[i][3].imageUrl}" style="width:12rem;height:12rem" alt="...">
//     </div>
//     `
// }