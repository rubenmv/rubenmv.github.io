---
layout: post
title: Procedimental
---

Hablando en términos generales, la **generación procedimental**, o
**generación por procedimientos**, es eso mismo, generar **contenido**
por medio **algoritmos** en vez de manera manual. Suele estar
relacionado con aplicación de computación gráfica y diseño de niveles en
videojuegos.

Pero vamos a usar una definición más precisa para este proyecto y
describir la generación procedimental de contenido como **la creación de
contenido para videojuegos mediante algoritmos y con una limitada e
indirecta intervención del usuario**.

### ¿Procedimental o procedural?

La razón por la que planteo esta pregunta es porque si buscamos en la
Real Academia Española (RAE) la palabra **procedimental** obtenemos la
siguiente definición:

  > *“adj. Perteneciente o relativo al procedimiento (método de ejecutar
algunas cosas).”*

Pero si buscamos **procedural** no encontramos nada, y es que esta
palabra es constantemente utilizada incorrectamente como anglicismo de
la palabra, probablemente porque podría pasar por una palabra española y
porque es más rápida y sencillo de pronunciar. En entornos no académicos
este anglicismo es la palabra más utilizada por encima de la que
encontramos en la RAE.

En cualquier caso no quiero ser demasiado meticuloso con el uso de estas
palabras y quiero dejar claro que en este documento voy a intentar
utilizar la versión correcta “**procedimental**”, pero que tanto
procedimental como procedural son dos palabras que se refieren a lo
mismo y que ambas son utilizadas con la misma frecuencia al hablar de
este tema.

### ¿Y a qué nos referimos con contenido?

Pues prácticamente a casi todo lo que podemos encontrar en el juego,
desde **objetos** físicos a las mismas **estadísticas** o
**propiedades** de estos, así como la **música**, **historia** y
**misiones** e incluso las propias **reglas** del juego. Aspectos que
quedarían fuera de esta definición serían básicamente el mismo motor del
juego o la inteligencia artificial, aunque para esta última existen
muchos estudios y métodos de aprendizaje automático que en cierta manera
se asemejan a la definición de generación procedimental de contenido,
pero realmente no generan nuevo contenido en sí.

Otro aspecto del **contenido** que se genere es que debe hacer el juego
“**jugable**”. Se debe poder terminar un nivel generado o utilizar un
objeto generado con estas técnicas, que tenga una **utilidad** dentro
del tipo de asset al que pertenece. Si es un arma, deberíamos poder
usarla para luchar contra enemigos, si es una decoración de escenario,
debería estar en el contexto adecuado, situada por el nivel o habitación
en una posición razonable.

### Videojuegos

Este es un término mucho más difícil de definir, ya que existen muchos
géneros que podrían decirse que están al borde de lo que es un
videojuego o cualquier otro tipo de obra audiovisual interactiva.

Una de las definiciones más clásicas detalla un videojuego como

> *“Dispositivo electrónico que permite, mediante mandos apropiados,
simular juegos en las pantallas de un televisor o de un ordenador.”*

