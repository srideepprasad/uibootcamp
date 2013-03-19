    function Presentation(title, description){
      var slides = [];

      //TODO: Remove Window object dep

      if (!window.id){
        window.id = 0;
      }
      else
        window.id ++;

      this.title=  title;
      this.description = description;
      this.id = window.id;

      this.addSlide = function(markup){
        slides.push (new Slide(markup));
      }

      this.getSlides = function(){
        return slides;
      }
    }
