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

	//fonction pour taper la citation
	text = 'S.A.R.L';
	emplacement = '#title';
	textfrappe(text, emplacement);

});


function textfrappe($text, $emplacement)
{
  setTimeout(function()
  {
    $($emplacement).typed(
    {
        strings: [$text], // More SEO Friendly look here: https://github.com/mattboldt/typed.js/
        typeSpeed: 150, // typing speed
        backDelay: 750, // pause before backspacing
        // loop: true, // loop on or off (true or false)
        // loopCount: false, // number of loops, false = infinite
        // callback: function(){ } // call function after typing is done
    });
  },
    0
  );
}