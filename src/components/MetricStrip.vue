<template>
  <section class="metric-strip" aria-label="Readiness metrics">
    <article class="prod-card">
      <span>Readiness</span>
      <strong>{{ prod }}%</strong>
      <div class="progress-track">
        <div :style="{ width: prod + '%' }"></div>
      </div>
    </article>
    <article v-for="metric in metrics" :key="metric.label" :class="['metric-card', metric.tone]">
      <span>{{ metric.label }}</span>
      <strong>{{ metric.value }}</strong>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    metrics: { type: Array, required: true },
    prod: { type: Number, required: true },
  },
};
</script>
