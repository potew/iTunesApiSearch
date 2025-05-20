<template>
  <v-app>
    <v-main>
      <v-container class="py-8">
        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              label="Termo"
              variant="outlined"
              density="compact"
              v-model="searchQuery"
              prepend-inner-icon="mdi-cursor-text"
              @keydown.enter="fetchResults"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              variant="outlined"
              v-model="mediaType"
              :items="mediaTypes"
              density="compact"
              append-icon="mdi-account-music"
              label="Tipo de mídia"
            />
          </v-col>
          <v-col cols="12" md="2">
            <v-number-input
              :reverse="false"
              controlVariant="split"
              density="compact"
              label="Max. resultados"
              :hideInput="false"
              :inset="false"
              v-model="maxResults"
            ></v-number-input>
          </v-col>
          <v-col cols="12" md="3" class="text-center">
            <v-btn
              @click="fetchResults"
              color="primary"
              prepend-icon="mdi-magnify"
              variant="outlined"
              >
                Pesquisar
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="item in results"
            :key="item.trackId"
            cols="12"
            sm="6"
            md="4"
          >
            <MediaCard :item="item" />
          </v-col>
        </v-row>
        <v-img v-if="loading" class="mx-auto d-block" :width="88" :src="aguardeGIF"></v-img>
        <v-footer border>{{ feedbackMsg }}</v-footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import aguardeGIF from './assets/aguarde.gif'
  import MediaCard from './components/MediaCard.vue'

  const searchQuery = ref('')
  const feedbackMsg = ref('Bem-vindo ao meu buscador de músicas do iTunes, v1, pois o outro era tão ruim que virou v0!')
  const mediaType = ref(null)
  const maxResults = ref(30)
  const loading = ref(false)
  const results = ref([])

  const mediaTypes = [
    {value: 'musicTrack', title: "Música"},
    {value: 'musicArtist', title: "Artista"},
    {value: 'album', title: "Álbum"}
  ]

  async function fetchResults() {
    if (searchQuery.value.length < 3 || !mediaType.value) {
      feedbackMsg.value = 'Digite ao menos 3 letras e selecione um tipo de mídia.'
      return
    }

    const apiUrl = `https://itunes.apple.com/search?term=${searchQuery.value}&entity=${mediaType.value}&limit=${maxResults.value}`
    loading.value = true

    try {
      const res = await fetch(apiUrl)
      const data = await res.json()
      results.value = data.results
      feedbackMsg.value = data.resultCount > 0 ? `Exibindo ${data.resultCount} resultados` : 'Nenhum resultado encontrado.'
      loading.value = false
    } catch (err) {
      feedbackMsg.value = 'Erro ao buscar dados. Verifique o console para mais detalhes.'
      console.error(err)
      loading.value = false
    }
  }
</script>