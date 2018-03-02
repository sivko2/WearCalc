var kbdPos = 0;
var A = "0";
var newEntry = true;

var DISPLAY_LENGTH = 20;

var calcPos = 0;
var B = 0.0;
var C = 0.0;
var opB = "";
var opC = "";

var mode = "RAD";

function changeKeyboard()
{
	if (kbdPos == 3)
	{
		document.getElementById("key1").innerHTML = "RAD";
		document.getElementById("key2").innerHTML = "n!";
		document.getElementById("key3").innerHTML = "¶";
		document.getElementById("key4").innerHTML = "asin";
		document.getElementById("key5").innerHTML = "acos";
		document.getElementById("key6").innerHTML = "atan";
		document.getElementById("key7").innerHTML = "sin";
		document.getElementById("key8").innerHTML = "cos";
		document.getElementById("key9").innerHTML = "tan";
		document.getElementById("tab4").style.backgroundColor = "#ed8600";
		document.getElementById("tab3").style.backgroundColor = "#333333";
		document.getElementById("tab2").style.backgroundColor = "#333333";
		document.getElementById("tab1").style.backgroundColor = "#333333";
		document.getElementById("key1").style.backgroundColor = "#64a323";
		document.getElementById("key3").style.backgroundColor = "#ed8600";
		document.getElementById("key6").style.backgroundColor = "#ed8600";
		document.getElementById("key9").style.backgroundColor = "#ed8600";
	}
	else if (kbdPos == 2)
	{
		document.getElementById("key1").innerHTML = "log";
		document.getElementById("key2").innerHTML = "ln";
		document.getElementById("key3").innerHTML = "2ⁿ";
		document.getElementById("key4").innerHTML = "1/x";
		document.getElementById("key5").innerHTML = "10ⁿ";
		document.getElementById("key6").innerHTML = "eⁿ";
		document.getElementById("key7").innerHTML = "±";
		document.getElementById("key8").innerHTML = "x²";
		document.getElementById("key9").innerHTML = "√x";
		document.getElementById("tab4").style.backgroundColor = "#333333";
		document.getElementById("tab3").style.backgroundColor = "#ed8600";
		document.getElementById("tab2").style.backgroundColor = "#333333";
		document.getElementById("tab1").style.backgroundColor = "#333333";
		document.getElementById("key1").style.backgroundColor = "#ed8600";
		document.getElementById("key3").style.backgroundColor = "#ed8600";
		document.getElementById("key6").style.backgroundColor = "#ed8600";
		document.getElementById("key9").style.backgroundColor = "#ed8600";
	}
	else if (kbdPos == 1)
	{
		document.getElementById("key1").innerHTML = "0";
		document.getElementById("key2").innerHTML = ".";
		document.getElementById("key3").innerHTML = "=";
		document.getElementById("key4").innerHTML = "+";
		document.getElementById("key5").innerHTML = "-";
		document.getElementById("key6").innerHTML = "C";
		document.getElementById("key7").innerHTML = "×";
		document.getElementById("key8").innerHTML = "÷";
		document.getElementById("key9").innerHTML = "←";
		document.getElementById("tab4").style.backgroundColor = "#333333";
		document.getElementById("tab3").style.backgroundColor = "#333333";
		document.getElementById("tab2").style.backgroundColor = "#ed8600";
		document.getElementById("tab1").style.backgroundColor = "#333333";
		document.getElementById("key1").style.backgroundColor = "#ed8600";
		document.getElementById("key3").style.backgroundColor = "#64a323";
		document.getElementById("key6").style.backgroundColor = "#64a323";
		document.getElementById("key9").style.backgroundColor = "#64a323";
	}
	else
	{
		document.getElementById("key1").innerHTML = "1";
		document.getElementById("key2").innerHTML = "2";
		document.getElementById("key3").innerHTML = "3";
		document.getElementById("key4").innerHTML = "4";
		document.getElementById("key5").innerHTML = "5";
		document.getElementById("key6").innerHTML = "6";
		document.getElementById("key7").innerHTML = "7";
		document.getElementById("key8").innerHTML = "8";
		document.getElementById("key9").innerHTML = "9";
		document.getElementById("tab4").style.backgroundColor = "#333333";
		document.getElementById("tab3").style.backgroundColor = "#333333";
		document.getElementById("tab2").style.backgroundColor = "#333333";
		document.getElementById("tab1").style.backgroundColor = "#ed8600";
		document.getElementById("key1").style.backgroundColor = "#ed8600";
		document.getElementById("key3").style.backgroundColor = "#ed8600";
		document.getElementById("key6").style.backgroundColor = "#ed8600";
		document.getElementById("key9").style.backgroundColor = "#ed8600";
	}
}

