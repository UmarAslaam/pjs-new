let productList = document.getElementById('productList');
let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');

(async function () {
   let data = await fetch('https://dummyjson.com/products?limit=194');
   let result = await data.json();
   let products = await result.products;
  //  console.log(products);

   products.forEach((prd) => {
    productList.innerHTML += `
    <div class="col-lg-4 my-2 d-flex">
    <div class="card h-100 w-100">
        <img src="${prd.thumbnail}" class="card-img-top product-img" alt="...">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">${prd.title}</h5>
            <p class="card-text">
                ${prd.description}
            </p>
            <a href="#" class="btn btn-primary mt-auto">
                $ ${prd.price}
            </a>
        </div>
    </div>
    </div>
 
    `
   });

   function search() {
    productList.innerHTML = "";
    let userSearchQuery = searchInput.value.toLowerCase();
    // console.log(userSearchQuery);
    let userSearchResult = products.filter((product)=>{
      if (product.title.toLowerCase().includes(userSearchQuery) || product.description.toLowerCase().includes(userSearchQuery) ||   Math.floor(product.price) == userSearchQuery  ) {
        return product;
      }
    })
    if (userSearchResult.length > 0) {
      userSearchResult.forEach((prd)=>{
        productList.innerHTML += `
          <div class="col-lg-4 my-2 d-flex">
          <div class="card h-100 w-100">
              <img src="${prd.thumbnail}" class="card-img-top product-img" alt="...">
              <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${prd.title}</h5>
                  <p class="card-text">
                      ${prd.description}
                  </p>
                  <a href="#" class="btn btn-primary mt-auto">
                      $ ${prd.price}
                  </a>
              </div>
            </div>`
      })  
    }
    else{
       productList.innerHTML = `<h1>No Products Found.</h1>`
    }
    
   }

   searchBtn.addEventListener('click',search)
}) ();
