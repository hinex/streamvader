<template>
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <b-navbar-item tag="div" class="logo-wrapper">
            <img src="../assets/logo.svg" class="logo" alt="">
        </b-navbar-item>

        <b-navbar-item v-if="!notHome" tag="div" class="navbar-item flex-end">
            <div class="buttons">
                <a class="button is-dark">
                    <i class="mdi mdi-refresh"/>
                </a>
                <b-dropdown aria-role="list">
                    <a class="button is-primary" slot="trigger">
                        <i class="mdi mdi-plus"/>
                    </a>

                    <b-dropdown-item aria-role="listitem" @click="$router.push({ name: 'add', params: { name: 'twitch' } })">
                        <span class="ico">
                            <i class="mdi mdi-twitch"></i>
                        </span>
                        <span class="label">Twitch</span>
                    </b-dropdown-item>
                    <b-dropdown-item aria-role="listitem" @click="$router.push({ name: 'add', params: { name: 'mixer' }  })">
                        <span class="ico">
                            <i class="mdi mdi-mixer"></i>
                        </span>
                        <span class="label">Mixer</span>
                    </b-dropdown-item>
                    <b-dropdown-item aria-role="listitem" @click="$router.push({ name: 'add', params: { name: 'goodgame' }  })">
                        <span class="ico">
                            <img class="ocp" src="../assets/goodgame.svg" alt="">
                        </span>
                        <span class="label">GoodGame</span>
                    </b-dropdown-item>
                    <b-dropdown-item aria-role="listitem" @click="$router.push({ name: 'add', params: { name: 'wasd' }  })">
                        <span class="ico">
                            <img class="ocp" src="../assets/wasd.svg" alt="">
                        </span>
                        <span class="label">WASD</span>
                    </b-dropdown-item>
                </b-dropdown>
            </div>
        </b-navbar-item>
        <b-navbar-item v-else tag="div" class="navbar-item flex-end">
            <router-link to="/" class="buttons">
                <a class="button is-dark">
                    <i class="mdi mdi-close"/>
                </a>
            </router-link>
        </b-navbar-item>
    </nav>
</template>

<script>
    export default {
        name: "Header",
        props: {
            notHome: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .navbar {
        display: flex;
    }

    .navbar .logo {
        max-height: 36px;
    }

    .logo-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flex-end {
        display: flex;
        flex: 1;
        justify-content: flex-end;
    }

    .ico {
        width: 20px;
        display: inline-flex;
        justify-content: center;
        align-content: center;
        margin-right: 5px;
    }

    .ocp {
        height: 10px;
    }
</style>
