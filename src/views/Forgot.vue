<template>
    <div class="loginBox">
        <h3>Mot de passe oublié ?</h3>
        <form action="login.php" method="post">
            <div class="inputBox"> 
                <input id="uname" type="email" name="email" placeholder="Entrez votre adresse email"> 
            </div> 
            <input type="submit" name="" value="Envoyer le lien">
        </form> 
    </div>
</template>

<script>
    export default{
        name: 'forgot-default'
    }
</script>