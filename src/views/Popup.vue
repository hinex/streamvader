<template>
    <div class="area">
        <Header/>
        <md-content class="area-flex">
            <md-tabs md-alignment="fixed">
                <md-tab id="tab-home" md-label="Online">
                    asdasdasd
                </md-tab>
                <md-tab id="tab-pages" md-label="Offline">
                    123123123
                </md-tab>
            </md-tabs>
        </md-content>
        <md-speed-dial :class="bottomPosition">
            <md-speed-dial-target>
                <i class="mdi mdi-plus"/>
            </md-speed-dial-target>

            <md-speed-dial-content>
                <md-button class="md-icon-button md-primary">
                    <i class="mdi mdi-twitch"/>
                </md-button>

                <md-button class="md-icon-button md-primary">
                    <i class="mdi mdi-mixer"/>
                </md-button>
            </md-speed-dial-content>
        </md-speed-dial>
    </div>
</template>

<script>
    import Header from "../components/Header"
    export default {
        name: "Popup",
        components: {
            Header,
        },
        data() {
            return {
                bottomPosition: 'md-bottom-right'
            }
        }
    }
</script>

<style scoped>
    .area {
        display: flex;
        height: 400px;
        flex-direction: column;
    }

    .area-flex {
        flex:1;
        overflow: scroll;
    }
</style>
