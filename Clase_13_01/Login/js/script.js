$(document).ready(function(){

// CLAVE
    $('#togglePassword').on('click', function(){
        const passwordField = $('#password');
        const icon = $(this).find('i');

        if (passwordField.attr('type')=== 'password'){
            passwordField.attr('type', 'text');
            icon.removeClass('fa-eye').addClass('fa-eye-slash')
        }else{
            passwordField.attr('type', 'password');
            icon.removeClass('fa-eye-slash').addClass('fa-eye')
        }

    });

    // validacion tiempo real 
    $('#email').on('input', function(){
        const email =$(this).val().trim();
        if (email && !validarEmail(email)){
            mostrarError('email', 'Email inválido');
        }else{
            limpiarError('email')
        }
    });

//validacion de clave
    $('#password').on('input', function(){
        const password= $(this).val();
        const length= password.length;  //"hola1234" -> 8 caracteres


        //hint con contador
            if(password){
                $('#passwordHint small').html(
                    `<i class="fas fa-info-circle"></i>
                    Caracteres: ${length}/12 ${length >= 8 && length <=12} ? '✓' : ''}`
                );
                
                if (length <8){
                    $('#passwordHint small').css('color', '#dc3545');
                    mostrarError('password', 'Minimo 8 caracteres');

                } else if (length>12){
                    $('#passwordHint small').css('color', '#dc3545');
                    mostrarError('password', 'Maximo 12 caracteres');
                
                }else{
                    $('#passwordHint small').css('color', '#28a745');
                    limpiaError('password');
                }

            }else{
                $('#passwordHint small').html(
                    `<i class="fas fa-info-circle"></i> Debe  tener entre 8 y 12 caracteres`
                ).css('color', '#6c757d');
                limpiaError('paswword');
            }

    });


});