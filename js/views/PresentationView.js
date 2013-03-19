function PresentationView(presentationModel){
	//TODO  - Make prototype
	var presentationContainer = $("ul#presentationContainer");
	var templateHtml = $("#presentationTemplate").html();
	var presentationElement = null;
	var slideViews = [];

	var renderSlides = function(parent){
		var slideModels = presentationModel.getSlides();
		for (var index in slideModels){
			var slideView = new SlideView(parent,slideModels[index]);
			slideView.render();
			slideViews.push(slideView);
		}
	}

	this.render = function(){
		presentationContainer.append(_.template( templateHtml,presentationModel));
		presentationElement = $("li.row[id-attr="+presentationModel.id+"]")
		renderSlides(presentationElement);
		//presentationElement.find(".slides").append(_.template($("#slideTemplate").html(),{counter: 1}))
 
	}

	this.destroy = function(){
		presentationElement.remove();
	}

	this.getPresentation = function(){
		return presentationModel;
	}

}