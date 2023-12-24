			function resiCal(){
			
				var res = 0;
				var a = 0;
				var tot = 0;
				var typ = $("#circuitType").val();
				var setSer = 'Series';
				var setPar = 'Parallel';
				
				
				if (typ == setSer){
					$('.resiNum').each(function(i, obj) {
						a = obj.value;
						a = parseInt(a);
						if(isNaN(a)){
							return true;
						}
						res+= a;
					});
				} 
				
				else if (typ == setPar){
					$('.resiNum').each(function(i, obj) {
						a = obj.value;
						a = parseInt(a);
						if(isNaN(a)){
							return true;
						}
						a = 1/a
						tot += a
					});
					res = 1/tot
				}
				
				document.getElementById("resiRes").innerHTML = "Total Resistance = " + res;
			}
			
			function addResi(){
				var numItems = $('.resiNum').length
				numItems++
				$( "#resistanceNumbers" ).append( '<div class="input-group mb-3"><input type="number" class="resiNum form-control" placeholder="R'+numItems+'" oninput="resiCal()"></input><div class="input-group-append"><span class="input-group-text">	&#8486;</span></div>' );
			}