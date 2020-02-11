var colourController = (function() {
    return {
        colourId: function() {
            var colour = event.target.id.split("_")[0];
            return colour;
        }
    }
})();

var UIController = (function() {
    return {
        addColour: function(colour) {
            document.getElementById(event.target.id).style.backgroundColor = colour;

        }
    }
})();

var contorller = (function(colourCtrl, UICtrl) {

    
    var setupEventListeners = function() {
        document.querySelectorAll(".btn").forEach(function(el) { // need to add eventListener to each button in the 'class'
            el.addEventListener("click", colourIdCtrl)
        });
        document.querySelectorAll(".box").forEach(function(el) {
            el.addEventListener("click", function() {
                addColourCtrl(window.colour)});
        });
    }

    var colourIdCtrl = function() {
        window.colour =  colourCtrl.colourId();
                     
    }

    var addColourCtrl = function(colour) {
      
        UICtrl.addColour(colour);
    }



    setupEventListeners();


})(colourController, UIController);
