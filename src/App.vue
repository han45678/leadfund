<template>
    <router-view />
    <!-- <Transition name="fade">
    <div v-if="show" class="box">淡入淡出</div>
    </Transition>
    <Transition name="zoom">
      <div v-if="show" class="box">縮放</div>
    </Transition>
    <Transition name="fade-up">
      <div v-if="show" class="box">從上進入</div>
    </Transition>
    <Transition name="fade-right">
      <div v-if="show" class="box">從右進入</div>
    </Transition>
    <Transition name="fade-down">
      <div v-if="show" class="box">從下進入</div>
    </Transition>
    <Transition name="fade-left">
      <div v-if="show" class="box">從左進入</div>
    </Transition> -->
</template>

<style>
/* 淡入淡出 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 縮放 */
.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.5s ease;
}

.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* fade-in from top */
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.5s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* fade-in from right */
.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 0.5s ease;
}

.fade-right-enter-from,
.fade-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* fade-in from bottom */
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.5s ease;
}

.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* fade-in from left */
.fade-left-enter-active,
.fade-left-leave-active {
  transition: all 0.5s ease;
}

.fade-left-enter-from,
.fade-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>