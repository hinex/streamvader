<template>
    <md-toolbar md-elevation="1">
        <h3 class="md-title" style="flex: 1">
            <img class="icon" src="../assets/logo.svg" alt="">
        </h3>
        <md-button><i class="mdi mdi-refresh"/></md-button>
    </md-toolbar>
</template>

<script>
    export default {
        name: "Header",
    }
</script>

<style scoped>
    .icon {
        width: 24px;
        height: 24px;
    }
</style>
