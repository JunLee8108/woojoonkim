<template>
    <div>
        <v-app-bar app elevation="0" color="white" height="50px">
            <v-spacer></v-spacer>
            <v-hover v-slot="{ hover }">
                <v-btn @click="moveHome()" plain width="100%" :class="{ 'on-hover': hover }" :elevation="hover ? 5 : 0" 
                    text>
                    <div class="artistName">
                        Home
                    </div>
                </v-btn>
            </v-hover>
            <v-spacer></v-spacer>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: "NavigationVue",

    data: () => ({

    }),

    methods: {
        moveAbout() {
            this.$router.push({
                path: "about",
            });
        },
        moveHome() {
            this.$router.push({
                path: "/",
            });
        },

    },
};
</script>

<style scoped>
.artistName {
    font-size: 15px;
    font-family: 'Times New Roman', Times, serif;
    margin: 30px;
}
</style>
