<template>
    <div>
        <v-footer height="185px" padless color="white">
            <v-spacer></v-spacer>
            <v-card flat tile class="white lighten-1 text-center">
                <v-card-text>
                    Copyright 2018. Woojoon Kim All Rights Reserved.
                    <br>
                </v-card-text>

                <v-card-text class="cardSecond">
                    In no event shall any part or all of the images be reproduced, transmitted, distributed or altered
                    without official permission.
                </v-card-text>

                <v-card-text>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon @click="iconMove(icon)">
                        <v-icon size="24px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="footerFont">
                    {{ new Date().getFullYear() }} — <strong>Woojoon Kim, Jeong Hyun Lee</strong>
                </v-card-text>
            </v-card>
            <v-spacer></v-spacer>
        </v-footer>
    </div>
</template>
  
<script>
export default {
    name: "FooterVue",

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
                window.open("https://www.facebook.com/woojun.kim.3386", "_blank");
            }
            else if (e === "mdi-instagram") {
                window.open("https://www.instagram.com/woo_joon_kim/", "_blank");
            }
        }
    }
};
</script>
  
<style scoped>
.footerClass {
    position: absolute;
    align-items: center;
    bottom: 0;
    margin: 0 auto;
    text-align: center;

    height: 0px;
}

.cardSecond {
    margin-top: -20px;
    margin-bottom: -20px;
}

.footerFont {
    font-size: 15px;
    font-family: 'Times New Roman', Times, serif;
}
</style>
  