<!-- COMPONENTE TEMPLATE -->
<!-- 

- Se pasaran datos como objeto
    
    arrow: >> nombre de la flecha
    img: >> nombre de la imagen que se establecera
    title: >> titulo 
    description:  >> Descripcion del contenido
    btn: >> true o false, para habilitar el btn
    textBtn: >> si es true se agrega el texto
    deboNavegar: >> true o false para habilitar la ruta si funciona o no
    router: >> ruta del btn a donde apunta 

-->


<template>
    <section>
        <div class="informationContainer " v-for="(informatio, index) in dataArray" :key="index">
            <div class="sectionDesktop">
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
                        <button class="btn">
                            <router-link :to="informatio.deboNavegar ? { path: `/${informatio.router}` } : '#'">{{
                                informatio.textBtn }}</router-link>
                        </button>
                    </div>
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
.informationContainer{
    overflow: hidden;

    &:not(:last-child) {
        margin-bottom: 8rem;
    }
    
}

.informationDataContainer {
    text-align: center;
    margin-left: var(--marginPageHorizontal);
    margin-right: var(--marginPageHorizontal);

    h3 {
        margin-bottom: 0;
    }

    .btn {
        margin-top: 2rem;
    }

}


.informationImgContainer {
    position: relative;


    .informationImg {
        margin: 0 var(--marginPageHorizontal);
        display: flex;
        justify-content: center;
        align-items: center;


        img {
            max-width: 350px;
            width: 95%;
            border-radius: 50%;
            margin: 0 auto;
        }
    }


    .informationArrow {
        position: absolute;
    }

}

/* flechas en los circulos */
.arrow-1 {
    top: 45%;
    left: 10%;
}

.arrow-2 {
    top: 0;
    left: -20%;
}

.arrow-3 {
    top: 0;
    left: 40%;
}

@media (min-width: $layout-tablet) {
    .informationImgContainer {
        .informationImg {

            img {
                max-width: 450px;
                width: 95%;
                border-radius: 50%;
                margin: 0 auto;
            }
        }
    }


    .informationContainer {
        $slideCircle: -350px; // cuanto se movera el circulo gris

        .informationImgContainer::after {
            max-width: 450px;
            content: "";
            width: 100%;
            height: 100%;
            background-color: $lightGrey;
            z-index: 99;
            position: absolute;
            right: $slideCircle;
            top: 0;
            border-radius: 50%;
            z-index: -99;
        }

        &:nth-child(even) .informationImgContainer::after {
            left: $slideCircle;
        }
    }


    /* flechas en los circulos */
    .arrow-1 {
        top: auto;
        left: auto;
        bottom: 10%;
        right: -20%;
    }

    .arrow-2 {
        top: 10%;
        left: 0%;
    }

    .arrow-3 {
        top: 20%;
        left: 50%;
    }
}

@media (min-width: $layout-desktop) {

    .informationContainer > div{
        display: flex;
        align-items: center;

        > div{
            background-color: red;
            flex: 1;
        }

        .informationDataContainer{
            margin: 0;
            text-align: left ;
        }
    }
}
</style>