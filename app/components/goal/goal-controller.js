GoalController();
function GoalController(){
	var goalService = new GoalService();
	
	function showGoal(goal){
		var template =  `<div class="goal">
                    		<span class="goal-text-normal">
								${goal.text}
                        	<i class="fa fa-check complete-goal-btn" goal-id="${goal.id}"></i>
                    		</span>
                		</div>`
		$('.goal-list').prepend(template)
	}

	$.get('/inspire/-goals.html', function(data){
    	$('.main-container').append(data)
		updateAllGoals()
	})

	function updateAllGoals(){
		var goalsAtRunTime = goalService.getGoals().all
		for(var goal in goalsAtRunTime){
			console.log(goal)
			showGoal(goalsAtRunTime[goal])
		}
	}

	
	$('body').on('submit', '#add-goal-form', function(event){
		event.preventDefault();
		var goalText = $('#add-goal-input').val()
		console.log(goalText)

		var newGoal = goalService.createGoal(goalText)
		console.log(goalService.getGoals())
		showGoal(newGoal)
		$('#add-goal-input').val("")
		// var newGoal = goalService.createGoal()
	})

	$('body').on('click', '.complete-goal-btn', function(event){
		$(this).parents('.goal').remove();
		goalService.destroyGoal($(this).attr('goal-id'))
	})
}