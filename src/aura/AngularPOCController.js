({
	handleMessage : function(component, event, helper) {
		var method = event.getParams().payload;
    var action = component.get('c.' + method);

    action.setCallback(this, function(response) {
      var state = response.getState();
      
      if (state === 'SUCCESS') {
        component.find('angular').message(response.getReturnValue());
      }
    });
    
    $A.enqueueAction(action);
	},
    
  handleError : function(component, error, helper) {
    var description = error.getParams().description;
    console.log(description);
  }
})