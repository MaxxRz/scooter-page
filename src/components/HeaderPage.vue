<template>
    <header id="headerPage" class="headerPage">
        <div class="sectionDesktop">
            <div class="headerPageContainer">
                <div class="headerPageName ">
                    <h2>{{ route.name }}</h2>
                </div>
            </div>
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
    },
    mounted() {
        this.changeBackground();
    },
    methods: {
        changeBackground() {
            const header = document.getElementById('headerPage');
            const nameURL = this.route.name.toLowerCase();
            let medidasScreen = {
                tablet: 650,
                desktop: 1024,
            }
            let img = require(`@/assets/img/${nameURL}-hero-mobile.jpg`);

            for (const screen in medidasScreen) {
                if (medidasScreen[screen] < window.innerWidth) {
                    img = require(`@/assets/img/${nameURL}-hero-${screen}.jpg`);
                }
            }

            // ingresar la imagen background segun la ruta y el tamaño
            header.style.backgroundImage = `url(${img})`;

        }
    },
}
</script>

<style lang="scss" scoped>
.headerPage {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: $onix;
    position: relative;
    overflow: hidden;


    h2 {
        color: white;
    }
}

.headerPageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12rem;
}

.headerDetail1 {
    display: none;
}

@media (min-width: $layout-tablet) {


    .headerPageContainer {
        padding-left: 4rem;
        justify-content: flex-start;
    }


    .headerDetail1 {
        position: absolute;
        display: block;
        top: 30%;
        right: -40px;
        width: 300px;
        z-index: 99;
    }
}

@media (min-width: $layout-desktop) {


    .headerPageContainer {
        padding-left: 0;
    }

}
</style>