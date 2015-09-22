survey.factory('QuestionsFactory', function Survey(){
  var factory = {};
  factory.question1 = "question 1";
  factory.question2 = "question 2";
  factory.question1answers = [];
  factory.question2answers = [];

  factory.addQuestion1Answer = function(){
    var answer = { text: factory.quest1answer };
    factory.question1answers.push(answer);
    factory.quest1answer = null;
  }

  factory.addQuestion2Answer = function(){
    var answer = { text: factory.quest2answer };
    factory.question1answer.puch(answer);
    factory.quest1answer = null;
  }
  return factory;
});
