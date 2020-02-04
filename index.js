function test(){
	console.log(this)
}
test()
new test()

var obj = {
	a : 10,
	b :20,
	c : function(){
		console.log(this)
	},
	d : function(){
		return (function(){
			console.log(this)
		})()
	},
	e : function(){
		return function(){
			console.log(this)
		}
	},
	g : function(){
		return ()=>{
			console.log(this);
		}
	},
	i : function(){
		return (()=>{
			console.log(this);
		})()
	}
}
obj.c();
console.log("---------");
obj.d();
console.log("---------");
var calle = obj.e();
calle()
console.log("---------");
var callg = obj.g();
callg();
console.log("---------");
obj.i();

function testCallback(func){
	func();
	var obj1 = new func()
	console.log(typeof obj1)
}

function argsFunc(){
	console.log(this);
}
testCallback(argsFunc);

function encloseFunc(func){
	return func
}

function testEnclose(){
	console.log(this)
}
console.log("*********");
var callEnclose = encloseFunc(testEnclose)
callEnclose();
new callEnclose();
console.log("#########");
(function(){
	console.log(this)
	var objIIF ={
		a: 10,
		b :20,
		c : function(){
			console.log(this)
		},
		d : function(){
			return (function(){
				console.log(this)
			})()
		},
		e : function(){
			return function(){
				console.log(this)
			}
		},
		g : function(){
			return ()=>{
				console.log(this);
			}
		},
		i : function(){
			return (()=>{
				console.log(this);
			})()
		}
	}
	objIIF.c();
console.log("---------");
objIIF.d();
console.log("---------");
var calle = objIIF.e();
calle()
console.log("---------");
var callg = objIIF.g();
callg();
console.log("---------");
objIIF.i();
	
})();