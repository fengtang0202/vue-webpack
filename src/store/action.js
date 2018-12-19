import types from './types'
const actions={
    incrementAsync({commit,state}){
        var p=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            })
        })
        p.then(()=>{
            commit(types.INCREMENT,state.user.a);
        }).catch(()=>{
            console.log('异步操作~')
        })
    }
}
export default actions