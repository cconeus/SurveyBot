survey.controller('Question1Controller', function Question1Controller($scope, QuestionsFactory){
  $scope.answers = QuestionsFactory.quest1answers;
  $scope.QuestionsFactory = QuestionsFactory;
});
