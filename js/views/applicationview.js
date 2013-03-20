var ApplicationView = (function(){
      function AppView(){
        var presentationViews = [];
        var slideForm = $("#newPresentation");
        var presentationContainer = $("ul#presentationContainer");
        var nameField = slideForm.find("#name");
        var descField = slideForm.find("#description");
        var isInitialized = false;
        var addPresentationHandler = function(event){
          var name = nameField.val();
          var desc = descField.val();
          var presentation = new Presentation(name, desc);
          $("div#addPresentationDialog").modal('hide');
          addPresentation(presentation);
          event.preventDefault();
          event.stopPropagation();
        }


        var addPresentation = function(presentation){
          var presentationView = new PresentationView(presentation);
          presentationViews.push (presentationView);
          presentationView.render();        
        }

        var bindEventHandlers = function(){
          slideForm.bind('submit',addPresentationHandler);
        }
        
        this.init = function(){
          bindEventHandlers();
        }
      }

      var instance = null;

      return {
        getInstance : function(){
          if (!instance){
            instance = new AppView();
          }
          return instance;
        }
      }
    })();
