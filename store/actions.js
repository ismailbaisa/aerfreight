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
    async deleteCargo({commit, dispatch}, payload) {
        try {
            let { data } = await this.$axios.delete('https://aerfreight-crud.firebaseio.com/posts.json/'+ payload, {
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Headers': '*'}
            })

            Swal.fire(
                'Cargo Deleted!',
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
    async editCargo({commit, dispatch}, payload) {
        try {
            let { data } = await this.$axios.put('https://aerfreight-crud.firebaseio.com/posts.json/'+ payload, {
                'editable' : 'false'
            },
            {headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Headers': '*'} }
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
} 