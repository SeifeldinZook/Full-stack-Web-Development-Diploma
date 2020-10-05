
var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");

var productNameAlert = document.getElementById("productNameAlert");
var productPriceAlert = document.getElementById("productPriceAlert");

var searchInput = document.getElementById("searchInput");

var addBtn = document.getElementById("addBtn");
var productList;
var validName = false;
var validPrice = false;

if (localStorage.getItem("ourProducts") == null) //client gdid//maloo4 7aga
{
    productList = [];
}
else //leh data mawgoda abl kdaaa
{
    productList = JSON.parse(localStorage.getItem("ourProducts"));
    displayProducts(productList);
}

function addProduct() {
    console.log(validName)
    console.log(validPrice)
    if (addBtn.classList.contains("disabled")) {
        return
    } else {
        var product =
        {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            desc: productDescInput.value,
        };
        if (updating == true) {
            productList.splice(updIndex,1, product);
            localStorage.setItem("ourProducts", JSON.stringify(productList));
            displayProducts(productList);
            clearForm();
            console.log(validName)
            console.log(validPrice)
        } else {
            productList.push(product);
            localStorage.setItem("ourProducts", JSON.stringify(productList));
            displayProducts(productList);
            clearForm();
        };
    };
};

function clearForm() {
    productNameInput.value = "";
    productNameInput.classList.remove("is-valid");
    productPriceInput.value = "";
    productPriceInput.classList.remove("is-valid");
    productDescInput.value = "";
    productCategoryInput.value = "";
    validName = false;
    validPrice = false;
    updating = false;
    addBtn.classList.add("disabled");
};

function displayProducts(anyArray) {
    var cartoona = "";
    for (var i = 0; i < anyArray.length; i++) {
        cartoona += `<tr>
                        <td>${i}</td>
                        <td>${anyArray[i].name}</td>
                        <td>${anyArray[i].price}</td>
                        <td>${anyArray[i].category}</td>
                        <td>${anyArray[i].desc}</td>
                        <td><button onclick="updateProduct(${i})" class="btn btn-warning">&#x21bb;</button></td>
                        <td><button onclick="deleteProduct(${i})" class="btn btn-danger">&#10007;</button></td>
                    </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartoona;
};

function deleteProduct(index) {
    productList.splice(index, 1);
    localStorage.setItem("ourProducts", JSON.stringify(productList));
    displayProducts(productList);
};

var updating = false;
var updIndex;
function updateProduct(index) {
    updating = true;
    productNameInput.value = productList[index].name;
    productPriceInput.value = productList[index].price;
    productCategoryInput.value = productList[index].category;
    productDescInput.value = productList[index].desc;
    productNameInput.classList.add("is-valid");
    productPriceInput.classList.add("is-valid");
    validName = true;
    validPrice = true;
    checkValidaty();
    return updIndex = index
};

function searchProducts() {
    var searchTerm = searchInput.value;
    var wantedProducts = [];
    for (var i = 0; i < productList.length; i++) {
        if (productList[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
            wantedProducts.push(productList[i]);
        }
    }
    displayProducts(wantedProducts);
};

function validateName (productName) {
    var regex = /^[A-Z][a-z]{3,6}$/;
    if (regex.test(productName) == true) {
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");
        productNameAlert.classList.replace("d-block", "d-none");
        validName = true;
        checkValidaty();
    } else {
        productNameAlert.classList.replace("d-none", "d-block");
        productNameInput.classList.add("is-invalid");
        productNameInput.classList.remove("is-valid");
        addBtn.classList.add("disabled");
        validName = false;
        checkValidaty();
    }
};
productNameInput.addEventListener ("keyup", function() {
    validateName (productNameInput.value)
});

function validatePrice (productPrice) {
    var regex = /^([1-9][0-9]{2,3}|10000)/;
    if (regex.test(productPrice) == true) {
        productPriceInput.classList.add("is-valid");
        productPriceInput.classList.remove("is-invalid");
        productPriceAlert.classList.replace("d-block", "d-none");
        validPrice = true;
        checkValidaty();
    } else {
        productPriceAlert.classList.replace("d-none", "d-block");
        productPriceInput.classList.add("is-invalid");
        productPriceInput.classList.remove("is-valid");
        validPrice = false;
        checkValidaty();
    }
}
productPriceInput.addEventListener ("keyup", function() {
    validatePrice (productPriceInput.value)
});

function checkValidaty () {
    if (validName == true && validPrice == true) {
        addBtn.classList.remove("disabled");
    } else {
        addBtn.classList.add("disabled");
    }
}