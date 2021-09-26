<template lang="pug">
  #app
    #bg
    #content
      .container
        #card.card
          .card-bg
          .card-content
            section#header
              h1 Fantasy Name Generator
            section#input
              .row
                .col-12.col-sm-3.col-label
                  h5 Input Text
                .col-12.col-sm-4.col-input
                  input#inputText(type="text" name="inputText" placeholder="Input" v-model="config.state.input")
                .col-12.col-sm-5.col-info
                  span(v-if="!config.state.input") optional
                  span(v-else) {{ config.state.input }}
              .row
                .col-12.col-sm-3.col-label
                  h5 Randomness
                .col-12.col-sm-4.col-input
                  //span#tempText {{ Number(config.state.temperature).toFixed(2) }}
                  input#inputTemp(type="range" name="inputTemp" placeholder="Temperature" min="0" max="1" step="0.01" v-model="config.state.temperature")
                .col-12.col-sm-5.col-info
                  span {{ Math.round(config.state.temperature * 100) }}%
              .row
                .col-12.col-sm-3.col-label
                  h5 Length
                .col-12.col-sm-4.col-input
                  input#inputMinLength(type="number" name="inputMinLength" placeholder="Min Length" min="3" :max="config.state.max_length" step="1" v-model="config.state.min_length")
                  input#inputMaxLength(type="number" name="inputMaxLength" placeholder="Max Length" :min="config.state.min_length" max="15" step="1"  v-model="config.state.max_length")
                .col-12.col-sm-5.col-info
                  span(v-if="config.state.min_length == config.state.max_length") exactly {{ config.state.min_length }} chars
                  span(v-else) between {{ config.state.min_length }} and {{ config.state.max_length }} chars
              .row
                .col-12.col-sm-3.col-label
                  h5 Status
                .col-12.col-sm-4.col-input
                  .status(v-if="status == 0")
                    .status-sign.status-sign-idle
                    span idle
                  .status(v-else)
                    .status-sign.status-sign-working
                    span working
            section#buttons
              .row
                .col-0.col-sm-3
                  //
                .col-12.col-sm-4
                  button(@click="generate" :disabled="status !== 0") Generate
                  button(@click="reset" :disabled="status !== 0") Reset
            section#output
              .row
                .col-12.col-md-6
                  .output
                    h5 Results
                    .output-wrapper
                      .friendly(v-if="!status && !output.length")
                        span Nothing generated yet
                      .output-list(v-else)
                        .output-item(v-for="(o, index) in getOutput" :key="index")
                          span.output-text {{ o ? o : '...' }}
                .col-12.col-md-6
                  .saved
                    h5 Saved
                    .saved-wrapper
                      .friendly(v-if="!saved.length")
                        span Nothing saved yet
                      .saved-list(v-else)
                        .saved-item(v-for="(s, index) in saved" :key="index")
                          span.saved-text {{ s }}
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  head: {
    script: [
      { src: 'https://unpkg.com/ml5@0.6.1/dist/ml5.min.js', type: 'text/javascript' },
    ]
  },
  data () {
    return {
      rnn: null,
      status: 1, // 0 ready, 1 loading
      output: [],
      saved: [],
      config: {
        init: {
          input: '',
          temperature: 0.5,
          min_length: 4,
          max_length: 12,
          cicles: 8,
        },
        state: {
          input: '',
          temperature: 0,
          min_length: 0,
          max_length: 0,
          cicles: 0,
          race: '',
          gender: '',
        },
        query: {
          input: '',
          temperature: 0,
          min_length: 0,
          max_length: 0,
          cicles: 0,
          race: '',
          gender: '',
        },
      },
      race: {
        human: {
          name: 'human',
          model: 'yob1900',
          gender: {
            male: 'male',
            female: 'female',
          }
        }
      }
    }
  },
  mounted () {
    this.copyConfig('init', 'state');
    //console.log('ml5 version:', ml5.version);
    this.loadModel('yob1900f');
  },
  methods: {
    loadModel (model) {
      this.status = 1;
      this.rnn = ml5.charRNN('/models/' + model, () => {
        console.log('model \'' + model + '\' loaded');
        this.status = 0;
      });
    },
    copyConfig (from, to) {
      for (let key of Object.keys(this.config[from])) {
        this.config[to][key] = this.config[from][key];
      }
    },
    async generate () {
      this.status = 1;

      this.copyConfig('state', 'query');
      this.output = [];

      for (let c = 0; c < this.config.query.cicles; c++) {
        let duplicate_break_count = 0;
        const duplicate_break_max = 10;

        while (duplicate_break_count < duplicate_break_max) {
          let output = await this.single();

          if (!this.output.includes(output)) {
            this.output.push(output);
            duplicate_break_count = 0;
            break;
          }

          duplicate_break_count++;
        }
      }

      let output_length = this.output.length;
      if (output_length < this.config.query.cicles) {
        //console.log('output: ' + output_length, 'cicles: ' + this.config.query.cicles);
        for (let i = output_length; i < this.config.query.cicles; i++) {
          this.output.push('-');
        }
      }

      console.log('model generated ' + output_length + ' entries');
      this.status = 0;
    },
    async single () {
      let current = '';
      let output = '';
      let char_break_count = 0;
      const char_break_max = 10;
      const feed_length = 1;
      let running = true;
      const chars = 'abcdefghijklmnopqrstuvwxyz';

      if (this.config.query.input.length >= feed_length) {
        current = this.config.query.input.slice(-1).toUpperCase();
        //console.log('input char', current);
        output += this.config.query.input;
      } else {
        current = chars.charAt(Math.floor(Math.random() * chars.length)).toUpperCase();
        //console.log('random input char', current);
        output += current;
      }

      await this.rnn.feed(current);

      while (running) {
        const next = await this.predict();

        if (!chars.includes(next.toLowerCase())) {
          if (output.length < this.config.query.min_length && char_break_count < char_break_max) {
            await this.rnn.feed(current);
            char_break_count++;
            continue;
          }

          running = false;
          continue;
        }

        current = next;
        output += next;
        char_break_count = 0;

        if (output.length >= this.config.query.max_length) {
          running = false;
        }
      }

      output = output.charAt(0).toUpperCase() + output.slice(1).toLowerCase();

      //console.log('output:', output);
      return output;
    },
    async predict () {
      const next = await this.rnn.predict( Number(this.config.query.temperature) );
      //console.log('predicted char:', next.sample);
      await this.rnn.feed(next.sample);
      return next.sample;
    },
    reset () {
      this.status = 1;
      this.rnn.reset();
      this.output = [];
      this.copyConfig('init', 'state');
      this.copyConfig('state', 'query');
      console.log('model resetted');
      this.status = 0;
    }
  },
  computed: {
    getOutput () {
      return [...this.output, ...new Array(this.config.query.cicles)].splice(0, this.config.query.cicles);
    }
  },
})
</script>

