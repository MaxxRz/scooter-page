<template>
    <div class="navPageContainer">
        <div class="navPageBurger">
            <button>
                <img src="@\assets\icons\hamburger.svg" alt="icon burger">
            </button>
        </div>
        <div class="navPageLogo">
            <img src="@\assets\logo.svg" alt="loco scoot">
        </div>
        <div class="navPageNavigation">
            <div class="navigationTop">
                <ul>
                    <li>About</li>
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
</template>

<script>
export default {
    name: 'NavPage',
}
</script>


<style lang="scss">
.navPageContainer {
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-family: $fontPrimary;
    height: 2rem;
}

.navPageBurger {
    position: absolute;
    left: 1.5rem;
}

.navPageNavigation {
    background-color: white;
    position: absolute;
    width: 100vw;
    height: calc(100vh - 100%);
    top: 100%;
    color: $yellow;
    display: none;
}

.navigationTop {
    font-family: $fontPrimary;
    color: $dimGrey;
    font-weight: 700;
}
</style>