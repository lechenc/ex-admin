<!--
 * @Author: your name
 * @Date: 2020-07-20 14:09:50
 * @LastEditTime: 2020-07-20 16:39:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \exchange-admin\src\layout\components\Sidebar\Link.vue
--> 
<template>
  <!-- eslint-disable vue/require-component-is -->
  <component v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate';

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    linkProps(url) {
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener',
        };
      }
      return {
        is: 'router-link',
        to: url,
      };
    }
  },
};
</script>
