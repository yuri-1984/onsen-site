<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="brown lighten-2"
      dark
      disable-resize-watcher
    >
      <!-- <v-list>
      <template v-for="(item,index) in items">
          <v-list-tile-content :key="index">
          <v-list-tile>
              {{item.title}}
  </v-list-tile>
          </v-list-tile-content>
          <v-divider :key="`divider-${index}`"></v-divider>
      </template>
  </v-list> -->
    </v-navigation-drawer>
    <v-toolbar app color="#c9183f" dark>
      <!-- <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/" style="color:white;text-decoration:none;">
        <v-toolbar-title to="/" style="color:white;text-decoration:none;">{{
          appTitle
        }}</v-toolbar-title>
      </router-link>

      <v-col cols="12" sm="3">
        <v-text-field
          v-model="keyword"
          value="keyword"
          label="キーワードで検索"
          required
        ></v-text-field
      ></v-col>
      <v-btn flat class="hidden-sm-and-down" @click="submit(keyword)" to="/menu"
        >Search</v-btn
      >

      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <div v-if="!isAuthenticated" class="hidden-sm-and-down">
        <v-btn text to="/sign-in" data-cy="signinBtn">SIGN IN</v-btn>
        <v-btn
          color="brown lighten-3"
          to="/join"
          class="nav-join"
          data-cy="joinBtn"
          >JOIN</v-btn
        >
      </div>
      <div v-else>
        <v-btn text to="/about">PROFILE</v-btn>
        <v-btn outline color="gray" @click="logout" data-cy="logout"
          >Logout</v-btn
        >
      </div>
    </v-toolbar>
  </span>
</template>
<script>
export default {
  name: "App-navigation",
  data() {
    return {
      appTitle: "CAFE ☕️",
      drawer: false,
      // items: [
      //     { title: 'Menu' },
      //     { title: 'Sign In' },
      //     { title: 'Join' }
      // ],
      keyword: ""
    };
  },

  methods: {
    submit: function(keyword) {
      this.$store.dispatch("getOnsens", keyword);
    },
    logout() {
      this.$store.dispatch("userSignOut");
    }
  },
  computed:{
    isAuthenticated(){
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style scoped></style>
