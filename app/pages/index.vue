<template>
  <UPage>
    <div>
      <div class="text-center p-5">
        General page introduction, will include links to Github and Linked In
        profiles here
      </div>

      <UPageColumns class="">
        <ULink :to="config.public.GITHUB_PROFILE" :external="true">
          <UPageCard
            title="Github"
            description="A link to my GitHub repository"
            icon="i-simple-icons-github"
          />
        </ULink>
        <ULink :to="config.public.LINKEDIN_PROFILE" :external="true">
          <UPageCard
            title="LinkedIn!"
            description="A link to my LinkedIn! profile"
            icon="i-simple-icons-linkedin"
          />
        </ULink>
        <ULink :to="config.public.TWITTER_PROFILE" :external="true">
          <UPageCard
            title="Twitter/X"
            description="A link to twitter/x profile"
            icon="i-simple-icons-x"
          />
        </ULink>
      </UPageColumns>
    </div>

    <UPage>
      <UPageHeader class="text-center">Project Section</UPageHeader>
      <div class="p-4">Checkout a collection of my projects below</div>

      <!-- <UPageSection :features="projects"> </UPageSection> -->
      <UPageGrid>
        <UPageCard
          v-for="(project, index) in projects"
          :key="index"
          v-bind="project"
        >
        </UPageCard>
      </UPageGrid>
    </UPage>

    <UPageSection>
      <UPageHeader class="text-center">Blog Section</UPageHeader>
      Check out the latest blog posts below
      <UBlogPosts>
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          v-bind="post"
          :to="post.path"
        />
      </UBlogPosts>
    </UPageSection>
  </UPage>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();

const projects = ref([
  {
    title: "Film Finder",
    to: "/projects/filmfinder",
    icon: "",
    description: "test",
  },
  {
    title: "MERN Project",
    to: "/projects/mernproject",
    description: "Test2",
  },
  {
    title: "Flask Books",
    to: "/projects/flaskbooks",
    description: "Test2",
  },
]);

const { data: posts } = await useAsyncData("blogs", () =>
  queryCollection("blog").order("date", "DESC").limit(3).all()
);
if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "blogs posts not found",
    fatal: true,
  });
}
</script>
