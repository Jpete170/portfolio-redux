<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui';
  const route = useRoute()

  const routeList = computed<NavigationMenuItem[]>( ()=> [
    {
      label: 'About',
      to: '/about',
      active: route.path.startsWith("/about")
    },
    {
      label: 'Projects',
      to: '/projects',
      active: route.path.startsWith("/projects")
    },
    {
      label: 'Blog',
      to: '/blog',
      active: route.path.startsWith("/blog")
    }
  ])


</script>
<template>
  <UHeader title="JacksonPeters.dev">

  <UNavigationMenu :items="routeList" />
  
  <template #right>
    <UColorModeButton />
    <div>
      <p>GitHub</p>
    </div>
    <div>
      <p>LinkedIn</p>
    </div>
  </template>
  
  </UHeader>
</template>
