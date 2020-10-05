var itemName = document.getElementById("itemName");
var itemsList;
if (localStorage.getItem("itemStored") == null)
{
    itemsList = [];
}
else
{
    itemsList = JSON.parse(localStorage.getItem("itemStored"));
    displayItems(itemsList);
}

function addItem() {
    var item =
    {
        name: itemName.value,
    }
    itemsList.push(item); //1
    localStorage.setItem("itemStored", JSON.stringify(itemsList));
    displayItems(itemsList);
    clearForm();
}

function clearForm() {itemName.value = "";}

function displayItems(anyArray) {
    var cartoona = "";
    for (var i = 0; i < anyArray.length; i++)
    {
        cartoona += `<tr>
                        <td class="col-lg-5 text-muted">${anyArray[i].name}</td>
                        <td class="col-lg-1"><button onclick="deleteItem(${i})" class="btn btn-danger">&#10007;</button></td>
                    </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}

function deleteItem(index) {
    itemsList.splice(index, 1);
    localStorage.setItem("itemStored", JSON.stringify(itemsList));
    displayItems(itemsList);
}
