<template>
<v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-5>
        <div class="display-4 font-weight-black white--text text-xs-center">HOT COFFEE</div>
        <div class="display-4 font-weight-black white--text text-xs-center mb-3">FOR YOUR LIFE</div>
        <div class="display-1 font-weight-bold white--text text-xs-center">in Japan!</div>
        <v-btn fab class="mt-5 brown darken-4">
       <v-icon large color="white">☕️</v-icon>
        </v-btn>
    </v-layout>
</v-container>
</template>
<script>
export default{
    name:"Home-hero"
};

</script>
<style scoped>
.home-hero{
    /* 画像を背景で指定する */
    background-image:url("~@/assets/topimage.jpg");
    background-size: cover;
    width: 100%;
    height: 100%
}

</style>