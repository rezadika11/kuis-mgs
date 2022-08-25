<template>
    <body class="bg-primary">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-5">
                                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                                        <div class="card-header"><h3 class="text-start font-weight-light my-4">Register</h3></div>
                                        <div class="card-body">
                                                <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">User Name :</label>
                                                 <input type="text" class="form-control" id="exampleFormControlInput1" v-model="username"  placeholder="Johndoe">
                                                </div>
                                                <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Password :</label>
                                                 <input type="password" class="form-control" id="exampleFormControlInput1" v-model="password"  placeholder="******">
                                                </div>
                                                <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Profile Name :</label>
                                                 <input type="text" class="form-control" id="exampleFormControlInput1" v-model="profileName"  placeholder="Johndoe">
                                                </div>
                                                <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Adress :</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" v-model="adress" ></textarea>
                                                </div>

                                                 <hr>
                                                 <div class="d-flex justify-content-center">
                                                    <button v-on:click="signUp" class="btn btn-secondary mb-3">Sign Up</button>
                                                 </div>
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
let url = 'http://159.223.57.121:8080/auth/do-register';
import axios from 'axios';
export default{
    name : 'Register',
    data()
    {
        return{
            username:'',
            password:'',
            profileName:'',
            adress:'',

        }
    },

    methods:{
      async  signUp()
        {
            let res = await axios.post(url,{
                username:this.username,
                password:this.password,
                profileName:this.profileName,
                adress:this.adress,
            });

                if(res.status==200)
                {
                    alert("register berhasil")
                    this.$router.push('/')

                }
        }
    }
}
</script>


