<template>
    <header class="headerPage">
        <div class="headerPageContainer">
            <h2>{{ route.name }}</h2>
        </div>
        <img class="headerDetail1" src="@\assets\patterns\white-circles.svg" alt="">
    </header>
</template>

<script>

import { useRoute } from 'vue-router'

export default {
    name: "HeaderPage",
    data() {
        return {
            route: useRoute(),
        }
    }
}
</script>

<style lang="scss" scoped>
.headerPage {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12rem;
    position: relative;
    overflow: hidden;


    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;

    h2 {
        color: white;
    }
}

.headerDetail1 {
    display: none;
}

@media (min-width: $layout-tablet) {
    .headerPage {
        justify-content: flex-start;
        padding-left: 5rem;
    }

    .headerDetail1 {
        display: block;
        right: -2rem;
        width: 300px;
        position: absolute;
    }
}
</style>