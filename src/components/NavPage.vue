<template>
    <div class="navPageContainer">
        <div class="navPageBL">
            <div class="navPageBurger">
                <button @click="burger = !burger">
                    <img v-if="burger" src="@\assets\icons\hamburger.svg" alt="icon burger">
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
                            <li>Location</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div class="navigationBottom">
                        <button class="btn">
                            Get Scootin
                        </button>
                    </div>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
export default {
    name: 'NavPage',
    data() {
        return {
            burger: true,
        }
    },
    methods: {
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
    border-bottom: 1px solid $dimGrey;
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
.showNav-leave-active{
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
        
        li {
            margin-bottom: 2rem;
            
            a{
                color: $lightGrey;
            }
        }
    }

    button {
        width: 100%;
    }

}
</style>