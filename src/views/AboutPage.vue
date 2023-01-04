<template>
    <v-container>
        <!-- Navigation -->
        <NavigationVue/>

        <br>
        <div class="mid">
            About Me
        </div>
        <br>
        <v-img src="./images/image4.png" width="300" height="300"></v-img>

        <!-- Footer -->
        <br><br><br>
        <FooterVue/>
    </v-container>
</template>
  
<script>
import FooterVue from './Footer.vue';
import NavigationVue from './Navigation.vue';

export default {
    name: "AboutPage",

    components: {
        FooterVue,
        NavigationVue,
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
  