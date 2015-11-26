---
layout: post
title: Generación mediante BSP Tree
---

#Particionado BSP
Esta técnica utiliza el particionado binario para subdividir un espacio utilizando hiperplanos. Las subdivisiones obtenidas son representadas mediante una estructura de datos de tipo árbol, conocida como BSP Tree o Árbol BSP.

#¿Por qué utilizar un árbol BSP?
Cuando vamos a generar un mapa de mazmorra, hay muchas maneras de hacerlo, simplemente podríamos generar rectángulos de tamaños y en posiciones aleatorias y crear una habitación en cada uno, pero esto puede llevar a muchos problemas, como la superposición de habitaciones, espacios entre estas demasiado arbitrarios y extraños, como obtener algunas habitaciones muy juntas y otras muy separadas. Si entonces queremos pulir el algoritmo y arreglar estos problemas la complejidad de la solución se vuelve grande y es más difícil de depurar nuevos problemas.

La misma estructura de un árbol binario nos permite dividir el espacio de manera más o menos regular, manteniendo la consistencia entre el espacio entre habitaciones, los tamaños de estas y permitiéndonos unir mediante pasillos basándonos directamente en la unión de los mismos nodos del árbol.

El método procedería de la siguiente manera:

1. Creamos un plano completo sobre el que vamos a generar las habitaciones de la mazmorra. Este espacio completo es la raíz del árbol.
![bsp tree 1]({{ site.baseurl }}images/posts/2015-04-02-Generacion-mediante-BSP-Tree/bsp_1.PNG)
2. Escogemos una orientación aleatoria, horizontal o vertical, sobre la que vamos a partir.
3. Escogemos un punto en x (horizontal) o en y (vertical) según la orientación escogida y partimos el espacio en dos sub-mazmorras.
![bsp tree 2]({{ site.baseurl }}images/posts/2015-04-02-Generacion-mediante-BSP-Tree/bsp_2.PNG)
4. Seguimos subdividiendo esas sub-mazmorras generadas pero teniendo cuidado que las divisiones no sean demasiado cerca del borde, ya que debemos ser capaces de poder incluir una habitación en cada una de estas divisiones.

Aspecto en la segunda iteración.
![bsp tree 3]({{ site.baseurl }}images/posts/2015-04-02-Generacion-mediante-BSP-Tree/bsp_3.PNG)

Aspecto en la última iteración. Cada uno de estos espacios incluirá una habitación.
![bsp tree 8]({{ site.baseurl }}images/posts/2015-04-02-Generacion-mediante-BSP-Tree/bsp_8.PNG)

**¿Y cuándo nos detenemos?**

Tenemos varias opciones:
En cada iteración comprobamos si quedan espacios que puedan ser divididos y en las nuevas áreas se puedan crear al menos una habitación, seguimos dividiendo hasta que no queden espacios que cumplan esta condición. El problema con este método es que al final obtenemos áreas con muy dimensiones similares, por lo que las habitaciones también serán prácticamente iguales.
Otra solución es establecer un número de iteraciones fijo dependiendo del tamaño de la mazmorra, con lo que obtendremos áreas divididas al máximo posible, pero otras que se podrían dividir al menos una vez más, pero se quedan enteras y de esta manera se puede crear un habitación más grande y alargada o una habitación pequeña pero un pasillo largo que la une con otra sección.

5. Cuando tenemos las divisiones para incluir una sola habitación en cada una de estas, comenzamos a construir la mazmorra. Creamos una habitación de tamaño aleatorio dentro de cada división, es decir, cada hoja del árbol, teniendo en cuenta los límites del espacio.
6. Para construir los pasillos que unen las habitaciones recorremos el árbol conectando cada nodo hoja con su hermana. Los nodos hoja son los nodos que no tiene más hijos, al final de cada rama del árbol.

El resultado final para el ejemplo que hemos estado viendo sería como se ve en la siguiente imagen.
![bsp tree 9]({{ site.baseurl }}images/posts/2015-04-02-Generacion-mediante-BSP-Tree/bsp_9.PNG)


Como vemos las habitaciones dentro de cada espacio se generan en una posición y con dimensiones aleatorias dentro de sus límites, por lo que podemos encontrar habitaciones pequeñas en espacio relativamente grande. Evidentemente estos parámetros se pueden ajustar si se desea que cada habitación rellene lo más en su espacio.

El utilizar un árbol binario nos asegura que después de realizar la primera partición vamos a obtener al menos dos hojas en dos ramas distintas que podemos utilizar como habitaciones de inicio y de final, estando siempre separadas por la raíz, por lo que nunca estarán conectadas directamente y se deberá recorrer primero la mayor parte del resto de habitaciones, algo que es esencial para el tipo de juego que queremos realizar en este caso.

Un segundo ejemplo generado mediante este método:
![bsp tree 9b]({{ site.baseurl }}images/posts/2015-04-02-Generacion-mediante-BSP-Tree/bsp_9b.PNG)

Como alternativa podemos utilizar un QuadTree para generar la mazmorra usando este tipo de técnica. En ese caso tendríamos cuatro nodos por cada partición y puede acelerar el proceso de creación, pero la diferencia es realmente mínima en estos casos.
