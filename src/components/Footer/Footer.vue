<template>
  <footer
    class="app-footer"
  >
    <div class="app-footer__git">
      <a 
        href="https://github.com/ZHe-testName/Packages_Table"
        target="_blank"
      >
        GitHub

        <img 
          :src="IMGS.github.src" 
          :alt="IMGS.github.alt"
        >
      </a>
    </div>

    <div class="app-footer__year">2024 year created</div>

    <div class="app-footer__rights">
      <h4>All rights reserved</h4>

      <p>violation of rights is punishable by death</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { IMGS } from '@/core/constants';
</script>

<style scoped lang="scss">
@import './Footer.scss';
</style>