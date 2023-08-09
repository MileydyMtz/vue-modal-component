# Documentacion del componente TheModal
## Descripcion:
Este componente permite crear un modal o una ventana emergente. La ventana modal incluye un título opcional, un contenido personalizable a través de slots y la opción de emitir un evento de cierre. 

## Tecnologías usadas
A continuación se enlistan las tecnologías y librerías utilizadas en el desarrollo de este componente:
* Vue 3
* Preprocesador SCSS
* Vue Test Utils
* Vitest

## Características del componente
### Props
El componente Modal tiene dos propiedades:
* **isOpen** (Requerido): Es un booleano que determina si el modal está abierto o cerrado. Si es true, el modal se abrirá, y si es false, se cerrará.
* **title** (Opcional): Es un string que representa el título del modal. Si no se proporciona, el título por defecto será una cadena vacía ('').

### Slots
El componente tiene dos slots:
* El slot por defecto se utiliza para el contenido principal del modal.
* El slot con nombre 'footer' se utiliza para el contenido del pie de página del modal. Esto es útil si quieres tener botones de acción como 'Aceptar' y 'Cancelar', por ejemplo, en el pie de página del modal.

### Método
* **close()**: Este método emite un evento de cierre que debe ser manejado en el componente padre para cambiar la propiedad *isOpen* a false.

### Estilos
* Los estilos están definidos en la sección de <style> y usan la extencion .scss.
* Los estilos están "scoped", lo que significa que solo se aplicarán a este componente y no afectarán a otros componentes de la aplicación donde se reutilice.
* Contiene los estilos necesarios para que el modal se centre y se superponga a todo en la página con una semi-transparencia.
* Se puede modificar la variable *$modal-background-color*, para cambiar el color de fondo del modal.

## Uso del componente
Para utilizar este componente, primero se debe descargar el archivo *TheModal.vue* que se encuentra dentro de *src/components* y agregarlo al proyecto donde se reutilizara. 

Posteriormente mediante la etiqueta *TheModal* se debe agregar el titulo y la información que se quiera mostrar.

A continuación, un ejemplo:

```vue 
<template>
<div>
    <button @click="openModal">Abrir modal</button>

    <TheModal :isOpen="isModalOpen" @close="closeModal" title="The Modal">

        <p>Mi contenido personalizado</p>

        <template v-slot:footer>
            <button @click="closeModal">Cerrar</button>
        </template>
    </TheModal>
</div>
</template>

<script>
import TheModal from './components/TheModal.vue'

export default {
    components: {
        TheModal
    },
    data() {
        return {
            isModalOpen: false
        }
    },
    methods: {
        openModal() {
            this.isModalOpen = true
        },
        closeModal() {
            this.isModalOpen = false
        }
    }
}
</script>

```

## Demostración
El ejemplo anterior se encuentra en el archivo *App.vue*, en el, se importa el componente modal y mediante un botón que, al hacer clic, invoca al método *openModal* se cambia el valor de *isModalOpen* a verdadero (true), y el modal se abre. 
Dentro del modal, se especifica un título, "The Modal", y se proporciona algún contenido personalizado en forma de texto.

En la sección <slot name="footer">, hay otro botón que, al hacer clic, invoca al método *closeModal*. Este método cambia el valor de *isModalOpen* a falso (false), cerrando el modal. Este botón actúa como el control de cierre del modal.

La implementación de este componente se puede ver de la siguiente forma:

**Visualización del Modal**

![the modal](https://github.com/MileydyMtz/vue-modal-component/assets/85470047/90db4d2f-56ed-43af-aef2-ba0bae97d248)


## Pruebas
Se utiliza la biblioteca Vitest para correr las pruebas y @vue/test-utils para montar el componente.

A continuación, se muestran las pruebas implementadas:
* **Renders title properly**: Esta prueba verifica que el título se está renderizando correctamente en el componente TheModal. Crea un wrapper para el componente con isOpen en true y un título de "Test Modal", luego verifica si ese título está contenido en el texto renderizado del componente.
* **Is hidden when isOpen is false**: Esta prueba verifica que el componente TheModal está oculto cuando la propiedad isOpen es false. Crea un wrapper para el componente con isOpen en false y un título de "Test Modal", luego verifica que el componente no es visible.
* **Emits close event on close method call**: Esta prueba verifica que el componente TheModal emite un evento close cuando se llama al método close. Crea un wrapper para el componente con isOpen en true y un título de "Test Modal", luego llama al método close en la instancia del componente y verifica que el evento close fue emitido.

