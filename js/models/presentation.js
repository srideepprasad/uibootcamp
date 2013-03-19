    function Presentation(title, description){
      var slides = [];


      this.title=  title;
      this.description = description;
      this.id = new Date().getTime();

      this.addSlide = function(markup){
        slides.push (new Slide(markup));
      }

      this.getSlides = function(){
        return slides;
      }
    }
