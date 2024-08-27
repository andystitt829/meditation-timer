<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Meditate</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Meditate</ion-title>
        </ion-toolbar>
      </ion-header>
      <TimerPage />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import TimerPage from '@/components/TimerPage.vue';
</script>
