window.onload = function() {
    var toggle = document.querySelector('.toggle');
    var nav = document.querySelector('.navigation');
    var range = document.querySelector('.range-slider__range');
    var gradientProgress = document.getElementById('gradient-progress');
    var selectIcon = document.querySelector('.select__icon');
    
    toggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    range.oninput = function() {
        gradientProgress.style.width = this.value + '%';
    }
      
      
    var users = [{
      id: 1,
      name: '1998'
    }, {
      id: 2,
      name: '1997'
    }, {
      id: 3,
      name: '1996'
    }, {
      id: 4,
      name: '1995'
    }, {
      id: 5,
      name: '1994'
    }, {
      id: 6,
      name: '1993'
    }, {
      id: 7,
      name: '1992'
    }, {
      id: 8,
      name: '1991'
    }, {
      id: 9,
      name: '1990'
    }, {
      id: 10,
      name: '1989'
    }, {
      id: 11,
      name: '1988'
    }];
    
    var printArea = document.querySelector(".select");
    
    var dropdown = function dropdown() {
      var component = document.createElement("div");
    
      var input = createInput();
      var dropdown = showDropdown();
    
      component.appendChild(input);
      component.appendChild(dropdown);
      printArea.appendChild(component);
    };
    
    var createInput = function createInput() {
      // Creates the input outline
      var input = document.createElement("div");
      input.classList = "select__input";
      input.addEventListener("click", toggleDropdown);
    
      // Creates the input placeholder content
      var inputPlaceholder = document.createElement("div");
      inputPlaceholder.classList = "input__placeholder";
    
      var placeholder = document.createElement("p");
      placeholder.textContent = "Год рождения";
      placeholder.classList.add('placeholder');
    
      // Appends the placeholder and chevron (stored in assets.js)
      inputPlaceholder.appendChild(placeholder);
      input.appendChild(inputPlaceholder);
    
      return input;
    };
    
    var showDropdown = function showDropdown() {
      var structure = document.createElement("div");
      structure.classList.add("structure", "hide");
    
      users.forEach(function (user) {
        var id = user.id,
            name = user.name;
    
        var option = document.createElement("div");
        option.addEventListener("click", function () {
          return selectOption(name);
        });
        option.setAttribute("id", id);
    
        var n = document.createElement("h5");
        n.textContent = name;
    
        option.appendChild(n);
        structure.appendChild(option);
      });
      return structure;
    };
    
    var toggleDropdown = function toggleDropdown() {
      var dropdown = document.querySelector(".structure");
      dropdown.classList.toggle("hide");
      selectIcon.classList.toggle("active");
    
      var input = document.querySelector(".select__input");
      input.classList.toggle("input__active");
    };
    
    var selectOption = function selectOption(name) {
      var text = document.querySelector('.placeholder');
      text.textContent = name;
      text.classList.add('input__selected');
      toggleDropdown();
    };
    
    dropdown();
      
}
