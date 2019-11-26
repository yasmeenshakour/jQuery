// I get an error about a property I don' t have getCurrent,I talked to Drew and she did not know what to do about it. My code works anyway. Just letting you know!
$("#ch3form").submit(function(){
  console.log("checking if submit is working");
  if(!$('input[name="fruit"]:checked').val()){
    alert("You must pick a fruit!");
    return false;
  }
  else if (!$('input[name="standing"]:checked').val()) {
    console.log("furit checked but standing not checked")

      alert("You must pick a standing!");
      return false;

  }
});
