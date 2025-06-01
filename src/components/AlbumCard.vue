<template>
  <v-card>
    <v-img
      cover
      height="250"
      :lazy-src="loadingImg"
      :src="item.artworkUrl100 ? item.artworkUrl100.replace('100x100', '600x600') : 'https://picsum.photos/id/11/600/600'"
    />

    <v-card-title>{{ item.collectionName }}</v-card-title>

    <v-card-subtitle>
      {{ item.artistName }}
    </v-card-subtitle>

    <v-card-text>
      <div><strong>Gênero:</strong> {{ item.primaryGenreName }}</div>
      <div><strong>Lançamento:</strong> {{ formatDate(item.releaseDate) }}</div>
      <div><strong>Total de faixas:</strong> {{ item.trackCount }}</div>
      <div v-if="item.copyright" class="text-caption mt-2" style="color: gray;">
        {{ item.copyright }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        :href="item.collectionViewUrl"
        target="_blank"
        color="primary"
        variant="text"
      >
        Ver no Apple Music
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { formatDate } from '../misc/utils'
import loadingImg from '../assets/hourglass.gif'

defineProps({
  item: Object
})
</script>
