<template>
    <section>
        <div class="marginPage ourValuesContainer sectionDesktop">
            <h3>{{ title }}</h3>
            <div class="ourValuesData">
                <div class="ourValuesCard" v-for="(value, index) in values" :key="index">
                    <div class="ourValuesImgContainer">
                        <img :src="require(`@/assets/img/${value.img}.jpg`)" alt="">
                        <div>
                            <span>0{{ index + 1 }}</span>
                        </div>
                    </div>
                    <div class="ourValuesDataContainer">
                        <h4>{{ value.title }}</h4>
                        <p>{{ value.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "OurValues",
    props: {
        title: String,
    },
    data() {
        return {
            values: [
                {
                    img: "our-tech",
                    title: "Our tech",
                    description: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
                },
                {
                    img: "our-integrity",
                    title: "Our integrity",
                    description: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
                },
                {
                    img: "our-community",
                    title: "Our community",
                    description: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.ourValuesContainer {
    text-align: center;

    .ourValuesCard {
        margin-top: 5rem;
    }
}

.ourValuesImgContainer {
    position: relative;

    img {
        border-radius: 50%;
        max-width: 250px;
        width: 100%;
    }

    $sizeBall: 6em; // variable para dar tamaño y posicion a la bola amarilla

    div {
        position: absolute;
        bottom: calc(-1 * ($sizeBall / 2));
        left: calc(50% - ($sizeBall / 2));
        background-color: $yellow;
        border-radius: 50%;
        width: $sizeBall;
        height: $sizeBall;
        display: flex;
        justify-content: center;
        align-items: center;


        span {
            font-family: $fontPrimary;
            font-weight: bold;
            font-size: 1.5rem;
            color: $darkNavy;
        }

    }
}

.ourValuesDataContainer {
    margin-top: 5rem;
}

@media (min-width: $layout-tablet) {
    .ourValuesDataContainer {
        padding-left: 5rem;
        padding-right: 5rem;
    }
}

@media (min-width: $layout-desktop) {
    .ourValuesData {
        display: flex;
        gap: 5rem;

        .ourValuesDataContainer {
            padding-left: 0;
            padding-right: 0;
        }

        .ourValuesCard {
            margin-top: 3rem;
        }
    }
}
</style>
