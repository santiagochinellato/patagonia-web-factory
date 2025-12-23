<?php
// Configuración: Correo de destino actualizado
$destinatario = "info@interpracsys.com";
$asunto = "Nuevo contacto desde el sitio web";

// Verificar que el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 1. Recoger y sanitizar los datos
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    
    $lab = strip_tags(trim($_POST["lab"]));
    
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    
    $message = trim($_POST["message"]);

    // 2. Validaciones básicas
    if ( empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
		echo json_encode(['success' => false, 'message' => 'Nombre y email son obligatorios']);
        exit;
    }

    // 3. Construir el cuerpo del correo
    $contenido_email = "Has recibido un nuevo mensaje de contacto.\n\n";
    $contenido_email .= "Nombre: $name\n";
    $contenido_email .= "Laboratorio: $lab\n";
    $contenido_email .= "Email: $email\n\n";
    $contenido_email .= "Mensaje:\n$message\n";

    // 4. Cabeceras del correo
    // IMPORTANTE: El 'From' debe ser un correo real de tu dominio (ej: noreply@interpracsys.com)
    // para que los servidores no rechacen el correo.
    $headers = "From: noreply@interpracsys.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // 5. Enviar el correo
    if (mail($destinatario, $asunto, $contenido_email, $headers)) {
		http_response_code(200);
		 echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente']);
       
       // http_response_code(200);
      //  echo "¡Gracias! Tu mensaje ha sido enviado.";
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje']);
        
    }

} else {
    // Acceso directo no permitido
    http_response_code(403);
 
	echo json_encode(['success' => false, 'message' => 'Hubo un problema con tu envío, intenta de nuevo.']);
}
?>