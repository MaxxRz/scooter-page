<template>
    <HeaderPage />
    <section>

        <div class="locationMap sectionDesktop">
            <picture>
                <source srcset="@\assets\img\world-map-desktop-dots.png" media="(width >= 650px)" />
                <img src="@\assets\img\world-map-mobile.png" alt="">
            </picture>
        </div>
        <div class="marginPage locationCitys">
            <ul>
                <li class="ubication">New York</li>
                <li class="ubication">London</li>
                <li class="ubication">Jakarta</li>
                <li class="ubication">Yokohama</li>
            </ul>
        </div>
        <div class="sectionDesktop">
            <div class="notCity marginPage ">
                <h3>Your city not Listed?</h3>
                <p>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan
                    launches
                    based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                <button class="btn">Message Us</button>
            </div>
        </div>
    </section>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';

export default {
    name: "LocationPage",
    components: {
        HeaderPage,
    }
}
</script>

<style lang="scss" scoped>
.locationMap {
    margin: 0 auto;
    margin-bottom: 3rem;
    width: 85%;

    img {
        width: 100%;
    }
}


.ubication {
    background-color: $lightYellow;
    text-align: center;
    padding: 1rem;
    margin-bottom: 1rem;
    font-family: $fontPrimary;
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: -.5px;
    color: $darkNavy;
    cursor: default;
}


.notCity {
    text-align: center;
    margin-top: 8rem;

    button {
        margin-top: 2rem;
    }
}

@media (min-width: $layout-tablet) {
    .locationCitys {
        display: none;
    }

    .notCity {
        margin: 0 auto;
        max-width: 450px;
    }
}

@media (min-width: $layout-desktop) {
    .notCity {
        max-width: none;
        display: flex;
        align-items: center;
        text-align: left;
        gap: 4rem;

        h3{
            flex: .5;
        }

        p{
            flex: 1;
        }

        .btn{
            margin-top: 0;
        }
    }
}
</style>