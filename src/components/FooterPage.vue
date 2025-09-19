<template>
    <section id="sotreApps" ca>
        <div class="storeContainer ">
            <div class="sectionDesktop">
                <div class="storeContainerBody">
                    <div>
                        <h3>Sign up and Scoot off today</h3>
                    </div>
                    <div class="sotreApps">
                        <img src="@\assets\icons\app-store.svg" alt="">
                        <img src="@\assets\icons\google-play.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div class="footerContainer sectionDesktop">
            <div class="footerLogo">
                <router-link to="/"><img src="@\assets\logo.svg" alt="loco scoot"></router-link>
            </div>
            <div class="footerList">
                <ul>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/location">Location</router-link></li>
                    <li><router-link to="/careers">Careers</router-link></li>
                </ul>
            </div>
            <div class="footerApps">
                <div><img src="@\assets\icons\facebook.svg" alt=""></div>
                <div><img src="@\assets\icons\twitter.svg" alt=""></div>
                <div><img src="@\assets\icons\instagram.svg" alt=""></div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterPage",
    data() {
        return {

        }
    },


}


</script>

<style lang="scss">
/* SECTION APPS ICONS */
.storeContainer {
    background-color: $darkNavy;
    padding: 5rem var(--marginPageHorizontal);
    text-align: center;
    background-image: url('@/assets/patterns/semi-circle-mobile.svg');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;

    .storeContainerBody {
        max-width: 400px;
        margin: 0 auto;
    }

    h3 {
        color: $lightGrey;
        margin-top: 0;
    }

    .sotreApps {
        justify-content: space-around;
        margin-top: 3rem;
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;

        img {
            cursor: pointer;
        }
    }
}


/* FOOTER */
footer {
    font-family: $fontPrimary;
    background-color: $onix;
    font-weight: 700;
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: center;

    .footerLogo img {
        filter: brightness(15);
        width: 8rem;
    }

    .footerList {
        padding-top: 1rem;
        padding-bottom: 5rem;
        font-size: 1.2rem;

        li {
            padding: .5rem 0;

            a {
                color: $dimGrey;
            }

            a:hover {
                color: $yellow;
            }
        }
    }

    .footerApps {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 150px;
        margin: 0 auto;

        img:hover {
            cursor: pointer;
            filter: grayscale(1);
        }
    }
}


@media (min-width: $layout-tablet) {
    .storeContainer {
        background-image: url('@/assets/patterns/semi-circles.svg');
        background-position: 50% 100%;
        background-repeat: no-repeat;
        background-size: auto;

    }

    footer {
        padding: 2rem;
    }

    .footerContainer {
        display: flex;

        .footerList {
            padding: 0 2rem;
            flex: 1;

            ul {
                flex-direction: row;
                display: flex;

                li {
                    margin-right: 1.5rem;
                }
            }
        }

    }
}

@media (min-width: $layout-desktop) {
    .storeContainer {
        text-align: left;
        padding: 5rem 0;
        background-position: 125% 100%;

        .storeContainerBody {
            max-width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            > div:first-child{
                max-width: 60%;
            }
        }

        h3 {
            margin: 0;
        }

        .sotreApps {
            margin-top: 0;
        }
    }

    footer {
        padding-left: 0;
        padding-right: 0;
    }
}
</style>