<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const route = useRoute();
const config = useRuntimeConfig();
const routeList = computed<NavigationMenuItem[]>(() => [
  {
    label: "About",
    to: "/about",
    active: route.path.startsWith("/about"),
  },
  {
    label: "Projects",
    to: "/projects",
    active: route.path.startsWith("/projects"),
  },
  {
    label: 'Blog',
    to: '/blog',
    active: route.path.startsWith("/blog")
  }
]);

</script>
<template>
  <UHeader title="JacksonPeters.dev">
    <UNavigationMenu :items="routeList" />

    <template #right>
      <UColorModeSwitch size="xl"/>
      <div>
        <ULink
          as="button"
          type="button"
          :to="config.public.GITHUB_PROFILE"
          :external="true"
          >
          <Icon name="uil:github" mode="svg" size="2em"/>
          </ULink
        >
      </div>
      <div>
        <ULink
          as="button"
          :external="true"
          :to="config.public.LINKEDIN_PROFILE"
          ><Icon name="uil:linkedin" mode="svg" size="2em"/>
          </ULink
        >
      </div>
    </template>
  </UHeader>
</template>
