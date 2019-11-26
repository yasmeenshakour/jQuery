$("#useBilling").click(function(){
  let home = $("#home");
  if (this.checked){
    home.val($("#billing").val());
    home.prop("disabled", true);}
  else {
    home.val("");
    home.prop("disabled", false);}
});
