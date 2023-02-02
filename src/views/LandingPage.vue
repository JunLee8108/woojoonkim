<template>
  <v-container>
    <v-app-bar app elevation="0" color="white" height="50px">
      <v-spacer></v-spacer>

      <!-- <router-link class="linkStyle" style="color: inherit" to="/about">Woojoon Kim</router-link> -->
      <v-hover v-slot="{ hover }">
        <v-btn @click="moveAbout()" :class="{ 'on-hover': hover }" :elevation="hover ? 5 : 0" width="100%" plain>
          <div class="artistName">
            Woojoon Kim
          </div>
        </v-btn>
      </v-hover>
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- <v-switch class="darkModeSwitch" v-model="$vuetify.theme.dark" inset label="Dark Mode"></v-switch> -->

    <br><br><br>
    <div class="mid">
      Fine Art Painter.
    </div>
    <div class="mid">
      Artist.
    </div>

    <br><br><br><br><br>

    <v-row justify="center">
      <v-card v-for="n in 3" :key="n" class="ma-8 pa-2" outlined tile>
        <div v-if="n === 1">
          <v-img @click="dialog = true" src="./images/artWork1.jpeg" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 2">
          <v-img @click="dialog2 = true" src="./images/artWork2.png" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 3">
          <v-img @click="dialog3 = true" src="./images/artWork6.png" width="300" height="425"></v-img>
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

      <v-card v-for="n in 3" :key="n" class="ma-8 pa-2" outlined tile>
        <div v-if="n === 1">
          <v-img @click="dialog4 = true" src="./images/artWork4.png" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 2">
          <v-img @click="dialog5 = true" src="./images/artWork5.png" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 3">
          <v-img @click="dialog6 = true" src="./images/artWork3.png" width="300" height="425"></v-img>
        </div>
        <br>
        <div v-if="n === 1" class="workName">
          Butterfly Effect (2019)
        </div>
        <div v-if="n === 2" class="workName">
          Under Pressure (2017)
        </div>
        <div v-if="n === 3" class="workName">
          Fragment (2018)
        </div>
      </v-card>

      <v-card v-for="n in 3" :key="n" class="ma-8 pa-2" outlined tile>
        <div v-if="n === 1">
          <v-img @click="dialog7 = true" src="./images/artWork1.jpeg" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 2">
          <v-img @click="dialog8 = true" src="./images/artWork1.jpeg" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 3">
          <v-img @click="dialog9 = true" src="./images/artWork1.jpeg" width="300" height="425"></v-img>
        </div>
        <br>
        <div v-if="n === 1" class="workName">
          Toad House 5
        </div>
        <div v-if="n === 2" class="workName">
          Toad House 6
        </div>
        <div v-if="n === 3" class="workName">
          Toad House 7
        </div>
      </v-card>
    </v-row>

    <!-- dialog (modal) -->
    <div class="text-center">
      <v-dialog v-model="dialog" width="600">
        <v-card>
          <v-img @click="dialog = false" src="./images/artWork1.jpeg"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog2" width="600">
        <v-card>
          <v-img @click="dialog2 = false" src="./images/artWork2.png"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog3" width="600">
        <v-card>
          <v-img @click="dialog3 = false" src="./images/artWork6.png"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog4" width="600">
        <v-card>
          <v-img @click="dialog4 = false" src="./images/artWork4.png"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog5" width="500">
        <v-card>
          <v-img @click="dialog5 = false" src="./images/artWork5.png"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog6" width="500">
        <v-card>
          <v-img @click="dialog6 = false" src="./images/artWork1.jpeg"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog7" width="500">
        <v-card>
          <v-img @click="dialog7 = false" src="./images/artWork1.jpeg"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog8" width="500">
        <v-card>
          <v-img @click="dialog8 = false" src="./images/artWork1.jpeg"></v-img>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog9" width="500">
        <v-card>
          <v-img @click="dialog9 = false" src="./images/artWork1.jpeg"></v-img>
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

.darkModeSwitch {
  float: right;
}
</style>
