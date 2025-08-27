<template>
    <header>
        <div class="headerContainer">
            <h1>Scooter sharing made simple</h1>
            <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient
                locations in
                each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and
                you’re away!</p>
            <button class="btn">Get Scootin</button>
        </div>
        <div class="headerArrow1">
            <img src="@\assets\patterns\right-arrow-half.svg" alt="">

        </div>
    </header>

    <section class="instructionContainer marginPage">
        <div class="instructionCard" v-for="(insctruction, index) in insctructions" :key="index">
            <div class="icon">
                <img :src="require(`@/assets/icons/${insctruction.img}.svg`)" alt="">
            </div>
            <div class="title">
                <h4>{{ insctruction.title }} </h4>
            </div>
            <div class="description">
                <p> {{ insctruction.description }}
                </p>
            </div>
        </div>
    </section>

    <section>
        <div class="informationContainer" v-for="(informatio, index) in informations" :key="index">
            <div class="informationImgContainer">
                <div class="informationImg">
                    <img :src="require(`@/assets/img/${informatio.img}.jpg`)" alt="">
                </div>
                <div class="informationArrow" :class="`arrow-${index + 1}`">
                    <img :src="require(`@/assets/patterns/${informatio.arrow}.svg`)" alt="">
                </div>
            </div>
            <div class="informationDataContainer">
                <div>
                    <h3>{{ informatio.title }}</h3>
                </div>
                <div>
                    <p>{{ informatio.description }}</p>
                </div>
                <div>
                    <button class="btn">Learn more</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomePage',
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
                    description: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
                },
                {
                    arrow: "right-arrow",
                    img: "near-you",
                    title: "Coming to a city near you",
                    description: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
                },

                {
                    arrow: "left-downward-arrow",
                    img: "payments",
                    title: "Zero hassle payments",
                    description: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
                },
            ]

        }
    },
}
</script>


<style lang="scss" scoped>

/* INFORMATION */
.informationContainer {
    margin-bottom: $marginSeccionVertical;
    text-align: center;
}

.informationImgContainer{
    position: relative;
    overflow: hidden;
    
    
    .informationImg {
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        overflow: hidden;
        margin: 0 $marginPageHorizontal;
    
        img {
            width: 100%;
        }
    }

    .informationArrow{
        position: absolute;
    }

    .arrow-1{
        top: 50%;
        left: $marginPageHorizontal;
    }
    .arrow-2{
        top: 0;
        left: -25%;
    }
    .arrow-3{
        top: 0;
        left: 30%;
    }
}


.informationDataContainer{
    margin: calc($marginPageHorizontal * 2) $marginPageHorizontal 0;

    >div:not(:last-child){
        margin-bottom: 1.5rem;
    }
}


/* INSTRUCTIONS */
.instructionContainer {
    margin-top: $marginSeccionVertical;
    margin-bottom: $marginSeccionVertical;

    >div:not(:last-child) {
        margin-bottom: 5rem;
    }
}

.instructionCard {
    text-align: center;

    >div:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    .icon {
        width: 4rem;

        img {
            width: 100%;
        }
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