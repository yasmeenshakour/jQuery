console.log("here")
var msg = "Hover over an image below."
	 $("img").mouseover(function(){
		 $('#image').css("backgroundImage", "url('"+this.src+"')");
	 	 $('#image').html(this.alt);
	 })
	 $("img").focus(function(){
	 	 $('#image').css("backgroundImage", "url('"+this.src+"')");
 	 	 $('#image').html(this.alt);
	 })
	 $("img").mouseleave(function(){
		 $('#image').css("backgroundImage", "url('')");
 	 	 $('#image').html(msg);
	 })
	 $("img").blur(function(){
		 $('#image').css("backgroundImage", "url('')");
 	 	 $('#image').html(msg);
	 })
