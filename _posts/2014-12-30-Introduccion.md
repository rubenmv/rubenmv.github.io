---
layout: post
title: Sobre el proyecto
---
Saludos a todos los exploradores. Abro este blog como diario de mis aventuras en busca de tesoros en el mundo de las mazmorras procedimentales.

Soy un estudiante de Ingeniería Multimedia en la Universidad de Alicante y estoy realizando mi trabajo de final de carrera, para el cual he decidido estudiar la generación procedimental en juegos de estilo mazmorras o, como mejor se les conoce en su término inglés, rogue-like. Estudio que pretendo acompañar con un videojuego con inspiración de Zelda y Spelunky pero donde las mazmorras se generen en cada partida de manera semi-aleatoria utilizando técnicas de generación procedimental.

Usaré este blog para compartir el progreso del juego, explicar los distintos conceptos que vaya aprendiendo por el camino y espero que sirva para futuros exploradores que pretendan adentrarse en este tipo de técnicas, que no son para nada nuevas pero que están tan de moda en los juegos independientes de hoy en día, como iremos viendo.

Para comenzar dejo los objetivos básicos que me he planteado para el proyecto, aunque nombre ciertos algoritmos y juego se han de tomar solo de ejemplo, puesto que según diseñe el tipo de videojuego que quiero crear determinaré más concretamente por donde debo tirar.

* Analizar distintos videojuegos que hagan uso de la generación procedimental de niveles. Buscar información sobre las técnicas y algoritmos que implementan. Algunos de los juegos que se estudiarán son los siguientes, aunque dependerá de la información que se encuentre sobre estos:
  * Minecraft. Genera (en demanda) un solo mundo abierto a partir de una semilla y
usando el algoritmo de ruido de Perlin.
  * Spelunky. Genera niveles tipo mazmorras con objetos, enemigos y trampas.
  * Faster than light. Estrategia en tiempo real, genera sistemas planetarios y
escenarios de manera procedimental.
  * X-Com. Estrategia por turnos, los escenarios se generan procedimentalmente.
  * También se hará un repaso a los clásicos como el conocido Rogue, padre de los
juegos tipo dungeon crawler. Se estudiará tanto la primera generación de este tipo
de juegos como a lo que se espera en el futuro próximo.
* Estudio de las técnicas más usadas e implementación visual de estas donde se pueda ver como actúan. Un ejemplo de esto sería la técnica utilizada en juegos tipo Minecraft, donde se basan en el algoritmo de ruido de Perlin para generar el contenido a partir de una semilla (en este artículo el mismo Notch lo comenta).
* Diseño de un videojuego (jugabilidad 2D) basado en alguna de estas técnicas de
generación procedimental. Se especificará el tipo de generación a utilizar, tipo Minecraft en un único mundo infinito generado sobre la marcha, tipo Spelunky donde se divide por niveles o mazmorras y hay un final...
* Desarrollo del videojuego utilizando el motor Unity3D o Cocos2d-x ya que tienen una
comunidad muy activa, pero estoy abierto a otras posibilidades según surjan en el
desarrollo del proyecto.