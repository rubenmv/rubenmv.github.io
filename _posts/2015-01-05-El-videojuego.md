---
layout: post
title: El videojuego
---
Aunque acompañaré el proyecto con un documento de diseño detallado sobre el videojuego, voy a explicar brevemente la idea principal de este y que elementos incluirá para hacernos una idea.

##Descripción y objetivos
Se basa en los clásicos juegos estilo rogue-like, pero trasladado a un entorno de aventuras y puzles tipo The Legend of Zelda (como el de Super Nintendo).

El personaje principal tendrá una barra de vida, distintas armas (solo una equipada), objetos para recuperar vida, objetos especiales de misión...

Consistirá en un mapa externo donde encontraremos acceso a las distintas mazmorras y posiblemente a alguna tienda donde comprar pociones y otros objetos.

Por otro lado tendremos las mazmorras. Estas se generan de manera procedimental, siendo siempre distintas al salir y volver a entrar o al morir completamente y reiniciar el juego desde el mapa o siendo iguales siempre dentro de la misma partida, según vea cual es el método más divertido y menos frustrante.

Las mazmorras consistirán en:

* Habitaciones conectadas entre sí por pasillos.
* Objetos comunes para mejorar o recuperar la vida.
* Objetos tipo armas arrojadizas.
* Objetos especiales de mazmorra como puedan ser mapas, brújulas, llaves para abrir puertas o cofres...
* Enemigos que pueden atacar al personaje y este también puede atacarlos usando el arma principal o lo que se encuentre por el camino.
* Trampas como paneles de pinchos, fosos, cofres falsos...
* Cada habitación tiene un rol (puzle, llave, etc.)
* Jefe final de mazmorra (Objetivo opcional)

Tanto la distribución de las habitaciones como de todo lo demás se generará de manera procedimental, siempre habiendo un mapa y un jefe (Objetivo opcional). Los demás elementos variarán según la dificultad que se le quiera imprimir a la mazmorra, que irá aumentando según se conquisten más mazmorras.

El número de mazmorras será fijo (unas 7 u 8) y el juego tendrá un final o quizá lo haga infinito, llegando a un nivel en que las mazmorras no se sean más grandes o complicadas pero la dificultad sea suficiente para que el jugador experimentado pueda morir con la misma posibilidad. Esto lo decidiré cuando haga pruebas sobre una versión casi terminada del juego, ya que no sería muy difícil intercambiar entre ambas.

##Aspecto visual
Visualmente será un juego 3D con vista aérea, posiblemente tipo isométrica u ortográfica como la que podemos encontrar en el juego Monument Valley.

El aspecto en general tendrá un estilo con formas simples y con texturas pixeladas como vemos en Minecraft que le dan un toque a dibujo animado, como podemos ver en la textura de tierra y césped.

![Textura minecraft]({{ site.baseurl }}{{ site.post_images }}2015-01-05-El-videojuego/minecraft-textura.jpg)

Los objetos en general serán modelos 3D, pero es posible que utilice sprites 2D para personajes y enemigos. Esta técnica visual se conoce como [billboarding][1] y se refiere a que los sprites siempre miran a cámara, como lo hacía Doom. Además porque es un técnica que me agrada, otro de los motivos de escoger este estilo es porque los modelos 3D son más difíciles de animar correctamente y no es ese el objetivo del proyecto. En cualquier caso, si al final escogiera 3D para los modelos de los personajes, intentaría hacer algo simple, formado por cubos, que no necesite mucha animación y trabajo de texturas.

[1]: <http://www.gamasutra.com/view/feature/130911/dynamic_2d_imposters_a_simple_.php>

##Herramientas
**Motor de juego**<br/>
Debido a que el objetivo principal del juego es demostrar la generación procedimental de las mazmorras se va a utilizar Unity en su versión free como motor de juego. Unity proporciona diversas herramientas integradas con un editor, estas incluyen un motor gráfico, motor de físicas, sistema de audio y sistema de GUI entre otros, suficiente para cubrir las necesidades de desarrollo.

**Diseño de assets**<br/>
Para los elementos 2D del juego como los botones de menú, títulos y resto de elementos del HUD, así como otros elementos 2D como texturas se utilizará The Gimp o Paint.net, ambos editores gratuitos. Para el diseño de los assets 3D se hará uso de Blender.

##Requisitos hardware y software
Estos son los requisitos que deberá cumplir el sistema cliente para ejecutar el juego:

* Windows 7 o superior.
* Teclado y ratón o mando de juego con soporte para XInput.
* Sistemas basados en Linux.
* Tarjetas gráficas HD Intel 3000 o superior, NVIDIA o ATI.