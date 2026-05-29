<template>
  <main class="app-shell">
    <StatusRail :data="data" :active-tab="activeTab" @select-tab="activeTab = $event" />

    <section class="workspace">
      <header class="workspace-header">
        <div>
          <p class="eyebrow">{{ data.opportunity }}</p>
          <h1>{{ data.product }}</h1>
          <p class="subline">{{ data.category }} - {{ data.deadline }}</p>
        </div>
        <div class="header-actions">
          <button class="icon-button" title="Regenerate manifest" @click="flashRun">
            <i data-lucide="refresh-cw"></i>
          </button>
          <button class="icon-button primary" title="Run demo scenario" @click="flashRun">
            <i data-lucide="play"></i>
          </button>
        </div>
      </header>

      <MetricStrip :metrics="data.metrics" :prod="data.prod" />

      <div class="tab-row" role="tablist" aria-label="Workspace views">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="['tab-button', { active: activeTab === tab.id }]"
          type="button"
          role="tab"
          :aria-selected="activeTab === tab.id"
          @click="activeTab = tab.id"
        >
          <i :data-lucide="tab.icon"></i>
          <span>{{ tab.label }}</span>
        </button>
      </div>

      <section v-if="activeTab === 'runs'" class="view-grid">
        <RunLedger :runs="runs" />
        <img class="workflow-image" src="/assets/workflow-preview.png" alt="ContestOps workflow evidence preview" />
      </section>

      <ChecklistPanel
        v-else-if="activeTab === 'checklist'"
        :items="data.checklist"
      />

      <EvidenceLedger
        v-else-if="activeTab === 'evidence'"
        :items="data.evidence"
      />

      <CompetitionPanel
        v-else-if="activeTab === 'competition'"
        :data="data.competition"
      />

      <AutomationPanel
        v-else
        :items="data.automations"
      />
    </section>
  </main>
</template>

<script>
import StatusRail from '/src/components/StatusRail.vue';
import MetricStrip from '/src/components/MetricStrip.vue';
import RunLedger from '/src/components/RunLedger.vue';
import ChecklistPanel from '/src/components/ChecklistPanel.vue';
import EvidenceLedger from '/src/components/EvidenceLedger.vue';
import CompetitionPanel from '/src/components/CompetitionPanel.vue';
import AutomationPanel from '/src/components/AutomationPanel.vue';

export default {
  components: {
    StatusRail,
    MetricStrip,
    RunLedger,
    ChecklistPanel,
    EvidenceLedger,
    CompetitionPanel,
    AutomationPanel,
  },
  data() {
    return {
      data: window.contestOpsData,
      activeTab: 'runs',
      tabs: [
        { id: 'runs', label: 'Runs', icon: 'activity' },
        { id: 'checklist', label: 'Rules', icon: 'list-checks' },
        { id: 'evidence', label: 'Evidence', icon: 'folder-check' },
        { id: 'competition', label: 'Competition', icon: 'radar' },
        { id: 'automation', label: 'Automation', icon: 'bot' },
      ],
      flash: false,
    };
  },
  computed: {
    runs() {
      if (!this.flash) return this.data.runs;
      return [
        { time: 'now', name: 'Demo scenario queued', status: 'live' },
        ...this.data.runs,
      ];
    },
  },
  mounted() {
    this.refreshIcons();
  },
  updated() {
    this.refreshIcons();
  },
  methods: {
    flashRun() {
      this.flash = true;
      window.setTimeout(() => {
        this.flash = false;
      }, 3200);
    },
    refreshIcons() {
      this.$nextTick(() => {
        if (window.lucide) window.lucide.createIcons();
      });
    },
  },
};
</script>
