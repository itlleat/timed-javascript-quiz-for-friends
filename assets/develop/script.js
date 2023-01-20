// Add questions and answers

var myQuestions = [
	{
		question: "What section of HTML is the location for linking JavaScript?",
		answers: {
			a: 'Inside the head tags',
			b: 'In the body, before the header',
			c: 'Right before the closing of the body tags and in some cases the head',
            d: 'After the closing HTML tag'
		},
		correctAnswer: 'c'
	},
    {
		question: "What is the correct syntax for referring to an external script called dogs.js?",
		answers: {
			a: '<script href="dogs.js">',
			b: '<script id="dogs.js">',
			c: '<script class="dogs.js">',
            d: '<script src="dogs.js">'
		},
		correctAnswer: 'd'
	},
    {
		question: "What is the correct way to write an array?",
		answers: {
			a: 'var dogs = "fluffy", "scruffy", "cookie"',
			b: 'var dogs = ["fluffy", "scruffy", "cookie"]',
			c: 'var dogs = fluffy, scruffy, cookie',
            d: 'var dogs = {"fluffy", "scruffy", "cookie"}'
		},
		correctAnswer: 'c'
	},
    {
		question: "When would we use Math.random",
		answers: {
			a: 'To select a seed that is less than 0 in a random number generation algorithm',
			b: 'To select the initial seed to a random number generation algorithm',
			c: 'To select the initial seed to a fixed number generation algorithm',
            d: 'To select the node to a random number generation algorithm'
		},
		correctAnswer: 'b'
	},
    {
		question: "Which event occurs when the user clicks on an HTML element?",
		answers: {
			a: 'event',
			b: 'clickyClick',
			c: 'Math.click',
            d: 'onclick  '
		},
		correctAnswer: 'd'
	},
    {
		question: "How do you declare a JavaScript variable?",
		answers: {
			a: 'var carName;',
			b: 'var = Carname',
			c: 'var CarName',
            d: 'var === carName'
		},
		correctAnswer: 'a'
	},
    {
		question: "What will the following code return: Boolean(6 > 9)",
		answers: {
			a: 'undefined',
			b: 'error',
			c: 'false',
            d: 'true'
		},
		correctAnswer: 'c'
	},
]