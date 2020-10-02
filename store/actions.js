import Swal from 'sweetalert2'
import mutations from './mutations'
export default {
    async createCargo({commit, dispatch}, payload) {
        try {
            let { res } = await this.$axios.post('https://aerfreight-crud.firebaseio.com/posts.json', payload)
            $nuxt.$router.push('/home')

            Swal.fire(
                'New Cargo Created!',
                '',
                'success'
              )
        }
        catch (err) {
        Swal.fire(
                'Error!',
                err,
                'error'
              )
        }
    },
    async getCargo({commit, dispatch}, payload) {
        try {
            let { data } = await this.$axios.get('https://aerfreight-crud.firebaseio.com/posts.json')
            const cargoArray = []
            for (const key in data){
                cargoArray.push({ ...data[key], id: key})
            }
            commit('setCargo', cargoArray )
        }
        catch (err) {
        Swal.fire(
                'Error!',
                err,
                'error'
              )
        }
    },
} 