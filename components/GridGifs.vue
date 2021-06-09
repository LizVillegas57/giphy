<template>
    <section class="gallery">
        <article v-for="data in trending" :key="data.id" class="gallery__item">
            <router-link :to="'/gifs/' + data.id">
                <img :src="data.images.fixed_height.url" :alt="data.title" class="gallery__item--image">
            </router-link>
        </article>
    </section>
</template>

<script>
    export default {
        props: ['trending'],
    }
</script>