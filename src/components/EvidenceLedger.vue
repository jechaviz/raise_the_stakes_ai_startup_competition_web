<template>
  <section class="panel wide">
    <header class="panel-header">
      <h2>Evidence</h2>
      <button class="icon-button" title="Verify evidence">
        <i data-lucide="shield-check"></i>
      </button>
    </header>
    <div class="evidence-grid">
      <article v-for="item in items" :key="item.name" class="evidence-item">
        <span :class="['pill', item.state]">{{ item.state }}</span>
        <strong>{{ item.name }}</strong>
        <code>{{ item.path }}</code>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
  },
};
</script>
