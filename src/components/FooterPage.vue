<template>
    <section>
        <div class="storeContainer">
            <div>
                <h3>Sign up and Scoot off today</h3>
            </div>
            <div class="sotreApps">
                <img src="@\assets\icons\app-store.svg" alt="">
                <img src="@\assets\icons\google-play.svg" alt="">
            </div>
        </div>
    </section>
    <footer>
        <div class="footerLogo">
            <router-link to="/"><img src="@\assets\logo.svg" alt="loco scoot"></router-link>
        </div>
        <div class="footerList">
            <ul>
                <li><router-link to="/about">About</router-link></li>
                <li>Location</li>
                <li>Careers</li>
            </ul>
        </div>
        <div class="footerApps">
            <div><img src="@\assets\icons\facebook.svg" alt=""></div>
            <div><img src="@\assets\icons\twitter.svg" alt=""></div>
            <div><img src="@\assets\icons\instagram.svg" alt=""></div>
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
    padding: 6rem $marginPageHorizontal;
    text-align: center;
    background-image: url('@/assets/patterns/semi-circle-mobile.svg');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;

    h3 {
        color: $lightGrey;
    }

    .sotreApps {
        justify-content: space-around;
        margin-top: 3rem;
        display: flex;
        flex-wrap: wrap;
        row-gap: 2rem;
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
        width: auto;
        display: flex;

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
        width: 150px;

        img:hover {
            cursor: pointer;
            filter: grayscale(1);
        }
    }
}
</style>