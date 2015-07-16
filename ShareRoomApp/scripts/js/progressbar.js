$(function() {
  var $pb = $('.progress-bar:first');
  var $pb2 = $('.progress-bar:last');  
  $("#items :checkbox").click(function() {
    if($("#items :checked").length == 1) {
      $pb.attr({
        'style':'width:33%;',
        'class':'progress-bar'  
      }).html("33%");
      } else if($("#items :checked").length == 2) {
      $pb.attr({
        'style':'width:66%;',
        'class':'progress-bar'  
      }).html("66%");
      } else if($("#items :checked").length == 3) {
        $("#goal").html("目標達成！");
      $pb.attr({
        'style':'width:100%;',
        'class':'progress-bar progress-bar-striped active'  
      }).html("100%");
      } else {
      $pb.attr({
        'style':'width:0%;',
        'class':'progress-bar'  
      }).html("0%");
    }
  });
  $("#items2 :checkbox").click(function() {
    if($("#items2 :checked").length == 1) {
      $pb2.attr({
        'style':'width:33%;',
        'class':'progress-bar'  
      }).html("33%");
      } else if($("#items2 :checked").length == 2) {
      $pb2.attr({
        'style':'width:66%;',
        'class':'progress-bar'  
      }).html("66%");
      } else if($("#items2 :checked").length == 3) {
          $("#goal2").html("目標達成！");

      $pb2.attr({
        'style':'width:100%;',
        'class':'progress-bar progress-bar-striped active'  
      }).html("100%");
      } else {
      $pb2.attr({
        'style':'width:0%;',
        'class':'progress-bar'  
      }).html("0%");
    }
  });

});


