
		
		function Changemode() {
			var element = document.body;
			element.classList.toggle("dark-mode");
		  }
		const newLocal = $(function () {
	var form = $("form");

	form.on("submit", function (e) {
		e.preventDefault();
		var res = $("#res #title");
		function calcBMI() {
			var weight = $("#Weight").val();
			
			var height = $("#Height").val();

			var bmi = weight / (height * height);
			return Math.floor(bmi);

		}

		function bmiState() {
			if (calcBMI() < 16.9) {
				$('#1').show()
				return "Very underweight";
				
			}
			if (calcBMI() > 17 && calcBMI() < 18.4) {
				$('#2').show()
				return "Under weight";
			}
			if (calcBMI() > 18.5 && calcBMI() < 24.9) {
				return "Normal weight";
			}
			if (calcBMI() > 25 && calcBMI() < 29.9) {
				$('#3').show()
				return "Overweight";
			}
			if (calcBMI() > 30 && calcBMI() < 34.9) {
				$('#3').show()
				return "Overweight class 1";
			}
			if (calcBMI() > 35 && calcBMI() < 40) {
				$('#3').show()
				return "Overweight class 2";
			}
			if (calcBMI() > 40) {
				$('#3').show()
				return "Overweight class 3";
				
			}
		}

		res.html(calcBMI() + "   -->   " + bmiState());
		
	});
});

