import { api } from "../api"

export const getTodosPosts = async (id) => {

    const res = await api.get(`/todos?userId=${id}`)
    console.log(res.data);

    if (!res.data) {
        throw new Error('No data')
    }
    return res.data
}