var posx = 0;
var posy = 0;
var moving = false;

function init()
{
	var page = document.getElementById("main");

	page.addEventListener('touchstart', function(event)
			{
				moving = true;
				var touch = event.targetTouches[0];
				posx = touch.pageX;
				posy = touch.pageY
			}, false);

	page.addEventListener('touchmove', function(event)
			{
				if (moving) 
				{
					var touch = event.targetTouches[0];
					var deltax = touch.pageX - posx;
					if (deltax > 100)
					{
						if (kbdPos > 0)
						{
							kbdPos--;
							changeKeyboard();
							moving = false;
						}
					}
					if (deltax < -100)
					{
						if (kbdPos < 3)
						{
							kbdPos++;
							changeKeyboard();
							moving = false;
						}
					}
				}
			}, false);

	page.addEventListener('touchend', function(event)
			{
				moving = false;
			}, false);

	var initialized = window.localStorage.getItem("initialized");
	if (initialized == undefined)
	{
		window.localStorage.setItem("initialized", "OK");
		alert("Welcome to Wearable Calculator\n\n© 2014, Pronic, Meselina Ponikvar Verhovsek s.p.\n\nTip: Swipe left or right to switch keyboard.");
	}
}

function doKey(key)
{
	document.getElementById("clickSound").load();
	document.getElementById("clickSound").play();
	
	if (kbdPos === 0)
	{
		if (key === "k1")
		{
			if (A === "0" || newEntry)
			{
				A = "1";
				newEntry = false;
			}
			else if (A.length >= DISPLAY_LENGTH)
			{
				// DO NOTHING
			}
			else
			{
				A = A + "1";
			}
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k2")
		{
			if (A === "0" || newEntry)
			{
				A = "2";
				newEntry = false;
			}
			else if (A.length >= DISPLAY_LENGTH)
			{
				// DO NOTHING
			}
			else
			{
				A = A + "2";
			}
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k3")
		{
			if (A === "0" || newEntry)
			{
				A = "3";
				newEntry = false;
			}
			else if (A.length >= DISPLAY_LENGTH)
			{
				// DO NOTHING
			}
			else
			{
				A = A + "3";
			}
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k4")
		{
			if (A === "0" || newEntry)
			{
				A = "4";
				newEntry = false;
			}
			else if (A.length >= DISPLAY_LENGTH)
			{
				// DO NOTHING
			}
			else
			{
				A = A + "4";
			}
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k5")
		{
			if (A === "0" || newEntry)
			{
				A = "5";
				newEntry = false;
			}
			else if (A.length >= DISPLAY_LENGTH)
			{
				// DO NOTHING
			}
			else
			{
				A = A + "5";
			}
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k6")
		{
			if (A === "0" || newEntry)
			{
				A = "6";
				newEntry = false;
			}
			else if (A.length >= DISPLAY_LENGTH)
			{
				// DO NOTHING
			}
			else
			{
				A = A + "6";
			}
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k7")
		{
			if (A === "0" || newEntry)
			{
				A = "7";
				newEntry = false;
			}
			else if (A.length >= DISPLAY_LENGTH)
			{
				// DO NOTHING
			}
			else
			{
				A = A + "7";
			}
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k8")
		{
			if (A === "0" || newEntry)
			{
				A = "8";
				newEntry = false;
			}
			else if (A.length >= DISPLAY_LENGTH)
			{
				// DO NOTHING
			}
			else
			{
				A = A + "8";
			}
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k9")
		{
			if (A === "0")
			{
				A = "9";
				newEntry = false;
			}
			else if (A.length >= DISPLAY_LENGTH)
			{
				// DO NOTHING
			}
			else
			{
				A = A + "9";
			}
			document.getElementById("display").innerHTML = A;
		}
	}
	else if (kbdPos === 1)
	{
		if (key === "k1")
		{
			if (A === "0" || newEntry)
			{
				A = "0";
				newEntry = false;
			}
			else if (A.length >= DISPLAY_LENGTH)
			{
				// DO NOTHING
			}
			else
			{
				A = A + "0";
			}
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k2")
		{
			if (A.indexOf(".", 0) > -1)
			{
				// DO NOTHING
			}
			else if (A.length >= DISPLAY_LENGTH)
			{
				// DO NOTHING
			}
			else if (A === "0" || newEntry)
			{
				newEntry = false;
				A = "0.";
			}
			else
			{
				A = A + ".";
			}
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k3")
		{
			newEntry = true;
			if (opB !== "")
			{
				if (opB === "*" || opB === "/")
				{
					if (opB === "*")
					{
						B = B * parseFloat(A);
					}
					else if (opB === "/")
					{
						B = B / parseFloat(A);
					}
					
					if (opC !== "")
					{
						if (opC === "+" || opC === "-")
						{
							if (opC === "+")
							{
								B = C + B;
							}
							else if (opC === "-")
							{
								B = C - B;
							}
							C = 0;
							opC = "";
						}
					}
					A = "" + B;
				}
				else if (opB === "+")
				{
					A = B + parseFloat(A);
				}
				else if (opB === "-")
				{
					A = B - parseFloat(A);
				}
			}
			opB = "";
			B = 0;
			opC = "";
			C = 0;
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k4")
		{
			newEntry = true;
			if (opB !== "")
			{
				if (opB === "*" || opB === "/")
				{
					if (opB === "*")
					{
						B = B * parseFloat(A);
					}
					else if (opB === "/")
					{
						B = B / parseFloat(A);
					}
					
					if (opC != "")
					{
						if (opC === "+" || opC === "-")
						{
							if (opC === "+")
							{
								B = C + B;
							}
							else if (opC === "-")
							{
								B = C - B;
							}
							C = 0;
							opC = "";
						}
					}
				}
				else if (opB === "+")
				{
					B = B + parseFloat(A);
				}
				else if (opB === "-")
				{
					B = B - parseFloat(A);
				}
			}
			else
			{
				B = parseFloat(A);
			}
			opB = "+";
			A = "0";
//			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k5")
		{
			newEntry = true;
			if (opB !== "")
			{
				if (opB === "*" || opB === "/")
				{
					if (opB === "*")
					{
						B = B * parseFloat(A);
					}
					else if (opB === "/")
					{
						B = B / parseFloat(A);
					}
					
					if (opC != "")
					{
						if (opC === "+" || opC === "-")
						{
							if (opC === "+")
							{
								B = C + B;
							}
							else if (opC === "-")
							{
								B = C - B;
							}
							C = 0;
							opC = "";
						}
					}
				}
				else if (opB === "+")
				{
					B = B + parseFloat(A);
				}
				else if (opB === "-")
				{
					B = B - parseFloat(A);
				}
			}
			else
			{
				B = parseFloat(A);
			}
			opB = "-";
			A = "0";
//			document.getElementById("display").innerHTML = A;
		}		
		else if (key === "k6")
		{
			newEntry = true;
			A = "0";
			opB = "";
			B = 0;
			opC = "";
			C = 0;
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k7")
		{
			newEntry = true;
			if (opB !== "")
			{
				if (opB === "*" || opB === "/")
				{
					if (opB === "*")
					{
						B = B * parseFloat(A);
					}
					else if (opB === "/")
					{
						B = B / parseFloat(A);
					}
				}
				else if (opB === "+" || opB === "-")
				{
					C = B;
					opC = opB;
					B = parseFloat(A);
				}
			}
			else
			{
				B = parseFloat(A);
			}
			opB = "*";
			A = "0";
//			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k8")
		{
			newEntry = true;
			if (opB !== "")
			{
				if (opB === "*" || opB === "/")
				{
					if (opB === "*")
					{
						B = B * parseFloat(A);
					}
					else if (opB === "/")
					{
						B = B / parseFloat(A);
					}
				}
				else if (opB === "+" || opB === "-")
				{
					C = B;
					opC = opB;
					B = parseFloat(A);
				}
			}
			else
			{
				B = parseFloat(A);
			}
			opB = "/";
			A = "0";
//			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k9")
		{
			newEntry = true;
			A = "0";
			document.getElementById("display").innerHTML = A;
		}
	}
	else if (kbdPos === 2)
	{
		if (key === "k1")
		{
			newEntry = true;
			A = "" + (Math.log(parseFloat(A)) / Math.log(10));
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k2")
		{
			newEntry = true;
			A = "" + (Math.log(parseFloat(A)));
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k3")
		{
			newEntry = true;
			A = "" + (Math.pow(2, parseFloat(A)));
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k4")
		{
			newEntry = true;
			A = "" + (1 / parseFloat(A));
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k5")
		{
			newEntry = true;
			A = "" + (Math.pow(10, parseFloat(A)));
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k6")
		{
			newEntry = true;
			A = "" + (Math.pow(Math.E, parseFloat(A)));
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k7")
		{
			if (A === "0" || newEntry)
			{
				// DO NOTHING
			}
			else
			{
				if (A.indexOf("-", 0) == -1)
				{
					A = "-" + A;
				}
				else if (A.indexOf("-", 0) == 0)
				{
					A = A.substring(1, A.length);
				}
			}
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k8")
		{
			newEntry = true;
			A = "" + (parseFloat(A) * parseFloat(A));
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k9")
		{		
			newEntry = true;
			A = "" + (Math.sqrt(parseFloat(A)));
			document.getElementById("display").innerHTML = A;
		}
	}
	else if (kbdPos === 3)
	{
		if (key === "k1")
		{
			if (mode === "RAD")
			{
				mode = "DEG";
				document.getElementById("key1").innerHTML = "DEG";
			}
			else if (mode === "DEG")
			{
				mode = "GRAD";
				document.getElementById("key1").innerHTML = "GRAD";
			}
			else if (mode === "GRAD")
			{
				mode = "RAD";
				document.getElementById("key1").innerHTML = "RAD";
			}
		}
		else if (key === "k2")
		{
			newEntry = true;
			var n = 1;
			for (var i = 1; i <= parseFloat(A); i++)
			{
				n = n * i;
			}
			A = "" + n;
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k3")
		{
			newEntry = true;
			A = "" + Math.PI;
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k4")
		{
			newEntry = true;
			var angle = Math.asin(parseFloat(A));
			if (mode === "DEG")
			{
				angle = angle * 180 / Math.PI;
			}
			else if (mode === "GRAD")
			{
				angle = angle * 200 / Math.PI;
			}
			A = "" + angle;
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k5")
		{
			newEntry = true;
			var angle = Math.acos(parseFloat(A));
			if (mode === "DEG")
			{
				angle = angle * 180 / Math.PI;
			}
			else if (mode === "GRAD")
			{
				angle = angle * 200 / Math.PI;
			}
			A = "" + angle;
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k6")
		{
			newEntry = true;
			var angle = Math.atan(parseFloat(A));
			if (mode === "DEG")
			{
				angle = angle * 180 / Math.PI;
			}
			else if (mode === "GRAD")
			{
				angle = angle * 200 / Math.PI;
			}
			A = "" + angle;
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k7")
		{
			newEntry = true;
			var angle = parseFloat(A);
			if (mode === "DEG")
			{
				angle = angle * Math.PI / 180;
			}
			else if (mode === "GRAD")
			{
				angle = angle * Math.PI / 200;
			}
			A = "" + Math.sin(angle);
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k8")
		{
			newEntry = true;
			var angle = parseFloat(A);
			if (mode === "DEG")
			{
				angle = angle * Math.PI / 180;
			}
			else if (mode === "GRAD")
			{
				angle = angle * Math.PI / 200;
			}
			A = "" + Math.cos(angle);
			document.getElementById("display").innerHTML = A;
		}
		else if (key === "k9")
		{
			newEntry = true;
			var angle = parseFloat(A);
			if (mode === "DEG")
			{
				angle = angle * Math.PI / 180;
			}
			else if (mode === "GRAD")
			{
				angle = angle * Math.PI / 200;
			}
			A = "" + Math.tan(angle);
			document.getElementById("display").innerHTML = A;
		}
	}
}

( 
	function () 
	{
		
		window.addEventListener('tizenhwkey', function(event) 
				{
					if (event.keyName == "back") 
					{
						var page = document.getElementsByClassName('ui-page-active' )[0], pageid = page ? page.id : "";
						if (pageid === "main") 
						{
							tizen.application.getCurrentApplication().exit();
						} 
						else 
						{
							window.history.back();
						}
					}
				});

	}() 
);

