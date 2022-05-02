function stopSubmit() {
  const form = document.querySelector("#form");
  var alertList = document.querySelectorAll('.alert')
  var alerts =  [].slice.call(alertList).map(function (element) {
    return new bootstrap.Alert(element)
  })
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    getInputs(form);
  });
}


function getInputs(form) {
  const peso = form.querySelector("#inputPeso");
  const altura = form.querySelector("#inputAltura");
  const imc = () => {return  Math.round(peso.value/(altura.value*altura.value))}
  console.log(imc())
  const result = document.querySelector('#result');
  result.innerHTML = imcAlert(imc())
  

  
}

function imcAlert(imc){
    if (imc < 18.5){
        return `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        IMC:${imc} Abaixo do peso.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
      
        
    }
    else if (imc >= 18.5 && imc < 24.9){
        return `<div class="alert alert-success alert-dismissible fade show" role="alert">
        IMC:${imc} Peso normal.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    }
    else if(imc >= 25 && imc < 29.9){
        return `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        IMC:${imc} Sobrepeso.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    }
    else if(imc >= 30 && imc < 34.9){
        return `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        IMC:${imc} Obesidade nivel 1.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    }
    else if(imc >= 35 && imc < 39.9){
        return `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        IMC:${imc} Obesidade nivel 2.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    }
    else {
        return `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        IMC:${imc} Obesidade nivel 3.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    }
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  
  var forms = document.querySelectorAll(".needs-validation");
  const form = document.querySelector("#form");
  const peso = form.querySelector("#inputPeso");
  const altura = form.querySelector("#inputAltura");

  
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity() ) {
          event.preventDefault();
          event.stopPropagation();
        }
        console.log('')

        form.classList.add("was-validated");
      },
      false
    );
  });
})();


stopSubmit()


