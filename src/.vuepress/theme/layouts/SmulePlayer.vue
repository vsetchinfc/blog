<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <iframe frameborder="0" width="600" height="600" src="https://www.smule.com/recording/%D0%B0%D0%BB%D0%BB%D0%B0-%D0%BF%D1%83%D0%B3%D0%B0%D1%87%D0%B5%D0%B2%D0%B0-%D0%BD%D0%B5-%D0%BE%D1%82%D1%80%D0%B5%D0%BA%D0%B0%D1%8E%D1%82%D1%81%D1%8F-%D0%BB%D1%8E%D0%B1%D1%8F/1399442024_3634485045/frame/box"></iframe>
            </div>
            <div class="col">
                <h1 class="text-center">Smule Player</h1>
                <ul>
                    <li v-for="recording in smuleRecordings" :key="recording.title">
                        {{ recording.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            smuleRecordings: [
                { title: 'Song 1', link: 'https://www.smule.com/recording/%D0%B0%D0%BB%D0%BB%D0%B0-%D0%BF%D1%83%D0%B3%D0%B0%D1%87%D0%B5%D0%B2%D0%B0-%D0%BD%D0%B5-%D0%BE%D1%82%D1%80%D0%B5%D0%BA%D0%B0%D1%8E%D1%82%D1%81%D1%8F-%D0%BB%D1%8E%D0%B1%D1%8F/1399442024_3634485045/frame/box'},
                { title: 'Song 2', link: 'https://www.smule.com/recording/%D0%B0%D0%BB%D0%BB%D0%B0-%D0%BF%D1%83%D0%B3%D0%B0%D1%87%D0%B5%D0%B2%D0%B0-%D0%BD%D0%B5-%D0%BE%D1%82%D1%80%D0%B5%D0%BA%D0%B0%D1%8E%D1%82%D1%81%D1%8F-%D0%BB%D1%8E%D0%B1%D1%8F/1399442024_3634485045/frame/box'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>