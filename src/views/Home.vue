<template>
  <div class="home">
    <section class="hero is-medium is-primary">
      <div class="hero-body">
      </div>
    </section>
    <section class="background-triangle"></section>
        <KinesisContainer>
          <shapes :height="2400" class="shapes" />
          <!--Content-->
          <div class="main-content">
            <section class="flashcard-wrapper">
              <FlashCardLogo />
            </section>
            <section class="section practice-section columns is-multiline">
              <div class="column is-6 content">
                <h1 class="section-title">
                  Practice. Make Perfect.
                </h1>
                <p class="section-description">
                  FlashME uses spaced repetition to make sure that you remember everything. Congrats, you now have super powers.
                </p>
              </div>
              <div class="column is-6">
                <b-datepicker
                    inline 
                    :unselectable-days-of-week="[0, 6]">
                </b-datepicker>
              </div>

              <div class="progress-bar column is-12">

              </div>

              <div class="column is-6 content">
                <h1 class="section-title">
                  Beat the forgetting curve.
                </h1>
                <p class="section-description">
                  FlashME uses spaced repetition to make sure that you remember everything. Congrats, you now have super powers.
                </p>
              </div>
              <div class="column is-6">
                <b-datepicker
                    inline 
                    :unselectable-days-of-week="[0, 6]">
                </b-datepicker>
              </div>

              <div class="column is-12 content">
                <h1 class="section-title">
                  Backed by psychological experts
                </h1>
              </div>
              <div class="column columns is-12 content">
                <a href="https://doi.org/10.1037/a0019902" class="column is-4">
                  <box-3-d :strength="20" class="content">
                    <div class="content-wrapper">
                    <h4 class="title is-4">Butler, 2010</h4>
                    <p class="paragraph">Repeated testing produces superior transfer of learning relative to repeated studying.</p>
                    </div>
                  </box-3-d>
                </a>
                <a href="https://doi.org/10.1111%2Fj.1467-9280.2009.02325.x" class="column is-4">
                  <box-3-d :strength="20" class="content">
                    <div class="content-wrapper">
                    <h4 class="title is-4">Carpenter et. al., 2012</h4>
                    <p class="paragraph">Using spacing to enhance diverse forms of learning: Review of recent research and implications for instruction. </p>
                    </div>
                  </box-3-d>
                </a>
                <a class="column is-4" href="https://doi.org/10.1111%2Fj.1467-9280.2009.02325.x">
                  <box-3-d  :strength="20" class="content">
                    <div class="content-wrapper">
                    <h4 class="title is-4">McDaniel et. al., 2009</h4>
                    <p class="paragraph">The read-recite-review study strategy: Effective and portable.</p>
                    </div>
                  </box-3-d>
                </a>
              </div>
            </section>
          </div>
        <footer class="footer  has-background-primary has-text-white">
        <div class="content has-text-centered has-text-primary-light">
          <p>
            <strong class="has-text-white">FLASHME.</strong> Copyright © 2021. Made during HackUCI 2021.
          </p>
        </div>
      </footer>
        </KinesisContainer>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    background-color: $primary-invert;
  }

  .shapes {
    top: -50rem;
  }

  .main-content {
    max-width: 950px;
    padding: 20px;
    position: relative;
    top: -25rem;
    margin: 0 auto;
    z-index: 2;
    .content-wrapper { 
      padding: 20px;
    }
  }

  .footer {
    z-index: 2;
  }

  .background-triangle {
    width: 0;
    height: 0;
    border-top: 300px solid $primary;
    border-right: 120vw solid transparent;
  }

  .content {
    text-align: left;
  }

  .content .section-title {
    font-size: 4rem;
    font-weight: 800;
    color: $primary;
  }

  .content .section-description {
    font-size: 24px;
    color: $primary-dark;
  }
</style>

<script>
import { KinesisContainer } from 'vue-kinesis'
import Box3D from '../components/Box3D.vue'
import FlashCardLogo from '../components/FlashCardLogo.vue'
import Shapes from '../components/Shapes.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    KinesisContainer, FlashCardLogo, Box3D, Shapes,
  },
  computed: {
  }
}
</script>
