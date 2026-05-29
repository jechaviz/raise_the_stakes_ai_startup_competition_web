<template>
  <section class="competition-command-center" aria-labelledby="competition-title">
    <article class="panel competition-hero">
      <div class="competition-hero-copy">
        <p class="eyebrow">Competition-ready demo</p>
        <h2 id="competition-title">{{ data.headline }}</h2>
        <p>{{ data.thesis }}</p>
        <div class="hero-proof-strip" aria-label="Defensibility signals">
          <span v-for="item in data.moat" :key="item">{{ item }}</span>
        </div>
      </div>
      <div class="hero-stat-stack" aria-label="Competition operating metrics">
        <div v-for="item in data.roi.slice(0, 3)" :key="item.label" class="hero-stat">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
          <small>{{ item.detail }}</small>
        </div>
      </div>
    </article>

    <article class="panel head-to-head-panel">
      <header class="panel-header">
        <div>
          <p class="competition-kicker">Head-to-head</p>
          <h2>Manual founder ops vs ContestOps AI</h2>
        </div>
        <button class="icon-button" title="Review head-to-head">
          <i data-lucide="swords"></i>
        </button>
      </header>
      <div class="comparison-table" role="table" aria-label="Head-to-head comparison">
        <div class="comparison-row comparison-header" role="row">
          <span role="columnheader">Arena</span>
          <span role="columnheader">Generic process</span>
          <span role="columnheader">ContestOps AI</span>
          <span role="columnheader">Judge signal</span>
        </div>
        <div v-for="item in data.headToHead" :key="item.dimension" class="comparison-row" role="row">
          <strong role="cell">{{ item.dimension }}</strong>
          <span role="cell">{{ item.manual }}</span>
          <span role="cell" class="contest-edge">{{ item.contestOps }}</span>
          <span role="cell" class="signal-cell">{{ item.edge }}</span>
        </div>
      </div>
    </article>

    <article class="panel judge-score-panel">
      <header class="panel-header">
        <div>
          <p class="competition-kicker">Judge score</p>
          <h2>What wins the room</h2>
        </div>
        <button class="icon-button" title="Open scorecard">
          <i data-lucide="radar"></i>
        </button>
      </header>
      <div class="score-list score-list-compact">
        <div v-for="item in data.scorecard" :key="item.name" class="score-row">
          <div>
            <strong>{{ item.name }}</strong>
            <span>{{ item.proof }}</span>
          </div>
          <span class="score-badge">{{ item.score }}</span>
        </div>
      </div>
    </article>

    <article class="panel proof-sprint-panel">
      <header class="panel-header">
        <div>
          <p class="competition-kicker">Proof sprint</p>
          <h2>72-hour proof sprint</h2>
        </div>
        <button class="icon-button primary" title="Run proof sprint">
          <i data-lucide="zap"></i>
        </button>
      </header>
      <ol class="sprint-list">
        <li v-for="step in data.proofSprint" :key="step.window">
          <span class="sprint-window">{{ step.window }}</span>
          <strong>{{ step.action }}</strong>
          <span>{{ step.output }}</span>
          <small>{{ step.signal }}</small>
        </li>
      </ol>
    </article>

    <article class="panel roi-panel">
      <header class="panel-header">
        <div>
          <p class="competition-kicker">ROI and time saved</p>
          <h2>Founder hours become evidence</h2>
        </div>
        <button class="icon-button" title="Review ROI">
          <i data-lucide="circle-dollar-sign"></i>
        </button>
      </header>
      <div class="roi-grid">
        <div v-for="item in data.roi" :key="item.label" class="roi-item">
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
          <small>{{ item.detail }}</small>
        </div>
      </div>
    </article>

    <article class="panel objections-panel">
      <header class="panel-header">
        <div>
          <p class="competition-kicker">Judge objections</p>
          <h2>Risks answered before Q&A</h2>
        </div>
        <button class="icon-button" title="Review objections">
          <i data-lucide="message-square-warning"></i>
        </button>
      </header>
      <div class="objection-list">
        <div v-for="item in data.objections" :key="item.objection" class="objection-row">
          <span class="objection-question">{{ item.objection }}</span>
          <strong>{{ item.answer }}</strong>
          <span>{{ item.proof }}</span>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true },
  },
};
</script>
