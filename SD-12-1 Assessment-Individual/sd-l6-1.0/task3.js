import { getServerURL } from "./task1.js"
import { listUsers } from "./task2.js"

// Funcion de addUser
async function addUser(primer_nombre, apellido, correo_electronico){
    try{
        // Llamada al fetch
        let response = await listUsers();
        // Recorrido por los datos obtenidos para averiguar la ultima id existente
        let newId = response.length > 0 ? response[response.length - 1].id + 1 : 1;

        // Asignacion de datos con los parametros ingresados para el nuevo usuario, usando el id establecido
        const newUser = {
            id: newId,
            first_name: primer_nombre,
            last_name: apellido,
            email: correo_electronico
        };
        // Metodo POST para agregar el usuario creado
        await fetch(getServerURL(), {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });

        // Muestra la lista de usuarios actualizada
        let newUsersList = await listUsers();
        console.log(newUsersList);
        

    } catch (error) {
        console.error('Error in addUser function:', error);
    }
    
}

addUser('Javier', 'Galindo', 'javier@generation.com')

export {addUser}