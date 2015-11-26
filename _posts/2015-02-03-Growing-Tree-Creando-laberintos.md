---
layout: post
title: Growing Tree - Creando laberintos
---

Vamos a estudiar un poco más a fondo algunos de los algoritmos para la
generación procedural de mazmorras, pero tenemos que empezar por lo básico, un
laberinto.

Existen decenas de algoritmos para la resolución y creación de mazmorras de
manera procedimental, y algunos de los factores imporantes que debemos tener en
cuenta para escoger uno son el coste temporal, la variedad de resultados que nos
permite obtener, la complejidad del mismo algoritmo y la personalización que
podamos realizar sobre este para adaptarlo a nuestro proyecto.

Antes de pasar al algoritmo conocido como Growing Tree debemos repasar
rápidamente ciertos conceptos básicos. Por un lado tenemos los **vértices** o
**nodos**, que en el caso que nos compete, pueden ser llamados **celdas**. Estos
nodos se unen mediante **aristas**, que es básicamente una linea. Una colección
de vértices y aristas es lo que llamamos **grafo**. Si desde una nodo podemos
alcanzar cualquier otro nodo del grafo siguiente las aristas entonces decimos
que es un **grafo conexo**.

![Grafo conexo](<{{ site.baseurl }}{{ site.post_images }}2015-02-03-Growing-Tree-Creando-laberintos/grafos-1.png>)

Si eliminamos los ciclos del grafo, obtenemos un grafo acíclico, una cuando es
grafo acíclico es conexo, lo que tenemos es llamado un **árbol**.

![Arbol](<{{ site.baseurl }}{{ site.post_images }}2015-02-03-Growing-Tree-Creando-laberintos/grafos-2.png>)

Una grafo puede estar compuesto por varios árboles, pero existe uno que
comprende todos los nodos de un grafo, tenemos un **árbol de expansión (Spanning
Tree)**.

![Arbol de expansion](<{{ site.baseurl }}{{ site.post_images }}2015-02-03-Growing-Tree-Creando-laberintos/spanning-tree.png>)

Y los árboles de expansión son la misma esencia de la estructura de los
algoritmos de generación de laberintos.

![Arbol de expansion laberinto](<{{ site.baseurl }}{{ site.post_images }}2015-02-03-Growing-Tree-Creando-laberintos/spanning-tree-is-maze.png>)

Aldous-Broder
=============

Dos investigadores llamados D. Aldous y A. Broder, trabajando
independientemente, estaban estudiando los árboles de expansión cuando diseñaron
el siguiente algoritmo:

1.  Escoge un vértice cualquiera.

2.  Escoge otro vértice aleatorio entre los vecinos de este. Si el nodo no ha
    sido visitado con anterioridad, nos movemos a este y lo agregamos, junto a
    la arista, al árbol de expansión.

3.  Repetir el paso 2 hasta que todos los vértices hayan sido visitados.

Un algoritmo extremadamente simple que selecciona cualquier de todos los
posibles árboles de expansión del grafo con la misma probabilidad. Tambien hay
que decir que es una técnica muy ineficiente, ya que su naturaleza aleatoria a
la hora de escoger el nodo hace que se puedan volver a visitar los mismos
vértices una y otra vez.

![Aldous-Broder](<{{ site.baseurl }}{{ site.post_images }}2015-02-03-Growing-Tree-Creando-laberintos/aldous-broder.gif>)

Posteriormente este método fue mejorado por otros como el algoritmo de Wilson,
entre otros, pero vamos a pasar directamente al que nos interesa estudiar, que
entra dentro de los algoritmos que hacen uso de la técnica de escoger un nodo
aleatoriamente en cada paso, también conocido como **Drunken Walk**, aunque en
este caso hay matices.

Growing Tree
------------

