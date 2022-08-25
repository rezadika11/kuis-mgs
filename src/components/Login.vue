<template>
    <body class="bg-primary">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-5">
                                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                                        <div class="card-header"><h3 class="text-start font-weight-light my-4">Login</h3></div>
                                        <div class="card-body">
                                                <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">User Name :</label>
                                                 <input type="text" class="form-control" id="exampleFormControlInput1" v-model="username" placeholder="Johndoe">
                                                </div>
                                                <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Password :</label>
                                                 <input type="password" class="form-control" id="exampleFormControlInput1" v-model="password" placeholder="******">
                                                </div>
                                        
                                                <button v-on:click="Login" class="btn btn-secondary mb-3">Login</button><br>
                                            <a href="">Forgot Password?</a>
                                            <hr>
                                            <p>New User</p>
                                            <router-link to="/register" class="btn btn-secondary mb-2">Register</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </body>
</template>
<script>
let url = 'http://159.223.57.121:8080/auth/do-login';
import axios from 'axios';
export default {
     name : 'Login',
    data()
    {
        return{
            username:'',
            password:'',

        }
    },
   methods:{

      async  Login()
        {
            let res = await axios.post(url,{
                username:this.username,
                password:this.password,
            });

                if(res.status==200)
                {
                    alert(res.data.message)
                    localStorage.setItem("info login",JSON.stringify(res.data))
                    this.$router.push({name:'dashboard'})
                }
                
        }
    }
   
}
</script>

