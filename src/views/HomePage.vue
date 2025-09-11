<template>
    <header>
        <div class="headerBack ">
            <div class="sectionDesktop">
                <div class="headerContainer ">
                    <h1>Scooter sharing made simple</h1>
                    <div class="headerContainerData">
                        <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient
                            locations in
                            each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and
                            you’re away!</p>
                        <button class="btn" @click="scroll">Get Scootin</button>
                    </div>
                    <picture>
                        <source :srcset="tabletImg" media="(min-width: 650px)">
                        <img class="headerDetail1" :src="mobilImg" alt="text">
                    </picture>
                    <img class="headerDetail3" src="@\assets\patterns\line.svg" alt="">
                </div>
            </div>
            <img class="headerDetail2" src="@\assets\patterns\white-circles.svg" alt="">
            
        </div>
    </header>


    <section class="instructionContainer sectionDesktop marginPage">
        <div class="instructionCard" v-for="(insctruction, index) in insctructions" :key="index">
            <img class="icon" :src="require(`@/assets/icons/${insctruction.img}.svg`)" alt="">
            <div>
                <div class="title">
                    <h4>{{ insctruction.title }} </h4>
                </div>
                <div class="description">
                    <p> {{ insctruction.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- section de componente de circulos informativos con arrow -->
    <!-- se pasa un array con la data a mostrar -->
    <InfoCirclesCards :dataArray="informations" />

</template>

<script>
import InfoCirclesCards from '@/components/InfoCirclesCards.vue';
import { scrollToId } from '@/scripts/scroll';
import mobilImg from '@/assets/patterns/right-arrow-half.svg';
import tabletImg from '@/assets/patterns/right-arrow.svg';


export default {
    name: 'HomePage',
    components: {
        InfoCirclesCards,
    },
    data() {
        return {
            windowWidth: window.innerWidth,
            mobilImg: mobilImg, // asignamos el componente a una variable
            tabletImg: tabletImg, // asignamos el componente a una variable
            insctructions: [
                {
                    img: "locate",
                    title: "Locate with app",
                    description: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away."
                },
                {
                    img: "scooter2",
                    title: "Pick your scooter",
                    description: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
                },
                {
                    img: "ride",
                    title: "Enjoy the ride",
                    description: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
                }
            ],
            informations: [
                {
                    arrow: "left-downward-arrow",
                    img: "telemetry",
                    title: "Easy to use riding telemetry",
                    description: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
                    btn: true,
                    textBtn: "Learn More",
                    deboNavegar: true,
                    router: "about",
                },

                {
                    arrow: "right-arrow",
                    img: "near-you",
                    title: "Coming to a city near you",
                    description: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
                    btn: true,
                    textBtn: "Learn More",
                    deboNavegar: true,
                    router: "location",
                },

                {
                    arrow: "left-downward-arrow",
                    img: "payments",
                    title: "Zero hassle payments",
                    description: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
                    btn: true,
                    textBtn: "Learn More",
                    deboNavegar: true,
                    router: "about",
                },
            ],

        }
    },
    methods: {
        scroll() {
            scrollToId();
        },
    }
}
</script>


<style lang="scss" scoped>
/* INSTRUCTIONS */
.instructionCard {
    text-align: center;
    margin-bottom: 5rem;

    .icon {
        width: 4rem;
        height: 4rem;
    }

}


/* HEADER */
.headerBack {
    background-image: url('@/assets/img/home-hero-mobile.jpg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    position: relative;
}

.headerContainer {
    width: 80vw;
    max-width: 600px;
    margin: 0 auto;
    padding-top: 20vh;
    text-align: center;
    height: calc(100vh - ((1.5rem * 2) + 2rem)); // al height le quitamos el padding y la altura del nav
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;


    h1 {
        color: white;
        margin: 0;
    }

    p {
        margin-top: 1.5rem;
        margin-bottom: 3rem;
        font-size: 1.2rem;
        color: white;
    }

    .btn {
        font-size: 1.2rem;
    }
}

.headerDetail1,
.headerDetail2,
.headerDetail3{
    position: absolute;
    bottom: 5rem;
    left: -5rem;
}

.headerDetail2,
.headerDetail3{
    display: none;
}

@media (min-width: $layout-tablet) {
    .headerBack {
        background-image: url('@/assets/img/home-hero-tablet.jpg');
    }

    .headerContainer {
        height: calc(100vh - ((1.5rem * 2) + 3rem));
    }

    .headerDetail1 {
        left: -20rem;
    }

    .headerDetail2 {
        right: -2.5rem;
        width: 20rem;
        left: unset;
    }

    /* INSTRUCTIONS */
    .instructionContainer {
        position: relative;

        &::after {
            content: "";
            width: 1rem;
            height: 80%;
            top: 0;
            left: 2.5rem;
            z-index: -99;
            background-color: $lightGrey;
            position: absolute;

        }
    }

    .instructionCard {
        display: flex;
        justify-content: flex-start;
        text-align: left;
        gap: 4rem;
        margin-bottom: 3rem;

        .icon {
            width: 6rem;
            height: 6rem;
        }

        .title h4 {
            margin-top: 0;
            margin-bottom: 0;
        }
    }

    .headerDetail2 {
        display: block;
    }
}


@media (min-width: $layout-desktop) {
    .headerBack {
        background-image: url('@/assets/img/home-hero-desktop.jpg');
    }

    .headerContainer {
        max-width: 520px;
        align-items: flex-start;
        margin: 0;
        text-align: left;
    }

    .headerContainerData {
        padding-left: 5rem;
    }

    .headerDetail1 {
        left: 580px;
        top: calc(20vh + 14rem);
    }

    .headerDetail2 {
        right: -2.5rem;
        width: 20rem;
    }
    .headerDetail3{
        display: block;
        top: calc(20vh + 14rem);
        right: 95%;
        left: unset;
        height: .95rem;
        width: 100vw;
    }

    .instructionContainer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;

        .instructionCard{
            flex-direction: column;
            gap: 2rem;
        }

        &:after{
            width: 100vw;
            height: 1rem;
            top: 9.5rem;
            right: 300px;
            left: unset;
        }
    }
}
</style>