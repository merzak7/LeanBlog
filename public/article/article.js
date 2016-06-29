var article=angular.module('Article',[]);


article.service('ArticleServices',function(){
		var article={};
		this.getArticle=function(){
			return article;
		}
		this.setArticle=function(art){
			article=art;
		}
});

article.controller('ArticleCtrl',function($scope,$location,$resource,ArticleServices){
	
	//$scope.article="first article";

	var res=$resource("http://localhost:8000/posts");//:id",{id:'@id'},{action:{method :"GET"}});
	  $scope.articles=res.query();

	 $scope.getArticle=function(article){
	 	ArticleServices.setArticle(article);
	 	$location.path('/article_detail');
	 } 
});

article.controller('Article_detailCtrl',function($scope,ArticleServices){
	$scope.article=ArticleServices.getArticle();
});