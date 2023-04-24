const authorsEl = document.querySelectorAll('.author');
const container = document.querySelector('.testimonials-container');
const nameEl = document.querySelector('.name');
const textEl = document.querySelector('.text');

const testimonials = [{
	text: 'Well, first of all, I think you are a determined person, that you always have as a point to reach, and do whatever it takes to fulfill it, you do not deviate, you are a very good person, you really do not like people to be wrong with each other. They always look for a solution to everything, we have a few things.',
	name: 'Jaime Sanchez',
	color: 'rgba(232, 59, 50,1.0)'
},{

	text: 'You are a very intelligent, determined, fun person, with you it does not have a bad time at any time, you know how to listen, you are dedicated to what you like, you know how to make others feel good, you are sincere, you are beautiful both physically and personally.',
	name: 'Daniela Corredor',
	color: 'rgba(32, 191, 107,1.0)'
},{


	text: 'She is a very hard-working woman, she always likes to fight for what she is passionate about and does everything possible to achieve what she likes, she is very warrior and is always looking for new challenges for her in her life, whether professional, work or personal. .',
	name: 'Jose Rivas',
	color: 'rgba(75, 123, 236,1.0)'
},{
	text: 'I think you are a very tender, attentive, honest girl, a person who works hard and does whatever it takes to achieve her goals, you are very intelligent, cunning and a person worth keeping in life.',
	name: 'Gabriel Fernendez',
	color: 'rgba(165, 94, 234,1.0)'
},{
	text: 'First of all, you are a person with a big heart, who fulfills everything that is proposed, who always watches over the well-being of others, you are very familiar, supportive, honest, fair and you have a thousand other qualities but above all that you are brave and ready to face any challenge that comes your way.',
	name: 'Valentina Urueña',
	color: 'rgba(32, 191, 107,1.0)'
}];

addTestimonial(0);

authorsEl.forEach((author, idx) => {
	author.addEventListener('click', (e) => {
		addTestimonial(idx);
		author.classList.add('selected');
	})
});

function addTestimonial(idx) {
	const testimonial = testimonials[idx];
	
	nameEl.innerHTML = testimonial.name;
	textEl.innerHTML = testimonial.text;
	container.style.background = testimonial.color;
	container.style.boxShadow = `0 35px 10px -20px ${testimonial.color.substring(0, testimonial.color.length-4)}0.9)`;
	
	authorsEl.forEach(author => {
		author.classList.remove('selected');
	});
}