export default function({store,error,redirect,req,route}){
    console.log(route)
    if(!store.state.token){
        redirect('/login')
    }else if(route.path == '/login'){
        redirect('/')
    }
}
