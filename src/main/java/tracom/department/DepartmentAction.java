package tracom.department;

import tracom.academy.database.Database;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@WebServlet(urlPatterns = {"/departments"})
public class DepartmentAction extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String depname = request.getParameter("dpname");
    String headOf = request.getParameter("HOD");
    String DepartNo= request.getParameter("DepartmentNo");


        PrintWriter out = response.getWriter();
        Database database = new Database("jdbc:mysql://192.168.254.189:3306/", "shule_yetu","tracom", "password");
        database.executeQuery("insert into departments(DEPT_ID,NAME,HOD) values(" + (new Random()).nextInt(10000) + ",'" + depname + "','" + headOf+ "')");

       out.println("Saved");

    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        List<Department> department = new ArrayList<>();

        department.add(new Department(1L, "MATHEMATICS", "0001", "MATHEMATICS"));
        department.add(new Department(2L, "ENGLISH", "0002", "ENGLISH"));

    }

}



