const STORAGE_KEY = "institution";
let myLibrary = getLibrary(STORAGE_KEY);

function Institution(name, address, location, type) {
    this.name = name;
    this.address = address;
    this.location = location;
    this.type = type;
}

function createNewInst(){
    // create an institution object using data obtained from user input
    let name = document.querySelector("#name").value;
    let address = document.querySelector("#address").value;
    let location = document.querySelector("#location").value;
    let type = document.querySelector("#type").value;

    return new Institution(name, address, location, type);
}

function render() {
    let instList = document.querySelector("#inst-list");

    // display all institutions in the library
    myLibrary.forEach((inst, id) => {
        let instInfo = document.createElement('tr'); 
        let instKeys = Object.keys(inst);
        instKeys.push("delete");

        instKeys.forEach((key) => {
            let entry  = document.createElement('td');
            if (key == "delete"){
                entry.innerHTML = deleteIcon;
                entry.classList.add('delete');
                entry.setAttribute("data-id", id);
                entry.addEventListener('click', function(){
                    removeFromLibrary(myLibrary, entry.dataset.id, "institution", "#inst-list");
                });

            } else{
                entry.innerHTML = inst[key];
            }
            instInfo.appendChild(entry);
        });

        instList.appendChild(instInfo);

    });

}

render();

let addInst = document.querySelector("#inst-info-form");
addInst.addEventListener("submit", function(e){
    // prevent default submit action which sends data to a server
    e.preventDefault(); 
    let inst = createNewInst();
    addToLibrary(myLibrary, inst, STORAGE_KEY, "#inst-list");
    hideModal();
});

