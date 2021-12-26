import { environment } from "src/environments/environment";

export const url = {
    url:"https://btec-app.herokuapp.com",
    custom:{
        auth:{
            login:"/auth/login",
            registration:"/auth/register",
            roles:"/api/roles"
        },
        data:{
            api:{
                api:"/api/"
            },
            data:{
                data:"data",
                users:"users",
                vip:"vip",
                artist:"artist",
            }
        }
    }
}