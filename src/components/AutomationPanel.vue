<template>
  <section class="panel wide">
    <header class="panel-header">
      <h2>Automation</h2>
      <button class="icon-button primary" title="Run automation">
        <i data-lucide="terminal"></i>
      </button>
    </header>
    <div class="automation-list">
      <article v-for="item in items" :key="item.name" class="automation-row">
        <i data-lucide="workflow"></i>
        <strong>{{ item.name }}</strong>
        <span>{{ item.type }}</span>
        <span :class="['pill', item.state]">{{ item.state }}</span>
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
