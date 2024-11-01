var productNameinput = document.getElementById('productName');
var productPriceinput = document.getElementById('productPrice');
var productCategoryinput = document.getElementById('productCategory');
var productDescinput = document.getElementById('productDesc');
var mainBtn = document.getElementById('main-btn');


var productContainer =[] ;


var indexOfUpdate;


if(localStorage.getItem("products") == null)
{
    productContainer = [];
}
else
{
    productContainer = JSON.parse(localStorage.getItem("products"));
    displayProducts(productContainer); 
}


function addProduct()
{


    var product = {
        namee:productNameinput.value,
        price:productPriceinput.value,
        category:productCategoryinput.value,
        desc:productDescinput.value,
    }


    if (mainBtn.innerHTML == 'add product')
        {
            productContainer.push(product);
            localStorage.setItem("products" , JSON.stringify(productContainer));
            displayProducts(productContainer); 
            clear() ; 
        }
    else
        {
            indexOfUpdate.namee = productNameinput.value ;
            indexOfUpdate.price = productPriceinput.value;
            indexOfUpdate.category = productCategoryinput.value;
            indexOfUpdate.desc = productDescinput.value;
            localStorage.setItem("products" , JSON.stringify(productContainer));
            displayProducts(productContainer); 
            mainBtn.innerHTML = 'add product';
            clear();

        }
}


function displayProducts(productsList) {
    var cartoona = [];
    for(var i = 0 ; i < productsList.length ; i++){
        cartoona+= ` 
        <tr>
            <td>${i}</td>
            <td>${productsList[i].namee}</td>
            <td>${productsList[i].price}</td>
            <td>${productsList[i].category}</td>
            <td>${productsList[i].desc}</td>
            <td><button onclick="updateProduct(${i}) " class="btn-warning btn">update</button></td>
            <td><button onclick="deleteProduct(${i} ) " class="btn-danger btn">delete</button></td>
        </tr>` 
    }
    document.getElementById('tableRow').innerHTML = cartoona; 
} 


function clear() {
    productNameinput.value="";
    productPriceinput.value="";
    productCategoryinput.value="";
    productDescinput.value="";
}


function deleteProduct(index)
{
    productContainer.splice(index , 1);
    localStorage.setItem("products" , JSON.stringify(productContainer));
    displayProducts(productContainer); 
}



function searchProduct(trim)
{
    var searchContainer = [];
    for( var i = 0 ; i <productContainer.length ; i++ )
    {
        if (productContainer[i].namee.toLowerCase().includes(trim.toLowerCase()) == true)
        {
            searchContainer.push( productContainer[i]);           
        }
    }
    displayProducts(searchContainer);
}



function updateProduct(i)
{
    indexOfUpdate = productContainer[i];

    productNameinput.value = indexOfUpdate.namee ;
    productPriceinput.value = indexOfUpdate.price;
    productCategoryinput.value = indexOfUpdate.category;
    productDescinput.value = indexOfUpdate.desc;
    mainBtn.innerHTML = 'update product';
}

