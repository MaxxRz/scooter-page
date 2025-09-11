<template>
    <HeaderPage />

    <!-- section de componente de circulos informativos con arrow -->
    <!-- se pasa un array con la data a mostrar -->
    <InfoCirclesCards :dataArray="missions" />

    <!-- section componente porque nosotros -->
    <!-- se pasa variable title  -->
    <OurValues title="Why join us?" />


    <section class="marginPage">
        <div class="availableJobsContainer" v-for="(job, index) in jobs" :key="index">
            <div class="aviableJobsData">
                <h5>{{ job.title }}</h5>
                <p>{{ job.address }}</p>
            </div>
            <div class="aviableJobsBtn">
                <button class="btn">Apply</button>
            </div>
        </div>
    </section>

</template>

<script>
import InfoCirclesCards from '@/components/InfoCirclesCards.vue';
import OurValues from '@/components/OurValues.vue';
import HeaderPage from '@/components/HeaderPage.vue';

export default {
    name: "CareersPage",
    components: {
        InfoCirclesCards,
        OurValues,
        HeaderPage,
    },
    data() {
        return {
            missions: [
                {
                    arrow: "left-downward-arrow",
                    img: "join-us",
                    title: "Care to join our mission?",
                    description: "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
                    btn: true,
                    textBtn: "Say Hello",
                    router: "none"
                },
            ],

            /*  available jobs */
            jobs: [
                {
                    title: "General Manager",
                    address: "Jakarta, Indonesia"
                },
                {
                    title: "UI/UX Designer",
                    address: "Yokohama, Japan"
                },
                {
                    title: "Blog Content Copywriter",
                    address: "New York, United States"
                },
                {
                    title: "Graphic Designer",
                    address: "New York, United States"
                },
                {
                    title: "Fleet Supervisor",
                    address: "Jakarta, Indonesia"
                },
                {
                    title: "UX Analyst",
                    address: "London, United Kingdom"
                },
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
header{
    background-image: url('@/assets/img/careers-location-hero-mobile.jpg');
}


.availableJobsContainer {
    background-color: $lightGrey;
    margin-bottom: 2rem;
    padding: 1.5rem;
    text-align: center;

    .aviableJobsData {
        margin: 1.5rem 0;

        p {
            margin: 0;
        }
    }


    .aviableJobsBtn button {
        width: 100%;
    }
}

@media (min-width: $layout-tablet) {
    .availableJobsContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: left;

        .aviableJobsData{
            margin: 0;
        }
    }
}
</style>