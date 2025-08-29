<template>
    <section>
        <div class="informationContainer" v-for="(informatio, index) in dataArray" :key="index">
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
                <div v-show="informatio.btn">
                    <button class="btn">Learn More</button>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: "InfoCirclesCards",
    props: {
        dataArray: Array
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>

/* INFORMATION */
.informationDataContainer {
    text-align: center;
    margin-bottom: 8rem;
    margin-left: $marginPageHorizontal;
    margin-right: $marginPageHorizontal;

    >div:not(:last-child) {
        margin-bottom: 2rem;
    }
}


.informationImgContainer {
    position: relative;
    overflow: hidden;


    .informationImg {
        margin: 0 $marginPageHorizontal ;
        margin-bottom: 3em;

        img {
            width: 100%;
            border-radius: 50%;
        }
    }


    .informationArrow {
        position: absolute;
    }

}

/* flechas en los circulos */
.arrow-1 {
    top: 50%;
    left: 10%;
}

.arrow-2 {
    top: 0;
    left: -50%;
}

.arrow-3 {
    top: 0;
    left: 40%;
}



</style>