var bookmarkName = document.getElementById("bookmarkName");
var url = document.getElementById("url");
var namePopup = document.getElementById("namePopup");
var urlPopup = document.getElementById("urlPopup")
var bookmarksList;

if (localStorage.getItem("bookmarkStored") == null)//client gdid//maloo4 7aga
{
    bookmarksList = [];
}
else//leh data mawgoda abl kdaaa
{
    bookmarksList = JSON.parse(localStorage.getItem("bookmarkStored"));
    displayBookmarks(bookmarksList);
}

function addBookmark() {
    if (bookmarkName.value == '' && url.value == '') {
        namePopup.style.display = "block"
        urlPopup.style.display = "block"
    } else if (bookmarkName.value == '' && url.value != '') {
        namePopup.style.display = "block"
        urlPopup.style.display = "none"
    } else if (bookmarkName.value != '' && url.value == '') {
        namePopup.style.display = "none"
        urlPopup.style.display = "block"
    } else {
    namePopup.style.display = "none"
    urlPopup.style.display = "none"
    
    var bookmark =
    {
        name: bookmarkName.value,
        url: ourURL
    }
    bookmarksList.push(bookmark); //1
    localStorage.setItem("bookmarkStored", JSON.stringify(bookmarksList));
    displayBookmarks(bookmarksList);
    clearForm();
}
}

function clearForm() {
    bookmarkName.value = "";
    url.value = "";
    url.classList.remove("is-invalid");
    url.classList.remove("is-valid");
}

function displayBookmarks(anyArray) {
    var cartoona = "";
    for (var i = 0; i < anyArray.length; i++) //2
    {
        cartoona += `<tr>
                        <td>${i}</td>
                        <td>${anyArray[i].name}</td>
                        <td><a href= "${anyArray[i].url}" target="_blank" class="btn btn-warning">view</a></td>
                        <td><button onclick="deleteBookmark(${i})" class="btn btn-danger">delete</button></td>
                    </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}

function deleteBookmark(index) {
    bookmarksList.splice(index, 1);
    localStorage.setItem("bookmarkStored", JSON.stringify(bookmarksList));
    displayBookmarks(bookmarksList);
}
var ourURL;
function urlValidation (anyURL) {
    var regex1 = /^((https|http):\/\/)www\.[a-z0-9]+\.com+(\/[a-zA-Z0-9#]+\/?)*$/
    var regex2 = /^(www.)[a-z0-9]+\.com+(\/[a-zA-Z0-9#]+\/?)*$/;
    var regex3 = /^[a-z0-9]+\.com+(\/[a-zA-Z0-9#]+\/?)*$/
    if (regex1.test(anyURL) == true) {
        url.classList.remove("is-invalid");
        url.classList.add("is-valid");
        ourURL = anyURL;
        console.log("1st if ", ourURL);
    } else if (regex2.test(anyURL) == true) {
        url.classList.remove("is-invalid");
        url.classList.add("is-valid");
        let addHttps = 'https://';
        ourURL = addHttps.concat(anyURL)
        console.log("2nd if ", ourURL)
    } else if (regex3.test(anyURL) == true) {
        url.classList.remove("is-invalid");
        url.classList.add("is-valid");
        let addHttpsWWW = 'https://www.'
        ourURL = addHttpsWWW.concat(anyURL)
        console.log("3rd if ", ourURL)
    } else {
        url.classList.add("is-invalid");
        url.classList.remove("is-valid");
        ourURL = anyURL
    }
}
url.addEventListener ("keyup", function(){
    urlValidation (url.value)
})


// var regex = /^((https|http|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/