<style lang="sass" scoped>
#app
  width: 100vw
  height: 100vh
  margin: 0
  padding: 0
  color: white
  //position: relative
  overflow: hidden auto
  #bg
    background: url('/bg.jpg') no-repeat center
    background-size: cover
    filter: grayscale(0.8) brightness(0.8) contrast(1.6)
    box-shadow: 0 0 min(10vh, 10vw) rgba(0, 0, 0, 0.5) inset
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: -1
  #content
    padding: 10vh 0 2rem 0
    display: flex
    flex-direction: column
    justify-content: center
    align-items: stretch
    .container
      max-width: 992px
      #card.card
        padding: 1rem 2rem
        position: relative
        border: 0.5rem ridge rgba(0, 0, 0, 0.9)
        border-radius: 0.5rem
        .card-bg
          background: url('/paper.jpg') no-repeat top
          background-size: cover
          //filter: grayscale(1) brightness(1) invert(1)
          filter: grayscale(0.75) brightness(0.25)
          box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25) inset
          opacity: 1
          position: absolute
          top: 0
          right: 0
          bottom: 0
          left: 0
          z-index: -1
        .card-content
          section#header
            padding: 0.5rem 0 2rem 0
            text-align: center
            text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.75)
            h1
              margin: 0
              padding: 0
          section#input
            text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.75)
            display: flex
            flex-direction: column
            .row
              padding: 0.25rem 0
              align-items: center
              .col-label
                h5
                  margin: 0
                  padding: 0
              .col-input
                display: flex
                flex-direction: row
                align-items: center
                #tempText
                  width: 2rem
                  margin: 0 0.5rem 0 0
              .col-info
                color: #B2B2B2
            .status
              display: flex
              flex-direction: row
              align-items: center
              .status-sign
                height: 1rem
                width: 1rem
                margin: 0 0.25rem
                border-radius: 50%
                box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.4) inset
                &.status-sign-idle
                  background-color: var(--bs-success)
                &.status-sign-working
                  background-color: var(--bs-warning)
          section#buttons
            padding: 1rem 0
          section#output
            margin: 1rem 0
            .output
              .friendly
                padding: 1rem
                color: #B2B2B2
                font-style: italic
              .output-wrapper
                padding: 0.25rem 0.375rem
                background: rgba(0, 0, 0, 0.2)
                border-radius: 0.5rem
                .output-list
                  .output-item
                    margin: 0.125rem 0
                    padding: 0.75rem 1rem
                    //background: rgba(0, 0, 0, 0.1)
                    border-radius: 0.5rem
                    &:hover
                      background: rgba(0, 0, 0, 0.2)
                    .output-text
                      font-size: 1.25rem
                      font-weight: normal
            .saved
              .friendly
                padding: 1rem
                color: #B2B2B2
                font-style: italic
              .saved-wrapper
                padding: 0.25rem 0.375rem
                background: rgba(0, 0, 0, 0.2)
                border-radius: 0.5rem
                .saved-list
                  .saved-item
                    margin: 0.125rem 0
                    padding: 0.75rem 1rem
                    //background: rgba(0, 0, 0, 0.1)
                    border-radius: 0.5rem
                    &:hover
                      background: rgba(0, 0, 0, 0.2)
                    .saved-text
                      font-size: 1.25rem
                      font-weight: normal
</style>
