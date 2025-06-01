<template>
  <v-card>
    <v-img
      cover
      height="250"
      :lazy-src="loadingImg"
      :src="item.artworkUrl100.replace('100x100', '600x600')"
    />

    <v-card-title>{{ item.trackName }}</v-card-title>

    <v-card-subtitle>
      {{ item.artistName }} — {{ item.collectionName }}
    </v-card-subtitle>

    <v-card-text>
      <div><strong>Gênero:</strong> {{ item.primaryGenreName }}</div>
      <div><strong>Lançamento:</strong> {{ formatDate(item.releaseDate) }}</div>
      <div><strong>Duração:</strong> {{ formatDurationSong(item.trackTimeMillis) }}</div>
    </v-card-text>

    <v-card-actions>
      <audio v-if="item.previewUrl" :src="item.previewUrl" preload="none" controls style="width: 100%" />
    </v-card-actions>
  </v-card>
</template>

<script setup>
  import loadingImg from '../assets/hourglass.gif'
  import { formatDate, formatDurationSong } from '../misc/utils'

  defineProps({
    item: Object
  })
</script>