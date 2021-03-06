jQuery(document).ready(function()
{
	$('#logo_menu_content').click(function()
	{
		$('.navbar').toggle('slow');
	});

	$('#fa-times').click(function()
	{
		$('.navbar').toggle('slow');
	})


	//Code qui permet de scroller sur la section 2 avec le chevron
	$(".fa-chevron-circle-down").click(function()
	{
		$('html, body').animate({
		scrollTop: $(".section_2").offset().top
		}, 2000);
	});
	//fin---------------------------------------------------------


	//fonction pour taper la citation-----------------------------
	text = 'S.A.R.L';
	emplacement = '#title';
	textfrappe(text, emplacement);
	//fin---------------------------------------------------------


	//Code qui anime l'arrivée des blocs sur la home--------------
	window.sr = ScrollReveal();
	sr.reveal('.bloc',
	{
		origin: 'bottom',
		distance: '110px',
		scale: '1',
		easing: 'ease',
		delay: 800,
		duration: 2000,
	}, 0);

	($('.section_2').children()).each(function(index)
	{
		sr.reveal(this,
		{
		origin: 'left',
		distance: '110px',
		scale: '1',
		easing: 'ease',
		delay: 300,
		duration: 1200,
		}, 300);
	});
	//fin---------------------------------------------------------

});


function textfrappe($text, $emplacement)
{
  setTimeout(function()
  {
    $($emplacement).typed(
    {
        strings: [$text], // More SEO Friendly look here: https://github.com/mattboldt/typed.js/
        typeSpeed: 200, // typing speed
        backDelay: 750, // pause before backspacing
        showCursor: false
    });
  },
    0
  );
}