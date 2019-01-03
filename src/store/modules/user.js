import types from './../types'
import {Login} from '../../service/getData'
import Aes from '../../config/util'
const state = {
    isLogin:false,
    userInfo:{},
    token:''
}
var getters = {
    token(state){
        return state.token
    },
    isLogin(state){
        return state.isLogin
    },
    userInfo(state){
        return state.userInfo 
    }
}
const mutations={
    [types.CHANGE_ISLOGIN](state){
        state.isLogin=!state.isLogin
    },
    [types.LOGIN](state,userInfo){
        state.userInfo=userInfo
    },
    [types.USER_TOKEN](state,token){
        state.token = token
    }
}
const actions={
   async login({commit},userInfo){
       let data = await Login(userInfo.name,userInfo.pwd)
       console.log('数据:',Aes.decrypt(data.data))
       if(data.returnCode===200){
            commit(types.CHANGE_ISLOGIN)
            commit(types.USER_TOKEN,data.data.token)
            commit(types.LOGIN,data.data)
        }   
        return data.msg
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}
