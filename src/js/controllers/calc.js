// Calculator script



// Calc object
var calc = {
	data: {
		KindOfActifityPrices: {
			optTorg: [250, 150, 200],
			rozTorg: [400, 300, 300],
			bytUslugi: [250, 150, 200],
			uslugiBezMaterialov: [200, 150, 200],
			proizvodstvo: [300, 250, 300],
			mnogoprofPredpriyatie: [350, 300, 300]
		},
		PersonPrice: 25,
		PointPrice: 50,
		DocumentationPrice: [50, 100, 150, 200, 250, 300],
		EstimatedRevenueCoefficient: [1, 1.1, 1.2, 1.3, 1.4],
		VedCoefficient: 1.2
	},
	calc: function() {
		var kindOfActivity = document.getElementById('kind-of-activity').value,
				kindOfActivityPrice;

		// Определения системы налообложения
		var systemOfTaxation = document.getElementById('system-of-taxation').value;


		// Опредеяем стоимость исходя из вида деятельности и системы налогообложения
		if ( kindOfActivity === 'vid1' ) {
			if ( systemOfTaxation === 'osn' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.optTorg[0];
			} else if ( systemOfTaxation === 'usn' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.optTorg[1];
			} else if ( systemOfTaxation === 'usn-nds' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.optTorg[2];
			}	
		} else if ( kindOfActivity === 'vid2' ) {
			if ( systemOfTaxation === 'osn' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.rozTorg[0];
			} else if ( systemOfTaxation === 'usn' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.rozTorg[1];
			} else if ( systemOfTaxation === 'usn-nds' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.rozTorg[2];
			}
		} else if ( kindOfActivity === 'vid3' ) {
			if ( systemOfTaxation === 'osn' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.bytUslugi[0];
			} else if ( systemOfTaxation === 'usn' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.bytUslugi[1];
			} else if ( systemOfTaxation === 'usn-nds' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.bytUslugi[2];
			}
		} else if ( kindOfActivity === 'vid4' ) {
			if ( systemOfTaxation === 'osn' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.uslugiBezMaterialov[0];
			} else if ( systemOfTaxation === 'usn' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.uslugiBezMaterialov[1];
			} else if ( systemOfTaxation === 'usn-nds' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.uslugiBezMaterialov[2];
			}
		} else if ( kindOfActivity === 'vid5' ) {
			if ( systemOfTaxation === 'osn' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.proizvodstvo[0];
			} else if ( systemOfTaxation === 'usn' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.proizvodstvo[1];
			} else if ( systemOfTaxation === 'usn-nds' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.proizvodstvo[2];
			}
		} else if ( kindOfActivity === 'vid6' ) {
			if ( systemOfTaxation === 'osn' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.mnogoprofPredpriyatie[0];
			} else if ( systemOfTaxation === 'usn' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.mnogoprofPredpriyatie[1];
			} else if ( systemOfTaxation === 'usn-nds' ) {
				kindOfActivityPrice = this.data.KindOfActifityPrices.mnogoprofPredpriyatie[2];
			}
		}

		// Расчет стоимости за кол-во сотрудников
		var amountOfEmployees = document.getElementById('amount-of-employees').value,
			amountOfEmployeesPrice = amountOfEmployees * this.data.PersonPrice;

		// Расчет стоимости за кол-во точек
		var amountOfPoints = document.getElementById('amount-of-points').value,
			amountOfPointsPrice = amountOfPoints * this.data.PointPrice;

		// Расчет стоимости за кол-во документации
		var amountOfDocumentation = document.getElementById('amount-of-documentation').value,
			amountOfDocumentationPrice;

		if ( amountOfDocumentation === 'interval-1' ) {
			amountOfDocumentationPrice = this.data.DocumentationPrice[0];
		} else if ( amountOfDocumentation === 'interval-2' ) {
			amountOfDocumentationPrice = this.data.DocumentationPrice[1];
		} else if ( amountOfDocumentation === 'interval-3' ) {
			amountOfDocumentationPrice = this.data.DocumentationPrice[2];
		} else if ( amountOfDocumentation === 'interval-4' ) {
			amountOfDocumentationPrice = this.data.DocumentationPrice[3];
		} else if ( amountOfDocumentation === 'interval-5' ) {
			amountOfDocumentationPrice = this.data.DocumentationPrice[4];
		} else if ( amountOfDocumentation === 'interval-6' ) {
			amountOfDocumentationPrice = this.data.DocumentationPrice[5];
		} else {
			amountOfDocumentationPrice = 0;
		}

		// Предварительная финальная стоимость
		var total = kindOfActivityPrice + amountOfEmployeesPrice + amountOfPointsPrice + amountOfDocumentationPrice;

		// Стоимость за предполагаемую выручку
		var estimatedRevenue = document.getElementById('estimated-revenue').value,
			estimatedRevenuePrice;

		if ( estimatedRevenue === 'revenue-interval-1' ) {
			estimatedRevenuePrice = this.data.EstimatedRevenueCoefficient[0];
		} else if ( estimatedRevenue === 'revenue-interval-2' ) {
			estimatedRevenuePrice = this.data.EstimatedRevenueCoefficient[1];
		} else if ( estimatedRevenue === 'revenue-interval-3' ) {
			estimatedRevenuePrice = this.data.EstimatedRevenueCoefficient[2];
		} else if ( estimatedRevenue === 'revenue-interval-4' ) {
			estimatedRevenuePrice = this.data.EstimatedRevenueCoefficient[3];
		} else if ( estimatedRevenue === 'revenue-interval-5' ) {
			estimatedRevenuePrice = this.data.EstimatedRevenueCoefficient[4];
		} else {
			estimatedRevenuePrice = 1;
		}

		// Стоимость после умножения на коэффициент 
		// за предполагаемую выручку
		total = total * estimatedRevenuePrice;

		// Определения наличия внешнеэкономической деятельности
		var ved = document.getElementById('foreign-economic-activity');
		if ( ved.checked ) {
			total = total * this.data.VedCoefficient;
		}

		// Разбиение финальной стоимости на разряды и 
		// ограничение количества символов после точки до двух
		total = total.toFixed(2);
		total = total.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

		// Проверка финальной стоимости на NaN и ее вывод
		if ( isNaN(total) == true ) {
			document.getElementById('price').innerHTML = '0';
		} else {
			document.getElementById('price').innerHTML = total;
		}
		
	}
}

// Событие калькулятора
var btn = document.getElementById('calc__btn');
btn.onclick = function(e) {
	e.preventDefault();
	calc.calc();
};