// An icon to show delete action
const deleteIcon = '<i class="fa fa-trash"></i>';

function saveData(key, myLibrary){
    // Persistently store the data
    localStorage.setItem(key, JSON.stringify(myLibrary));
}

function getLibrary(key){
    let data = localStorage.getItem(key)?
        JSON.parse(localStorage.getItem(key)) : [];
    return data;
}

function updateChanges(storageKey, identifier, myLibrary){
    saveData(storageKey, myLibrary);
    clearTable(identifier);
    render();
}

function addToLibrary(myLibrary, data, storageKey, identifier) {
    myLibrary.push(data);
    updateChanges(storageKey, identifier, myLibrary);
}

function removeFromLibrary(myLibrary, id, storageKey, identifier){
	myLibrary.splice(id, 1);
    updateChanges(storageKey, identifier, myLibrary);
}

function clearTable(identifier){
	// delete all displayed records
	let library = document.querySelector(identifier);
	while (library.firstChild){
		library.removeChild(library.firstChild);
	}
}

function deleteLibrary(key){
    localStorage.removeItem(key);
    myLibrary = getLibrary(key);
    clearTable(key);
    render();
}

// Event listeners
function hideModal() {
    let modal = document.querySelector(".add-modal");
    modal.style.display = 'none';
}

function showModal() {
    let modal = document.querySelector(".add-modal");
    modal.style.display = 'block';
}

let addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function(){
    showModal();
});

let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function(){
    hideModal();
});


