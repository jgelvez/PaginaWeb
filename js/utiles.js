function nombreValido(apellido) {
  return apellido.length > 3;
}
 
 function ofertaValida(oferta){
	return oferta.length > 4
 }
 
 function verificarEmail(mail1,mail2){
	if(mail1!='' && mail2!='')
		return mail1== mail2;
	return false;
}
 function validarFecha(date1,date2){
	
	valuesStart=date1.split("-");
    valuesEnd=date2.split("-");
	
    // Verificamos que la fecha no sea posterior a la actual
            var dateStart=new Date(valuesStart[2],(valuesStart[1]-1),valuesStart[0]);
			
            var dateEnd=new Date(valuesEnd[2],(valuesEnd[1]-1),valuesEnd[0]);
			return dateStart>=dateEnd;
			
            

 }
 
 function password(){
	if($('#pass1').val()=='' || $('#pass2').val()==''){
		return false
	}
	return $('#pass1').val() == $('#pass2').val();
}

