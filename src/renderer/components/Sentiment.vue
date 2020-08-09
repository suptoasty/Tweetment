<template>
    <div class="container-fluid" id="wrapper">
        <div class="card">
            <div clas="card-body">
                {{tweet}}
                <br>
                {{sentiment}}
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'sentiment',
        components: {},
        data: {
            tweet: '',
            sentiment: 0.0
        },
        methods: {

        }
    }
</script>

<style>
</style>