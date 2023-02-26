import { http } from '../../main.js'
export default {

    dados:() => {
      return this.$http.get('/user/{id}')
}

}