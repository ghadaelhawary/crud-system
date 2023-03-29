
var productNameInput = document.getElementById('product-name');
var productPriceInput = document.getElementById('product-price');
var productcategoryInput = document.getElementById('product-category');
var productDescInput = document.getElementById('product-desc');


var addBtn = document.getElementById('addBtn')


var products=[];

var  currentIndex = 0;
// localStorage.getItem('productList');
if(JSON.parse(localStorage.getItem('productList')) !== null){
   products = JSON.parse(localStorage.getItem('productList'));
    displayProduct();
}


function addProduct(){
    var product={
        productName : productNameInput.value,
        productPrice : productPriceInput.value,
        productCategory : productcategoryInput.value,
        productDescription : productDescInput.value,
    }
   
    products.push(product);
    localStorage.setItem('productList',JSON.stringify(products));


    displayProduct();

    clearForm();

}
 

function displayProduct(){

    var tBody = document.getElementById('tableBody');
    var productContainer = '';

    for(var i=0 ; i<products.length ; i++){
        productContainer += `  <tr>
        <td> ${products[i].productName}</td>
        <td>${products[i].productPrice}</td>
        <td>${products[i].productCategory}</td>
        <td>${products[i].productDescription}</td>
        <td><button class="btn btn-success m-3" id="updateBtn" onClick="getProductInfo(${i})"> Update </button>  </td>
        <td><button class="btn btn-danger m-3" id="deleteBtn" onClick="deleteProduct(${i})"> Delete </button>  </td>
    </tr>`

  
    }
    tBody.innerHTML=productContainer;
   
}


function deleteProduct(index){
    products.splice(index,1);
    
    displayProduct();
    localStorage.setItem('productList',JSON.stringify(products));
}

function getProductInfo(index){

    currentIndex = index;

    // console.log(products[index]);
    productNameInput.value = products[index].productName;
    productPriceInput.value = products[index].productPrice;
    productcategoryInput.value = products[index].productCategory;
    productDescInput.value = products[index].productDescription;


    addBtn.innerHTML="update"

}

function updateProduct(){
    

    var product={
        productName : productNameInput.value,
        productPrice : productPriceInput.value,
        productCategory : productcategoryInput.value,
        productDescription : productDescInput.value,
    }
   products[currentIndex] = product;
   localStorage.setItem('productList',JSON.stringify(products)); 
   displayProduct();
   clearForm();

   addBtn.innerHTML=" Add product ";

}



function clearForm(){

    productNameInput.value = '';
    productPriceInput.value = '';
    productcategoryInput.value = '';
    productDescInput.value = '';
}

addBtn.addEventListener('click' , function(){
    if(addBtn.innerHTML == ' Add product '){
        addProduct();
    }
    else{
        updateProduct();
    }
})
// console.log(addBtn.innerHTML);