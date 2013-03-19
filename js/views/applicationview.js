    function ApplicationView(){
      var presentationViews = [];
      var slideForm = $("#newPresentation");
      var presentationContainer = $("ul#presentationContainer");
      var nameField = slideForm.find("#name");
      var descField = slideForm.find("#description");

      var addPresentationHandler = function(event){
        var name = nameField.val();
        var desc = descField.val();
        var presentation = new Presentation(name, desc);
        var presetationView = new PresentationView(presentation);
        presentationViews.push (presetationView);
        presetationView.render();        
        $("div#addPresentationDialog").modal('hide');
        event.preventDefault();
        event.stopPropagation();
      }

      var bindEventHandlers = function(){
        slideForm.bind('submit',addPresentationHandler);
      }

      this.init = function(){
        bindEventHandlers();
      }

    };