De la RAE:
[*http://buscon.rae.es/drae/srv/search?val=videojuego*](http://buscon.rae.es/drae/srv/search?val=videojuego)

En la Wikipedia tenemos una definición más preciso

> *“Un videojuego o juego de video es un juego electrónico en el que una o
> más personas interactúan, por medio de un controlador, con un
> dispositivo dotado de imágenes de vídeo. Este dispositivo electrónico,
> conocido genéricamente como «plataforma», puede ser una computadora, una
> máquina arcade, una videoconsola o un dispositivo portátil (un teléfono
> móvil, por ejemplo). Los videojuegos son, hoy por hoy, una de las
> principales industrias del arte y el entretenimiento.”*

Pero tampoco es el objetivo de este documento indagar más en la
definición de videojuego, pero si en el papel de la generación
procedimental de contenido para estos y como afecta los distintos
aspectos de jugabilidad y diversión.

Por lo tanto la generación procedimental implica el uso de
procedimientos o algoritmos computacionales para crear algo en un
videojuego. Más concretamente algunos ejemplos de esto puede ser:

-   Una herramiento que crear mazmorras para un juego de aventuras como ***The Legend of Zelda*** sin la intervención de la entrada de parámetros por parte del usuario.

-   Un sistema que genera un tablero de juego con cierta combinación de reglas y parámetros. El algoritmo escoge sobre una reglas y parámetros base para crear nuevo contenido usando la combinación de estos.

-   Un motor que funciona como middleware con otro motor de juego para poblar de vegetación un mundo virtual, independientemente de cómo haya sido creado este mundo.

### ¿Y por qué generar contenido de manera procedimental?

Ahora que sabemos los conceptos básicos de lo que significa la
generación procedimental de contenido, tenemos que preguntarnos por qué
y para qué queremos usar técnicas de este tipo cuando podríamos
simplemente diseñar el contenido.

Una de las razones más obvias surge de esto mismo, generar contenido
**manualmente** conlleva, normalmente, tener a un **diseñador** o
**artista** para hacer esto, con el consiguiente **coste** de
mantenimiento de esa persona en cuanto a sueldo y tiempo, ya que algo
creado por alguien suele tardar más que si lo hiciera un algoritmo.
Dependiendo del **tipo de proyecto**, las **plataformas** donde se
quiera publicar y el **presupuesto** del equipo de desarrollo en el que
nos encontremos esto puede ser realizable o simplemente imposible de
soportar.

Hablando de plataformas, un buen ejemplo de lo tenemos en la era de
principios de los **80**, cuando las **computadoras** caseras eran tan
**limitadas técnicamente**, sobretodo en espacio en disco, lo que hacía
imposible incluir todos los recursos o “assets” para hacer juegos
medianamente grandes. De hecho el uso de técnicas procedimentales en
videojuegos viene de esto mismo, y como veremos algunos juegos de
entonces, como Rogue, fueron los precursores de la generación de
contenido de este tipo.

![BBC Micro]({{ site.baseurl }}{{ site.post_images }}2015-01-06-Procedimental/BBC_Micro_Front_Restored.jpg)

<sub>Los BBC Micro fueron una serie de microcomputadores que se hicieron bastante populares al principio de la década de los 80 en el Reino Unido. Tuvieron varios lanzamientos de videojuegos que generaban contenido con técnicas procedimentales.</sub>

Hoy en día ya no tenemos esas limitaciones técnicas, a no ser que las queramos imponer nosotros mismos, ni siquiera en dispositivos móviles, que hace años que incluyen memoria lo suficientemente rápida y amplia como para incluir el contenido necesario para el juego. Por ello actualmente la generación de contenido procedimental es algo que viene ligado al mismo diseño del juego. Como es el caso de este mismo proyecto, el propio diseño del juego favorece el uso de estas técnicas para generar una infinidad de situaciones que son lo suficientemente distintas como alargar su vida durante cientos de horas. Y los ejemplos más representativos de esto puede que sean Minecraft y Spenlunky, juegos muy diferentes en su jugabilidad y ritmo, pero que independientemente del número de veces que se jueguen, siempre pueden brindar una experiencia diferente a la anterior.

Pero esto no solo viene ligado a lo que el diseñador del juego quiere,
sino a cómo, hoy en día, se consume el contenido audiovisual. En una era
donde estamos saturados con entretenimiento desde los móviles,
computadores y demás dispositivos electrónicos conectados a internet, la
manera en la consumimos contenido es mucho más rápida que antes, no
tenemos el tiempo suficiente para probar todo, y mucho menos para verlo
o jugarlo de principio a fin. Por esto tiene más sentido la creación de
obras que se puedan consumir de forma episódica y de forma
autoconclusiva. En el caso de los videojuegos, que cada partida tenga un
inicio y un fin, independientemente de que luego el usuario pueda ver un
progreso global a lo largo de las diferentes sesiones. En este sentido
la generación de contenido mediante técnicas procedimentales son
realmente adecuadas para producir una experiencia distinta, si no única,
en cada partida.

### Contenido a medida del usuario

Usando métricas y redes neuronales y midiendo como el jugador responde
antes ciertas situaciones, el nuevo contenido generado podría ser
manipulado dependiendo de los gustos y necesidades del jugador o mejorar
su aprendizaje y adaptabilidad a las mecánicas del juego. De la misma
manera puede ayudar a la creatividad, produciendo situaciones
radicalmente diferentes a las que podríamos esperar en algo creado
manualmente por un humano, ofreciendo una solución válida pero, a su
vez, inesperable.

Por supuesto no creo que haga falta ni decir que estas técnicas generan
reticencia entre los diseñadores y artistas, a los que les hace perder
el control creativo sobre ciertos elementos del videojuego. Este es uno
de los claros motivos por lo que algo como la generación procedural de
texturas, que hace unos años prometía ser una buena solución a este
tedioso proceso de creación de assets, ha caído en el olvido cuando hoy
en día las herramientas de diseño proporcionan una facilidad de uso que
permite trabajar muy rápidamente a los artistas y con total control
creativo.

Pero el uso de técnicas procedimentales también puede ayudar a entender
el diseño. Al diseñar esos mismos procedimientos estamos siendo
afrontados con las limitaciones, reglas y problemas que un diseñador o
artista tiene que afrontar a la hora de trabajar, nos ayuda a entender
este proceso de creación manual de contenido porque tenemos que tener en
cuenta y entender este proceso manual para poder automatizarlo.

### Propiedades deseadas en la generación del contenido

Las soluciones basadas en generación procedimental de contenido tiene
una serie de propiedades deseables o requeridas que pueden ser
diferentes para cada aplicación, algunas de estas propiedades comunes
pueden ser:

-   **Velocidad**: los requerimientos de velocidad puede variar notablemente según el rango de la aplicación. Normalmente es necesario que esta sea superior a como trabajaría un humano si está realizando un trabajo que se considera similar, pero esto no es tan importante si lo que requiere el proyecto es la creación de contenido de manera creativa y que solo se puede proporcionar por estos mecanismos algorítmicos.

-   **Confiabilidad**: el generador de contenido debe garantizar que este se crea dentro de unos criterios de calidad. Debe cumplir una reglas o parámetros, que en mayor parte son establecidas de manera fija en el propio algoritmo, aunque también puede ser el caso en el que el usuario tenga algo de influencia sobre estos, siempre de manera inconsciente o indirecta.

-   **Control**: sería deseable proporcionar cierto control sobre este, permitiendo especificar ciertos aspectos iniciales del mismo contenido que se va a crear. Por ejemplo estaríamos hablando de indicar que paleta de colores o texturas a utilizar en cierta situación, si las rocas deberían ser más suaves o agudas, el rango de tamaños que estas pueden tomar, etc. Pero demasiado control rompe el propio concepto y nunca debe caer en lo predecible. Cuando el resultado de un proceso de generación procedimental es demasiado predecible entonces es que se está haciendo mal.

-   **Expresividad y diversidad**: medir la expresividad es difícil y generar contenido que es diverso a la vez que cumple cierta calidad no es nada trivial. Entre generar el contenido de manera totalmente aleatoria y probablemente de poca calidad o generar contenido muy predecible hay que encontrar un compromiso intermedio, con suficiente diversidad a la vez que calidad.

-   **Creatividad y credibilidad**: generalmente queremos que el contenido no parezca creado por un generador automático, sino que parezca diseñado por una persona.