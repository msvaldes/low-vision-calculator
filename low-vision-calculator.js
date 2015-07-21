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

  //distance magnifcation
  var magnification =  (Math.max(DTOD, DTOS)) / Math.max(DMOD, DMOS);
  $("#magnification").val(magnification);

  //Near fields population based on distance inputs
  if($("#box31").val()==='') {
    $("#box31").val($("#box11").val() / $("#box11").val()*0.4);
  } else {
    $("#box31").val();
  }

  if($("#box32").val()==='') {
    $("#box32").val($("#box12").val() / $("#box12").val()*0.4);
  } else {
    $("#box32").val();
  }

  if($("#box41").val()==='') {
    $("#box41").val($("#box21").val()/100 * 0.4/$("#box11").val()*100);
  } else {
    $("#box41").val();
  }

  if($("#box42").val()==='') {
    $("#box42").val($("#box22").val()/100 * 0.4/$("#box12").val()*100);
  } else {
    $("#box42").val();
  }

  //Near field target OD and OS
  $("#box33").val($("#box31").val()*$("#box43").val()/$("#box41").val());
  $("#box34").val($("#box32").val()*$("#box44").val()/$("#box42").val());

  //Near Magnification
  var magnificationNear =  (Math.min($("#box41").val()/$("#box43").val(),$("#box42").val()/$("#box44").val() )) ;
  $("#magnificationNear").val(magnificationNear);

  //EVD calcuation
  $("#evd").val($("#box31").val()/magnification);
  $("#evdNear").val(Math.max($("#box33").val(),$("#box34").val()));

  //EVP calcuation
  $("#evpNear").val((1/$("#evdNear").val()));

  // This will update the arbitrary div at the bottom of everything
  // $("#vision").text(magnification);

  // Effective ADD power
  $("#powerAdd").val($("#evpNear").val());

  // Effective ADD working distance
  $("#wdAdd").val(1/$("#powerAdd").val());

  //IHHM calculations
  $("#powerIHHM").val($("#evpNear").val());

  // Effective ADD working distance
  $("#wdIHHM").val(1/$("#powerAdd").val());

  //ISM Power Calculation
  var powerTop =  ($("#evpNear").val()- $("#addISM").val());
  var powerBottom = (1- ($("#addISM").val()*$("#wdISM").val()));
  var powerISMcalc = powerTop/powerBottom;
  $("#powerISM").val(Math.ceil(powerISMcalc));
}

function calculateEVD(magnification) {
  $("#evd").val(Math.max($("#box31").val(), $("#box32").val()) / magnification);
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

function resetForm(){
  document.getElementbyId("myForm").reset();
}
