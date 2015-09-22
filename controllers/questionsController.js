survey.controller('QuestionsController', function QuestionsController($scope, QuestionsFactory){
  $scope.answers1 = QuestionsFactory.question1answers;
  $scope.answers2 = QuestionsFactory.question2answers;
  $scope.QuestionsFactory = QuestionsFactory;
});
