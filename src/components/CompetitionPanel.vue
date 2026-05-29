<template>
  <section class="competition-layout">
    <article class="panel">
      <header class="panel-header">
        <h2>Judging Score</h2>
        <button class="icon-button" title="Open scorecard">
          <i data-lucide="target"></i>
        </button>
      </header>
      <div class="score-list">
        <div v-for="item in data.scorecard" :key="item.name" class="score-row">
          <div>
            <strong>{{ item.name }}</strong>
            <span>{{ item.proof }}</span>
          </div>
          <span class="score-badge">{{ item.score }}</span>
        </div>
      </div>
    </article>

    <article class="panel">
      <header class="panel-header">
        <h2>Landscape</h2>
        <button class="icon-button" title="Review competitors">
          <i data-lucide="radar"></i>
        </button>
      </header>
      <div class="competitor-list">
        <div v-for="item in data.landscape" :key="item.category" class="competitor-row">
          <strong>{{ item.category }}</strong>
          <span>{{ item.angle }}</span>
        </div>
      </div>
    </article>

    <article class="panel wide competition-wide">
      <header class="panel-header">
        <h2>Wedge</h2>
        <button class="icon-button primary" title="Run proof sprint">
          <i data-lucide="zap"></i>
        </button>
      </header>
      <p class="competition-thesis">{{ data.thesis }}</p>
      <div class="moat-grid">
        <span v-for="item in data.moat" :key="item">{{ item }}</span>
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
