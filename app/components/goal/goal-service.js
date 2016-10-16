function GoalService(){
	//This service is all setup for you no edits necessary here
	var self = this;
	var _goals = {
			all:{

			},
			xLongTerm:{
				
			},
			longTerm:{

			},
			medTerm:{

			},
			medShortTerm:{
				
			},
			shortTerm:{

			},
			xShortTerm:{

			}
		}
		
	function Goal(text){
		this.text = text;
		this.setTime = Date.now();
		this.achieved = false;
		this.childGoals = {};
		this.id = `${Math.floor(Math.random()*9999999999999999)}${Math.floor(Math.random()*9999999999999999)}${Math.floor(Math.random()*9999999999999999)}`;
	}

	function updateLocalStorage(){
		localStorage.setItem('_goalsJSON', JSON.stringify(_goals));
	}

	extractLocalStorage()
	function extractLocalStorage(){
		var goalDataString = localStorage.getItem('_goalsJSON');
		if(goalDataString){
			var goalDataJSON = JSON.parse(goalDataString);
			_goals = goalDataJSON;
		}else{
			updateLocalStorage()
			var goalDataJSON = JSON.parse(goalDataString);
			_goals = _goalDataJSON;
		}
	}

	self.createGoal = function(text){
		var newGoal = new Goal(text);
		_goals.all[newGoal.id] = newGoal;
		updateLocalStorage();
		return newGoal;
	}
	self.destroyGoal = function(goalId){
		delete _goals.all[goalId];
		updateLocalStorage();
	}
	self.getGoals =  function(){
		return _goals;
	}
	
	self.saveGoals =  function(goals){
		_goals.all = goals;
		updateLocalStorage();
	}
}



// {
// 	"user":{
// 		name:"McCall",
// 		goals:{
// 			xLongTerm:{
				
// 			},
// 			longTerm:{

// 			},
// 			medTerm:{

// 			},
// 			medShortTerm:{
				
// 			},
// 			shortTerm:{

// 			},
// 			xShortTerm:{

// 			}
// 		}
// 	}
// }