<template>
<v-container grid-list-lg>
<v-layout row>
    <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">
        THE DOMINANT WHITE-BELLIED HEDGEHOG COLORS
    </v-flex>
</v-layout>
<v-layout row wrap class="meal-plans" >
    <v-flex xs12 sm12 md4 v-for="(cafe,i) in cafes" v-bind:key="i">
        <v-card>
            <v-responsive>
                <v-img 
             src="@/assets/カフェラテ.jpg"
              height="300px">
              <v-container fill-height fluid>
                  <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                          <span class="headline white--text">
                              <div>{{cafe.category}}</div></span>
                      </v-flex>
                </v-layout>
              </v-container>
                </v-img>
          </v-responsive>

        <v-card-text>
            <div>
                <h3 class="headline mb-0">{{cafe.name}}</h3>
                <div>
                    {{cafe.pr.pr_short}}
                </div>
            </div>
        </v-card-text>
        <v-card-actions v-if="['menu'].includes($route.name)">
              <v-btn outlined block color="green" @click="showHedgehogs(1)" data-cy="plansSPBtn">Setect This Color</v-btn>
          </v-card-actions>
        </v-card>
    
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios';
export default{
    name:'Home-plans',
    data(){
        return{
     cafes:[],
        }
    },
    computed:{
       coffees(){
         return this.$store.state.onsens;
       }
     },
    created(){
        const vm = this
        axios.get(`https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=&pref=PREF13&hit_per_page=12&outret=1&wifi=1&category_s=RSFST18008`)
        .then(response =>{
            vm.cafes = response.data.rest
            
            
            
        })
    },
    methods:{
        showcoffee(keyword){
            this.$store.dispatch("getOsen",keyword);
         
       
        }
    }
};
</script>
<style scoped>
</style>