fetch("https://api.escuelajs.co/api/v1/users")
    .then(res => {
        if (!res.ok) {
            throw new Error("Error al obtener los datos de la API");
        }
        return res.json();
    })
    .then(data => {
        let userListHTML = '';
        for (let user of data) {
            if (user && user.email && user.password && user.name && user.avatar) {
                userListHTML += `
                    <div class="card mb-5">
                    <img src="${user.avatar}" class="card-img-top" alt="${user.name}">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><strong>Email:</strong> ${user.email}</li>
                            <li class="list-group-item"><strong>Password:</strong> ${user.password}</li>
                            <li class="list-group-item"><strong>Name:</strong> ${user.name}</li>
                        </ul>
                    </div>`;
            } else {
                console.error("Datos de usuario incompletos:", user);
            }
        }
        document.getElementById("lista").innerHTML = userListHTML;
    })
    .catch(error => {
        console.error("Error al obtener los datos de la API:", error);
    });