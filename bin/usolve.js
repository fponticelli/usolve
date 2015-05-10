(function (console) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
var usolve_AbstractConstraint = function(strength,weight) {
	if(weight == null) weight = 1;
	this.strength = strength;
	this.weight = weight;
};
usolve_AbstractConstraint.__name__ = true;
usolve_AbstractConstraint.prototype = {
	toString: function() {
		return "" + usolve_Strengths.toString(this.strength) + " {" + this.weight + "} (" + Std.string(this.expression) + ")";
	}
};
var usolve_Expression = function() { };
usolve_Expression.__name__ = true;
var usolve_Strength = { __ename__ : true, __constructs__ : ["Required","Strong","Medium","Weak","Strength"] };
usolve_Strength.Required = ["Required",0];
usolve_Strength.Required.toString = $estr;
usolve_Strength.Required.__enum__ = usolve_Strength;
usolve_Strength.Strong = ["Strong",1];
usolve_Strength.Strong.toString = $estr;
usolve_Strength.Strong.__enum__ = usolve_Strength;
usolve_Strength.Medium = ["Medium",2];
usolve_Strength.Medium.toString = $estr;
usolve_Strength.Medium.__enum__ = usolve_Strength;
usolve_Strength.Weak = ["Weak",3];
usolve_Strength.Weak.toString = $estr;
usolve_Strength.Weak.__enum__ = usolve_Strength;
usolve_Strength.Strength = function(symbolicWeight,w2,w3) { var $x = ["Strength",4,symbolicWeight,w2,w3]; $x.__enum__ = usolve_Strength; $x.toString = $estr; return $x; };
var usolve_Strengths = function() { };
usolve_Strengths.__name__ = true;
usolve_Strengths.toString = function(strength) {
	switch(strength[1]) {
	case 0:
		return "Required";
	case 1:
		return "Strong";
	case 2:
		return "Medium";
	case 3:
		return "Weak";
	case 4:
		var w3 = strength[4];
		var w2 = strength[3];
		var s = strength[2];
		return "Strength(" + s + ", " + w2 + ", " + w3 + ")";
	}
};
String.__name__ = true;
Array.__name__ = true;
})(typeof console != "undefined" ? console : {log:function(){}});
