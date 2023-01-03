<template>
    <v-container>
        <v-app-bar app elevation="0" color="white">
            <v-spacer></v-spacer>

            <div class="artistName">
                <router-link class="linkStyle" style="color: inherit" to="/">Home</router-link>
            </div>

            <!-- <div class="artistName">
                <router-link class="linkStyle" style="color: inherit" to="/">Contact Us</router-link>
            </div> -->

            <!-- aa -->


            <v-spacer></v-spacer>
        </v-app-bar>

        <div class="mid">
            About Me.
        </div>
        <br>
        <v-img src="./images/image4.png" width="300"></v-img>

        <!-- Footer -->
        <br><br><br>
        <FooterVue/>
    </v-container>
</template>
  
<script>
import FooterVue from './Footer.vue';
export default {
    name: "LandingPage",

    components: {
        FooterVue,
    },

    data: () => ({

    }),
};
</script>
  
<style scoped>
.artistName {
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
    margin: 30px;
}

.mid {
    text-align: left;
    font-size: 50px;
    font-family: 'Times New Roman', Times, serif;
}
</style>
  