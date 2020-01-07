<template>
    <div>
        <Head />
        Hello!

        <IDCard />
    </div>
</template>

<script>
import IDCard from "@theme/components/IDCard.vue"
import Head from "@theme/components/Head.vue"

export default {
    components: {
        IDCard,
        Head
    }
}
</script>

<style lang="stylus" scoped>

</style>