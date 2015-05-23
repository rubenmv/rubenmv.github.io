---
layout: post
title: Tests de generación en Unity
---

Ya hemos visto tres algoritmos para la generación procedimental de laberintos y
mazmorras. Ahora dejo una implementación en Unity donde podemos realizar pruebas
sobre estos algoritmos.

[Accede a la aplicación desde aquí][1]

**IMPORTANTE**: Esta demostración funciona sobre el **plugin/player de Unity**
para navegadores, que se puede conseguir en [este enlace][2]. Chrome no soporta
este tipo de plugins, por lo que se recomienda utilizar **Firefox**.

[1]: <{{ site.url }}{{ site.baseurl }}resources/TestsGenerators/TestsGenerators.html>
[2]: <https://unity3d.com/webplayer>

### NOTAS SOBRE LOS TEST:

**Growing Tree**: Hace cada paso automáticamente pero podemos escoger el tiempo
entre paso y paso. La opción **Random** modifica como actúa el algoritmo y en
vez de utilizar una pila escoge el siguiente nodo aleatoriamente.

**Cellular automata**: Permite escoger el ancho y largo del mapa, se recomienda
jugar con estos valores. **Passes** indica el número de iteraciones, es decir,
de veces que se aplica el algoritmo de autómata. **Prob. Walls** indica el
número inicial de paredes que se van a generar, se recomiendo mantener en
35-40%.

**BSP Tree**: En esta implementación se realiza un número de iteraciones fijo de
7, por lo que siempre hay que pulsar el botón de Step 8 veces para ver la
generación completa. En ocasiones veremos que no se crean más subdivisiones,
esto es debido a que el tamaño mínimo de la habitación no permite más cortes.

En cuanto a las opciones, se permite escoger el tamaño del tablero y las
dimensiones mínimas de la habitación. Se recomienda no bajar de 20 el tamaño de
la aplicación (actualmente hay un posible bug) y probar con tamaños de mazmorra
grandes, más de 75, ya que se entonces se generan más habitaciones y podemos ver
mejor como funciona el algoritmo.
