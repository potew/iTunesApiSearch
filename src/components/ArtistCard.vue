<template>
  <v-card class="pa-4">
    <v-card-title>{{ item.artistName }}</v-card-title>

    <v-card-subtitle>
      <div><strong>Gênero:</strong> {{ item.primaryGenreName }}</div>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        :href="item.artistLinkUrl"
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
defineProps({
  item: Object
})
</script>
