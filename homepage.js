

let memberDetails = {
		"aori": "Sub Vocal",
		"timo": "Leader, Main Dancer", 
		"sooya": "Lead Vocal", 
		"choa": "Lead Vocal, Rapper", 
		"bohyung": "Main Rapper", 
		"taesun": "Main Rapper", 
		"yuni": "Main Vocal, Visual", 
		"jina": "Lead Vocal"
};


$("[id$=-profile]").on( "click", function (e) {
		// find prev selected, and remove class
		$(".selected").removeClass("selected");

		let clickedMember = e.target.id.split("-")[0]; 
		$(this).addClass("selected");
		$("#member-name").text(clickedMember);
		$("#member-position").text(memberDetails[clickedMember]);
		$("#profilepic").attr("src", `./images/${clickedMember}-removebg-preview.png`);
	}
	
);

$(".image-container").on("click", function() {
	$(".member-poll").addClass("hide");
	$(".member-results").removeClass("hide");
});



$(window).load(function(){
   animate_spotlight(); 
});

function animate_spotlight(){
	var $current_spot = $('#spotlight span.active')
	var pos = $current_spot.next().position().left;
	$('#spotlight').stop().animate({
		left : '-' + pos + 'px'
	}, {easing : 'linear', duration : 3000, complete : function(){
		$current_spot.next().addClass('active');
		$current_spot.appendTo('#spotlight');
		$('#spotlight').css({left : 0 + 'px'})
		$current_spot.removeClass('active');
		animate_spotlight();
	}});
}