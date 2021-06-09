<template>
    <div class="search">
        <div class="search__wrapper">
            <button type="button" v-on:click="onInput(keyword)" class="search__wrapper--btn">
                <b-icon-search></b-icon-search>
            </button>
            <input placeholder="Search for anything" v-model="keyword" v-on:keyup.enter="onInput" class="search__wrapper--input"  @click="addClassBody('addClass', 'active')">
        </div>
    </div>
</template>

<script>
    import { BIconSearch } from 'bootstrap-vue'

    const axios = require("axios");

    export default {
        data() {
            return {
                keyword: []
            }
        },
        components: {
            BIconSearch
        },
        methods: {
            addClassBody(addRemoveClass, className) {
                const el = document.body;
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                }
            },
            onInput() {
                axios.get(`https://api.giphy.com/v1/gifs/search?api_key=Lm6rXGuwq3Afa3YIOpC1EmKNd6pFaa3m&q=${this.keyword}`)
                    .then(response => response.data)
                    .then(result => {
                        this.$emit('fetch-total', result.pagination.total_count);
                        this.$emit('fetch-title', this.keyword);
                        this.$emit('fetch-gifs', result.data);
                    })
            }
        }
    }
</script>