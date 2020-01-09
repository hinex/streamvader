<template>
    <div class="area">
        <Header/>
        <div class="area-body">
            <b-tabs v-model="activeTab" class="is-dark">
                <b-tab-item label="Online">
                    <article class="message is-dark">
                        <div class="message-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </div>
                    </article>
                    <article class="message is-dark">
                        <div class="message-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                        </div>
                    </article>
                </b-tab-item>

                <b-tab-item label="Offline">
                    Lorem <br>
                    ipsum <br>
                    dolor <br>
                    sit <br>
                    amet.
                </b-tab-item>

                <b-tab-item label="Sync">
                    Lorem <br>
                    ipsum <br>
                    dolor <br>
                    sit <br>
                    amet.
                </b-tab-item>
            </b-tabs>
        </div>
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
    .area {
        display: flex;
        height: 400px;
        flex-direction: column;
    }

    .area-body {
        flex: 1;
        overflow: scroll;
    }
</style>