Entre los algoritmos de generación de laberintos, el llamado Growing Tree es
quizás el más personalizable. La premisa básica es la de escoger un nodo del
grafo aleatoriamente y agregarlo a una lista de "celdas activas". En cada paso
posterior miramos a uno de los nodos de la lista y agregamos uno de sus vecinos
**no visitados**. Si el nodo no tiene más vecinos sin visitar, lo quitamos de la
lista y probamos con otro nodo. El proceso termina cuando la lista se queda
vacía.

Debemos que tener en cuenta que cada celda o nodo tiene 4 bordes que tocan con
otros nodos o con el exterior de la mazmorra, por lo que cada nodo deberá ser
visitado 4 veces. Esto no se produce en la misma pasada, sino que al
introducirlos en la lista y luego hacer el backtracking nos vamos asegurando que
ese nodo tiene aún bordes libres, en caso contrario lo podemos sacar y lo damos
como cerrado.

Cuando estamos comprobando un vecino debemos determinar si se ha de crear un
pared según el caso. Para los bordes que den al exterior de los límites de la
mazmorra simplemente creamos la pared, cuando nos movemos a una nueva celda no
visitada antes, entonces simplemente creamos pasillo entre estas, pero cuando
nos topamos con otro nodo que ya está en la lista de activos entonces creamos
una pared en ese borde y nos movemos a otro de los vecinos. Este mismo proceso
nos permite que siempre se pueda alcanzar cualquier celda desde otra.

Un aspecto interesante es como el uso de distintas heurísticas para seleccionar
un nodo de la lista de activos cambia el comportamiento de este algoritmo. Por
ejemplo, si escogemos el nodo más reciente, el último que se agregó a la lista,
obtenemos un comportamento de pila recursiva. Este comportamiento es el mismo
que encontramos en otro algoritmo llamado Recursive Backtracker. Si escogemos un
nodo aleatoriamente, entonces tenemos un comportamiento del estilo del algoritmo
de Prim.

En la implementación que he realizado sobre Unity podemos ver el comportamiento
al usar el nodo más reciente agregado a la lista.

![Growing Tree Maze 1](<{{ site.baseurl }}{{ site.post_images }}2015-02-03-Growing-Tree-Creando-laberintos/maze-growing-tree-example-1.gif>)

Y también cuando escogemos un nodo aleatorio cada vez, como en el algoritmo de
Prim.

![Growing Tree Maze 2](<{{ site.baseurl }}{{ site.post_images }}2015-02-03-Growing-Tree-Creando-laberintos/maze-growing-tree-example-2.gif>)

Modificando el algoritmo incluso podríamos hacer que se generen habitaciones en
vez de pasillos. El uso de este método similar al Recursive Backtracker nos
permite determinar y marcar cuando una habitación se ha completado, momento en
el que se comienzan a desapilar nodos y retoma el camino hacia la creación de
otra habitación. Pero la cosa se complica si queremos tener habitaciones y
pasillos en es mismo mapa, por ello este algoritmo no es de mucha utilidad más
allá de la generación de laberintos.

Conclusión
----------

El algoritmo de Growing Tree es interesante en el sentido en que se puede
personalizar y ampliarlo para generar algo más que laberintos, ensanchando los
pasillos o uniendo los adyacentes para generar habitaciones y obtener una
estructura más similar a lo que busco para el videojuego que quiero crear, pero
como veremos hay otros algoritmos que son más adecuados y rápidos para generar
mapas grandes.

Podemos decir finalmente que este algoritmo tiene sus **ventajas**:

* Esta basado en técnicas muy simple.
* Es flexible y puede comportarse como otros algoritmos según su
implementación.

Pero también hay algunas **desventajas**:

* No es el algoritmo más rápido de por sí, y habría que utilizar una mezcla con
árboles de partición (BSP, Quadtree) para generar laberintos realmente grandes.
* Generalmente solo se puede utilizar para la creación laberintos, otro tipo de
estructuras como mazmorras o cuevas están fuera del alcance.
