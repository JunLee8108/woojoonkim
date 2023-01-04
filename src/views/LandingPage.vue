<template>
  <v-container>
    <v-app-bar app elevation="0" color="white" height="50px">
      <v-spacer></v-spacer>

      <div class="artistName">
        <v-hover open-delay="200">
          <router-link class="linkStyle" style="color: inherit" to="/about">Woojoon Kim</router-link>
        </v-hover>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <br><br><br>
    <div class="mid">
      Fine Art Painter.
    </div>
    <div class="mid">
      Artist.
    </div>

    <br><br><br><br><br>
    <div class="d-flex justify-space-around mb-6" :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'" flat
      tile>
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        <div v-if="n === 1">
          <v-img src="./images/image1.jpeg" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 2">
          <v-img src="./images/image2.png" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 3">
          <v-img src="./images/image3.png" width="300" height="425"></v-img>
        </div>
        <br>

        <div v-if="n === 1" class="workName">
          Toad House (2018)
        </div>
        <div v-if="n === 2" class="workName">
          Wrath (2018)
        </div>
        <div v-if="n === 3" class="workName">
          Fragment (2018)
        </div>
      </v-card>
    </div>

    <br><br>
    <div class="d-flex justify-space-around mb-6" :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'" flat
      tile>
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        <div v-if="n === 1">
          <v-img src="./images/image1.jpeg" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 2">
          <v-img src="./images/image1.jpeg" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 3">
          <v-img src="./images/image1.jpeg" width="300" height="425"></v-img>
        </div>
        <br>

        <div v-if="n === 1" class="workName">
          Toad House
        </div>
        <div v-if="n === 2" class="workName">
          Wrath
        </div>
        <div v-if="n === 3" class="workName">
          Toad House 3
        </div>
      </v-card>
    </div>

    <br><br>
    <div class="d-flex justify-space-around mb-6" :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'" flat
      tile>
      <v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
        <div v-if="n === 1">
          <v-img src="./images/image1.jpeg" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 2">
          <v-img src="./images/image1.jpeg" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 3">
          <v-img src="./images/image1.jpeg" width="300" height="425"></v-img>
        </div>
        <br>

        <div v-if="n === 1" class="workName">
          Toad House
        </div>
        <div v-if="n === 2" class="workName">
          Wrath
        </div>
        <div v-if="n === 3" class="workName">
          Toad House 3
        </div>
      </v-card>

    </div>

    <br><br>
    <center>
    <FooterVue />
  </center>
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

<style>
.artistName {
  font-size: 18px;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
}

.linkStyle {
  text-decoration: none;
}

.mid {
  text-align: center;
  font-size: 50px;
  font-family: 'Times New Roman', Times, serif;
}

.workName {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
}
</style>
