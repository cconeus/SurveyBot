survey.factory('QuestionsFactory', function Survey(){
  var factory = {};

  factory.question1 = "What is your favorite color?";
  factory.question1answers = [];

  factory.question2 = "How much wood could a woodchuck chuck if a woodchuck could chuck wood?";
  factory.question2answers = [];

  factory.addQuestion1Answer = function(){
    var answer = { text: factory.quest1answer };
    factory.question1answers.push(answer);
    factory.quest1answer = null;
  }

  factory.addQuestion2Answer = function(){
    var answer = { text: factory.quest2answer };
    factory.question2answers.push(answer);
    factory.quest2answer = null;
  }
  return factory;
});
