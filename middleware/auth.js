export default function({store,error,redirect,req,route}){
    if(!store.state.token){
        if(route.path != '/login'){
            redirect('/login')
        }
    }else if(route.path == '/login'){
        redirect('/')
    }
}
