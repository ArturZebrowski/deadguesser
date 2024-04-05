const characters = [
	// "Deadpool" (2016)
	{
		name: 'Deadpool',
		gender: 'male',
		species: 'mutant',
		rangeType: 'ranged / melee',
		membership: 'X-Force',
		partMovie: 'Deadpool 1 / 2',
	},
	{
		name: 'Colossus',
		gender: 'male',
		species: 'mutant',
		rangeType: 'melee',
		membership: 'X-Men',
		partMovie: 'Deadpool 1 / 2',
	},
	{
		name: 'Vanessa',
		gender: 'female',
		species: 'human',
		rangeType: 'unknown',
		membership: 'none',
		partMovie: 'Deadpool 1 / 2',
	},
	{
		name: 'Negasonic',
		gender: 'female',
		species: 'mutant',
		rangeType: 'ranged',
		membership: 'X-Men',
		partMovie: 'Deadpool 1 / 2',
	},
	{
		name: 'Angel Dust',
		gender: 'female',
		species: 'mutant',
		rangeType: 'melee',
		membership: 'criminal',
		partMovie: 'Deadpool 1',
	},
	{
		name: 'Weasel',
		gender: 'male',
		species: 'human',
		rangeType: 'unknown',
		membership: 'none',
		partMovie: 'Deadpool 1 / 2',
	},
	{
		name: 'Dopinder',
		gender: 'male',
		species: 'human',
		rangeType: 'unknown',
		membership: 'none',
		partMovie: 'Deadpool 1 / 2',
	},
	{
		name: 'Ajax',
		gender: 'male',
		species: 'mutant',
		rangeType: 'melee',
		membership: 'criminal',
		partMovie: 'Deadpool 1',
	},
	{
		name: 'Blind AI',
		gender: 'female',
		species: 'human',
		rangeType: 'unknown',
		membership: 'none',
		partMovie: 'Deadpool 1 / 2',
	},

	// "Deadpool 2" (2018)
	{
		name: 'Juggernaut',
		gender: 'male',
		species: 'mutant',
		rangeType: 'melee',
		membership: 'criminal',
		partMovie: 'Deadpool 2',
	},
	{
		name: 'Cable',
		gender: 'male',
		species: 'mutant',
		rangeType: 'ranged / melee',
		membership: 'none',
		partMovie: 'Deadpool 2',
	},
	{
		name: 'Domino',
		gender: 'female',
		species: 'mutant',
		rangeType: 'melee',
		membership: 'X-Force',
		partMovie: 'Deadpool 2',
	},
	{
		name: 'Firefist',
		gender: 'male',
		species: 'mutant',
		rangeType: 'ranged',
		membership: 'criminal',
		partMovie: 'Deadpool 2',
	},
	{
		name: 'Vanisher',
		gender: 'male',
		species: 'mutant',
		rangeType: 'unknown',
		membership: 'X-force',
		partMovie: 'Deadpool 2',
	},
	{
		name: 'Yukio',
		gender: 'female',
		species: 'mutant',
		rangeType: 'ranged / melee',
		membership: 'X-Men',
		partMovie: 'Deadpool 2',
	},
	{
		name: 'Shatterstar',
		gender: 'male',
		species: 'mutant',
		rangeType: 'unknown',
		membership: 'X-Force',
		partMovie: 'Deadpool 2',
	},
	{
		name: 'Zeitgeist',
		gender: 'male',
		species: 'mutant',
		rangeType: 'melee',
		membership: 'X-Force',
		partMovie: 'Deadpool 2',
	},
	{
		name: 'Black Tom Cassidy',
		gender: 'male',
		species: 'mutant',
		rangeType: 'unknown',
		membership: 'criminal',
		partMovie: 'Deadpool 2',
	},
	{
		name: 'Bedlam',
		gender: 'male',
		species: 'mutant',
		rangeType: 'ranged',
		membership: 'X-Force',
		partMovie: 'Deadpool 2',
	},
	{
		name: 'Peter',
		gender: 'male',
		species: 'human',
		rangeType: 'unknown',
		membership: 'X-Force',
		partMovie: 'Deadpool 2',
	},
]

// Variables
const guessBtn = document.querySelector('.guess__nickname-btn')
const guessInput = document.querySelector('.guess__nickname-input')
const mainElement = document.querySelector('main')
const notFoundAlert = document.querySelector('.guess__info-text--second')
const gameHeader = document.querySelector('.game__header')
const wantedIndex = Math.floor(Math.random() * characters.length)

const footerYear = document.querySelector('.footer__year')

console.log(characters[wantedIndex].name)

// Function to display character details
const displayCorrectCharacter = character => {
	const { name, gender, species, rangeType, membership, partMovie } = character

	const characterRow = document.createElement('div')
	characterRow.classList.add('game__row')

	const cells = [
		{ value: name },
		{ value: gender, className: 'true' },
		{ value: species, className: 'true' },
		{ value: Array.isArray(rangeType) ? rangeType.join(' / ') : rangeType, className: 'true' },
		{ value: membership, className: 'true' },
		{ value: Array.isArray(partMovie) ? partMovie.join(' / ') : partMovie, className: 'true' },
	]

	cells.forEach(cell => {
		const cellElement = document.createElement('div')
		cellElement.textContent = cell.value
		cellElement.classList.add('game__cell', cell.className)
		characterRow.appendChild(cellElement)
	})

	mainElement.appendChild(characterRow)
}

