/**
 *
 * Save IMGUR Galleries!
 *
 * Because we're fucking lazy.
 * 
 */

// Create progress box
$downloading = $('<div class="downloading-box"></div>')
.css({
	position:"fixed",
	"z-index":"100000",
	width:"50%",
	height:"50%",
	left:"25%",
	top:"25%",
	background: "white"
});

$downloadingtext = $('<h1>Compiling</h1>')
.css({
	"text-align": "center",
	color: "black",
	"font-size": "50px",
	"text-transform": "uppercase",
	margin: "auto",
	"margin-top": "20%"
}).appendTo($downloading);

$('body').prepend($downloading);



// Activate all posts
$('.post-loadall.btn').click();

// Give it a second to load..
setTimeout(function() {

	// Move window to the top
	$(window).scrollTop(0);

	var BodyHeight = $('body').height();
	var WindowHeight = $(window).height();

	var Images = [];
	var CurrentScroll = 0;

	function AddImages() {
		if (CurrentScroll < BodyHeight) {
			console.log(CurrentScroll);

			$(window).scrollTop(CurrentScroll);

			$('.post-image-placeholder').each(function(i, e) {

				var ThisImgUrl = $(e).attr('src').replace("g.jpg", ".jpg");
				var ThisFilename = ThisImgUrl.match(/\w+(?:\.(jpg|png)+)/g)[0];

				console.log(ThisFilename);

				var returnObj = {
					filename: ThisFilename,
					url: ThisImgUrl
				}

			})

			CurrentScroll = CurrentScroll + WindowHeight;
			setTimeout(function(){
				AddImages();
			},1000);
		} else {
			FinishCompile();
		}
	}

	function FinishCompile(){

	}

	AddImages();


/*    $('.post-image-placeholder').each(function(i, e) {

        var ThisImgUrl = $(e).attr('src').replace("g.jpg", ".jpg");
        var ThisFilename = ThisImgUrl.match(/\w+(?:\.(jpg|png)+)/g)[0];

        console.log(ThisImgUrl);
        $link = $('<a>').attr('href', ThisImgUrl).attr('download', ThisFilename);
        $link[0].click();

    })*/

}, 1000)
