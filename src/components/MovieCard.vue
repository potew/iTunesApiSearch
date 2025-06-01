<template>
  <v-card class="pa-4 mb-4" max-width="100%">
    <v-row no-gutters>
      <!-- Poster -->
      <v-col cols="12" sm="3">
        <v-img
          :src="item.artworkUrl100.replace('100x100', '600x600')"
          :lazy-src="loadingImg"
          alt="Movie poster"
          aspect-ratio="2/3"
          cover
        />
      </v-col>

      <!-- Informações -->
      <v-col cols="12" sm="9" class="pl-sm-4">
        <v-card-title class="text-h6">{{ item.trackName }}</v-card-title>
        <v-card-subtitle class="mb-2">
          <div><strong>Diretor:</strong> {{ item.artistName }}</div>
          <div><strong>Gênero:</strong> {{ item.primaryGenreName }}</div>
          <div><strong>Duração:</strong> {{ formatDuration(item.trackTimeMillis) }}</div>
          <div><strong>Classificação:</strong> {{ item.contentAdvisoryRating }}</div>
          <div>
            <strong>Lançamento:</strong> {{ formatDate(item.releaseDate) }}
        </div>
        </v-card-subtitle>

        <v-card-text class="pb-0">
          <div>{{ item.longDescription }}</div>
          <div class="mt-2">
            <strong>Compra:</strong> US$ {{ item.trackHdPrice?.toFixed(2) }} |
            <strong>Aluguel:</strong> US$ {{ item.trackHdRentalPrice?.toFixed(2) }}
          </div>
        </v-card-text>

        <!-- Preview (carregado sob demanda) -->
        <div v-if="item.previewUrl" class="mt-3">
          <v-btn
            v-if="!showTrailer"
            color="primary"
            @click="showTrailer = true"
            variant="outlined"
          >
            Assistir trailer
          </v-btn>

          <video
            v-else
            controls
            width="100%"
            class="mt-2"
          >
            <source :src="item.previewUrl" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>

        <v-card-actions class="px-0 mt-2">
          <v-btn
            :href="item.trackViewUrl"
            target="_blank"
            color="secondary"
            variant="text"
          >
            Ver no Apple TV / iTunes
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { formatDate, formatDuration } from '../misc/utils'
import loadingImg from '../assets/hourglass.gif'

defineProps({
  item: Object
})

const showTrailer = ref(false)
</script>