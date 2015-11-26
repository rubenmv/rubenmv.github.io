---
layout: post
title: El Autómata celular
---

El segundo tipo de algoritmo que vamos a estudiar entra dentro de los algoritmos utilizados para representar sistemas naturales, como cuevas, bosques o manadas de animales.

El concepto de **autómata celular** fue presentado originalmente en los **años 40** por Stanislaw Ulam y John Von Neumann cuando trabajaban en el laboratorio nacional de Los Alamos. Fue estudiado ocasionalmente durante las siguientes dos décadas pero no fue hasta los 70 en que **John Horton Conway** creó el “Juego de la vida” ([Conway’s Game Of Life](http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)) que despertó el interés en el entorno académico.

##Conway’s Game Of Life
Este juego consiste en una serie de puntos llamados células que evolucionan con el tiempo basándose en la interacción con sus vecinas. Si una célula tiene **menos de dos** vecinas, entonces **muere**, debido a la falta de población, con **dos o tres** vecinas se mantiene **viva** durante esa generación, si tiene **más de tres** entonces **muere** por sobrepoblación. Si una célula muerta (un espacio vacío) tiene exactamente tres vecinos, entonces esta se convierte en una célula viva, representando un proceso de reproducción.

Antes de comenzar el juego se establecen ciertas condiciones para la situación inicial, pero a partir de ahí el jugador no tiene más interacción con este, el juego evoluciona por sí solo.

![Game of life]({{ site.baseurl }}images/posts/2015-03-25-El-Automata-celular/Game-Of-Life.gif)

Durante los **años 80 Stephen Wolfram** se ocupó del estudio del autómata celular sobre una sola dimensión, y en 2002 publicó su libro “**Un nuevo tipo de ciencia**”, donde argumenta que este tipo de métodos pueden ser utilizados en otros campos de la ciencia como la criptografía.

##Aplicación para generación procedural de cuevas
**Jim Badcock** publicó hace unos años su aplicación de los [autómatas celulares en la creación procedimental de cuevas](http://www.jimrandomh.org/misc/caves.html), mostrando su potencial para la representación de sistemas naturales, al menos como base, ya que el proceso requiere un refinamiento posterior.

El **proceso** consiste en lo siguiente:

1. Generamos un lienzo inicial utilizando la técnica de ruido blanco, es decir, dividimos el mapa en celdas y las recorremos decidiendo aleatoriamente si esta se rellena o se queda vacía. Para evitar situaciones no deseables o extrañas establecemos un porcentaje que indique la probabilidad de que esta se convierta en pared. Por ejemplo, decimos que la probabilidad es del 40%, generamos un número aleatorio entre 0 y 100 y si este es inferior o igual al 40 entonces generamos una pared.

2. Recorremos el mapa de nuevo ahora aplicando las reglas del autómata celular:
  * Si la celda es pared y tiene menos de 3 vecinas de tipo pared, entonces se convierte en espacio vacío.
  * Si la celda está vacía y tiene 5 o más vecinas de tipo pared, entonces esta también se convierte en pared.

3. Cuando hemos recorrido todas las celdas el algoritmo termina, aunque es posible realizar más iteraciones, dependiendo de los resultados a obtener.

Vamos a ver ejemplos generados a partir de la implementación que he realizado sobre Unity:

![Cellular automata 1]({{ site.baseurl }}images/posts/2015-03-25-El-Automata-celular/cellular-automata-1.PNG)
Tablero inicial generado aleatoriamente con una probabilidad de paredes del 35%.

![Cellular automata 2]({{ site.baseurl }}images/posts/2015-03-25-El-Automata-celular/cellular-automata-2.PNG)
Este es el resultado al terminar el algoritmo con un solo pase, podemos ver que se generan zonas o espacios abiertos distinguibles unos de otros. También observamos uno de los problemas del algoritmo, y es que es poco consistente, y muy frecuentemente obtenemos zonas inconexas que deberemos procesar posteriormente para unirlas al sistema principal de habitaciones. A veces estas zonas desconectadas están separadas simplemente por distancias de 1 o 2 celdas, pero como podemos ver en este mismo ejemplo, en la zona superior derecha tenemos una zona relativamente grande con una separación de la zona principal de al menos 3 celdas, por lo que resultaría difícil determinar programáticamente como esa zona debería unirse.

Por otro lado esto puede ser interesante para juego como Minecraft, donde podemos encontrar en cuevas, con mucha frecuencia, zonas totalmente aisladas a las que se debe acceder usando el pico o la pala. En ese caso específico este algoritmo parece actuar correctamente.

![Cellular automata 3]({{ site.baseurl }}images/posts/2015-03-25-El-Automata-celular/cellular-automata-3.PNG)
Aquí tenemos otro ejemplo, esta vez con dos pases. Ahora hemos conseguido que todos los espacios estén conectados de alguna manera. También se han eliminado celdas sueltas de una unidad al realizar este segundo pase, lo cual puede ser beneficioso para eliminar ruido innecesario pero al mismo tiempo perjudicial porque le quita un poco de la aleatoriedad que podemos encontrar en las cuevas naturales.

Otro problema de realizar este segundo pase es que perdemos la distinción entre las distintas secciones o habitaciones de la cueva, por lo que nos queda un espacio abierto con algunos rincones más cerrados.

![Cellular automata 4]({{ site.baseurl }}images/posts/2015-03-25-El-Automata-celular/cellular-automata-4.PNG)
Con los mismo parámetros pero con diferentes dimensiones. Conseguimos conectar todos los espacios pero el centro está demasiado despoblado.

![Cellular automata 5]({{ site.baseurl }}images/posts/2015-03-25-El-Automata-celular/cellular-automata-5.PNG)
Si subimos la probabilidad de paredes al 40% y al realizar dos pases obtenemos un resultado mejor.

Conclusión
Haciendo varias pruebas puedo llegar a la conclusión de que los mejores resultados los obtengo con una probabilidad de obtener paredes del 35% al 40% y uno o dos pases según este porcentaje, cuanto más se acerca al 40% mejores resultados obtendremos con dos pases que solo con uno.

Uno de los principales problemas con este algoritmo, como ya hemos visto, es el poco control sobre el resultado final, demasiadas aleatoriedad en la creación de los distintos espacios que componen la cueva.
