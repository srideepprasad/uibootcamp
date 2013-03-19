function SlideView(parentView,slideModel){

	var slideTemplate = $("#slideTemplate").html();

	this.render = function(){
		parentView.find(".slides").append(_.template(slideTemplate,slideModel))
	}
}