const STORAGE_KEY = "faculty";
let myLibrary = getLibrary(STORAGE_KEY);

function Faculty(title, name, institution, department) {
    this.title = title;
    this.name = name;
    this.institution = institution;
    this.department = department;
}

function createNewFaculty(){
    let title = document.querySelector("#title").value;
    let name = document.querySelector("#name").value;
    let institution = document.querySelector("#institution").value;
    let department = document.querySelector("#department").value;

    return new Faculty(title, name, institution, department);
}

function render() {
    let facultyList = document.querySelector("#fac-list");

    // display all institutions in the library
    myLibrary.forEach((faculty, id) => {
        let facultyInfo = document.createElement('tr');
        let facultyKeys = Object.keys(faculty);
        facultyKeys.push("delete");

        facultyKeys.forEach((key) => {
            let entry  = document.createElement('td');
            if (key == "delete"){
                entry.innerHTML = deleteIcon;
                entry.classList.add('delete');
                entry.setAttribute("data-id", id);
                entry.addEventListener('click', function(){
                    removeFromLibrary(myLibrary, entry.dataset.id, "faculty", "#fac-list");
                });

            } else{
                entry.innerHTML = faculty[key];
            }
            facultyInfo.appendChild(entry);
        });

        facultyList.appendChild(facultyInfo);
    });

}

render();

let addInfo = document.querySelector("#fac-info-form");
addInfo.addEventListener("submit", function(e){
    // prevent default submit action which sends data to a server
    e.preventDefault();
    let faculty = createNewFaculty();
    addToLibrary(myLibrary, faculty, STORAGE_KEY, "#fac-list");
    hideModal();
});