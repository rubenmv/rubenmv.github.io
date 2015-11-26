---
layout: post
title: Jugando con mazmorras
---

Después de haber visto la definición de lo que significa generar contenido con procedimientos, vamos a hacer un repaso por la historia de los videojuegos para estudiar brevemente algunos de los más relevantes en la aplicación de técnicas de este área.

Los limitados comienzos
-----------------------

### Rogue (1980)

Al contrario de hoy día en el que tenemos disponibles gigabytes de
memoria para mantener los recursos de alta calidad de un videojuego, en
la historia temprana de los videojuegos no era aceptable debido a las
grandes limitaciones de memoria, por lo que podemos encontrar muchos
juegos de aquella época que utilizan de alguna manera alguna técnica de
generación procedural de contenido. De entre estos quizá el ejemplo más
memorable es **Rogue**.

![Rogue]({{ site.baseurl }}{{ site.post_images }}2015-01-21-Jugando-con-mazmorras/1980-rogue.jpg)

Este juego utiliza caracteres ASCII para dibujar los todos elementos
visuales y aplica algoritmos de generación procedimental de mazmorras y
de colocación de objetos. Esto proporciona una jugabilidad casi
infinita, donde dos partidas nunca son iguales.

De hecho su popularidad a acuñar el término del subgénero de videojuegos
llamados “Rogue-Like”. La influencia de Rogue la hemos podido ver en una
gran variedad de videojuegos publicados posteriormente y hasta el día de
hoy.

### Elite (1984)

Desarrollado por Acornsoft y publicado en 1984 para la computadora BBC
Micro y la familia Electron, Elite es un juego que mezcla la simulación
de pilotaje de naves espaciales con el comercio espacial en un entorno
estilo sandbox donde el jugador escoge planetas que visitar y en la
vecindad de estos puede encontrar piratas a los que enfrentarse, objetos
como meteoritos que pueden dañar la nave.

La nave entonces se puede atracar en los planetas y realizar negocios
con el dinero de las recompensas obtenido al eliminar piratas y otras
actividades.

Además de su excelente implementación de gráficos 3D, de tipo wireframe,
que en su momento impresionó porque exprimía al máximo las modestas
máquinas donde se publicó, donde realmente destaca en comparación con el
resto de juegos de comercio espacial era su universo generado
procedimentalmente, incluyendo las posiciones de los planetas, nombres,
políticas y descripciones.

Es un juego con una entrada de dificultad un poco dura, pero una vez te
haces a los controles es bastante gratificante y su naturaleza
procedural proporciona muchas horas de juego.

![Elite]({{ site.baseurl }}{{ site.post_images }}2015-01-21-Jugando-con-mazmorras/1984-elite.png)

