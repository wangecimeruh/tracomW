package tracom.department;

public class Department {

        private Long id;

        private String dpname;

        private String HOD;

        private String DepartmentNo;

        public Department(){}

        public Department(Long id, String dpname, String HOD, String DepartmentNo){
            this.id = id;
            this.dpname = dpname;
            this.HOD = HOD;
            this.DepartmentNo = DepartmentNo;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getDpname() {
            return dpname;
        }

        public void setDpname(String dpname) {
            this.dpname = dpname;
        }

        public String getHOD() {
            return HOD;
        }

        public void setHOD(String HOD) {
            this.HOD = HOD;
        }

        public String getDepartmentNo() {
            return DepartmentNo;
        }

        public void setDepartmentNo(String DepartmentNo) {
            this.DepartmentNo = DepartmentNo;
        }
    }


