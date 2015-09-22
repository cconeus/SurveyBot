survey.controller('Question1Controller', function Question1Controller($scope, QuestionsFactory){
  $scope.answers = QuestionsFactory.question1answers;
  $scope.QuestionsFactory = QuestionsFactory;
});
