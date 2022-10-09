function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function val(el) {
  if (el.options && el.multiple) {
    return el.options
      .filter((option) => option.selected)
      .map((option) => option.value);
  } else {
    return el.value;
  }
}

var scripts = function () {
  console.log("Im ready!");

  var $element = document.querySelector("#preset_215");

  try {
    var form = $element.firstElementChild.firstElementChild,
      yithItems = form.querySelectorAll(".yith-wcan-filter"),
      yith_select = yithItems[2],
      $ul = null;

    //-------------------------------------
    var getMatchingElements = () => {
      var $options = yith_select.querySelectorAll("option"); // --- Tomamos todas las opciones del select
      var originalCopy = $ul.querySelector("li").cloneNode(true); // Hacemosuna copia de un nodo principal
      $ul.innerHTML = ""; // - Limpiamos todos los hijos
      $options.forEach((element) => {
        // Recorremos el arreglo para setear las opciones y agregarlos al Ul principal

        var item = originalCopy.cloneNode(true); // Clonamos la copia original
        // Inicializamos el checkbox y la etiqueta <a></a>
        var checkbox = item.firstElementChild.querySelector("input");
        var aTag = item.firstElementChild.querySelector("a");

        var value = element.getAttribute("value"); // Tomamos la data guardada en el options
        item.setAttribute("data-value", value); // Colocamos El data value pricipal
        checkbox.setAttribute("value", value); // Seteamos el checkbox
        //Seteamos el a tag
        aTag.setAttribute("href", element.getAttribute("data-filter_url"));
        aTag.textContent = element.textContent;

        $ul.append(item);
      });
    };
    // ----------- Asegurarse de que yith ya este cargado ---------------------
    setTimeout(() => {
      $ul = yith_select.querySelector(".matching-items.filter-items");
      console.log($ul);

      $ul.addEventListener("scroll", function (event) {
        var element = event.target;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
          console.log("scrolled");
        }
      });
      yith_select
        .querySelector(".yith-wcan-dropdown")
        .addEventListener("click", () => {
          getMatchingElements();
        });
    }, 150);

    function val(el) {
      if (el.options && el.multiple) {
        return el.options
          .filter((option) => option.selected)
          .map((option) => option.value);
      } else {
        return el.value;
      }
    }
  } catch (error) {
    
  }
 // ------------ Signup form button interaction
  try {
    var buttonSignUp = document.querySelector("#btn-signup");
    var buttonlogin = document.querySelector("#btn-login");
    var signupForm = document.querySelector(
      "#sigup-form-container"
    ).firstElementChild;
    var loginForm = document.querySelector("#login-form");

    buttonSignUp.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("entrando");
      signupForm.classList.remove("hidden");
      loginForm.classList.add("hidden");

      buttonlogin.classList.remove("active");
      buttonlogin.classList.add("inactive");
      buttonSignUp.classList.add("active");
    });

    buttonlogin.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("entrando");
      signupForm.classList.add("hidden");
      loginForm.classList.remove("hidden");

      buttonlogin.classList.remove("inactive");
      buttonlogin.classList.add("active");
      buttonSignUp.classList.remove("active");
      buttonlogin.classList.add("inactive");
    });
  } catch (error) {
    
  }

};


ready(scripts);
