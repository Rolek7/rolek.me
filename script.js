var typed = new Typed('#typed', {
	strings: ['Game Developer', 'Website Developer'],
	typeSpeed: 120,
	backSpeed: 60,
	loop: true,
	cursorChar: '_',
});

document.addEventListener('DOMContentLoaded', function () {
	var link = document.getElementById('link');

	link.addEventListener('click', function (event) {
		event.preventDefault(); // Zapobiegamy domyślnej akcji przekierowania po kliknięciu na link
		window.location.href = link.href; // Przenosimy użytkownika do docelowej strony
	});
});
