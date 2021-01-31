<template>
  <div class="home">
    <section class="hero is-medium is-primary">
      <div class="hero-body">
      </div>
    </section>
        <KinesisContainer>
          <KinesisElement>
            <!--Triangles and shit-->
          </KinesisElement>
          <!--Content-->
          <div class="main-content">
            <section class="flashcard-wrapper">
              <FlashCardLogo />
            </section>
            <section class="section practice-section columns">
              <div class="column is-6 content">
                <h1 class="title section-title">
                  Practice. Perfect.
                </h1>
                <p class="section-description">
                  FlashME uses spaced repetition to make sure that you remember everything. Congrats, you now have super powers.
                </p>
              </div>
              <div class="column is-6">
                <b-field></b-field>
              </div>
            </section>
          </div>
        </KinesisContainer>
  </div>
</template>

<style lang="scss" scoped>
  .main-content {
    max-width: 750px;
    padding: 20px;
  }
</style>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import FlashCardLogo from '../components/FlashCardLogo.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    KinesisContainer, KinesisElement, FlashCardLogo
  }
}
</script>
