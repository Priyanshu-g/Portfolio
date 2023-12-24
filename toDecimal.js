function octConversion(){
				var a = document.getElementById("oct").value
				if (a==""){
					document.getElementById("octResD").innerHTML = ""
					document.getElementById("octResH").innerHTML = ""
					document.getElementById("octResB").innerHTML = ""
					return
				}
				var b = Array.from(a)
				for(i=0; i<b.length; i++){
					if(b[i] > 7) {
						document.getElementById("octResD").innerHTML = "Invalid Input"
						document.getElementById("octResH").innerHTML = ""
						document.getElementById("octResB").innerHTML = ""
						return;
					}
				}
	
				var r = b.reverse();
				var res = 0
				for(j=0; j<r.length; j++){
					var p = Math.pow(8, j);
					var cur = r[j];
					var hold = (cur*p);
					res = res + hold;
				}
				
				document.getElementById("octResD").innerHTML = "Decimal = " + res
				
				//binary
				var a = res
				var res2 = []
				var floor = Math.floor(a/2);
				res2.push(a%2);
				while (floor>=1){
					res2.unshift(floor%2);
					floor = Math.floor(floor/2);
				}
				document.getElementById("octResB").innerHTML = "Binary = " + res2.join('')
				
				//hex
				var a = res
				var res3 = []
				var floor = Math.floor(a/16);
				res3.push(a%16);
				while (floor>=1){
					res3.unshift(floor%16);
					floor = Math.floor(floor/16);
				}
				
				for(i=0; i<res3.length; i++){
					if(res3[i]==10){
						res3[i]="A"
					}
					if(res3[i]==11){
						res3[i]="B"
					}
					if(res3[i]==12){
						res3[i]="C"
					}
					if(res3[i]==13){
						res3[i]="D"
					}
					if(res3[i]==14){
						res3[i]="E"
					}
					if(res3[i]==15){
						res3[i]="F"
					}
				}
				
				document.getElementById("octResH").innerHTML = "Hexadecimal = " + res3.join('')
				
			}
			
			function hexConversion(){
				var a = document.getElementById("hex").value
				if (a==""){
					document.getElementById("hexResO").innerHTML = ""
					document.getElementById("hexResD").innerHTML = ""
					document.getElementById("hexResB").innerHTML = ""
					return
				}
				var b = Array.from(a)
				for(i=0; i<b.length; i++){
					if(b[i]=="a" || b[i]=="A"){
						b[i]=10
					}
					
					if(b[i]=="b" || b[i]=="B"){
						b[i]=11
					}
					
					if(b[i]=="c" || b[i]=="C"){
						b[i]=12
					}
					
					if(b[i]=="d" || b[i]=="D"){
						b[i]=13
					}
					
					if(b[i]=="e" || b[i]=="E"){
						b[i]=14
					}
					
					if(b[i]=="f" || b[i]=="F"){
						b[i]=15
					}
					
					b[i]=parseInt(b[i]);
					if(b[i] > 15 || typeof b[i]=="string" || isNaN(b[i])) {
						document.getElementById("hexResD").innerHTML = "Invalid Input"
						document.getElementById("hexResB").innerHTML = ""
						document.getElementById("hexResO").innerHTML = ""
						return;
					}
				}
				
				var r = b.reverse();
				var res = 0
				
				for(j=0; j<r.length; j++){
					var p = Math.pow(16, j);
					var cur = r[j];
					var hold = (cur*p);
					res = res + hold;
				}
				
				document.getElementById("hexResD").innerHTML = "Decimal = " + res
				
				//binary
				var a = res
				var res2 = []
				var floor = Math.floor(a/2);
				res2.push(a%2);
				while (floor>=1){
					res2.unshift(floor%2);
					floor = Math.floor(floor/2);
				}
				document.getElementById("hexResB").innerHTML = "Binary = " + res2.join('')
				
				//oct
				var a = res
				var res3 = []
				var floor = Math.floor(a/8);
				res3.push(a%8);
				while (floor>=1){
					res3.unshift(floor%8);
					floor = Math.floor(floor/8);
				}
				document.getElementById("hexResO").innerHTML = "Octal = " + res3.join('')
			}
			
			function biConversion(){
				var a = document.getElementById("bi").value
				
				if (a==""){
					document.getElementById("biResO").innerHTML = ""
					document.getElementById("biResH").innerHTML = ""
					document.getElementById("biResD").innerHTML = ""
					return
				}
				
				var b = Array.from(a)
				for(i=0; i<b.length; i++){
					if(b[i] > 1) {
						document.getElementById("biResD").innerHTML = "Invalid Input"
						document.getElementById("biResH").innerHTML = ""
						document.getElementById("biResO").innerHTML = ""
						return;
					}
				}
				var r = b.reverse();
				var res = 0
				for(j=0; j<r.length; j++){
					var p = Math.pow(2, j);
					var cur = r[j];
					var hold = (cur*p);
					res = res + hold;
				}
				
				document.getElementById("biResD").innerHTML = "Decimal = " + res
				
				//oct
				var a = res
				var res2 = []
				var floor = Math.floor(a/8);
				res2.push(a%8);
				while (floor>=1){
					res2.unshift(floor%8);
					floor = Math.floor(floor/8);
				}
				document.getElementById("biResO").innerHTML = "Octal = " + res2.join('')
				
				//hex
				var a = res
				var res3 = []
				var floor = Math.floor(a/16);
				res3.push(a%16);
				while (floor>=1){
					res3.unshift(floor%16);
					floor = Math.floor(floor/16);
				}
				
				for(i=0; i<res3.length; i++){
					if(res3[i]==10){
						res3[i]="A"
					}
					if(res3[i]==11){
						res3[i]="B"
					}
					if(res3[i]==12){
						res3[i]="C"
					}
					if(res3[i]==13){
						res3[i]="D"
					}
					if(res3[i]==14){
						res3[i]="E"
					}
					if(res3[i]==15){
						res3[i]="F"
					}
				}
				
				document.getElementById("biResH").innerHTML = "Hexadecimal = " + res3.join('')
				
			}
			
			function decConversion(){
				//oct
				var a = document.getElementById("dec").value
				
				if (a==""){
					document.getElementById("decResO").innerHTML = ""
					document.getElementById("decResH").innerHTML = ""
					document.getElementById("decResB").innerHTML = ""
					return
				}
				
				var res = []
				var floor = Math.floor(a/8);
				res.push(a%8);
				while (floor>=1){
					res.unshift(floor%8);
					floor = Math.floor(floor/8);
				}
				document.getElementById("decResO").innerHTML = "Octal = " + res.join('')
				
				//hex
				var a = document.getElementById("dec").value
				var res = []
				var floor = Math.floor(a/16);
				res.push(a%16);
				while (floor>=1){
					res.unshift(floor%16);
					floor = Math.floor(floor/16);
				}
				
				for(i=0; i<res.length; i++){
					if(res[i]==10){
						res[i]="A"
					}
					if(res[i]==11){
						res[i]="B"
					}
					if(res[i]==12){
						res[i]="C"
					}
					if(res[i]==13){
						res[i]="D"
					}
					if(res[i]==14){
						res[i]="E"
					}
					if(res[i]==15){
						res[i]="F"
					}
				}
				
				document.getElementById("decResH").innerHTML = "Hexadecimal = " + res.join('')
				
				//bi
				var a = document.getElementById("dec").value
				var res = []
				var floor = Math.floor(a/2);
				res.push(a%2);
				while (floor>=1){
					res.unshift(floor%2);
					floor = Math.floor(floor/2);
				}
				document.getElementById("decResB").innerHTML = "Binary = " + res.join('')
			}