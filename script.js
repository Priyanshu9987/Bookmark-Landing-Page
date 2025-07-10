const urlInput = document.getElementById("urlInput");
const addBookmarkButton = document.getElementById("addBookmark");
const deleteAllButton = document.getElementById("deleteAll");
const bookmarkList = document.getElementById("bookmarkList");

// this function is made for the validation of the url

function isValidUrl (url) {
    const pattern =
        /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
        return pattern.test(url);
}

// adding the event listener to the Add Bookmark Button

addBookmarkButton.addEventListener("click" , () => {
     const url = urlInput.value.trim();
    if(isValidUrl(url))
    {
        const bookmarkItem = document.createElement("li");
        bookmarkItem.classList.add("bookmarkItem");
        bookmarkItem.innerHTML = 
       `<a href = "${url}" target ="_blank" > ${url} </a> 
       <div class = "buttons" >
        <button class = "edit"> Edit </button>
        <button class = "delete"> Delete </button>

        </div> `

        bookmarkList.appendChild(bookmarkItem);
        urlInput.value = "";
        addEditBookmarkListener(bookmarkItem);
        addDeleteBookmarkListener(bookmarkItem);


    }

    else {
        alert ("Please Enter a valid URL (http//: or https//:)");

    }


});

deleteAllButton.addEventListener("click" , () => {
    while(bookmarkList.firstChild)
    {
        bookmarkList.removeChild(bookmarkList.firstChild);
    }
});

function addEditBookmarkListener(bookmarkItem) {
    const editButton = bookmarkItem.querySelector(".edit");
    const bookmarkLink = bookmarkItem.querySelector("a");

    editButton.addEventListener("click" , () => {
        const newUrl = prompt("Edit the URL:" ,
        bookmarkLink.getAttribute("href"));

        if(newUrl && isValidUrl(newUrl))
        {
            bookmarkLink.setAttribute("href" , newUrl);
            bookmarkLink.innerHTML = newUrl;

        }
        else if (newUrl)
            alert ("Please Enter a valid URL");
    });


}

function addDeleteBookmarkListener(bookmarkItem) {
    const deleteButton = bookmarkItem.querySelector(".delete");
    deleteButton.addEventListener("click" , () => {
        bookmarkItem.remove();
    });
}
