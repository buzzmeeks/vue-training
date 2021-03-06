Vue.component('hero-component', {
  template: `
    <div class="hero" :class="{'is-hero': !hero.villain, 'is-villain': hero.villain}">
      <div class="hero-image">
        <img :src="hero.image" :title="hero.name" />
      </div>

      <div class="hero-info">
        <div class="hero-title">
          <div class="hero-name">{{ hero.name }}</div>
          <div
            v-for="color in hero.colors"
            class="hero-color"
            :style="{ backgroundColor: color }"
          ></div>
        </div>

        <div class="real-name">({{ realName }})</div>

        <button @click="toggleBio">
          Toggle bio
        </button>
        <p v-if="showDescription">{{ hero.description }}</p>
        <ul v-else>
          <li v-for="(detail, key) in hero.appearance">
            {{ key }} : {{ detail }}
          </li>
        </ul>
      </div>

      <div class="hero-films">
        <ul>
          <li v-for="film in hero.films">{{ film }}</li>
        </ul>
      </div>
    </div>`,
  props: {
    hero: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDescription: false
    }
  },
  computed: {
    realName() {
      return `${this.firstName} ${this.lastName}`
    }
  },
  methods: {
    toggleBio() {
      this.showDescription = !this.showDescription
    }
  }
})

const app = new Vue({
  el: '#app',
  data: {
    heroes: [
      {
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
      },
      {
        name: 'Loki',
        firstName: 'Loki',
        lastName: 'Laufeyson',
        image: '../../assets/images/loki.jpg',
        description:
          "God of Mischief and brother to Thor, Loki's tricks and schemes wreak havoc across the realms.",
        films: [
          'Thor (2011)',
          'Avengers (2012)',
          'Thor: The Dark World (2013)',
          'Avengers: Age of Ultron (2015)',
          'Thor: Ragnarok (2017)',
          'Avengers: Infinity War (2018)'
        ],
        appearance: {
          gender: 'Male',
          race: 'Asgardian',
          height: '193cm',
          weight: '236kg',
          eye: 'green',
          hair: 'black'
        },
        colors: ['#000000', '#ECBA3D', '#436228'],
        villain: true
      },
      {
        name: 'Hulk',
        firstName: 'Bruce',
        lastName: 'Banner',
        image: '../../assets/images/hulk.jpg',
        description:
          'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.',
        films: [
          'Hulk (2003)',
          'The Incredible Hulk (2008)',
          'Avengers (2012)',
          'Iron Man 3 (2013)',
          'Avengers: Age of Ultron (2015)',
          'Thor: Ragnarok (2017)',
          'Avengers: Infinity War (2018)',
          'Avengers: Endgame (2019)'
        ],
        appearance: {
          gender: 'Male',
          race: 'Human/Radiation',
          height: '244cm',
          weight: '630kg',
          eye: 'green',
          hair: 'green'
        },
        colors: ['#A2CD48', '#875094'],
        villain: false
      }
    ]
  }
})
