<template>
  <v-container>
    <v-app-bar app elevation="0" color="white" height="50px">
      <v-spacer></v-spacer>

          <!-- <router-link class="linkStyle" style="color: inherit" to="/about">Woojoon Kim</router-link> -->
          <v-hover 
          v-slot="{ hover }"
          >
          <v-btn @click="moveAbout()" :class="{ 'on-hover': hover }" :elevation="hover ? 5 : 0" width="100%" plain>
            <div class="artistName">
            Woojoon Kim
          </div>
          </v-btn>
        </v-hover>
    

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
          <v-img @click="dialog = true" src="./images/image1.jpeg" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 2">
          <v-img @click="dialog2 = true" src="./images/image2.png" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 3">
          <v-img @click="dialog3 = true" src="./images/image3.png" width="300" height="425"></v-img>
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
          <v-img @click="dialog4 = true" src="./images/image1.jpeg" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 2">
          <v-img @click="dialog5 = true" src="./images/image1.jpeg" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 3">
          <v-img @click="dialog6 = true" src="./images/image1.jpeg" width="300" height="425"></v-img>
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
          <v-img @click="dialog7 = true" src="./images/image1.jpeg" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 2">
          <v-img @click="dialog8 = true" src="./images/image1.jpeg" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 3">
          <v-img @click="dialog9 = true" src="./images/image1.jpeg" width="300" height="425"></v-img>
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

    <!-- dialog (modal) -->
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-img src="./images/image1.jpeg"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog2" width="500">
        <v-card>
          <v-img src="./images/image2.png"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog3" width="500">
        <v-card>
          <v-img src="./images/image3.png"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog4" width="500">
        <v-card>
          <v-img src="./images/image1.jpeg"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog5" width="500">
        <v-card>
          <v-img src="./images/image1.jpeg"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog6" width="500">
        <v-card>
          <v-img src="./images/image1.jpeg"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog7" width="500">
        <v-card>
          <v-img src="./images/image1.jpeg"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog8" width="500">
        <v-card>
          <v-img src="./images/image1.jpeg"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog9" width="500">
        <v-card>
          <v-img src="./images/image1.jpeg"></v-img>
        </v-card>
      </v-dialog>
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
    dialog: false,
    dialog2: false,
    dialog3: false,
    dialog4: false,
    dialog5: false,
    dialog6: false,
    dialog7: false,
    dialog8: false,
    dialog9: false,
  }),

  methods: {
    moveAbout() {
            this.$router.push({
                path: "about",
            });
        },
  },
};
</script>

<style>
.artistName {
  font-size: 15px;
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
