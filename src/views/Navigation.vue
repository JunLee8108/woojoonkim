<template>
    <v-container>
        <v-app-bar app elevation="0" color="white">
            <v-spacer></v-spacer>
            <div class="artistName">
                <router-link class="linkStyle" style="color: inherit" to="/">Home</router-link>
            </div>

            <div class="artistName">
                <router-link class="linkStyle" style="color: inherit" to="/about">About Me</router-link>
            </div>

            <!-- <div class="artistName">
                <router-link class="linkStyle" style="color: inherit" to="/contributor">Contributor</router-link>
            </div> -->
            <v-spacer></v-spacer>
        </v-app-bar>
    </v-container>
</template>
  
<script>
export default {
    name: "NavigationVue",

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
</style>
  