<template>
    <div class="navPageContainer sectionDesktop">
        <div class="navPageBL">
            <div class="navPageBurger">
                <button @click="burger = !burger">
                    <img v-if="true" src="@\assets\icons\hamburger.svg" alt="icon burger">
                    <img v-else src="@\assets\icons\close.svg" alt="icon burger">
                </button>
            </div>
            <div class="navPageLogo">
                <router-link to="/"><img src="@\assets\logo.svg" alt="loco scoot"></router-link>
            </div>
        </div>

        <transition name="showNav">
            <div v-if="!burger" class="navPageNavigationBack">
                <div class="navPageNavigation">
                    <div class="navigationTop">
                        <ul>
                            <li><router-link to="/about">About</router-link></li>
                            <li><router-link to="/location">Location</router-link></li>
                            <li><router-link to="/careers">Careers</router-link></li>
                        </ul>
                    </div>
                    <div class="navigationBottom">
                        <button class="btn" @click="scroll">
                            Get Scootin
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { scrollToId } from '@/scripts/scroll';


export default {
    name: 'NavPage',
    data() {
        return {
            burger: true,
        }
    },
    mounted() {
        this.activarNav();
        window.addEventListener('resize', this.activarNav);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.activarNav);
    },
    methods: {
        // funcion al seleccionar get Scootin en el nav de mobil
        scroll() {
            if (window.innerWidth < 650) {
                this.burger = true;
            }
            scrollToId();
        },
        // ejecutara para activar o desactivar el menu dependiendo si es mobil o mayor
        activarNav() {
            if (window.innerWidth < 650) {
                this.burger = true;
            } else {
                this.burger = false;
            }
        }
    }
}
</script>


<style lang="scss">
.navPageContainer {
    padding: 0 1.5rem;
    height: 5rem;
    width: 100%;
    top: 0;
    z-index: 99;
    position: fixed;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.navPageBL {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .navPageBurger {
        position: absolute;
        left: 1.5rem;

        img {
            width: 2rem;
        }
    }

    .navPageLogo img {
        width: 7rem;
    }
}

/* Animación del contenedor */
.showNav-enter-active,
.showNav-leave-active {
    transition: all 0.5s;

}

.showNav-enter-from,
.showNav-leave-to {
    opacity: 0;
}

/* Animacion para el hijo Nav*/
.showNav-enter-active .navPageNavigation,
.showNav-leave-active .navPageNavigation {
    transition: all 0.5s;
}

.showNav-enter-from .navPageNavigation,
.showNav-leave-to .navPageNavigation {
    left: -100%;
}


.navPageNavigationBack {
    position: absolute;
    left: 0;
    top: 5rem;
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: .8);
}

.navPageNavigation {
    position: absolute;
    background-color: $onix;
    height: calc(100% - 5rem);
    top: 0;
    left: 0;
    width: 75vw;
    max-width: 350px;
    transition: all 1s;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div {
        width: 100%;
        box-sizing: border-box;
        padding: 1.5rem;
    }

    .navigationTop {
        font-family: $fontPrimary;
        font-weight: 700;
        font-size: 1.5rem;
        padding-top: 4rem;
        color: $lightGrey;

        li {
            margin-bottom: 2rem;

            &:hover {
                color: $dimGrey;
            }

        }

    }

    button {
        width: 100%;
    }

}



@media (min-width: $layout-tablet) {

    .showNav-enter-active,
    .showNav-leave-active,
    .showNav-enter-active .navPageNavigation,
    .showNav-leave-active .navPageNavigation {
        transition: none;

    }

    .navPageContainer {
        position: static;
        height: 6rem;
        justify-content: flex-start;
        overflow: hidden;
    }

    .navPageBL {
        justify-content: flex-start;
        width: auto;

        .navPageBurger {
            display: none;
        }
    }

    .navPageNavigationBack {
        position: relative;
        top: 0;
        height: auto;
        width: 100%;
        margin-left: 3rem;
    }

    .navPageNavigation {
        background-color: white;
        position: relative;
        height: auto;
        width: 100%;
        max-width: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        div {
            padding: 0;
            width: auto;
        }

        .navigationTop {
            padding: 0;
            font-size: 1.2rem;
            color: $dimGrey;

            ul {
                display: flex;
                flex-direction: row;
                width: 100%;

                li {
                    margin-bottom: 0;
                    margin-right: 1rem;


                    &:hover {
                        color: $darkNavy;
                    }
                }
            }
        }

        button {
            width: auto;
        }

    }
}


@media (min-width: $layout-desktop){
    .navPageNavigation .navigationTop ul li{
        margin-right: 3rem;
    }
}
</style>
