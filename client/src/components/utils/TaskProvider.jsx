import axios from "axios";
import { FetchFromData } from "../"
const fetchUrl = 'http://localhost:3000/api/tasks'


export const GetAllTasks = async () => {
    try {
        const getData = await FetchFromData(fetchUrl)
        return getData;
    } catch (err) {
        console.error(err.message);
    }
}

export const PostTasks = async (task) => {
    try {
        const {data} = await axios.post(fetchUrl, task, {
            headers: {'Content-Type': 'application/json'
            }
            })
            return data;
    } catch (err) {
        console.error(err.message);
    }
}

export const DeleteTask = async (taskId) => {
    try {
        const {data} = await axios.delete(`${fetchUrl}/${taskId}`);
        return data;
    } catch (err) {
        console.error(err.message);
    }
}

export const UpdateTask = async (taskId, updatedTask) => {
    try {
        const {data} = await axios.patch(`${fetchUrl}/${taskId}`, updatedTask, {
            headers: { "Content-Type": "application/json" }
        })
        return data;
    } catch (err) {
        console.error(err.message);
    }
}