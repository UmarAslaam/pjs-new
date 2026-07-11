let produclist = document.getElementById('productList');
let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');


(async function() {
  let data = await  fetch('https://dummyjson.com/products?limit=194');
  let result = await data.json();
  let products = await result.products;
  console.log(products)

  products.forEach((prd) => {
    produclist.innerHTML += `
     <div class="col-lg-4 my-3">
        <div class="card" style="height: 28rem;">
            <img src="${prd.thumbnail}" class="card-img-top" alt="..." height="200">
            <div class="card-body">
                <h5 class="card-title">${prd.title}</h5>
                <p class="card-text">${prd.description}</p>
                <a class="btn btn-primary">${prd.price}</a>
               
            </div>
          </div>
      </div>
    `
  });
  function search() {
    produclist.innerHTML = "";
    let userSearchQuery = searchInput.value.toLowerCase();
    let searchResult = products.filter((product)=>{
      if (product.title.toLowerCase().includes(userSearchQuery) || product.description.toLowerCase().includes(userSearchQuery) || product.price === userSearchQuery ) {
        return product;
      }
    })
     console.log(searchResult)
     if (searchResult.length>0) {
      searchResult.forEach((prd)=>{
            produclist.innerHTML += `
            <div class="col-lg-4 my-3">
                <div class="card" style="height: 28rem;">
                    <img src="${prd.thumbnail}" class="card-img-top" alt="..." height="200">
                    <div class="card-body">
                        <h5 class="card-title">${prd.title}</h5>
                        <p class="card-text">${prd.description}</p>
                        <a class="btn btn-primary">${prd.price}</a>
                      
                    </div>
                  </div>
              </div>
    `
      }) 
     }
     else{
            produclist.innerHTML += `<h1>No Products Found.</h1>`
      
     }
  }
  searchBtn.addEventListener('click',search)
}) ()
