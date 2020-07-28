function renderDepartments(){
TracomAcademy.Grid.apply({
    contentRender: "content",
    gridTitle: "Departments",
    componentId: "departments",
    columns: [{
        header: "Id",
        dataIndex: "id",
        width: 10
    },{
        header: "DepartmentName",
        dataIndex: "dpname",
        width: 25
    },{
        header: "HeadOfDepartment",
        dataIndex: "HOD",
        width: 25
    }
    ],
    store: [],
    form: {
        id: "units-form",
        url: "../departments",
        items: [{
            label: "DepartmentName",
            name: "dpname",
            id: "departments.cname",
            type: "text"
        },{
            label: "HeadOfDepartment",
            name: "ccode",
            id: "departments.code",
            type: "text"
        },{
            label: "DepartmentNo",
            name: "details",
            id: "departments.details",
            type: "textarea"



        }]
    }
 });
 }