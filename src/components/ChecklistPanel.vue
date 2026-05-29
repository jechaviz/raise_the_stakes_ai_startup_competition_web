<template>
  <section class="panel wide">
    <header class="panel-header">
      <h2>Rules</h2>
      <button class="icon-button" title="Sync checklist">
        <i data-lucide="rotate-cw"></i>
      </button>
    </header>
    <div class="table-list">
      <article v-for="item in items" :key="item.title" class="table-row">
        <span :class="['status-dot', item.status]"></span>
        <strong>{{ item.title }}</strong>
        <span>{{ item.owner }}</span>
        <span :class="['pill', item.status]">{{ item.status }}</span>
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
