<template>
  <UPage>
    <div>
      <div class="text-justify p-5">
        <p class="text-center text-3xl underline p-0.5">Welcome to JacksonPeters.dev</p>
            <p>This is my portfolio site where I showcase and detail the programming projects that I work on in my spare time.</p>
            <p>My overall goal is to learn a variety of programming languages covering a variety of topics.</p>
            <p>Currently, my main focus is on learning various web development technologies, such as Flask for Python, Next.JS and React.</p>
            <p>Each time I'll undertake learning a new programming language, I'll endeavour to develop a publicly viewable project in my GitHub profile, as well as providing some documentation on this website.</p>
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
      <UPageHeader class="text-center" title="Projects" />
      <div class="p-4">Checkout a collection of my projects below, alternatively, checkout the Projects page for all of my projects</div>

      <UPageGrid>
        <UPageCard
          v-for="(project, index) in projects"
          :key="index"
          v-bind="project"
        >
        </UPageCard>
      </UPageGrid>
    </UPage>

    <UPage>
      <UPageHeader class="text-center" title="Blog" />
      <div class="p-4">Check out the latest blog posts below</div>
      <UBlogPosts>
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          v-bind="post"
          :to="post.path"
        />
      </UBlogPosts>
    </UPage>
  </UPage>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();

const projects = ref([
  {
    title: "Film Finder",
    to: "/projects/filmfinder",
    icon: "",
    description: "A small project covering movies and tv shwos",
  },
  {
    title: "Listings Finder",
    to: "/projects/mernproject",
    description: "A site to discover various property listings",
  },
  {
    title: "Flask Books",
    to: "/projects/flaskbooks",
    description: "A project mimicking a library database",
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
