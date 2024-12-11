import { useState } from 'react';
import Button from './components/button/Button';
import { USERS } from './constants/usersInfo';

const App = () => {
	const [counter, setCounter] = useState(0);
	const [incrementValue, setIncrementValue] = useState(1);
	const [profile, setProfile] = useState(0);
	const lastProfile = profile === USERS.length - 1;
	const firstProfile = profile === 0;

	return (
		<>
			<h2>Ejercicio1</h2>
			<h1>{counter}</h1>
			<p>Counter Settings</p>
			<Button
				action={() => decrementCounter(counter, setCounter, incrementValue)}
			>
				- {incrementValue}
			</Button>
			<Button action={() => resetCounter(counter, setCounter)}>Reset</Button>
			<Button
				action={() => incrementCounter(counter, setCounter, incrementValue)}
			>
				+ {incrementValue}
			</Button>
			<p>Increment Settings(+ {incrementValue})</p>
			<Button action={() => increment(incrementValue, setIncrementValue)}>
				+1
			</Button>
			<Button action={() => reset(incrementValue, setIncrementValue)}>
				Reset
			</Button>
			<Button action={() => decrement(incrementValue, setIncrementValue)}>
				-1
			</Button>

			<h2>Ejercicio2</h2>
			<img src={USERS[profile].profileImage} alt='' />
			<h1>Name: {USERS[profile].name}</h1>
			<h3>Username: {USERS[profile].username}</h3>
			<h3>Email: {USERS[profile].email}</h3>
			<Button
				action={() => previus(profile, setProfile)}
				disabled={firstProfile}
			>
				Previus
			</Button>
			<Button action={() => next(profile, setProfile)} disabled={lastProfile}>
				Next
			</Button>
		</>
	);
};

export default App;

const next = (profile, setProfile) => {
	if (profile < USERS.length - 1) {
		setProfile(profile + 1); // Avanza al siguiente perfil
	} else {
		setProfile(0); // Si estamos en el último, vuelve al primero
	}
};

const previus = (profile, setProfile) => {
	if (profile > 0) {
		setProfile(profile - 1); // Retrocede al perfil anterior
	} else {
		setProfile(USERS.length - 1); // Si estamos en el primero, va al último
	}
};

/*counter*/
const incrementCounter = (counter, setCounter, incrementValue) => {
	setCounter(counter + incrementValue);
};

const decrementCounter = (counter, setCounter, incrementValue) => {
	setCounter(counter - incrementValue);
};

const resetCounter = (counter, setCounter) => {
	setCounter(0);
};

/*increment*/

const increment = (incrementValue, setIncrementValue) => {
	setIncrementValue(incrementValue + 1);
};

const decrement = (incrementValue, setIncrementValue) => {
	setIncrementValue(incrementValue - 1);
};

const reset = (incrementValue, setIncrementValue) => {
	setIncrementValue(1);
};
