<template>
    <HeaderPage />
    <section>

        <div class="locationMap">
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
        <div class="notCity marginPage">
            <h3>Your city not Listed?</h3>
            <p>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches
                based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
            <button class="btn">Message Us</button>
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
header {
    background-image: url('@/assets/img/careers-location-hero-mobile.jpg');
}

.locationMap {
    margin: 0 auto;
    margin-bottom: 3rem;
    width: 85%;

    img {
        width: 100%;
        background-color: red;
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
    .notCity{
        margin-top: 5rem;
    }
}
</style>