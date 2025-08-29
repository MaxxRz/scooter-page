<template>
    <header>

        <h1>ABOUT PAGE</h1>
        <h1>ABOUT PAGE</h1>
        <h1>ABOUT PAGE</h1>
        <h1>ABOUT PAGE</h1>
        <h1>ABOUT PAGE</h1>
        <h1>ABOUT PAGE</h1>
        <h1>ABOUT PAGE</h1>
    </header>

    <!-- section de componente de circulos informativos con arrow -->
    <!-- se pasa un array con la data a mostrar -->
    <InfoCirclesCards :dataArray="informations" />

    <section>
        <h2>FAQs</h2>
        <div>
            <h3>How it works</h3>
            <div v-for="(data, index) in howWorks" :key="index">
                <div>
                    <h4>{{ data.title }}</h4>
                    <img src="@\assets\icons\chevron.svg" alt="">
                </div>
                <div>
                    <p>{{ data.description }}</p>
                </div>
            </div>
        </div>

        <div>
            <h3>Safe driving</h3>
            <div v-for="(data, index) in driving" :key="index">
                <div>
                    <h4>{{ data.title }}</h4>
                    <img src="@\assets\icons\chevron.svg" alt="">
                </div>
                <div>
                    <p>{{ data.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import InfoCirclesCards from '@/components/InfoCirclesCards.vue';


export default {
    name: "AboutPage",
    components: {
        InfoCirclesCards,
    },
    data() {
        return {
            informations: [
                {
                    arrow: "left-upward-arrow",
                    img: "digital-era",
                    title: "Mobility for the digital era",
                    description: "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
                    btn: false,
                },
                {
                    arrow: "right-arrow",
                    img: "better-living",
                    title: "Better urban living",
                    description: "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
                    btn: false,
                },
            ],

            howWorks: [
                {
                    title: "How do I download the app?",
                    description: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
                },
                {
                    title: "Can I find a nearby Scoots?",
                    description: "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information."
                },
                {
                    title: "Do I need a license to ride?",
                    description: "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots."
                },
            ],
            driving: [
                {
                    title: "Should I wear a helmet?",
                    description: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
                },
                {
                    title: "What about the rules & regulations?",
                    description: "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way."
                },
                {
                    title: "What if I damage my Scoot?",
                    description: "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter."
                },
            ]

        }
    },


}
</script>

<style lang="scss" scoped></style>
