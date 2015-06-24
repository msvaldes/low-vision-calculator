function computeVision() {
  var box11 = parseInt( $("#box11").val() );
  var box12 = parseInt( $("#box12").val() );
  var box13 = parseInt( $("#box13").val() );
  var box14 = parseInt( $("#box14").val() );

  var box21 = parseInt( $("#box21").val() );
  var box22 = parseInt( $("#box22").val() );
  var box23 = parseInt( $("#box23").val() );
  var box24 = parseInt( $("#box24").val() );

  var box31 = parseInt( $("#box31").val() ) ;
  var box32 = parseInt( $("#box32").val() );
  var box33 = parseInt( $("#box33").val() );
  var box34 = parseInt( $("#box34").val() );

  var box41 = parseInt( $("#box41").val() );
  var box42 = parseInt( $("#box42").val() );
  var box43 = parseInt( $("#box43").val() );
  var box44 = parseInt( $("#box44").val() );

  $("#vision").text(box11 + box12);
}
