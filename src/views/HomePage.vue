<template>
    <header>
        <div class="headerContainer">
            <h1>Scooter sharing made simple</h1>
            <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient
                locations in
                each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and
                you’re away!</p>
            <button class="btn" @click="console.log('hola0')">Get Scootin</button>
        </div>
        <div class="headerArrow1">
            <img src="@\assets\patterns\right-arrow-half.svg" alt="">

        </div>
    </header>



    <section class="instructionContainer marginPage">
        <div class="instructionCard" v-for="(insctruction, index) in insctructions" :key="index">
            <img class="icon" :src="require(`@/assets/icons/${insctruction.img}.svg`)" alt="">
            <div class="title">
                <h4>{{ insctruction.title }} </h4>
            </div>
            <div class="description">
                <p> {{ insctruction.description }}
                </p>
            </div>
        </div>
    </section>

    <!-- section de componente de circulos informativos con arrow -->
    <!-- se pasa un array con la data a mostrar -->
    <InfoCirclesCards :dataArray="informations" />

</template>

<script>
import InfoCirclesCards from '@/components/InfoCirclesCards.vue';



export default {


    name: 'HomePage',
    components: {
        InfoCirclesCards,
    },
    data() {
        return {
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
                },
                {
                    arrow: "right-arrow",
                    img: "near-you",
                    title: "Coming to a city near you",
                    description: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
                    btn: true,
                },

                {
                    arrow: "left-downward-arrow",
                    img: "payments",
                    title: "Zero hassle payments",
                    description: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
                    btn: true,
                },
            ]

        }
    },
}
</script>


<style lang="scss" scoped>
/* INSTRUCTIONS */
.instructionCard {
    text-align: center;
    margin-bottom: 5rem;

    :not(:last-child) {
        margin-bottom: 1.5rem;
    }

    .icon {
        width: 4rem;
    }

}





/* HEADER */
.headerContainer {
    background-image: url('@/assets/img/home-hero-mobile.jpg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 $marginPageHorizontal;
    text-align: center;
    font-weight: bold;
    height: calc(100vh - ((1.5rem * 2) + 2rem)); // al height le quitamos el padding y la altura del nav
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    h1 {
        color: white;
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

.headerArrow1 {
    position: absolute;
    bottom: 1rem;
}
</style>