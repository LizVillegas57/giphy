<template>
  <main>
    <main-header />
    <search @fetch-gifs="onFetch" @fetch-title="onFetchTitle" @fetch-total="onFetchTotal"/>
    <main-title :mainTitle="mainTitle" :total="total" />
    <grid-gifs :gifs="trending" />
    <div class="overlay" @click="removeBodyClass('removeClass', 'active')"></div>
  </main>
</template>

<script>
  const axios = require("axios");
  let url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.APIKEY}`;

  export default {
    name: 'Grid',
    head() {
      return {
        title: "Giphy Search"
      }
    },
    data() {
      return {
        trending: [],
        mainTitle: "",
        total: "",
      }
    },
    async asyncData(){
      const { data } = await axios.get(url);
      return { trending: data.data, data: data };
    },
    methods: { 
      onFetch(result) {
        this.trending = result;

        const el = document.body;
        el.classList.remove('active');
        el.classList.add('searching');
      },
      onFetchTitle(result){
        this.mainTitle = result;
      },
      onFetchTotal(result){
        this.total = result;
      },
      removeBodyClass(addRemoveClass, className) {
        const el = document.body;
        if (addRemoveClass === 'removeClass') {
          el.classList.remove(className);
        }
      },
    }
  }
</script>
