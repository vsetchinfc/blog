<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <iframe class="mt-3" frameborder="0" width="600" height="600" v-bind:src="selectedLink"></iframe>
            </div>
            <div class="col">
                <h1 class="text-center mt-3">Smule Player</h1><!--https://www.instagram.com/alexandra_rouvs/-->
                <a href="https://www.smule.com/AleksandraRouvs" target="_"><h2 class="text-center">@AleksandraRouvs</h2></a>
                <select class="custom-select custom-select-lg mb-3 mt-3" style="height: 470px;" multiple v-model="selectedLink">
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
                { title: 'Hello - ♌ @e_NTyas', link: 'https://www.smule.com/recording/lionel-richie-acoustic-cover-hello-e_ntyas/2356330899_3491500840/frame/box'},
                { title: 'Останусь - killergirl59\'s version', link: 'https://www.smule.com/recording/%D0%B3%D0%BE%D1%80%D0%BE%D0%B4-312-%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D1%83%D1%81%D1%8C-killergirl59s-version/2356330899_3570231566/frame/box'},
                { title: 'Не отрекаются, любя', link: 'https://www.smule.com/recording/%D0%B0%D0%BB%D0%BB%D0%B0-%D0%BF%D1%83%D0%B3%D0%B0%D1%87%D0%B5%D0%B2%D0%B0-%D0%BD%D0%B5-%D0%BE%D1%82%D1%80%D0%B5%D0%BA%D0%B0%D1%8E%D1%82%D1%81%D1%8F-%D0%BB%D1%8E%D0%B1%D1%8F/1399442024_3634485045/frame/box'},
                { title: 'Maria Magdalena', link: 'https://www.smule.com/recording/sandra-maria-magdalena/393121489_3606244951/frame/box'},
                { title: 'Дыши☘(Gm/ПИАНО Иван Сальников)', link: 'https://www.smule.com/recording/serebro-el%D0%BC%D0%B8%D0%BD%D1%83%D1%81-%D0%B4%D1%8B%D1%88%D0%B8-gm-%D0%BF%D0%B8%D0%B0%D0%BD%D0%BE-%D0%B8%D0%B2%D0%B0%D0%BD-%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2/1348538411_3601868315/frame/box'},
                { title: 'Алексей Чумаков - Я от тебя схожу с ума', link: 'https://www.smule.com/recording/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%87%D1%83%D0%BC%D0%B0%D0%BA%D0%BE%D0%B2-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%87%D1%83%D0%BC%D0%B0%D0%BA%D0%BE%D0%B2-%D1%8F-%D0%BE%D1%82-%D1%82%D0%B5%D0%B1%D1%8F-%D1%81%D1%85%D0%BE%D0%B6%D1%83-%D1%81-%D1%83%D0%BC%D0%B0/2380915523_3601829122/frame/box'},
                { title: 'Дыши Со мной', link: 'https://www.smule.com/recording/%D1%81%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE-%D0%B4%D1%8B%D1%88%D0%B8-%D1%81%D0%BE-%D0%BC%D0%BD%D0%BE%D0%B9/345215637_3588976954/frame/box'},
                { title: 'Под испанским небом', link: 'https://www.smule.com/recording/%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D0%B0-el%D0%BC%D0%B8%D0%BD%D1%83%D1%81-%D0%BF%D0%BE%D0%B4-%D0%B8%D1%81%D0%BF%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%BC-%D0%BD%D0%B5%D0%B1%D0%BE%D0%BC-%D0%BE%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB-%D0%BC%D0%B8%D0%BD%D1%83%D1%81/378850526_3612635543/frame/box'},
                { title: 'Wonderful life', link: 'https://www.smule.com/recording/lara-fabian-wonderful-life/2356330899_3489384690/frame/box'},
                { title: 'Долетай', link: 'https://www.smule.com/recording/%D0%BA%D0%B0%D1%82%D1%8F-%D0%BB%D0%B5%D0%BB%D1%8C-%D0%B4%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D0%B9/2356330899_3531025468/frame/box'},
                { title: 'Самолет', link: 'https://www.smule.com/recording/%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%8F-%D1%81%D0%B0%D0%BC%D0%BE%D0%BB%D0%B5%D1%82/911221746_3561212461/frame/box'},
                { title: 'Спектакль окончен', link: 'https://www.smule.com/recording/%D0%BF%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0-%D0%B3%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD%D0%B0-%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D0%B0%D0%BA%D0%BB%D1%8C-%D0%BE%D0%BA%D0%BE%D0%BD%D1%87%D0%B5%D0%BD/2414885921_3561420952/frame/box'},
                { title: 'Лунная мелодия', link: 'https://www.smule.com/recording/%D0%BB%D0%B0%D1%80%D0%B8%D1%81%D0%B0-%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0-%D0%B8-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BF%D0%B0%D0%BD%D0%B0%D0%B9%D0%BE%D1%82%D0%BE%D0%B2-%D0%BB%D1%83%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BC%D0%B5%D0%BB%D0%BE%D0%B4%D0%B8%D1%8F/2183303300_3562409487/frame/box'},
                { title: 'Маленький принц', link: 'https://www.smule.com/recording/%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%8F-%D0%BC%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D0%B8%D0%B9-%D0%BF%D1%80%D0%B8%D0%BD%D1%86/345215637_3570695143/frame/box'},
                { title: 'Верни мою любовь - Igor_J\'s version', link: 'https://www.smule.com/recording/%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D0%B9-%D0%BC%D0%B5%D0%BB%D0%B0%D0%B4%D0%B7%D0%B5-%D0%B8-%D0%B0%D0%BD%D0%B8-%D0%BB%D0%BE%D1%80%D0%B0%D0%BA-%D0%B2%D0%B5%D1%80%D0%BD%D0%B8-%D0%BC%D0%BE%D1%8E-%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C-igor_js-version/345215637_3570764028/frame/box'},
                { title: 'Романс (Там нет меня) - rusee1\'s version', link: 'https://www.smule.com/recording/%D1%81%D0%B5%D0%B2%D0%B0%D1%80%D0%B0-%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D1%81-%D1%82%D0%B0%D0%BC-%D0%BD%D0%B5%D1%82-%D0%BC%D0%B5%D0%BD%D1%8F-rusee1s-version/2356330899_3570854487/frame/box'},
                { title: 'La Isla Bonita - Acoustic', link: 'https://www.smule.com/recording/madonna-la-isla-bonita-acoustic/1037848922_3570877463/frame/box'},
                // { title: 'M', link: ''},
                // { title: 'M', link: ''},
                // { title: 'M', link: ''},
                // { title: 'M', link: ''},
                { title: 'M', link: ''}
            ],
            selectedLink: 'https://www.smule.com/recording/lionel-richie-acoustic-cover-hello-e_ntyas/2356330899_3491500840/frame/box'
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