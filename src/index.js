angular
  .module('app', ['ui.router'])
  .controller("WizardController", function($state){
  	var vm = this;
        
        //Model
        vm.currentStep = 1;
        vm.steps = [
          {
            step: 1,
            name: "Dados de identificação",
            state: "identificacao"
          },
          {
            step: 2,
            name: "Dados Residenciais",
            state: "residencial"
          },   
          {
            step: 3,
            name: "Dados Profissionais",
            state: "profissional"
          },
          {
            step: 4,
            name: "Dados da Fatura",
            state: "fatura"
          },
          {
            step: 5,
            name: "Documentos Digitalizados",
            state: "documentos"
          },
          {
            step: 6,
            name: "Confirmação",
            state: "confirmacao"
          },
        ];
        vm.user = {};
        
        //Functions
        vm.gotoStep = function(newStep) {
          	for (var i = 0; i < vm.steps.length; i++) {
				if (newStep == vm.steps[i].step) {
          			$state.transitionTo(vm.steps[i].state, {arg:'arg'});
				}
			}
        }
        
        vm.getStepTemplate = function(){
          for (var i = 0; i < vm.steps.length; i++) {
                if (vm.currentStep == vm.steps[i].step) {
                    return vm.steps[i].state;
                }
            }
        }
        
        vm.save = function() {
          alert(
            "Saving form... \n\n" + 
            "Name: " + vm.user.name + "\n" + 
            "Email: " + vm.user.email + "\n" + 
            "Age: " + vm.user.age);
        }
  });
  // .service('todoService', TodoService);
