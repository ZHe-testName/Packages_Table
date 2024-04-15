<template>
  <div
    class="single-package"
  >
    <div class="single-package__header">
      <img 
        :alt="IMGS.npm_logo.alt"
        :src="IMGS.npm_logo.src" 
      >

      <h3>{{ data?.name }}</h3>

      <button
        @click="() => useModalStore().removeModal()"
      ></button>
    </div>

    <div class="single-package__body">
      <div class="single-package__body--author">
        <SpanWithTitle 
          title="Author"
          :text="data?.author?.name || ''"
        />

        <SpanWithTitle 
          title="Files"
          :text="`${data?.dist?.fileCount}`"
        />

        <SpanWithTitle 
          title="Unpacked size"
          :text="weightInMb"
        />
      </div>

      <p>
        {{ data?.description }}
      </p>

      <div 
        v-if="data?.buildOptions?.formats.length"
        class="single-package__body--formats"
      >
        <h5>Formats:</h5>

        <ul>
          <li
            v-for="format in data?.buildOptions.formats"
          >
            <TextPill 
              :text="format"
            />
          </li>
        </ul>
      </div>
      
      <div 
        v-if="data?.maintainers.length"
        class="single-package__body--maintainers"
      >
        <h5>Maintainers:</h5>

        <ul>
          <li
            v-for="maintainer in data.maintainers"
          >
            <SpanWithTitle 
              :title="maintainer.name"
              :text="maintainer.email"
            />
          </li>
        </ul>
      </div>

      <div 
        class="single-package__body--links"
      >
        <h5>Links:</h5>

        <ul>
          <li
            v-if="data?.homepage"
          >
            <a :href="data.homepage" target="_blank">Homepage</a>
          </li>

          <li
            v-if="data?.repository?.url"
          >
          <a :href="data?.repository.url" target="_blank">Repository</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextPill from '@/components/sharable/TextPill/TextPill.vue';
import SpanWithTitle from '@/components/sharable/SpanWithTitle/SpanWithTitle.vue';

import { IMGS } from '@/core/constants';

import { useModalStore } from '@/stores/modalStore';
import { storeToRefs } from 'pinia';

import { computed } from 'vue';

const { getContext: data } = storeToRefs(useModalStore());

const weightInMb = computed<string>(() => ((data.value?.dist.unpackedSize || 0) / 1024 / 1000).toFixed(2) + 'Mb');

</script>

<style scoped lang="scss">
@import './SinglePackageModal.scss';
</style>