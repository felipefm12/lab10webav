import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';

  onSubmit() {
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);

    // Abre una nueva ventana con los datos del formulario
    const nuevaVentana = window.open('', '_blank');
    if (nuevaVentana) {
      nuevaVentana.document.write(`
        <html>
          <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
          </head>
          <body>
            <div class="container mt-4">
              <h2>Datos del formulario</h2>
              <p><b>Nombre:</b> ${this.nombre}</p>
              <p><b>Email:</b> ${this.email}</p>
            </div>
          </body>
        </html>
      `);
      nuevaVentana.document.close();
    }
  }

  actualizarEstadoFormulario(form: any) {
    form.controls['nombre'].markAsTouched();
    form.controls['email'].markAsTouched();
  }

  confirmarEnvio() {
    if (confirm('¿Estás seguro de que deseas enviar el formulario?')) {
      this.onSubmit();
    }
  }
}
