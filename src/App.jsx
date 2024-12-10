import { useState } from 'react';
import Button from './components/button/Button';
import { USERS } from './constants/usersInfo';

const App = () => {
	const [counter, setCounter] = useState(0);
	const [incrementValue, setIncrementValue] = useState(1);
	const [profile, setProfile] = useState(0);

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
			<img src={USERS[0].profileImage} alt='' />
			<h1>Name: {USERS[0].name}</h1>
			<h3>Username: {USERS[0].username}</h3>
			<h3>Email: {USERS[0].email}</h3>
			<Button>Previus</Button>
			<Button>Next</Button>
		</>
	);
};

export default App;

const next = (profile, setProfile) => {
	setProfile();
};

const previus = (profile, setProfile) => {};

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
