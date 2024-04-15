import axios from 'axios'

export const getAllAnimals = async () => {
    const resp = await axios.get('http://localhost:4000/animals')
    return resp.data
}

export const getOneAnimal = async (animalId) => {
    const resp = await axios.get('http://localhost:4000/animals/'+animalId)
    return resp.data
}
export const saveAnimal = async (animal) => {
    const resp = await axios.post('http://localhost:4000/animals/', animal)
    return resp.data
}
export const updateAnimal = async (animal) => {
    const resp = await axios.put('http://localhost:4000/animals/'+ animal.id, animal)
    return resp.data
}
export const deleteAnimal = async (animalId) => {
    const resp = await axios.delete('http://localhost:4000/animals/'+ animalId)
    return resp.data
}
export const deleteCat = async (catId) => {
    const resp = await axios.delete(`http://localhost:4000/categories/${catId}`);
    return resp.data;
}
export const createCat = async (cat) => {
    const resp = await axios.post('http://localhost:4000/categories/', cat)
    return resp.data
}
export const getAllCategories = async (animalId) => {
    const resp = await axios.get('http://localhost:4000/categories')
    return resp.data
}
export const getAllAnimalsAndCat = async (url) => {
    const [cats, animals] = await axios.all([
        axios.get('http://localhost:4000/categories'),
        axios.get(url)
    ])
    return [cats.data, animals.data]
}