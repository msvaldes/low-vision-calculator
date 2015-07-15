function computeVision(boxChanged) {
  var box11 = parseInt( $("#box11").val() );
  var box12 = parseInt( $("#box12").val() );
  var box13 = parseInt( $("#box13").val() );
  var box14 = parseInt( $("#box14").val() );

  var box21 = parseInt( $("#box21").val() );
  var box22 = parseInt( $("#box22").val() );
  var box23 = parseInt( $("#box23").val() );
  var box24 = parseInt( $("#box24").val() );

  var box31 = parseInt( $("#box31").val() );
  var box32 = parseInt( $("#box32").val() );
  var box33 = parseInt( $("#box33").val() );
  var box34 = parseInt( $("#box34").val() );

  var box41 = parseInt( $("#box41").val() );
  var box42 = parseInt( $("#box42").val() );
  var box43 = parseInt( $("#box43").val() );
  var box44 = parseInt( $("#box44").val() );
  var DMOD = box11/box21;
  var DMOS = box12/box22;
  var DTOD = box13/box23;
  var DTOS = box14/box24;
  var NMOD = box31/box41;
  var NMOS = box32/box42;
  var NTOD = box33/box43;
  var NTOS = box34/box44;

  console.log(box11 + " / " + box21 + " = " + box11 / box21);
  console.log(DMOD);
  console.log(DMOS);

  var magnification =  (Math.max(DTOD, DTOS)) / Math.max(DMOD, DMOS);
  $("#magnification").val(magnification);
  $("#evd").val($("#box31").val() / magnification)

  $("#box31").val(box11 / 100);
  $("#box32").val(box12 / 100);
  $("#box41").val(box21 / 100);
  $("#box42").val(box22 / 100);

  // This will update the arbitrary div at the bottom of everything
  // $("#vision").text(magnification);
}

function considerDisabling(idThatChanged) {
  console.log("The ID that changed:", idThatChanged);
  // 1. disable the submit button (you would not be able to click it initially)
  // 2. this function is called whenever a box is changed...
  //    consider checking to see if necessary inputs are present for
  //    the submit button to be able to do something
  // 3. enable the submit button (allow to be clicked if all the inputs are present)
  // 4. disable the submit button if any of the inputs are deleted

  //$("#box31").prop("disabled", true);
  //$("#" + idThatChanged).prop("disabled", true);
}

function calculateEVD(magnification) {
  $("#evd").val($("#box31").val() / magnification)
}
