(function(){
    window.addEventListener("load", function(){
        var yes = document.querySelector('input[value="yes"]');
        var no = document.querySelector('input[value="no"]');

        yes.addEventListener('change', function() {
            if (this.checked) {
              document.getElementById("eligible")
              .classList.remove("js-eligibility-hidden")
              document.getElementById("eligibilityCheck")
              .classList.add("js-eligibility-hidden")
            }
          });

          no.addEventListener('change', function() {
            if (this.checked) {
                document.getElementById("notEligible")
                .classList.remove("js-eligibility-hidden")
                document.getElementById("eligibilityCheck")
                .classList.add("js-eligibility-hidden")
            }
          });  
    })
}())
