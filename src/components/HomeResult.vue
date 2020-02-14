<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6 lg4 v-for="(result,i) in coffees" v-bind:key="i">
        <v-card data-cy="hedgehogEntry" >
          <v-responsive>
            <a :href="result.url">
            <v-img :src="result.image_url.shop_image1" ></v-img></a>
            
          </v-responsive>
          <v-card-text>
            <div class="title my-5" >{{ result.name }}</div>
            <div class="subheading">Description</div>
            {{ result.pr.pr_short }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="pink" dark @click="favoritecafe(result)">good</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home-result",
   
  computed:{
  isAuthenticated() {
    return this.$store.getters.isAuthenticated;
  },
    coffees() {
    return this.$store.state.coffees;
    }
  },
  methods:{
    favoritecafe(result){
      if(this.isAuthenticated){
        this.$store.dispatch('addFavolite',result);
      }else{
        this.$router.push('/sign-in');
      }
    }
  }
};
</script>
