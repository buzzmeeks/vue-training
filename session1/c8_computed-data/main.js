var app = new Vue({
  el: '#app',
  data: {
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
