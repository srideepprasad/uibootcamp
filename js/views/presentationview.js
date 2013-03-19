function PresentationView(presentationModel){
	//TODO  - Make prototype
	var presentationContainer = $("ul#presentationContainer");
	var templateHtml = $("#presentationTemplate").html();
	var presentationElement = null;
	var slideViews = [];

	var initSlideView = function(model){
		var slideView = new SlideView(presentationElement,model);
		slideView.render();
		slideViews.push(slideView);

	}

	var renderSlides = function(){
		var slideModels = presentationModel.getSlides();
		for (var index in slideModels){
			initSlideView(presentationElement, slideModels[index]);
		}
	}

	var slideAddedCallback = function(content){
		var slideModel = new Slide(content);
		initSlideView(slideModel);
	}

	var slideCancelCallback = function(){
		alert('cancelled');
	}

	var addSlideHandler = function(){
		new AddSlideDialogView(slideAddedCallback, slideCancelCallback);
	}

	this.render = function(){
		presentationContainer.append(_.template( templateHtml,presentationModel));
		presentationElement = $("li.row[id-attr="+presentationModel.id+"]")
		
		presentationElement.find("#addSlideBtn").bind('click', addSlideHandler);
		
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