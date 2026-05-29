<template>
  <section class="panel">
    <header class="panel-header">
      <h2>Execution Ledger</h2>
      <button class="icon-button" title="Export ledger">
        <i data-lucide="download"></i>
      </button>
    </header>
    <div class="run-list">
      <article v-for="run in runs" :key="run.time + run.name" class="run-row">
        <span class="run-time">{{ run.time }}</span>
        <strong>{{ run.name }}</strong>
        <span :class="['pill', run.status]">{{ run.status }}</span>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    runs: { type: Array, required: true },
  },
};
</script>
