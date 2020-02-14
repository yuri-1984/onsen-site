<template>
  <v-container grid-list-lg>
    <h1>私のお気に入り</h1>
    <v-layout row wrap>
      <v-flex xs12 sm4 md4 lg4 v-for="(item, i) in userFavolites" :key="i">
        <v-card data-cy="hedgehogEntry">
          <v-responsive>
            <v-img
              src="http://4.bp.blogspot.com/-qklW62z7DRQ/Uyk_DD0c-QI/AAAAAAAAeKc/AzSDqYJsHgo/s180-c/character_rollcake.png"
            ></v-img>
          </v-responsive>
          <v-card-text>
            <div class="title my-5">{{ item.name }}</div>
            <div class="title my-5">Tel{{ item.tel }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "About",
  computed: {
    userFavolites() {
      return this.$store.state.userFavolites;
    }
  },
  mounted() {
    this.getFavolites();
  },
  methods: {
    getFavolites() {
      this.$store.dispatch("getUserFavolites");
    }
  }
};
</script>
<style scoped>
h1{
text-align: center;
}
.center{
text-align: center;
}
</style>
