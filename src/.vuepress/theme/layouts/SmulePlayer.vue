<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <iframe frameborder="0" width="600" height="600" v-bind:src="selectedLink"></iframe>
            </div>
            <div class="col">
                <h1 class="text-center">Smule Player</h1><!--https://www.instagram.com/alexandra_rouvs/-->
                <a href="https://www.smule.com/AleksandraRouvs" target="_"><h2 class="text-center">@AleksandraRouvs</h2></a>
                <select class="custom-select custom-select-lg mb-3 mt-3" multiple v-model="selectedLink">
                    <option v-for="recording in smuleRecordings" :key="recording.title" v-bind:value="recording.link">
                        {{ recording.title }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            smuleRecordings: [
                { title: 'Не отрекаются, любя', link: 'https://www.smule.com/recording/%D0%B0%D0%BB%D0%BB%D0%B0-%D0%BF%D1%83%D0%B3%D0%B0%D1%87%D0%B5%D0%B2%D0%B0-%D0%BD%D0%B5-%D0%BE%D1%82%D1%80%D0%B5%D0%BA%D0%B0%D1%8E%D1%82%D1%81%D1%8F-%D0%BB%D1%8E%D0%B1%D1%8F/1399442024_3634485045/frame/box'},
                { title: 'Maria Magdalena', link: 'https://www.smule.com/recording/sandra-maria-magdalena/393121489_3606244951/frame/box'},
                { title: 'Дыши☘(Gm/ПИАНО Иван Сальников)', link: 'https://www.smule.com/recording/serebro-el%D0%BC%D0%B8%D0%BD%D1%83%D1%81-%D0%B4%D1%8B%D1%88%D0%B8-gm-%D0%BF%D0%B8%D0%B0%D0%BD%D0%BE-%D0%B8%D0%B2%D0%B0%D0%BD-%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2/1348538411_3601868315/frame/box'},
                { title: 'Maria Magdalena', link: 'https://www.smule.com/recording/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%87%D1%83%D0%BC%D0%B0%D0%BA%D0%BE%D0%B2-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%87%D1%83%D0%BC%D0%B0%D0%BA%D0%BE%D0%B2-%D1%8F-%D0%BE%D1%82-%D1%82%D0%B5%D0%B1%D1%8F-%D1%81%D1%85%D0%BE%D0%B6%D1%83-%D1%81-%D1%83%D0%BC%D0%B0/2380915523_3601829122/frame/box'},
                { title: 'Maria Magdalena', link: 'https://www.smule.com/recording/%D1%81%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE-%D0%B4%D1%8B%D1%88%D0%B8-%D1%81%D0%BE-%D0%BC%D0%BD%D0%BE%D0%B9/345215637_3588976954/frame/box'},
                { title: 'Maria Magdalena', link: 'https://www.smule.com/recording/%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D0%B0-el%D0%BC%D0%B8%D0%BD%D1%83%D1%81-%D0%BF%D0%BE%D0%B4-%D0%B8%D1%81%D0%BF%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%BC-%D0%BD%D0%B5%D0%B1%D0%BE%D0%BC-%D0%BE%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB-%D0%BC%D0%B8%D0%BD%D1%83%D1%81/378850526_3612635543/frame/box'},
                { title: 'Maria Magdalena', link: 'https://www.smule.com/recording/%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D0%B0-el%D0%BC%D0%B8%D0%BD%D1%83%D1%81-%D0%BF%D0%BE%D0%B4-%D0%B8%D1%81%D0%BF%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%BC-%D0%BD%D0%B5%D0%B1%D0%BE%D0%BC-%D0%BE%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB-%D0%BC%D0%B8%D0%BD%D1%83%D1%81/378850526_3613014183/frame/box'},
                { title: 'Maria Magdalena', link: 'https://www.smule.com/recording/%D0%B0%D0%BB%D0%BB%D0%B0-%D0%BF%D1%83%D0%B3%D0%B0%D1%87%D0%B5%D0%B2%D0%B0-%D0%BD%D0%B5-%D0%BE%D1%82%D1%80%D0%B5%D0%BA%D0%B0%D1%8E%D1%82%D1%81%D1%8F-%D0%BB%D1%8E%D0%B1%D1%8F/1399442024_3634485045/frame/box'}

//<!-- <iframe frameborder="0" width="600" height="600" src=""></iframe> -->

// <!-- <iframe frameborder="0" width="600" height="600" src=""></iframe> -->

// <!-- <iframe frameborder="0" width="600" height="600" src=""></iframe> -->

// <!-- <iframe frameborder="0" width="600" height="600" src=""></iframe> -->

// <!-- <iframe frameborder="0" width="600" height="600" src=""></iframe> -->

//<iframe frameborder="0" width="600" height="600" src=""></iframe>
            
            ],
            selectedLink: 'https://www.smule.com/recording/%D0%B0%D0%BB%D0%BB%D0%B0-%D0%BF%D1%83%D0%B3%D0%B0%D1%87%D0%B5%D0%B2%D0%B0-%D0%BD%D0%B5-%D0%BE%D1%82%D1%80%D0%B5%D0%BA%D0%B0%D1%8E%D1%82%D1%81%D1%8F-%D0%BB%D1%8E%D0%B1%D1%8F/1399442024_3634485045/frame/box'
        }
    },
    methods: {
        onChange(event) {
            debugger;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>