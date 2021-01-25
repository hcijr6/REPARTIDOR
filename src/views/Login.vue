<template>
 <div class="d-flex justify-content-center align-align-content-center flex-column">
   <form class="login" @submit.prevent="login">
        <h1>Sign in</h1>
        <br>
        <input required class="form-control" v-model="email" type="text" placeholder="email"/>
        <br>
        <input required class="form-control" v-model="password" type="password" placeholder="password"/>
        <br/>
        <button type="submit" class="btn btn-outline-success" >Login</button>
   </form>
 </div>
</template>

<script>
export default {
    data() {
        return {
            email:"",
            password:""
        }
    },
    methods: {
        login() {
            const Login={email:this.email, password:this.password}
            this.$store.dispatch('findUser',Login)
                .then(()=>{
                    localStorage.setItem('token',this.$store.state.userData.token),
                    this.$router.push('/')
                    })
                .catch(error=>
                    alert('Error: '+(error.statusText || error.message || error)),
                )
        }
    },
    mounted(){
    }
}
</script>
