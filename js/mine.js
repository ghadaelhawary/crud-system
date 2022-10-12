

var nameInput = document.getElementById('ProductName');
var categoryInput = document.getElementById('ProductCategory');
var priceInput = document.getElementById('ProductPrice');
var descriptionInput = document.getElementById('ProductDescription');
var tablebody = document.getElementById('tablebody');

var addbtn = document.getElementById('addProduct');
var searchbtn = document.getElementById('search'); 


var productsList = [];


if(localStorage.getItem("productData") != null){

   var  productsList = JSON.parse(localStorage.getItem('productData'));
    showProduct();
}










function createProduct(){

       // product={

    //     pName : nameInput.value,
    //     category : categoryInput.value,
    //     price : priceInput.value,
    //     description : descriptionInput.value
    // }


    /*to check what function to execute on which btn */

    if(addbtn.innerHTML.includes("add_product")){

        product={

            pName : nameInput.value,
            category : categoryInput.value,
            price : priceInput.value,
            description : descriptionInput.value
        }

        
   productsList.push(product);

   localStorage.setItem("productData", JSON.stringify(productsList));

    }
    else{
        savedItem()

    }

 




 clearForm();
 showProduct();


}


function clearForm(){
    nameInput.value = null;
    categoryInput.value = " ";
    priceInput.value = " ";
    descriptionInput.value = " ";
}


function showProduct(){
   
    var trs= " ";

    for(var i=0 ; i< productsList.length ; i++){
        trs += ` <tr>
        <td>${i}</td>
        <td>${productsList[i].pName}</td>
        <td>${productsList[i].category}</td>
        <td>${productsList[i].price}</td>
        <td>${productsList[i].description}</td>
        
        <td>

            <button onclick="updateItem(${i})" class="btn btn-outline-warning">
                <i class="fa-solid fa-pen"></i>
            </button>



        </td>
        <td>

            <button onclick="deleteItem(${i})" class="btn btn-outline-danger">
                <i class="fa-solid fa-trash-can"></i>
            </button>



        </td>
    </tr>`

   
    }

    tablebody.innerHTML=trs;
   
}



function deleteItem(item){

    productsList.splice(item,1);


    localStorage.setItem("productData", JSON.stringify(productsList))

    
    showProduct();
}


var globalIndex = 0 ;
function updateItem(index){

    globalIndex = index;

    nameInput.value = productsList[index].pName;
    categoryInput.value = productsList[index].category;
    priceInput.value = productsList[index].price;
    descriptionInput.value = productsList[index].description;


    addbtn.innerHTML = 'update';

    console.log(productsList)

}


function savedItem(){

    productsList[globalIndex].pName = nameInput.value;
    productsList[globalIndex].category = categoryInput.value;
    productsList[globalIndex].price = priceInput.value;
    productsList[globalIndex].description = descriptionInput.value;

    localStorage.setItem("productData", JSON.stringify(productsList));

    clearForm();

    addbtn.innerHTML="add_product";

    
}




function searchFun(){

    var searchval = searchbtn.value;

   // console.log(searchval);
    var trs= " ";

    for(var i=0 ; i<productsList.length ; i++){

        //var stringsearch = productsList[val].pName;

     if(productsList[i].pName.toLowerCase().includes(searchval.toLowerCase()) == true)
     {

           //console.log(productsList[i].pName);
        trs += ` <tr>
        <td>${i}</td>
        <td>${productsList[i].pName}</td>
        <td>${productsList[i].category}</td>
        <td>${productsList[i].price}</td>
        <td>${productsList[i].description}</td>
        
        <td>

            <button onclick="updateItem(${i})" class="btn btn-outline-warning">
                <i class="fa-solid fa-pen"></i>
            </button>



        </td>
        <td>

            <button onclick="deleteItem(${i})" class="btn btn-outline-danger">
                <i class="fa-solid fa-trash-can"></i>
            </button>



        </td>
    </tr>`

   
    }

}
    tablebody.innerHTML=trs;
   


          
        

    }