class DisplayCharacter {
	constructor(character, wantedIndex, characters) {
		this.character = character
		this.wantedCharacter = characters[wantedIndex]
	}

	display() {
		const { name, gender, species, rangeType, membership, partMovie } = this.character
		const {
			gender: wantedGender,
			species: wantedSpecies,
			rangeType: wantedRangeType,
			partMovie: wantedPartMovie,
		} = this.wantedCharacter

		const genderClass = gender === wantedGender ? 'true' : 'false'
		const speciesClass = species === wantedSpecies ? 'true' : 'false'

		let rangeTypeClass
		if (typeof rangeType === 'string' && wantedRangeType) {
			const rangeTypes = rangeType.split(' / ')
			const wantedRangeTypes = wantedRangeType.split(' / ')

			const allTypesMatch =
				rangeTypes.every(type => wantedRangeTypes.includes(type)) &&
				wantedRangeTypes.every(type => rangeType.includes(type))

			if (allTypesMatch) {
				rangeTypeClass = 'true'
			} else if (
				rangeTypes.some(type => type.includes('ranged') && wantedRangeTypes.some(type => type.includes('ranged'))) ||
				rangeTypes.some(type => type.includes('melee') && wantedRangeTypes.some(type => type.includes('melee')))
			) {
				rangeTypeClass = 'nearly'
			} else {
				rangeTypeClass = 'false'
			}
		} else {
			console.log('error')
			console.log(wantedRangeType)
			console.log(rangeType)
		}

		const membershipClass = membership === this.wantedCharacter.membership ? 'true' : 'false'

		let partMovieClass
		if (typeof partMovie === 'string' && wantedPartMovie) {
			const partMovies = partMovie.split(' / ')
			const wantedPartMovies = wantedPartMovie.split(' / ')

			const allMoviesMatch =
				partMovies.every(movie => wantedPartMovies.includes(movie)) &&
				wantedPartMovies.every(movie => partMovies.includes(movie))

			if (allMoviesMatch) {
				partMovieClass = 'true'
			} else if (
				partMovies.some(movie => movie.includes('1') && wantedPartMovies.some(movie => movie.includes('1'))) ||
				partMovies.some(movie => movie.includes('2') && wantedPartMovies.some(movie => movie.includes('2')))
			) {
				partMovieClass = 'nearly'
			} else {
				partMovieClass = 'false'
			}
		} else {
			console.log('error')
		}

		const characterRow = document.createElement('div')
		characterRow.classList.add('game__row')

		const cells = [
			{ value: name },
			{ value: gender, className: genderClass },
			{ value: species, className: speciesClass },
			{ value: Array.isArray(rangeType) ? rangeType.join(' / ') : rangeType, className: rangeTypeClass },
			{ value: membership, className: membershipClass },
			{ value: Array.isArray(partMovie) ? partMovie.join(' / ') : partMovie, className: partMovieClass },
		]

		cells.forEach(cell => {
			const cellElement = document.createElement('div')
			cellElement.textContent = cell.value
			cellElement.classList.add('game__cell', cell.className)
			characterRow.appendChild(cellElement)
		})

		mainElement.appendChild(characterRow)
	}
}

const clearInputField = () => {
	guessInput.value = ''
}

const congratulateWinner = () => {
	guessInput.disabled = true
	guessBtn.disabled = true
	const congratsMessage = document.createElement('div')
	congratsMessage.textContent =
		'Congratulations! You guessed the correct character! This page will refresh in 5 seconds.'
	congratsMessage.classList.add('congratulations')
	mainElement.appendChild(congratsMessage)

	let countDown = 5 // 5sec

	const countdownTimer = setInterval(() => {
		countDown--
		congratsMessage.textContent = `Congratulations! You guessed the correct character! This page will refresh in ${countDown} seconds.`
		if (countDown === 0) {
			clearInterval(countdownTimer)
			location.reload()
		}
	}, 1000) // 1 sec
}

// Function to find character
const findCharacter = () => {
	const characterName = guessInput.value.trim()
	const character = characters.find(char => char.name.toLowerCase() === characterName.toLowerCase())

	if (character === characters[wantedIndex]) {
		displayCorrectCharacter(character)
		congratulateWinner()
		gameHeader.style.opacity = '1'
		notFoundAlert.classList.remove('active')
	} else if (character !== characters[wantedIndex] && characters.includes(character)) {
		const displayChar = new DisplayCharacter(character, wantedIndex, characters)
		displayChar.display()
		gameHeader.style.opacity = '1'
		notFoundAlert.classList.remove('active')
	} else if (!characters.includes(character)) {
		notFoundAlert.classList.add('active')
	}

	clearInputField()
}

//footer*
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
//*

// Event listener for button click
guessBtn.addEventListener('click', findCharacter)

// Event listener for Enter key press
guessInput.addEventListener('keydown', event => {
	if (event.key === 'Enter') {
		findCharacter()
	}
})
