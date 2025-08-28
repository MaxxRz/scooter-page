<template>
    <section class="storeContainer">
        <div>
            <h3>Sign up and Scoot off today</h3>
        </div>
        <div class="sotreApps">
            <div><img src="@\assets\icons\app-store.svg" alt=""></div>
            <div><img src="@\assets\icons\google-play.svg" alt=""></div>
        </div>
    </section>
    <footer>
        <div class="footerLogo">
            <img src="@\assets\logo.svg" alt="">
        </div>
        <div class="footerList">
            <ul>
                <li>About</li>
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
/* FOOTER */
footer{
    background-color: $onix;
    color: $dimGrey;
    font-family: $fontPrimary;
    font-weight: 700;
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: center;

    .footerLogo{

        img{
            filter: brightness(15);
            width: 8rem;
        }
    }

    .footerList{
        padding-top: 1rem;
        padding-bottom: 5rem;

        li{
            padding: .5rem 0;
        }
    }

    .footerApps{
        display: flex;
        align-items: center;
        width: 150px; 
    }
}


/* SECTION APPS ICONS */
.storeContainer {
    background-color: $darkNavy;
    padding: $marginSeccionVertical $marginPageHorizontal;
    text-align: center;
    background-image: url('@/assets/patterns/semi-circle-mobile.svg');
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: cover;


    h3 {
        color: $lightGrey;
    }

    .sotreApps {
        display: flex;
        justify-content: space-around;
        padding-top: 3rem;

    }
}
</style>