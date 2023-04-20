<template>
    <v-container>
        <!-- Navigation -->
        <NavigationVue />

        <br>
        <div class="top">
            Hello, It's me,
        </div>
        <div class="top-below">
            Woojoon Kim.
        </div>
        <!-- <v-img src="./images/image4.png" width="300" height="300"></v-img> -->

        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="10">
                    <v-card class="elevation-1 mt-10">
                        <v-window v-model="step">
                            <v-window-item :value="1">
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <div style="text-align: center; padding: 20px 0">
                                            <v-card-text class="white--text">
                                                <v-img class="introduceImage" src="./images/woojoonKim.png" />
                                            </v-card-text>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" md="6" class="white rounded-bl-xl">
                                        <v-card-text class="mt-12">
                                            <!-- <div class="introduceName2">Woojoon Kim.</div> -->
                                            <div class="introduction">I'm a fine art painter and artist, and currently based
                                                in New York.
                                            </div>
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
        <div class="mid2">
            Developed by.
        </div>

        <br><br>
        <v-container>
            <div class="contributorName">
                Jun Lee
            </div>
            <div class="contributorName2">
                Frontend Developer
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

    mounted() {
        window.scrollTo(0, 0)
    }
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

.top {
    text-align: center;
    font-size: 33px;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 40px;
    margin-bottom: -5px;
}

.top-below {
    text-align: center;
    font-weight: 550;
    font-size: 50px;
    letter-spacing: 1.5px;
    font-family: 'Times New Roman', Times, serif;
}

.mid2 {
    text-align: center;
    font-size: 28px;
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: -40px;
    font-style: italic;
}

.introduceImage {
    width: 350px;
    height: 350px;
    border-radius: 5px;
}

@media screen and (min-width:601px) and (max-width: 960px) {
    .introduceImage {
        margin: auto;
    }
}

@media screen and (min-width:961px) and (max-width: 1264px) {
    .introduceImage {
        width: 300px;
        height: 350px;
    }
}

@media screen and (min-width:1904px) {
    .introduceImage {
        margin-left: 90px;
        height: 360px;
    }
}

.introduceName {
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    margin-left: -300px;
    margin-top: -50px;
}

@media screen and (max-width: 600px) {
    .introduceName {
        font-size: 25px;
        margin: 0;
        margin-top: -190px;
    }
}

@media screen and (min-width:601px) and (max-width: 960px) {
    .introduceName {
        font-size: 30px;
        margin: 0;
        margin-top: -190px;
    }
}

@media screen and (min-width:961px) and (max-width: 1264px) {
    .introduceName {
        font-size: 30px;
        margin-left: -188px;
        margin-top: -50px;
    }
}

@media screen and (min-width:1904px) {
    .introduceName {
        font-size: 45px;
        margin-left: -780px;
        margin-top: -50px;
    }
}

.introduceName2 {
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-weight: bold;
    font-size: 55px;
    margin-left: -130px;
    margin-top: 5px;
}

@media screen and (max-width: 600px) {
    .introduceName2 {
        font-size: 38px;
        margin: 0;
    }
}

@media screen and (min-width:601px) and (max-width: 960px) {
    .introduceName2 {
        font-size: 45px;
        margin: 0;
    }
}

@media screen and (min-width:961px) and (max-width: 1264px) {
    .introduceName2 {
        font-size: 45px;
        margin-left: -80px;
    }
}

@media screen and (min-width:1904px) {
    .introduceName2 {
        font-size: 60px;
        margin-top: 20px;
        margin-left: -660px;
    }
}

.introduction {
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 20px;
    margin-left: -100px;
    margin-top: 120px;
    color: grey;
}

@media screen and (max-width: 600px) {
    .introduction {
        font-size: 20px;
        text-align: center;
        margin: 0;
        margin-top: -70px;
    }
}

@media screen and (min-width:601px) and (max-width: 960px) {
    .introduction {
        font-size: 20px;
        text-align: center;
        margin: 0;
        margin-top: -70px;
    }
}

@media screen and (min-width:961px) and (max-width: 1264px) {
    .introduction {
        font-size: 18px;
        text-align: center;
        margin-left: -50px;
        margin-top: 120px;
    }
}

@media screen and (min-width:1904px) {
    .introduction {
        font-size: 24px;
        text-align: center;
        margin-left: -500px;
        margin-top: 120px;
        line-height: 1.2;
    }
}

.v-application .rounded-bl-xl {
    border-bottom-left-radius: 500px !important;
}

.v-application .rounded-br-xl {
    border-bottom-right-radius: 500px !important;
}
</style>
