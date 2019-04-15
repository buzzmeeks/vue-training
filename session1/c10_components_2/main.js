Vue.component('hero-info', {
  props: {
    name: {
      type: String,
      required: true
    },
    realName: {
      type: String,
      required: true
    },
    colors: {
      type: Array,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    appearance: {
      type: Object,
      required: true
    }
  },
  template: `
  <div class="hero-info">
    <div class="hero-title">
      <div class="hero-name">{{ name }}</div>
      <div
        v-for="color in colors"
        class="hero-color"
        :style="{ backgroundColor: color }"
      ></div>
    </div>

    <div class="real-name">({{ realName }})</div>

    <button @click="toggleBio">
      Toggle bio
    </button>
    <p v-if="showDescription">{{ description }}</p>
    <ul v-else>
      <li v-for="(detail, key) in appearance">
        {{ key }} : {{ detail }}
      </li>
    </ul>
  </div>
  `,
  data() {
    return {
      showDescription: false
    }
  },
  methods: {
    toggleBio() {
      this.showDescription = !this.showDescription
    }
  }
})

Vue.component('hero', {
  template: `
    <div class="hero" :class="{'is-hero': !villain, 'is-villain': villain}">
      <div class="hero-image">
        <img :src="image" :title="name" />
      </div>

      <hero-info 
        :name="name"
        :realName="realName"
        :colors="colors"
        :description="description"
        :appearance="appearance">
      </hero-info>

      <div class="hero-films">
        <ul>
          <li v-for="film in films">{{ film }}</li>
        </ul>
      </div>
    </div>`,
  data() {
    return {
      name: 'Spider-Man',
      firstName: 'Peter',
      lastName: 'Parker',
      image: '../../assets/images/spiderman.jpg',
      description:
        'Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.',
      showDescription: false,
      films: [
        'The Amazing Spider-Man (1977)',
        'Spider-Man Strikes Back (1979)',
        'Spider-Man (2002)',
        'Spider-Man 2 (2004)',
        'Spider-Man 3 (2007)',
        'The Amazing Spider-Man (2012)',
        'The Amazing Spider-Man 2 (2014)',
        'Captain America: Civil War (2016)',
        'Spider-Man: Homecoming (2017)',
        'Avengers: Infinity War (2018)',
        'Avengers: Endgame (2019)',
        'Spider-Man: Far From Home (2019)'
      ],
      appearance: {
        gender: 'Male',
        race: 'Human',
        height: '178cm',
        weight: '74kg',
        eye: 'hazel',
        hair: 'brown'
      },
      colors: ['#040531', '#C51220'],
      villain: false
    }
  },
  computed: {
    realName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
})

const app = new Vue({
  el: '#app',
  data: {}
})
