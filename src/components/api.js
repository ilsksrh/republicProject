import axios from 'axios'

export const getAllGoods = async () => {
    const resp = await axios.get('http://localhost:4000/goods')
    return resp.data
}

export const getOneGood = async (goodId) => {
    const resp = await axios.get('http://localhost:4000/goods/'+goodId)
    return resp.data
}
export const saveGood = async (good) => {
    const resp = await axios.post('http://localhost:4000/goods/', good)
    return resp.data
}
export const updateGood = async (good) => {
    const resp = await axios.put('http://localhost:4000/goods/'+ good.id, good)
    return resp.data
}
export const deleteGood = async (goodId) => {
    const resp = await axios.delete('http://localhost:4000/goods/'+ goodId)
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
export const getAllCategories = async (goodId) => {
    const resp = await axios.get('http://localhost:4000/categories')
    return resp.data
}
export const getAllGoodsAndCat = async (url) => {
    const [cats, goods] = await axios.all([
        axios.get('http://localhost:4000/categories'),
        axios.get(url)
    ])
    return [cats.data, goods.data]
}