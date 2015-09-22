survey.controller('Question2Controller', function Question2Controller($scope, QuestionsFactory){
  $scope.answers = QuestionsFactory.question2answers;
  $scope.QuestionsFactory = QuestionsFactory;
});
