import { getServerURL } from "./task1.js"
import { listUsers } from "./task2.js"

async function addUser(primer_nombre, apellido, correo_electronico){
    try{
        let response = await listUsers();

        let newId = response.length > 0 ? response[response.length - 1].id + 1 : 1;

        const newUser = {
            id: newId,
            first_name: primer_nombre,
            last_name: apellido,
            email: correo_electronico
        };

        await fetch(getServerURL(), {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
        let newUsersList = await listUsers();
        console.log(newUsersList);
        

    } catch (error) {
        console.error('Error in addUser function:', error);
    }
    
}
addUser('Javier', 'Galindo', 'javier@generation.com')

export {addUser}