/* 
    Created by sunmonu-Adedeji Olawale tex['id'+(outerIndex+1)]
*/
formsApp.controller('HomeCtrl',['$scope','$http','api',function($scope,$http,api){
    console.log('Loaded Home Page');
    $scope.questions = [{id:'question1',name:'question1',answer:'answer1',choices:[{id:1,choice:'1'}]}, {id:'question2',name:'question2',answer:'answer2',choices:[{id:2,choice:'2'}]}];
    $scope.answers = [{id:'answer1',name:'answer1'}];
    //$scope.multiplechoices = [{id:1,name:'multiplechoices1'}]
    $scope.answer_options = [{id:1,answer:'Multiple Choice'},{id:2,answer:'Short Text'},{id:3,answer:'Yes/No'},{id:3,answer:'Date'},{id:4,answer:'Legal'}];
    $scope.tex = [];
    $scope.answSent =[];
    $scope.choi = [];
    $scope.showAddQuestion = (question) =>{
        return question.id === $scope.questions[$scope.questions.length-1].id;
    }
    $scope.addNewQuestion = () =>{
        var newQuestion = $scope.questions.length + 1;
        $scope.questions.push({id: 'question'+newQuestion, name:'question '+newQuestion,choices:[{id:newQuestion}]});
    }
    $scope.addNewChoice = (index) => {
       
        // var newChoice = $scope.questions[index].choices.length+1;
        $scope.questions[index].choices.push({id:'',choice:''});
        return;
    }

    $scope.removeNewChoice = (index) => {
        
        if($scope.questions[index].choices.length -1 != 0 ){
            $scope.questions[index].choices.pop();
        }
        return;
    }

    $scope.removeNewQuestion = () => {
        var newQuestionNo = $scope.questions.length -1;
        if(newQuestionNo != 0){
            $scope.questions.pop();
        }
    }
    $scope.submitQuestions = (questions,answer_type,choice) => {
        // console.log('Choice is ',choice);
        console.log('The Questions are ',questions);
        console.log('The type of answers are ',answer_type);
        console.log('The choices selected for the questions are ',choice);
        debugger;
    }
}]);