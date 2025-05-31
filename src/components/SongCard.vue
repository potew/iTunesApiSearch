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
      <div><strong>Duração:</strong> {{ formatDuration(item.trackTimeMillis) }}</div>
    </v-card-text>

    <v-card-actions>
      <audio v-if="item.previewUrl" :src="item.previewUrl" preload="none" controls style="width: 100%" />
    </v-card-actions>
  </v-card>
</template>

<script setup>
  import loadingImg from '../assets/hourglass.gif'

  defineProps({
    item: Object
  })

  function formatDate(dateStr) {
  const date = new Date(dateStr)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

  function formatDuration(ms) {
    if (!ms) return '—'
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }
</script>