<template>
    <div class="area">
        <Header :not-home='true' />
        <b-tabs v-model="activeTab" class="is-dark">
            <b-tab-item label="Sync Follows">
                <section>
                    <b-field horizontal label="Your Username" message="Enter the username from follows will be synchronized">
                        <b-input name="subject" placeholder="MetaGarage" expanded></b-input>
                    </b-field>

                    <b-field horizontal><!-- Label left empty for spacing -->
                        <p class="control">
                            <b-button class="is-primary" expanded>
                                Sync
                            </b-button>
                        </p>
                    </b-field>
                </section>

                {{ $route.params.name }}
            </b-tab-item>

            <b-tab-item label="Add Streamer">
                <section>
                    <b-field horizontal label="Streamer Username" message="Enter streamer username to add without sync follows">
                        <b-input name="subject" placeholder="MetaGarage" expanded></b-input>
                    </b-field>

                    <b-field horizontal><!-- Label left empty for spacing -->
                        <p class="control">
                            <b-button class="is-primary" expanded>
                                Add
                            </b-button>
                        </p>
                    </b-field>
                </section>
            </b-tab-item>
        </b-tabs>
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
                activeTab: 0,
                bottomPosition: 'md-bottom-right'
            }
        }
    }
</script>

<style scoped>
    .buttons {
        justify-content: center;
    }
    .menu {
        padding:20px
    }
    .area {
        display: flex;
        height: 400px;
        flex-direction: column;
    }

    .ico {
        width: 30px;
    }
</style>
