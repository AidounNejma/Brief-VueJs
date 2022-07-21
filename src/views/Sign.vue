<template>
    <div class="loginBox"> <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px">
        <h3>Inscription</h3>
        <form action="" method="post">
            <div class="inputBox"> 
                <input id="uname" type="text" name="Username" placeholder="Nom d'utilisateur">
                <input id="email" type="text" name="email" placeholder="Email">  
                <input id="pass" type="password" name="Password" placeholder="Mot de passe"> 
                <input id="passTwo" type="password" name="passwordTwo" placeholder="Confirmer le mot de passe"> 
            </div> 
            <input type="submit" name="" value="Connexion">
        </form> 
        <router-link to="/mot-de-passe-oublie" class="forgetButton">Mot de passe oublié ?</router-link>
        <div class="text-center">
            <router-link to="/connexion" style="color: #da63b9;">Se connecter</router-link>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'sign-default'
    }
</script>