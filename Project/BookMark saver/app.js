const AddBookmarkBtn = document.getElementById("add-bookmark");
const BookmarkList = document.getElementById("bookmark-list");
const bookmarkNameInput = document.getElementById("bookmark-name");
const bookmarkUrlInput = document.getElementById("bookmark-url");

document.addEventListener("DOMContentLoaded", loadbookmarks);
AddBookmarkBtn.addEventListener("click", addBookmark);

function addBookmark(e){
    e.preventDefault()
    const name = bookmarkNameInput.value.trim();
    const URL = bookmarkUrlInput.value.trim();

    if(!name || !URL){
        alert("Please enter both name and URL");
        return
    }else{
        if(!URL.startsWith("http://") && !URL.startsWith("https://")){
            alert("please enter valid URL starting with http or https")
        return;}
    }

    showBookmark(name,URL);
    saveBookmark(name,URL);
    bookmarkNameInput.value = "";
    bookmarkUrlInput.value = "";
}

function showBookmark(name,URL){
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = URL;
    link.textContent = name;
    link.target = "_blank";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn")
    removeButton.addEventListener("click",()=>{
        BookmarkList.removeChild(li);
        removeBookmarkFromStorage(name,URL);
    });

    li.appendChild(link);
    li.appendChild(removeButton);
    BookmarkList.appendChild(li);
}


function getBookmarkfromLocalStorage(){
    const Bookmark = localStorage.getItem("Bookmark");
    return Bookmark? JSON.parse(Bookmark):[];
}


function saveBookmark(name,URL){
    const Bookmark = getBookmarkfromLocalStorage();
    Bookmark.push({name,URL})
    localStorage.setItem("Bookmark",JSON.stringify(Bookmark))
}

function loadbookmarks(){
    const Bookmark = getBookmarkfromLocalStorage();
    Bookmark.forEach(bookmark => {
        showBookmark(bookmark.name,bookmark.URL)
    });
}

function removeBookmarkFromStorage(name, URL) {
  let Bookmark = getBookmarkfromLocalStorage();
  Bookmark = Bookmark.filter((b) => b.name !== name || b.URL !== URL);
  localStorage.setItem("Bookmark", JSON.stringify(Bookmark));
}