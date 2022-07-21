<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Brief VueJS</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                <router-link to="/" class="nav-link">Accueil</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/connexion" class="nav-link">Connexion</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/inscription" class="nav-link">Inscription</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        name: 'nav-default'
    }
</script>