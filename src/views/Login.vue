<template>
    <div class="loginBox"> <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px">
        <h3>Connexion</h3>
        <form action="login.php" method="post">
            <div class="inputBox"> 
                <input id="uname" type="text" name="Username" placeholder="Nom d'utilisateur"> 
                <input id="pass" type="password" name="Password" placeholder="Mot de passe"> 
            </div> 
            <input type="submit" name="" value="Connexion">
        </form>
        <router-link to="/mot-de-passe-oublie">Mot de passe oublié ?</router-link>
        <div class="text-center">
            <router-link to="/inscription" style="color: #da63b9;">S'inscrire</router-link>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'login-default'
    }
</script>