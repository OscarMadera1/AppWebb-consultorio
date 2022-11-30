const url = 'http://localhost:4000/api/roles';

//listar todos los roles
fetch(url, {
    method: 'GET',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2UwNDIxOTU2NGZkMWY4NWQxZDdlYSIsImlhdCI6MTY2OTIwMjk4NywiZXhwIjoxNjY5MjMxNzg3fQ.rEc_sHHNh3dLlx4hZnFZnjSmjoPQ8Bar3hg7CFafs4Q'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))

//crear un rol
fetch(url, {
    method: 'POST',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2UwNDIxOTU2NGZkMWY4NWQxZDdlYSIsImlhdCI6MTY2OTIwMjk4NywiZXhwIjoxNjY5MjMxNzg3fQ.rEc_sHHNh3dLlx4hZnFZnjSmjoPQ8Bar3hg7CFafs4Q',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nombreRol: "OTRO",
        estadoRol: 1
    })
})
    .then(response => response.json())
    .then(data => console.log(data))

//editar un rol
const urlEditar = `${url}/637e09f9ae29ef78d8477235`;
fetch(urlEditar, {
    method: 'PUT',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2UwNDIxOTU2NGZkMWY4NWQxZDdlYSIsImlhdCI6MTY2OTIwMjk4NywiZXhwIjoxNjY5MjMxNzg3fQ.rEc_sHHNh3dLlx4hZnFZnjSmjoPQ8Bar3hg7CFafs4Q',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nombreRol: "OTROS",
        estadoRol: 1
    })
})
    .then(response => response.json())
    .then(data => console.log(data))

//eliminar un rol
const urlBorrar = `${url}/637e09f9ae29ef78d8477235`;
fetch(urlBorrar, {
    method: 'DELETE',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2UwNDIxOTU2NGZkMWY4NWQxZDdlYSIsImlhdCI6MTY2OTIwMjk4NywiZXhwIjoxNjY5MjMxNzg3fQ.rEc_sHHNh3dLlx4hZnFZnjSmjoPQ8Bar3hg7CFafs4Q'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))