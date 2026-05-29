<template>
  <aside class="status-rail">
    <div class="brand-lockup">
      <div class="brand-mark">CO</div>
      <div>
        <strong>{{ data.product }}</strong>
        <span>{{ data.version }}</span>
      </div>
    </div>

    <div class="prod-meter">
      <div class="meter-ring">
        <span>{{ data.prod }}%</span>
      </div>
      <p>Prod</p>
    </div>

    <nav class="rail-nav" aria-label="Primary workspace">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ active: activeTab === tab.id }"
        type="button"
        :title="tab.label"
        @click="$emit('select-tab', tab.id)"
      >
        <i :data-lucide="tab.icon"></i>
        <span>{{ tab.label }}</span>
      </button>
    </nav>

    <div class="milestone-block">
      <span>{{ data.milestone.target }}</span>
      <strong>{{ data.milestone.title }}</strong>
      <div class="mini-bar">
        <div :style="{ width: data.milestone.percent + '%' }"></div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true },
    activeTab: { type: String, required: true },
  },
  emits: ['select-tab'],
  data() {
    return {
      tabs: [
        { id: 'runs', label: 'Runs', icon: 'activity' },
        { id: 'checklist', label: 'Rules', icon: 'list-checks' },
        { id: 'evidence', label: 'Evidence', icon: 'folder-check' },
        { id: 'automation', label: 'Automation', icon: 'bot' },
      ],
    };
  },
};
</script>
