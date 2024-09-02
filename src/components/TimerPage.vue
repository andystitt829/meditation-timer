<template>
    <h1>Meditate</h1>
    <p>Ten minute meditation timer.</p>
    <div class="ion-margin-bottom">
        <span>{{timer.minutes}}</span>:<span>{{timer.seconds}}</span>
    </div>
    <ion-button @click="timer.start()">Start</ion-button>
    <ion-button @click="timer.pause()">Pause</ion-button>
    <ion-button @click="timer.resume()">Resume</ion-button>
    <ion-button @click="restartTen()">Restart</ion-button>
</template>

<script setup lang="js">
import {  watchEffect, onMounted } from "vue";
import { useTimer } from 'vue-timer-hook';
import { IonButton } from '@ionic/vue';
import bells from '../assets/sounds/meditation-timer-bells.mp3';

const time = new Date();
time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
const autoStart = false;
const timer = useTimer(time, autoStart);
const restartTen = () => {
    // Restarts to 10 minutes timer
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600);
    timer.restart(time);
}
const audio = new Audio(bells);

onMounted(() => {
  watchEffect(async () => {
    if(timer.isExpired.value) {
        audio.play();
        alert('Time is up');
    }
  })
})
</script>

<style scoped>
span {
  font-size: 1.5rem;
}
</style>