El éxito de este juego hizo que fuera portado, con una rebaja
considerable en el aspecto técnico, a la Commodore 64 y otras
plataformas como el Apple II. En Marzo de 2008, la [*revista Next Generation*](http://en.wikipedia.org/wiki/Next_Generation_%28magazine%29) lo
declaró el número 1 de los mejores juegos de la década de los 80,
definiéndolo como predecesor de lo que fueron más tarde juegos como la
saga Wing Commander o Grand Theft Auto.

### The Sentinel (1986)

Creado por Geoff Crammond y publicado bajo el sello de Firebird en 1986
para varias máquinas como la BBC Micro, Comodore 64, Amstrad CPC, ZX
Spectrum, Atari ST, Amiga y PC. Se trata de uno de los primeros juegos
que incluían un aspecto 3D con polígonos rellenos.

En este juego tomas el papel de un robot con habilidades telepáticas con
las que puedes recoger y colocar objetos del entorno desde una vista en
primera persona. El objetivo es el de acabar con el centinela que está
en la parte más alta del nivel. Este centinela gira constantemente
vigilando el terreno, si te descubre comienza a absorber tu energía. Hay
que llegar a la cima y disparar a la base en la que se asienta el
centinela, pero el jugador por puede avanzar simplemente utilizando las
teclas, sino que tiene que encontrar los robots esparcidos por el
terreno que permiten teletransportarse a ellos, lo cual hace que la
energía disminuya, pero se puede recuperar absorbiendo objetos del
entorno, como árboles.

![The Sentinel]({{ site.baseurl }}{{ site.post_images }}2015-01-21-Jugando-con-mazmorras/1986-the-sentinel.jpg)

Claramente las limitaciones de memoria de los microcomputadores de 8
bits eran un impedimento para almacenar los 10.000 mundos que presumía
tener. Aquí es donde entraba la generación de contenido procedural,
donde cada mundo se generaba desde un pequeño paquete de datos: un
número de 8 dígitos obtenido al terminar el mundo anterior. Estos
dígitos eran diferentes según el éxito del jugador en ese mundo,
dependiendo de la cantidad de energía con que terminara el objetivo
principal, por lo que se intentaba balancear la dificultad del juego en
base a esto. Debido a que no todos los mundos podían ser testeados
durante el desarrollo, dejaron la posibilidad de volver a un mundo
anterior (usando los números de 8 dígitos) y completandolo con una
cantidad diferente de energía.

Una nueva generación
--------------------

### Diablo (1996)

Publicado 16 años después de Rogue, **Blizzard Entertainment** condujo
el género de los rogue-like a la era moderna con **Diablo**. Se trata de
un RPG de acción que implementó elementos procedimentales de una manera
tan espléndida que los jugadores comenzaron a pasar cientos de horas
jugándolo sin llegar a aburrirse.

![Diablo]({{ site.baseurl }}{{ site.post_images }}2015-01-21-Jugando-con-mazmorras/1996-diablo.jpg)

En concreto, hay dos aspectos a destacar de la generación procedimental
en Diablo:

-   Al igual que sus antecesores, como Rogue, la estructura de las mazmorras se generaba de manera aleatoria pero en vez de simples caracteres ASCII este introducía gráficos 2D imitando una perspectiva tridimensional isométrica de gran detalle.

-   La generación de ítems también era aleatoria, introduciendo una categoría de colores que clasificaba los objetos por rareza donde las estadísticas de estos se generaban “al vuelo” en el momento de creación.

### Spore (2008)

Nos movemos más de una década para hablar de Spore, un juego estilo
god-like, que es el término que se refiere a los juegos en los que no
tomas el control de un personaje en el mundo, sino que tomas el papel de
creador, como un dios que desde una lugar apartado maneja los hilos de
ciertos elementos del juego, moldeando así su evolución.

El objetivo de Spore es la de crear un organismo multicelular que irá
evolucionando, sobreviviendo al entorno o muriendo en el intento. El
jugador decide, antes de comenzar la partida, las distintas etapas de
evolución del organismo, o para decirlo más claro, que características
físicas desarrollará en cada etapa. El juego conduce al jugador durante
el desarrollo de esta especie en un mundo donde puede interactuar con
otras tribus de especies diferentes, luchar bestias salvajes,
desarrollar el aspecto social e inteligente de su especie e incluso
realizar exploración espacial en etapas futuras.

El juego se desarrolló en Maxis, creadores de Los Sims, entre otros, con
el diseñador principal Will Wright y publicado por Electronic Arts. Fue
un éxito de crítica.

![Spore]({{ site.baseurl }}{{ site.post_images }}2015-01-21-Jugando-con-mazmorras/2008-spore.jpg)

Spore destaca por su uso masivo de la generación de contenido dinámico
utilizando técnicas procedurales. No solo los **mundos** se crean de
esta manera, sino que los movimientos de las **criaturas** en sí son
**animadas procedimentalmente**, aún dando al jugador grandes
posibilidades de creación, pudiendo agregar o quitar miembros a su
gusto. Para ello el creador de especies proporciona una gran variedad de
miembros predefinidos que se pueden colocar como se desee, es el mismo
jugador el que decide qué puede ser más útil a nivel evolutivo, o
simplemente crear algo totalmente bizarro y comprobar cómo se desarrolla
en el entorno.

Por otro lado incluso la **música** de **Brian Eno** es creada usando un
compositor algorítmico, lo que se conoce como [***música
generativa***](http://en.wikipedia.org/wiki/Generative_music), término
popularizado por él mismo. De esta manera la música se puede adaptar
sobre la marcha a la gran variedad de situaciones.

### La era independiente

### Spelunky (2008)

Creado por **Derek Yu** y publicado como freeware para sistemas Windows,
se trata de un juego independiente de exploración de cuevas 2D al puro
estilo Indiana Jones. El objetivo es el de llegar al final de cada nivel
evitando trampas y criaturas, al mismo tiempo que se van recogiendo
tesoros y salvando princesas perdidas. Sigue la premisa del clásico
juego Spelunker de 1983 pero en un mundo creado proceduralmente en cada
nueva partida.

Se hizo un remake en 2013 pero aún se puede encontrar la versión
original freeware incluyendo el código fuente para **Gamemaker**.

![Spelunky]({{ site.baseurl }}{{ site.post_images }}2015-01-21-Jugando-con-mazmorras/2008-spelunky.jpg)

Para generar cada pantalla o nivel se crea una rejilla y se divide en
secciones o habitaciones formadas por varios tiles. A cada habitación se
le asigna un tipo o rol, por ejemplo:

> 0 - habitación que en principio no tiene salida y no forma parte del
> camino solución.
>
> 1 - habitación que tiene salida a la izquierda y derecha.
>
> 2 - habitación con salida izquierda, derecha e inferior. Si encima se
> une otra del mismo tipo entonces esta también tendrá salida superior.
>
> 3 - habitación con salidas izquierda, derecha y superior.

Primero hay que colocar una habitación de inicio en la zona superior de
la rejilla de habitaciones, generalmente del tipo 1 o 2.

Cada vez que se coloca una habitación por defecto es de tipo 1. Entonces
de manera aleatoria (utilizando distribución uniforme de 1 a 5) se
escoge la siguiente dirección. Para 1 o 2 se mueve a la izquierda, para
3 o 4 a la derecha. En estos casos ya tenemos la habitación 1 lista con
salidas a estos dos lados. Ahora, cuando obtenemos un 5 entonces hay que
cambiar la habitación de tipo 1 por otra de tipo 2 que siempre tiene una
salida inferior.

Una vez nos movemos a la siguiente habitación realizamos lo mismo, pero
esta vez miramos primero si la anterior era tipo 2 y nos hemos movido
hacia abajo, caso en el que escogemos por defecto una habitación de tipo
2 o 3.

Cuando llegamos a la última fila y la siguiente dirección que obtenemos
es hacia abajo, entonces podemos colocar la salida y ya tenemos el
camino completo. El resto de habitaciones que queden vacías se rellenan
con un tipo 0.

![]({{ site.baseurl }}{{ site.post_images }}2015-01-21-Jugando-con-mazmorras/2008-spelunky-level.png)

Finalmente dependiendo de las habitaciones adyacentes que se unan
podemos determinar por métodos probabilísticos que tipo de criaturas o
trampas incluir en cada habitación.

### Minecraft (2009)

Minecraft es un juego de estilo sandbox creado originalmente por Markus
“Notch” Persson que más tarde formó la compañía Mojang. Este juego
brinda al usuario con unos aspectos de creatividad y construcción sobre
un mundo compuesto por cubos 3D con texturas que le da un aspecto
simple. Este mundo permite una infinidad de tareas a realizar, como la
exploración de nuevos espacios y cuevas, minería, construcción o
combate. Pero todas estas mecánicas se presentan de una manera simple y
abierta para que el mismo usuario sea capaz de construir sus propias
aventuras en los diferentes modos de juego.

Es posiblemente, junto a Diablo, el juego más popular de la lista, pero
el caso de Minecraft destaca más en el sentido de generación procedural
de mundos ya que es algo mucho más claro y una gran parte de lo que le
aporta la diversión.

El jugador comienza creado un nuevo mundo, este se genera a partir de
una semilla, que es una cadena de caracteres que se puede introducir
manualmente o dejar al mismo juego que cree una aleatoria. A partir de
esta semilla se crear un mundo completo con campos, bosques, montañas,
mares, cuevas, animales y demás elementos naturales. Además podemos
encontrar lo que se llaman biomas, que representan zonas de distinto
clima, como pueden ser zonas desérticas, nevadas, montañosas, praderas
soleadas...

![Minecraft]({{ site.baseurl }}{{ site.post_images }}2015-01-21-Jugando-con-mazmorras/2009-minecraft-1.jpg)

Cuando un usuario introduce una semilla al crear una partida obtiene
siempre exactamente el mismo mundo en su estado original. Este es uno de
sus puntos fuertes, puesto que la comunidad de usuarios comparte
semillas y coordenadas en ese mundo donde se pueden encontrar
formaciones interesantes y extrañas.

Por entrar un poco más en detalles, como el propio Notch explica en
[*este
artículo*](http://notch.tumblr.com/post/3746989361/terrain-generation-part-1),
el mundo de Minecraft no es realmente infinito, a pesar de que no haya
límites propios. Esto es debido a que el mundo se renderiza en trozos
(chunks) de 16x16x128 bloques. El offset o separación entre estos
bloques se basa en enteros de 32 bits en un rango de -2 billones a +2
billones. Al pasar ese rango el juego comienza a sobrescribir los
antiguos chunks con nuevos y cuando pasas cierta distancia, los bloques
que usan enteros para su posicion comienzan a actuar de manera extraña e
inestable.

En cuanto a la generación del terreno en sí, al inicio del desarrollo se
hacía uso de un mapa de alturas 2D utilizando el **ruido de Perlin**
para obtener la “forma” del mundo. De hecho se usaban varios de estos
mapas para obtener detalles como la elevación, la “rugosidad”, y otro
para detalles locales concretos (como biomas). Pero aunque se trataba de
un método sencillo y muy rápido, el hecho de ser 2D tenía la desventaja
de generar formaciones simples y aburridas, por ejemplo no se podían
crear salientes de montañas, donde en una misma zona tendríamos dos
alturas diferentes.

![Minecraft]({{ site.baseurl }}{{ site.post_images }}2015-01-21-Jugando-con-mazmorras/2009-minecraft-2.jpg)

Así que en vez de mapas 2D, se comenzó a utilizar algo así como ruido de
Perlin 3D, esto quiere decir que, en vez de tratar el ruido como simple
altura sobre el terreno, lo que se tenía en cuenta era la densidad del
ruido. De este modo cualquier valor por debajo de 0 sería aire, y por
encima de 0 tendríamos terreno.

### The Binding of Isaac (2011)

Otro juego que voy a nombrar brevemente es **The Binding of Isaac**
diseñado por **Edmund McMillen**, conocido por el exitoso **Super Meat
Boy**. Se trata de un juego al más puro estilo **The Legend Of Zelda**
en sus versiones clásicas 2D, donde encontramos mazmorras con
habitaciones contiguas e independientes, algunas con roles específicos
como las que guardan un ítem especial tipo mapa, llave o jefe.

![The Binding of Isaac]({{ site.baseurl }}{{ site.post_images }}2015-01-21-Jugando-con-mazmorras/2011-the-binding-of-isaac.jpg)

El proceso de creación de las habitaciones es incluso más simple y
trivial que en otros juegos como el clásico Rogue, pero el verdadero
interés se encuentra en la gran variedad y probabilidad de encontrar los
diferentes tipos de objetos, que hacen que una partida pueda resultar
más complicadas que otras.

Mi interés por este juego reside en que es similar a lo que he
desarrollado para este proyecto, donde tenemos una jugabilidad estilo
Zelda, con un estilo visual similar, pero en mi caso incluyo una
generación o distribución de habitaciones y pasillos más variable, como
veíamos en Rogue.

### No Man’s Sky (2015)

Para finalizar con estos análisis vamos a echar un vistazo a lo que está
por venir, más en concreto al prometedor **No Man’s Sky**.

**No Man’s Sky** se presentó por primera vez en los premios Spike's VGX
de Diciembre de 2013 como, en principio, un exclusivo para Playstation
4. Está siendo desarrollado por los británicos Hello Games, conocidos
por Joe Danger. Pero esta nueva creación, que tiene como fecha de
lanzamiento Mayo de 2015, es algo completamente distinto a Joe Danger.

No Man’s Sky se presenta como un juego de aventuras de ciencia ficción
de tipo sandbox donde el jugador podrá explorar una gran variedad de
mundos, llenos de vida, criaturas, océanos profundos. Además incluye
otro aspecto de exploración y batallas espaciales.

En cierta manera algo como lo que hemos visto con Elite (1984) pero
elevado a la máxima potencia, uniendo elementos de generación de
criaturas y otro tipo de vida, todo esto utilizando técnicas
procedurales tanto para la vida animal como para los mismos planetas y
distribución de estos.

![No Man’s Sky]({{ site.baseurl }}{{ site.post_images }}2015-01-21-Jugando-con-mazmorras/2015-no-mans-sky-1.jpg)

En este caso no se trata de que cada nueva partida sea diferente, sino
de un **mundo persistente** donde todos los jugadores juegan online pero
aparecen en lugares tan apartados que será raro encontrarse con otros
jugadores a no ser que estos compartan una posición.

Para poner en perspectiva la inmensidad del universo que quieren
presentar, podremos encontrar la cifra exacta de
**18.446.744.073.709.551.616 planetas** y para pasar en cada uno un
segundo harían falta **585 mil millones** de años. Sin embargo, la
inmensa mayoría, similar a un universo real, no serán planetas muy
interesantes y solo un 10% de estos tendrán vida, lo cual ya es un
número vertiginoso de planetas.

![No Man’s Sky]({{ site.baseurl }}{{ site.post_images }}2015-01-21-Jugando-con-mazmorras/2015-no-mans-sky-2.jpg)

De momento no he podido encontrar mucho de las técnicas que utilizan
para generar todo este contenido, solo he podido ver que utilizan algo
similar a la creación de especies en Spore pero de manera automática y
simplemente han [*comentado en alguna entrevista*](https://www.youtube.com/watch?v=9NWpdyQXzHw) que realmente no utilizan
nada demasiado complicado para generar tal inmensidad de mundos,
probablemente sea una conjunción de muchas de las técnicas que ya hemos
visto en otros juegos.