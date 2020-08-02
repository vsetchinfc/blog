<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-sm-12">
                <iframe class="mt-3" frameborder="0" width="550" height="600" v-bind:src="selectedLink"></iframe>
            </div>
            <div class="col-lg-6 col-sm-12">
                <h1 class="text-center mt-3">Smule Player</h1><!--https://www.instagram.com/alexandra_rouvs/-->
                <a href="https://www.smule.com/AleksandraRouvs" target="_"><h2 class="text-center">@AleksandraRouvs</h2></a>
                <div class="list-group">
                    <a v-for="recording in smuleRecordings" href="#" class="list-group-item list-group-item-action" @click="onClick(recording.link)">{{recording.title}}</a>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
import smule_songs from './smule_songs.json'

export default {
    data: function () {
        return {
            smuleRecordings: smule_songs,
            selectedLink: 'https://www.smule.com/recording/lara-fabian-a-wonderful-life/2356330899_3577288830/frame/box'
        }
    },
    methods: {
        onClick(link) {
            this.selectedLink = link;
        }
    }
}
</script>

<style lang="scss" scoped>
.list-group {
    height: 500px;
    width: 100%;
    overflow-y: scroll;
}
</style>