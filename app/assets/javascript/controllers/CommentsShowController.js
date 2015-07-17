angular.module("PoliticiansLibrary").controller("CommentsShowController",function($scope,$firebaseArray) {
  var ref = new Firebase("https://brilliant-torch-2715.firebaseio.com/comments");

  $scope.comments = $firebaseArray(ref);

  $scope.addComment = function() {
    $scope.comments.$add({
      author: $scope.newCommentAuthor,
      text: $scope.newCommentText
    });
  };

});
