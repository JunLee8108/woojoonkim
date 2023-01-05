<template>
    <v-container>
        <!-- Navigation -->
        <NavigationVue />

        <div class="mid">
            Contributor.
        </div>

        <br>
        <v-container>
            <div class="d-flex justify-space-around mb-6"
                :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'" flat>
                <v-card class="pa-2" outlined tile>
                    <v-img class="imgClass" src="./images/Jun Lee.png" width="190" height="230"></v-img>
                    <br>
                    <div class="contributorName">
                        Jun Lee
                    </div>
                    <div class="contributorName2">
                        Website Developer
                    </div>
                    <br>
                    <div class="contact">
                        lejhn1@gmail.com
                        <br>
                        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon @click="iconMove(icon)">
                            <v-icon size="24px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
                    </div>
                </v-card>
            </div>
        </v-container>

        <!-- Footer -->

        <FooterVue />
    </v-container>
</template>
  
<script>
import FooterVue from './Footer.vue';
import NavigationVue from './Navigation.vue';
export default {
    name: "ContributorPage",

    components: {
        FooterVue,
        NavigationVue,
    },

    data: () => ({
        icons: [
            'mdi-facebook',
            // 'mdi-twitter',
            // 'mdi-linkedin',
            'mdi-instagram',
        ],
    }),

    methods: {
        iconMove(e) {
            if (e === "mdi-facebook") {
                window.open("https://www.facebook.com/profile.php?id=100003145778208", "_blank");
            }
            else if (e === "mdi-instagram") {
                window.open("https://www.instagram.com/j_.0111/", "_blank");
            }
        }
    }
};
</script>
  
<style scoped>
.imgClass {
    text-align: center;
}

.contributorName {
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
}

.contributorName2 {
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    font-weight: bold;
}

.contact {
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
}

.mid {
    text-align: center;
    font-size: 50px;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
}
</style>
  