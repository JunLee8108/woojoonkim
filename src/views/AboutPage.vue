<template>
    <v-container>
        <!-- Navigation -->
        <NavigationVue />

        <div class="mid">
            About Me.
        </div>
        <!-- <v-img src="./images/image4.png" width="300" height="300"></v-img> -->

        <v-container>
            <br>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="10">
                    <v-card class="elevation-1 mt-10">
                        <v-window v-model="step">
                            <v-window-item :value="1">
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <div style="text-align: center; padding: 20px 0">
                                            <v-card-text class="white--text">
                                                <img height="350" src="./images/image4.png" />
                                            </v-card-text>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" md="6" class="white rounded-bl-xl">
                                        <v-card-text class="mt-12">
                                            <br /><br /><br /><br />
                                            <div class="introduceName">Hello, it's me</div>
                                            <br>
                                            <div class="introduceName2">Woojoon Kim.</div>
                                            <br>
                                            <div class="introduction">I'm a fine art painter and artist. Currently based
                                                in New York.
                                                I'm a fine art painter and artist. Currently based in New York. I'm a
                                                fine art painter and artist. Currently based in New York.
                                                I'm a fine art painter and artist. Currently based in New York.I'm a
                                                fine art painter and artist. Currently based in New York. 
                                                fine art painter and artist. Currently based in New York.
                                            </div>
                                            <div class="introduction"></div>
                                        </v-card-text>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <br><br>
        <div class="mid">
            Developed by.
        </div>

        <br><br>
        <v-container>
                    <div class="contributorName">
                        Jun Lee
                    </div>
                    <div class="contributorName2">
                        Website Developer
                    </div>
                    <div class="contact">
                        lejhn1@gmail.com
                        <br>
                        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon @click="iconMove(icon)">
                            <v-icon size="24px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
            </div>
        </v-container>

        <!-- Footer -->
        <br>
        <FooterVue />
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
.imgClass {
    text-align: center;
    margin-left: 30px;
}

.contributorName {
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    font-weight: bold;
}

.contributorName2 {
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
    font-weight: bold;
}

.contact {
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 14px;
}
.artistName {
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
    margin: 30px;
}

.mid {
    text-align: center;
    font-size: 50px;
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: -40px;
    font-style: italic;
}

.introduceName {
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    margin-left: -300px;
    margin-top: -50px;
}

.introduceName2 {
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-weight: bold;
    font-size: 55px;
    margin-left: -130px;
    margin-top: 5px;
}

.introduction {
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 18px;
    margin-left: -70px;
    margin-top: 10px;
    color: grey;
}

.v-application .rounded-bl-xl {
    border-bottom-left-radius: 500px !important;
}

.v-application .rounded-br-xl {
    border-bottom-right-radius: 500px !important;
}
</style>
  