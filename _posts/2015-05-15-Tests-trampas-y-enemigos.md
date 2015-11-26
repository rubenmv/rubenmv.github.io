---
layout: post
title: Tests de trampas y enemigos
---

Una pequeña actualización sobre el progreso del desarrollo del videojuego: durante esta primera mitad de Mayo he dedicado el tiempo, además de a la documentación, que la tenía un poco abandonada, también a preparar la estructura del juego, el sistema de pantallas y preparar/separar el generador de niveles para utilizarlo en la pantalla de mazmorra. También he comenzado a implementar enemigos y trampas.

## Enemigos
En cuanto a los enemigos de momento tengo algo muy básico, pero he estado sobretodo aprendiendo a manejar las animaciones con Unity, a transicionar de una a otra y también a probar las hitbox cuando el jugador toca o ataca a los enemigos y viceversa ya que, al tener un estilo visual peculiar, con sprites 2D en entornos 3D, es necesario jugar con colliders (tienen que ser 3D) para ver cual es la mejor configuración. Con esto quiero decir que tenemos sprites que son planos, por lo que la profundidad en **z** la debemos determinar manualmente, de manera que la detección cuando el jugador ataca sea correcta pero que al pasar por al lado de un enemigo no colisione sin que realmente parezca que lo haya tocado.

He agregado un **efecto de partículas** para simular **sangre** cuando un enemigo muere, así como un efecto de giro para hacerlo más interesante visualmente.

En las próximas semanas iré **mejorando la IA**, sin algo demasiado complicado, pero quiero que los goblins se acerquen hacia el jugador para atacarle activamente en vez de simplemente patrullar de un lado a otro.

<iframe src="http://gfycat.com/ifr/UnrulyDisfiguredFlee" frameborder="0" scrolling="no" width="432" height="304" style="-webkit-backface-visibility: hidden;-webkit-transform: scale(1);" ></iframe>

También he estado jugando con la cámara y los sprites, para que funcionen como si fueran de tipo **billboard**, con lo que siempre estarían mirando hacia la cámara. Esto es una técnica muy utilizada en videojuegos, inicialmente incluso Doom incluía los persoajes de esta manera, pero más tarde se comenzó a relegar a otros elementos como plantas y árboles, reduciendo así la cantidad de objetos 3D y la subsecuente carga gráfica.

Aún sigo teniendo problemas en mantener a los sprites mirando a la cámara mientras me muevo por la escena al mismo tiempo, pero esto es algo secundario que implementaré mediante algún shader si tengo tiempo antes de la entrega del proyecto.

## Trampas
Con las trampas he pasado un poco más de tiempo y ya tengo los cuatro tipos básicos que tenía pensado para el juego, al menos los cuatro más "complejos".

1. **Panel de pinchos en suelo**: son paneles de los que surgen unos pinchos que dañan al jugador cuando los toca. El panel se activa cada cierto tiempo o cuando el jugador se posiciona encima, según el modo que tenga activo.
2. **Panel de pinchos en pared**: similar al de suelo, estos pinchos son más largos y funcionan siempre en modo automático.
3. **Dispensador de flechas**: un dispensador en la pared que lanza un dardo/flecha a toda velocidad cuando detecta al jugador pasando por delante. Para esto se lanza un rayo mediante un raycast desde la zona baja de la trampa y en dirección hacia adelante de la trampa.
4. **Roca gigante**: se trata de una roca gigantesca que avanza por un pasillo. Se activa cuando el jugador pisa una placa de presión o trigger. Se puede llegar a destruir cuando choca contra una pared.

Los paneles de pinchos, tanto los de pared como los de suelo, tienen un tiempo de comienzo y de repetición, por lo que se pueden sincronizar para que se activen todos a la vez o en diferentes patrones.

<iframe src="http://gfycat.com/ifr/UnrulyFlawedClam" frameborder="0" scrolling="no" width="416" height="324" style="-webkit-backface-visibility: hidden;-webkit-transform: scale(1);" ></iframe>

Lo siguiente es integrar todo esto en la escena con el generador de mazmorra.