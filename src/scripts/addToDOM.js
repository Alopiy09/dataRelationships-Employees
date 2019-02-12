import employeeData from "./datamanager";

const addToDOM = () => {
    employeeData()
    .then(parsedEmployees => {
        console.log(parsedEmployees)
        parsedEmployees.forEach(function(currentEmployee) {
            document.querySelector(".output").innerHTML += 
             `
            <article class="employee">
            <header class="employee__name">
                <h1>${currentEmployee.first_name} ${currentEmployee.last_name}</h1>
            </header>
            <section class="employee__department">
                Works in the ${currentEmployee.department.dept_name} department
            </section>
            <section class="employee__computer">
                Currently using a ${currentEmployee.computer.make} ${currentEmployee.computer.model}
            </section>
        </article>
            `
        })
    })
}

export default addToDOM