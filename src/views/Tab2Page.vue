<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tips</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tips</ion-title>
        </ion-toolbar>
      </ion-header>
      <TipsPage />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import TipsPage from '@/components/TipsPage.vue';

</script>
