const employeeData = () => {
    return fetch("http://localhost:8080/employees?_expand=department&_expand=computer")
        .then(res => res.json())
    // .then( response => {
    //     console.table(response)
    // })
}

export default employeeData