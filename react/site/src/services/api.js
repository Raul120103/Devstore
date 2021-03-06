import axios from 'axios'
const api = axios.create({
baseURL: 'http://localhost:3030'
})
export default class Api {
    async listar() {
        let r = await api.get('/produto');
    return r.data;
    }   

    async inserir(nome, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem, ativo, inclusao) {
        let r = await api.post('/produto', {nome, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem, ativo, inclusao});
    return r.data;
    }   

    async alterar(id, nome, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem, ativo, inclusao) {
        let r = await api.put('/produto/' + id, {nome, categoria, precoDe, precoPor, avaliacao, descricao, estoque, imagem, ativo, inclusao});
    return r.data;
    }   

    async deletar(id) {
        let r = await api.delete('/produto/' + id);
    return r.data;
    }   
}