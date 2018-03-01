var app = angular.module('App', []);
app
  .controller('AppController', ['$scope','$filter',  function ($scope, $filter) {
	$scope.tasks = [];
	var checkedTasks = [];
	$scope.editIndex = false;
	$scope.addTask = function () {
		if (!$scope.task) {
			return;
		}

		$scope.tasks.push({task: $scope.task, checked: false});
		$scope.task = '';
	}

	$scope.checkTask = function(index) {
		$scope.tasks[index].checked = true;
	}

	$scope.deleteTask = function (index) {
	  $scope.tasks.splice(index, 1);
	}

	$scope.deleteTasks = function (index) {
		checkedTasksArray = [];
		for (var i = 0; i < $scope.tasks.length; i++) {
			if ($scope.tasks[i].checked) {
				checkedTasksArray.push(i);
			}
		} 
		
		for(var i = checkedTasksArray.length - 1; i >= 0; i--){
			$scope.deleteTask(checkedTasksArray[i]);
		}
	}

  }])