import fetch from "node-fetch";
import { getServerURL } from "./task1.js";

async function listUsers() {
    try {
        const usersList = await fetch(getServerURL());
        const users = await usersList.json();
        return users;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return [];
    }
}

listUsers()
export { listUsers };