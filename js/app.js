
  "use strict";

    function AppController(){
      var presentationViews = [];
      var slideForm = $("#newPresentation");
      var presentationContainer = $("ul#presentationContainer");


      var addPresentationHandler = function(event){
        var name = slideForm.find("#name").val();
        var desc = slideForm.find("#description").val();
        var presentation = new Presentation(name, desc);
        var presetationView = new PresentationView(presentation);
        presentationViews.push (presetationView);
        presetationView.render();        
        $("div#addPresentationDialog").modal('hide');
        event.preventDefault();
        event.stopPropagation();
      }

      this.bindEventHandlers = function(){
        slideForm.bind('submit',addPresentationHandler);
        //TODO
      }

      /*
      this.findPresentationByid = function(id){
          for (var index in presentations){
            if (presentations[index].id == id){
              return presentations[index];
            }
          }
      }*/

 
    };

   

   var app = new AppController();
   app.bindEventHandlers();

