function AddSlideDialogView(presentationParentElement){
	var dialogBox = $("div#addSlideDialog");

	var addSlideForm = $("#newSlide");
	var okBtn = addSlideForm.find("a.btn-primary");
	var contentBox = addSlideForm.find("#markup");
	var cancelBtn = addSlideForm.find("a.btn[data-dismiss='modal']");


	var successCallbackDispatcher = function(){
		dialogBox.modal('hide');
		presentationParentElement.trigger('slideAdded', contentBox.val());
		detachEventHandlers();
	}

	var cancelCallbackDispatcher = function(){
		dialogBox.modal('hide');
		detachEventHandlers();
	}

	var detachEventHandlers = function(){
		okBtn.unbind('click', successCallbackDispatcher);
		cancelBtn.unbind('click', cancelCallbackDispatcher);
	}

	var attachEventHandlers = function(){
		okBtn.bind('click', successCallbackDispatcher);
		cancelBtn.bind('click', cancelCallbackDispatcher);
	}

	attachEventHandlers();
}