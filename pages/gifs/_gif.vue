<template>
  <main>
    <main-header />
    <div class="gif">   
      <article v-if="item.user" class="gif__profile">
        <div class="gif__profile--image">
          <img :src="item.user.avatar_url" :alt="item.user.display_name">
        </div>
        <a :href="item.user.profile_url" class="gif__profile--url">
          {{item.user.display_name}}
        </a>
      </article>
      <article v-else class="gif__profile">
        <div class="gif__profile--image"></div>
      </article>
      <article class="gif__content">
        <div class="gif__content--image">
          <a :href="item.url">{{item.title}}</a>
          <img :src="item.images.original.url" :alt="item.title">
        </div>

        <div class="gif__content--copy">
          <p>Dimensions: {{item.images.original.width}} x {{item.images.original.height}} px</p>
          <p>Uploaded: {{moment(item.import_datetime).format('MM/DD/YYYY')}}</p>
          <p>Size: {{item.images.original.size}} MB</p>
          <p>Raiting: {{item.rating}}</p>
          <p>Frames: {{item.images.original.frames}}</p>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
  import MainHeader from '~/components/MainHeader';
  
  const moment = require("moment");
  const axios = require("axios");

  export default {
    name: 'Gifs',
    components: {
      MainHeader
    },
    head() {
      return {
        title: "Gif Selection"
      }
    },
    data() {
      return {
        moment: moment
      }
    },
    async asyncData({ params }){
      const { data } = await axios.get(`https://api.giphy.com/v1/gifs/${params.gif}?api_key=${process.env.APIKEY}`);
      return { item: data.data };
    },
  }
</script>