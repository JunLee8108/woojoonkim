<template>
  <v-container>
    <v-app-bar app elevation="0" color="white" height="50px">
      <v-spacer></v-spacer>
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
      <v-card v-for="n in 3" :key="n" class="cardClass" outlined tile>
        <div v-if="n === 1">
          <v-img class="imageClass" @click="dialog = true" src="./images/1_Eden.png"></v-img>
        </div>
        <div v-else-if="n === 2">
          <v-img class="imageClass" @click="dialog2 = true" src="./images/2_Ustaarabu.png"></v-img>
        </div>
        <div v-else-if="n === 3">
          <v-img class="imageClass" @click="dialog3 = true" src="./images/3_.png"></v-img>
        </div>
        <br>
        <div v-if="n === 1" class="workName">
          Eden
        </div>
        <div v-if="n === 2" class="workName">
          Ustaarabu
        </div>
        <div v-if="n === 3" class="workName">
          極樂
        </div>
      </v-card>

      <v-card v-for="n in 3" :key="n" class="cardClass" outlined tile>
        <div v-if="n === 1">
          <v-img class="imageClass" @click="dialog4 = true" src="./images/4_Haka.png"></v-img>
        </div>
        <div v-else-if="n === 2">
          <v-img class="imageClass" @click="dialog5 = true" src="./images/5_Toad_s House.png"></v-img>
        </div>
        <div v-else-if="n === 3">
          <v-img class="imageClass" @click="dialog6 = true" src="./images/6_UngNyeo.png"></v-img>
        </div>
        <br>
        <div v-if="n === 1" class="workName">
          Haka
        </div>
        <div v-if="n === 2" class="workName">
          Toad’s House
        </div>
        <div v-if="n === 3" class="workName">
          Ung-Nyeo
        </div>
      </v-card>

      <v-card v-for="n in 1" :key="n" class="cardClass" outlined tile>
        <div v-if="n === 1">
          <v-img class="imageClass" @click="dialog7 = true" src="./images/7_6th World.png"></v-img>
        </div>
        <!-- <div v-else-if="n === 2">
          <v-img @click="dialog8 = true" src="./images/artWork10.png" width="300" height="425"></v-img>
        </div>
        <div v-else-if="n === 3">
          <v-img @click="dialog9 = true" src="./images/artWork11.png" width="300" height="425"></v-img>
        </div> -->
        <br>
        <div v-if="n === 1" class="workName">
          6th World
        </div>
        <!-- <div v-if="n === 2" class="workName">
          Third Adam pt2.
        </div>
        <div v-if="n === 3" class="workName">
          Third Adam pt3.
        </div> -->
      </v-card>
    </v-row>

    <!-- dialog (modal) -->
    <div class="prevent">
      <v-dialog v-model="dialog" width="850">
        <v-card>
          <v-img @click="dialog = false" src="./images/1_Eden.png"></v-img>
          <v-card-title class="text-h5">
            Eden
          </v-card-title>
          <v-card-text>
            Imagination of our future often gets to put into the margin between Utopia and Dystopia. I firmly believe that
            the key factor of dividing these two contrasting idea is an existence of individual freedom in the society, as
            we already experienced numerous
            historical tragedy as an outcome of absence of freedom under the authoritarian beliefs. Therefore, I imagine
            Utopia as a place where each individual’s idea to be placed in more accepted manner, where different ideas do
            not clash but
            harmonize with another instead.
          </v-card-text>
          <center>
            <v-dialog v-model="dialog_request" max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="black" dark v-bind="attrs" v-on="on">
                  Request purchase
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5 bold">Purchase Form</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal first name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal middle name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal last name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Email*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select :items="['0-17', '18-29', '30-54', '55-69', '70+']" label="Age*" required></v-select>
                      </v-col>
                      <!-- <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          label="Interests" multiple></v-autocomplete>
                      </v-col> -->
                    </v-row>
                  </v-container>
                  <small>- * indicates required field</small>
                  <br>
                  <small>- After checking the availability, we will contact you later </small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog_request = false">
                    Close
                  </v-btn>
                  <v-btn color="red darken-1" text @click="dialog_request = false">
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </center>
          <br>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog2" width="850">
        <v-card>
          <v-img @click="dialog2 = false" src="./images/2_Ustaarabu.png"></v-img>
          <v-card-title class="text-h5">
            Ustaarabu (civilization)
          </v-card-title>
          <v-card-text>
            Humans started to rapidly dominate the natural world enhancing their ability to build a community in
            incomparable scale than the other animals, and religions often was the main catalyst for their source of
            unity. In the early stage of human civilization,
            religion was an efficient methods to share the same perception of the world from different individuals, and
            even formed sense of morality later becoming a foundation for laws.
          </v-card-text>
          <center>
            <v-dialog v-model="dialog_request" max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="black" dark v-bind="attrs" v-on="on">
                  Request purchase
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5 bold">Purchase Form</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal first name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal middle name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal last name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Email*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select :items="['0-17', '18-29', '30-54', '55-69', '70+']" label="Age*" required></v-select>
                      </v-col>
                      <!-- <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          label="Interests" multiple></v-autocomplete>
                      </v-col> -->
                    </v-row>
                  </v-container>
                  <small>- * indicates required field</small>
                  <br>
                  <small>- After checking the availability, we will contact you later </small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog_request = false">
                    Close
                  </v-btn>
                  <v-btn color="red darken-1" text @click="dialog_request = false">
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </center>
          <br>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog3" width="850">
        <v-card>
          <v-img @click="dialog3 = false" src="./images/3_.png"></v-img>
          <v-card-title class="text-h5">
            極樂
          </v-card-title>
          <v-card-text>
            Buddhist idea of 極樂 (Guk-Lak) have two separated branch. First is 極樂淨土 (Guk-Lak-Jung-To), an idea that is
            similar to the Abraham branch religion’s heaven, where you must constantly work in order to achieve
            enlightenment to enter the heaven, while the
            other idea known as 唯心淨土 (Yu-Sim-Jung-To) suggests that heaven is already inside everyone’s heart, and we must
            get rid of all the greeds and worries and accept that our life itself already is a heaven. Throughout the
            history of mankind,
            humans have developed the society by sacrificing individual’s happiness in order to achieve each society’s
            perception of utopia. Perhaps in this time of rapid technological progress, we need to question ourselves if
            are these technological
            advancements are necessary to shape our society into a heaven.
          </v-card-text>
          <center>
            <v-dialog v-model="dialog_request" max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="black" dark v-bind="attrs" v-on="on">
                  Request purchase
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5 bold">Purchase Form</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal first name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal middle name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal last name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Email*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select :items="['0-17', '18-29', '30-54', '55-69', '70+']" label="Age*" required></v-select>
                      </v-col>
                      <!-- <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          label="Interests" multiple></v-autocomplete>
                      </v-col> -->
                    </v-row>
                  </v-container>
                  <small>- * indicates required field</small>
                  <br>
                  <small>- After checking the availability, we will contact you later </small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog_request = false">
                    Close
                  </v-btn>
                  <v-btn color="red darken-1" text @click="dialog_request = false">
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </center>
          <br>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog4" width="850">
        <v-card>
          <v-img @click="dialog4 = false" src="./images/4_Haka.png"></v-img>
          <v-card-title class="text-h5">
            Haka
          </v-card-title>
          <v-card-text>
            Civilization arose in the Pacific islands known as Polynesian has remarkable trait of sharing relatively the
            similar religious beliefs, culture, and language along the 1,000 islands in Pacific Ocean. Maori tribe is one
            of the most well-known tribe among
            them, famous for their ritual/performance at the beginning of the battle known as “Haka”, where warriors of
            the Maori tribe horrendous expressions with their face and movement. Haka is such a fascinating war tactics,
            as people believed
            that by performing the Haka, warriors absorbs the enemies “Mana”(spirit) from their fear, and as numbers of
            Polynesian society shared similar belief, Warriors of Maori were able to win numerous battles without shedding
            any bloods nor
            killing any people.
          </v-card-text>
          <center>
            <v-dialog v-model="dialog_request" max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="black" dark v-bind="attrs" v-on="on">
                  Request purchase
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5 bold">Purchase Form</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal first name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal middle name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal last name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Email*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select :items="['0-17', '18-29', '30-54', '55-69', '70+']" label="Age*" required></v-select>
                      </v-col>
                      <!-- <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          label="Interests" multiple></v-autocomplete>
                      </v-col> -->
                    </v-row>
                  </v-container>
                  <small>- * indicates required field</small>
                  <br>
                  <small>- After checking the availability, we will contact you later </small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog_request = false">
                    Close
                  </v-btn>
                  <v-btn color="red darken-1" text @click="dialog_request = false">
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </center>
          <br>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog5" width="600">
        <v-card>
          <v-img @click="dialog5 = false" src="./images/5_Toad_s House.png"></v-img>
          <v-card-title class="text-h5">
            Toad’s House
          </v-card-title>
          <v-card-text>
            In Korea, toads often symbolize the wisdom, rich, and stability. And if you take a brief look at the history
            of Korea, it is full of continuous internal changes brought by the invaders from different countries due to
            its geographical location. And often times it was the common people who were suffered and sacrificed from
            these drastic changes within the society.

            Originally, Toad’s house is a traditional children’s song and play from Korea, where kids sing “Toad, Toad, I
            will give my old house, so give me a new house” while digging a tunnel in the ground. Perhaps this absurd
            lyrics represent my ancestor’s desire to live in a stability after facing numerous shifts.
          </v-card-text>
          <center>
            <v-dialog v-model="dialog_request" max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="black" dark v-bind="attrs" v-on="on">
                  Request purchase
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5 bold">Purchase Form</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal first name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal middle name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal last name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Email*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select :items="['0-17', '18-29', '30-54', '55-69', '70+']" label="Age*" required></v-select>
                      </v-col>
                      <!-- <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          label="Interests" multiple></v-autocomplete>
                      </v-col> -->
                    </v-row>
                  </v-container>
                  <small>- * indicates required field</small>
                  <br>
                  <small>- After checking the availability, we will contact you later </small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog_request = false">
                    Close
                  </v-btn>
                  <v-btn color="red darken-1" text @click="dialog_request = false">
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </center>
          <br>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog6" width="600">
        <v-card>
          <v-img @click="dialog6 = false" src="./images/6_UngNyeo.png"></v-img>
          <v-card-title class="text-h5">
            Ung-Nyeo
          </v-card-title>
          <v-card-text>
            Ung-Nyeo is a character from the ancient Korean mythology, DanGun myth. In this ancient mythology, there were
            once a bear and a tiger went in a journey to find god(Ok-Hwang-Sang-Jeh) with a desire of becoming human. And
            after they met god, god gave them a test where both bear and tiger had to stay inside the cave just eating
            garlics and mugwort for 100 days, in return of granting their wish to become a human. At the end of the test,
            bear was the only one who succeeded the task, granted her wish to become a human and became the first queen of
            Korea.

            Recent discoveries from China recorded a war from the Manchurian region by the tribe who worships bears, and
            tribe who worships tiger. If you read the mythology once again, it suggests that tribe of bears represented by
            Ung Nyeo perhaps won from this war, and became the foundation of Korean people up to this date.
          </v-card-text>
          <center>
            <v-dialog v-model="dialog_request" max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="black" dark v-bind="attrs" v-on="on">
                  Request purchase
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5 bold">Purchase Form</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal first name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal middle name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal last name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Email*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select :items="['0-17', '18-29', '30-54', '55-69', '70+']" label="Age*" required></v-select>
                      </v-col>
                      <!-- <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          label="Interests" multiple></v-autocomplete>
                      </v-col> -->
                    </v-row>
                  </v-container>
                  <small>- * indicates required field</small>
                  <br>
                  <small>- After checking the availability, we will contact you later </small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog_request = false">
                    Close
                  </v-btn>
                  <v-btn color="red darken-1" text @click="dialog_request = false">
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </center>
          <br>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog7" width="600">
        <v-card>
          <v-img @click="dialog7 = false" src="./images/7_6th World.png"></v-img>
          <v-card-title class="text-h5">
            6th World
          </v-card-title>
          <v-card-text>
            In one of the most popular variation of Aztec mythology, people of Aztec believed our universe repeats from
            the process of creation and destruction, and the current universe we’re living in today is the 5th universe
            known as universe of movement. In order to create this universe of movement, Tonatiuh, ugliest god who
            willingly sacrificed himself in fire to become a sun, and each gods sacrificed their heart to the sacred snake
            covered with feathers known as Quetzalcóatl, where he provided movement to the Sun, moon and stars and gave
            cycle of life.
          </v-card-text>
          <center>
            <v-dialog v-model="dialog_request" max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="black" dark v-bind="attrs" v-on="on">
                  Request purchase
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5 bold">Purchase Form</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal first name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal middle name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Legal last name*" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field label="Email*" required></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-select :items="['0-17', '18-29', '30-54', '55-69', '70+']" label="Age*" required></v-select>
                      </v-col>
                      <!-- <v-col cols="12" sm="6">
                        <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          label="Interests" multiple></v-autocomplete>
                      </v-col> -->
                    </v-row>
                  </v-container>
                  <small>- * indicates required field</small>
                  <br>
                  <small>- After checking the availability, we will contact you later </small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog_request = false">
                    Close
                  </v-btn>
                  <v-btn color="red darken-1" text @click="dialog_request = false">
                    Submit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </center>
          <br>
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
    dialog_request: false,
    dialog2: false,
    dialog3: false,
    dialog4: false,
    dialog5: false,
    dialog6: false,
    dialog7: false,
    dialog8: false,
    dialog9: false,
    dialog10: false,
    dialog11: false,
    dialog12: false,
  }),

  methods: {
    moveAbout() {
      this.$router.push({
        path: "about",
      });
    },
  },

  mounted() {
    window.scrollTo(0, 0)
  }
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
  font-size: 17px;
  font-weight: bold;
  margin-top: -8px;
}

.darkModeSwitch {
  float: right;
}

.prevent {
  overflow: auto;
  height: 100%;
}

.imageClass {
  width: 300px;
  height: 425px;
  cursor: pointer;
}

.cardClass {
  height: 495px;
  margin: 36px;
  padding: 10px;
}

@media screen and (min-width:1904px) {
  .imageClass {
    width: 300px;
    height: 425px;
  }
}

@media screen and (min-width:1904px) {
  .cardClass {
    height: 495px;
    margin: 70px;
    padding: 10px;
  }
}
</style>
