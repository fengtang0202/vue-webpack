import * as api from '../config/api'
import {fetch,post} from '../config/request'
export const Login=(userName,pwd)=>{
    return post(`${api.LOGIN}?userName=${userName}&userPassword=${pwd}&terminal=3`
)
}

