var clockApp = angular.module('clockApp', []);

clockApp.directive('clock', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '<canvas id="canvas"></canvas>',
		// templateUrl: '',
		// replace: true
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, element ) {
			
 			element.width = 160;
	 		element.height = 160;
	 		console.log(element);
	 		var context = element[0].getContext("2d");
	 		console.log(context);
	 		setInterval(drwaClock,1000);

		 	function drwaClock(){
		 		var current = new Date();
		 		var hours = current.getHours();
		 		hours = hours > 12 ? hours - 12 : hours;
		 		var minute = current.getMinutes();
		 		//绿色圆环
		 		context.beginPath();
		 		context.arc(80,80,80,0,2*Math.PI);
		 		context.fillStyle = "rgb(24,182,149)";
		 		context.fill();
		 		//灰色画布
		 		context.beginPath();
		 		context.arc(80,80,70,0,2*Math.PI);
		 		context.fillStyle = "rgb(237,237,237)";
		 		context.fill();
		 		//时钟轴 
		 		context.beginPath();
		 		context.arc(80,80,5,0,2*Math.PI);
		 		context.fillStyle = "rgb(97,97,97)";
		 		context.fill();

		 		//画时针
		 		context.save();
				context.translate(80,80);//把相对的原点移动
		 		context.rotate(  hours * 30 * Math.PI / 180 );
		 		context.lineWidth = 3;
		 		context.strokeStyle = "rgb(97,97,97)";

		 		context.beginPath();
		 		context.moveTo(0,0);
		 		context.lineTo(0,-40);
		 
		 		context.stroke();
		 		context.restore();
		 		//分针
		 		context.save();
		 		context.lineWidth = 2;
				context.translate(80,80);//把相对的原点移动
				context.rotate( minute * 6 * Math.PI / 180 );	
		 		context.strokeStyle = "rgb(97,97,97)";

		 		context.beginPath();
		 		context.moveTo(0,0);
		 		context.lineTo(0,-60); 		
		 		context.stroke();
		 		context.restore();
		 	};
		}
	};
});
 

 
clockApp.controller('clockCtrl', ['$scope', function($scope){
	
}]);
