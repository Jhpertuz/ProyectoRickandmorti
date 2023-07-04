 let validation = (data) =>{
    let errors={}

    if(!data.email.includes('@')){
        errors.e1='✘ Email incorrecto';
    }
    if(!data.email){
        errors.e2='✘ Ingrese Email';
    }
    if(data.email.lemgth>35){
        errors.e3='✘ Menos de 35 Caracteres'
    }

    if(!/\d/.test(data.password)){
        errors.p1= '✘ Debe contener al menos un Numero'
    }
    if(data.password.lemgth<6 || data.password.lemgth>10){
        errors.p2='✘ Longitud Incorrecta! Debe contener entre 6 y 10 caracteres.'}

        return errors;
}

export default validation;