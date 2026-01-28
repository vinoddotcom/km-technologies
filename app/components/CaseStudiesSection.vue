<template>
  <div class="bg-base-100 py-24 relative overflow-hidden">
    <!-- Decorative Circle -->
    <div class="absolute -right-20 top-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <div class="badge badge-accent badge-outline mb-4">SUCCESS STORIES</div>
          <h2 class="text-4xl font-extrabold">Measurable Results,<br/>Real Impact</h2>
        </div>
        <button class="btn btn-outline gap-2 hidden md:flex">
          View All Case Studies
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div v-for="(study, index) in caseStudies" :key="index" class="group card bg-base-200 border-2 border-transparent hover:border-accent hover:bg-base-100 transition-all duration-500 hover:-translate-y-2">
          <div class="card-body">
            <div class="flex justify-between items-start mb-4">
              <div class="badge badge-secondary badge-lg rounded-md font-mono">{{ study.badge }}</div>
              <div class="text-5xl opacity-10 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {{ index + 1 }}
              </div>
            </div>
            
            <h3 class="card-title text-2xl font-bold mb-6 group-hover:text-accent transition-colors">{{ study.industry }}</h3>
            
            <div class="space-y-4">
              <div class="pl-4 border-l-2 border-base-content/10 group-hover:border-accent/50 transition-colors">
                <p class="text-xs font-bold opacity-50 uppercase tracking-wider mb-1">Challenge</p>
                <p class="text-sm opacity-80">{{ study.problem }}</p>
              </div>
              <div class="pl-4 border-l-2 border-base-content/10 group-hover:border-accent/50 transition-colors">
                <p class="text-xs font-bold opacity-50 uppercase tracking-wider mb-1">Solution</p>
                <p class="text-sm opacity-80">{{ study.solution }}</p>
              </div>
            </div>
            
            <div class="mt-8 pt-6 border-t border-base-content/5">
              <p class="text-xs font-bold text-success uppercase tracking-wider mb-2">Outcome</p>
              <p class="text-3xl font-black text-base-content group-hover:text-success transition-colors">{{ study.outcome }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center md:hidden">
        <button class="btn btn-outline w-full">View All Case Studies</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const caseStudies = [
  {
    industry: "FinTech",
    problem: "Slow API response times affecting 2M users",
    solution: "Re-architected microservices with caching layer",
    outcome: "-63% Latency",
    badge: "API Scaling",
  },
  {
    industry: "Healthcare",
    problem: "Legacy system modernization needed",
    solution: "Cloud-native migration with zero downtime",
    outcome: "100% Uptime",
    badge: "Migration",
  },
  {
    industry: "E-commerce",
    problem: "Cart abandonment due to slow checkout",
    solution: "Performance optimization & UX redesign",
    outcome: "+47% Sales",
    badge: "Conversion",
  },
];
</script>
