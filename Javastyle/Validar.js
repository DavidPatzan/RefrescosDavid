function Ingresar()
{
    var usuario="David";
    var contraseña="examen";

    if (document.frmingreso.txtusuario.value==usuario &&
        document.frmingreso.txtcontraseña.value==contraseña)
        {
            document.location="Inicio.html"

        }
        else
        {
            alert("Ingrese el usuario y contraseña correctamente")
        }
}
