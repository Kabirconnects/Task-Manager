import React, { useContext, useEffect } from "react";
import Login from "./components/auth/Login";
import { AuthContext } from "./components/context/AuthProvider";
import { PersonContext } from "./components/context/PersonContext";
import AdminDashboard from "./dashboard/AdminDashboard";
import { setInitialLocalStorage } from "./components/utils/LocalStorage"; // Correct import
import EmployeeDashboard from "./dashboard/EmployeeDashboard";

function App() {
  useEffect(() => {
    // Initialize local storage with data if it's empty
    try {
      if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
        setInitialLocalStorage();
      }
    } catch (error) {
      console.error("Error accessing local storage", error);
    }
  }, []);

  const { data } = useContext(AuthContext);
  const { person, setPerson } = useContext(PersonContext);

  useEffect(() => {
    console.log("Auth data:", data);
  }, [data]);

  const handleLogIn = (email, password) => {
    if (data && data.admin && data.employees) {
      const admin = data.admin.find(
        (e) => e.email === email && e.password === password
      );
      const employee = data.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (admin) {
        console.log("Admin logged in:", admin.name);
        localStorage.setItem("person", JSON.stringify({ ...admin, role: "admin" }));
        setPerson({ ...admin, role: "admin" });
      } else if (employee) {
        console.log("Employee logged in:", employee.name);
        localStorage.setItem("person", JSON.stringify({ ...employee, role: "employee" }));
        setPerson({ ...employee, role: "employee" });
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Data not available");
    }
  };

  useEffect(() => {
    const savedPerson = JSON.parse(localStorage.getItem("person"));
    if (savedPerson) {
      setPerson(savedPerson);
    }
  }, [setPerson]);

  useEffect(() => {
    console.log("Person context updated:", person);
  }, [person]);

  return (
    <>
      {!person ? <Login handleLogIn={handleLogIn} /> : null}
      {person?.role === "admin" ? <AdminDashboard /> : null}
      {person?.role === "employee" ? <EmployeeDashboard /> : null}
    </>
  );
}

export default App;
