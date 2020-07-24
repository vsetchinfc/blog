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
export default {
    data: function () {
        return {
            smuleRecordings: [
                { title: 'A Wonderful Life', link: 'https://www.smule.com/recording/lara-fabian-a-wonderful-life/2356330899_3577288830/frame/box'},
                { title: 'Wonderful life', link: 'https://www.smule.com/recording/lara-fabian-wonderful-life/2356330899_3489384690/frame/box'},
                { title: 'Hello - ♌ @e_NTyas', link: 'https://www.smule.com/recording/lionel-richie-acoustic-cover-hello-e_ntyas/2356330899_3491500840/frame/box'},
                { title: 'Не отрекаются, любя', link: 'https://www.smule.com/recording/%D0%B0%D0%BB%D0%BB%D0%B0-%D0%BF%D1%83%D0%B3%D0%B0%D1%87%D0%B5%D0%B2%D0%B0-%D0%BD%D0%B5-%D0%BE%D1%82%D1%80%D0%B5%D0%BA%D0%B0%D1%8E%D1%82%D1%81%D1%8F-%D0%BB%D1%8E%D0%B1%D1%8F/1399442024_3634485045/frame/box'},
                { title: 'Maria Magdalena', link: 'https://www.smule.com/recording/sandra-maria-magdalena/393121489_3606244951/frame/box'},
                { title: 'Дыши☘(Gm/ПИАНО Иван Сальников)', link: 'https://www.smule.com/recording/serebro-el%D0%BC%D0%B8%D0%BD%D1%83%D1%81-%D0%B4%D1%8B%D1%88%D0%B8-gm-%D0%BF%D0%B8%D0%B0%D0%BD%D0%BE-%D0%B8%D0%B2%D0%B0%D0%BD-%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2/1348538411_3601868315/frame/box'},
                { title: 'Алексей Чумаков - Я от тебя схожу с ума', link: 'https://www.smule.com/recording/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%87%D1%83%D0%BC%D0%B0%D0%BA%D0%BE%D0%B2-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D1%87%D1%83%D0%BC%D0%B0%D0%BA%D0%BE%D0%B2-%D1%8F-%D0%BE%D1%82-%D1%82%D0%B5%D0%B1%D1%8F-%D1%81%D1%85%D0%BE%D0%B6%D1%83-%D1%81-%D1%83%D0%BC%D0%B0/2380915523_3601829122/frame/box'},
                { title: 'Дыши Со мной', link: 'https://www.smule.com/recording/%D1%81%D0%B5%D1%80%D0%B5%D0%B1%D1%80%D0%BE-%D0%B4%D1%8B%D1%88%D0%B8-%D1%81%D0%BE-%D0%BC%D0%BD%D0%BE%D0%B9/345215637_3588976954/frame/box'},
                { title: 'Под испанским небом', link: 'https://www.smule.com/recording/%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D0%B0-el%D0%BC%D0%B8%D0%BD%D1%83%D1%81-%D0%BF%D0%BE%D0%B4-%D0%B8%D1%81%D0%BF%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%BC-%D0%BD%D0%B5%D0%B1%D0%BE%D0%BC-%D0%BE%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB-%D0%BC%D0%B8%D0%BD%D1%83%D1%81/378850526_3612635543/frame/box'},
                { title: 'Долетай', link: 'https://www.smule.com/recording/%D0%BA%D0%B0%D1%82%D1%8F-%D0%BB%D0%B5%D0%BB%D1%8C-%D0%B4%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D0%B9/2356330899_3531025468/frame/box'},
                { title: 'Самолет', link: 'https://www.smule.com/recording/%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%8F-%D1%81%D0%B0%D0%BC%D0%BE%D0%BB%D0%B5%D1%82/911221746_3561212461/frame/box'},
                { title: 'Спектакль окончен', link: 'https://www.smule.com/recording/%D0%BF%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0-%D0%B3%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD%D0%B0-%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D0%B0%D0%BA%D0%BB%D1%8C-%D0%BE%D0%BA%D0%BE%D0%BD%D1%87%D0%B5%D0%BD/2414885921_3561420952/frame/box'},
                { title: 'Лунная мелодия', link: 'https://www.smule.com/recording/%D0%BB%D0%B0%D1%80%D0%B8%D1%81%D0%B0-%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D0%B0-%D0%B8-%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BF%D0%B0%D0%BD%D0%B0%D0%B9%D0%BE%D1%82%D0%BE%D0%B2-%D0%BB%D1%83%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BC%D0%B5%D0%BB%D0%BE%D0%B4%D0%B8%D1%8F/2183303300_3562409487/frame/box'},
                { title: 'Маленький принц', link: 'https://www.smule.com/recording/%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%8F-%D0%BC%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D0%B8%D0%B9-%D0%BF%D1%80%D0%B8%D0%BD%D1%86/345215637_3570695143/frame/box'},
                { title: 'Верни мою любовь - Igor_J\'s version', link: 'https://www.smule.com/recording/%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D0%B9-%D0%BC%D0%B5%D0%BB%D0%B0%D0%B4%D0%B7%D0%B5-%D0%B8-%D0%B0%D0%BD%D0%B8-%D0%BB%D0%BE%D1%80%D0%B0%D0%BA-%D0%B2%D0%B5%D1%80%D0%BD%D0%B8-%D0%BC%D0%BE%D1%8E-%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C-igor_js-version/345215637_3570764028/frame/box'},
                { title: 'Романс (Там нет меня) - rusee1\'s version', link: 'https://www.smule.com/recording/%D1%81%D0%B5%D0%B2%D0%B0%D1%80%D0%B0-%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D1%81-%D1%82%D0%B0%D0%BC-%D0%BD%D0%B5%D1%82-%D0%BC%D0%B5%D0%BD%D1%8F-rusee1s-version/2356330899_3570854487/frame/box'},
                { title: 'La Isla Bonita - Acoustic', link: 'https://www.smule.com/recording/madonna-la-isla-bonita-acoustic/1037848922_3570877463/frame/box'},
                { title: 'самолет (mix)', link: 'https://www.smule.com/recording/%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%8F-%D1%81%D0%B0%D0%BC%D0%BE%D0%BB%D0%B5%D1%82-mix/1037848922_3570867182/frame/box'},
                { title: 'Романс (Там нет меня) - КАЧЕСТВО МАСТЕР Erik', link: 'https://www.smule.com/recording/%D0%BF%D1%80%D0%B5%D1%81%D0%BD%D1%8F%D0%BA%D0%BE%D0%B2-%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D1%81-%D1%82%D0%B0%D0%BC-%D0%BD%D0%B5%D1%82-%D0%BC%D0%B5%D0%BD%D1%8F-%D1%82%D0%B0%D0%BC-%D0%BD%D0%B5%D1%82-%D0%BC%D0%B5%D0%BD%D1%8F-%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE-%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80-erik/1348538411_3570893375/frame/box'},
                { title: 'Город, которого нет', link: 'https://www.smule.com/recording/%D0%B3%D0%BE%D1%80%D0%BE%D0%B4-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D0%BE%D0%B3%D0%BE-%D0%BD%D0%B5%D1%82-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D0%BE%D0%B3%D0%BE-%D0%BD%D0%B5%D1%82/2096658558_3573915279/frame/box'},
                { title: 'Мачо - iellenaa\'s version', link: 'https://www.smule.com/recording/%D0%B7%D0%B5%D0%BC%D1%84%D0%B8%D1%80%D0%B0-%D0%BC%D0%B0%D1%87%D0%BE-iellenaas-version/1963159492_3577403376/frame/box'},
                { title: 'А-Студио Папа, мама', link: 'https://www.smule.com/recording/%D0%B0-%D1%81%D1%82%D1%83%D0%B4%D0%B8%D0%BE-%D0%BF%D0%B0%D0%BF%D0%B0-%D0%BC%D0%B0%D0%BC%D0%B0-%D0%B0-%D1%81%D1%82%D1%83%D0%B4%D0%B8%D0%BE-%D0%BF%D0%B0%D0%BF%D0%B0-%D0%BC%D0%B0%D0%BC%D0%B0/2356330899_3588846000/frame/box'},
                { title: 'Я - это ты (KESSE)', link: 'https://www.smule.com/recording/%D0%BC%D1%83%D1%80%D0%B0%D1%82-%D0%BD%D0%B0%D1%81%D1%8B%D1%80%D0%BE%D0%B2-%D1%8F-%D1%8D%D1%82%D0%BE-%D1%82%D1%8B-kesse/2030424297_3588897235/frame/box'},
                { title: 'Это было прекрасно', link: 'https://www.smule.com/recording/%D0%BF%D0%B8%D0%B0%D0%BD%D0%B8%D0%BD%D0%BE-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%8F-%D1%8D%D1%82%D0%BE-%D0%B1%D1%8B%D0%BB%D0%BE-%D0%BF%D1%80%D0%B5%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE/345215637_3588936076/frame/box'},
                { title: 'Killing Me Softly - Original', link: 'https://www.smule.com/recording/the-fugees-killing-me-softly-original/1284763878_3617188134/frame/box'},
                { title: 'Снилось мне', link: 'https://www.smule.com/recording/%D0%BB%D0%BE%D0%BB%D0%B8%D1%82%D0%B0-%D0%BC%D0%B8%D0%BB%D1%8F%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-%D1%81%D0%BD%D0%B8%D0%BB%D0%BE%D1%81%D1%8C-%D0%BC%D0%BD%D0%B5/1726826069_3617637257/frame/box'},
                { title: 'Сердце в 1000 свечей', link: 'https://www.smule.com/recording/%D0%BA%D0%B2%D0%B0%D1%82%D1%80%D0%BE-%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B5-%D0%B2-1000-%D1%81%D0%B2%D0%B5%D1%87%D0%B5%D0%B9/2096658558_3617682675/frame/box'},
                { title: 'Глупые люди (KESSE ориг + бэк)', link: 'https://www.smule.com/recording/hi-fi-%D0%B3%D0%BB%D1%83%D0%BF%D1%8B%D0%B5-%D0%BB%D1%8E%D0%B4%D0%B8-kesse-%D0%BE%D1%80%D0%B8%D0%B3-%D0%B1%D1%8D%D0%BA/1284763878_3633265267/frame/box'},
                { title: 'Небо', link: 'https://www.smule.com/recording/%D1%83%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C-%D0%BD%D0%B5%D0%B1%D0%BE/2380915523_3633295308/frame/box'},
                { title: 'Свеча - горела', link: 'https://www.smule.com/recording/%D0%B0%D0%BB%D0%BB%D0%B0-%D0%BF%D1%83%D0%B3%D0%B0%D1%87%D0%B5%D0%B2%D0%B0-%D1%81%D0%B2%D0%B5%D1%87%D0%B0-%D0%B3%D0%BE%D1%80%D0%B5%D0%BB%D0%B0/1729118585_3638026140/frame/box'},
                { title: 'Мама', link: 'https://www.smule.com/recording/%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%B0%D0%BD%D0%B0-%D0%BB%D0%B0%D0%B7%D0%B0%D1%80%D0%B5%D0%B2%D0%B0-%D0%BC%D0%B0%D0%BC%D0%B0/616904535_3639393461/frame/box'},
                { title: 'All Of Me - 🄰🄻🄻 OF ME', link: 'https://www.smule.com/recording/all-all-of-me-of-me-of-me/1399442024_3657359216/frame/box'},
                { title: 'В горнице моей светло', link: 'https://www.smule.com/recording/%D0%BC%D0%B0%D1%80%D0%B8%D0%BD%D0%B0-%D0%BA%D0%B0%D0%BF%D1%83%D1%80%D0%BE-2-%D0%BF%D0%BE%D0%BB%D1%83%D1%82%D0%BE%D0%BD%D0%B0-%D0%B2-%D0%B3%D0%BE%D1%80%D0%BD%D0%B8%D1%86%D0%B5-%D0%BC%D0%BE%D0%B5%D0%B9-%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%BE/1729118585_3634816862/frame/box'},
                { title: 'Стань для меня - Shanti_Shanti\'s version', link: 'https://www.smule.com/recording/%D0%B4%D0%B8%D0%BC%D0%B0-%D0%B1%D0%B8%D0%BB%D0%B0%D0%BD-%D1%81%D1%82%D0%B0%D0%BD%D1%8C-%D0%B4%D0%BB%D1%8F-%D0%BC%D0%B5%D0%BD%D1%8F-shanti_shantis-version/378850526_3657648904/frame/box'},
                { title: 'Кто-то Простит - Polsip\'s version', link: 'https://www.smule.com/recording/%D0%BC%D1%83%D1%80%D0%B0%D1%82-%D0%BD%D0%B0%D1%81%D1%8B%D1%80%D0%BE%D0%B2-%D0%BA%D1%82%D0%BE-%D1%82%D0%BE-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%B8%D1%82-polsips-version/1399442024_3660308678/frame/box'},
                { title: 'Оттепель', link: 'https://www.smule.com/recording/%D0%BF%D0%B0%D1%83%D0%BB%D0%B8%D0%BD%D0%B0-%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B0-%D0%BE%D1%82%D1%82%D0%B5%D0%BF%D0%B5%D0%BB%D1%8C/1726826069_3660322941/frame/box'},
                //{ title: '', link: ''},
            ],
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