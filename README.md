# Calculadora de raices de polinomios de segundo grado.

Calculadora de raices de polinomios en Javascript. Curso de Programacion en Javascript de CoderHouse.

## ¿Cómo lo hacemos?

Se crearan dos clases, la clase **Polinomio2** que es la encargada de administrar los coeficientes (cuadratico, lineal e independiente) caracteristicos de un polinomio de grado 2 ingresados por el usuario mediante inputs en un html y la clase **Raices** que administra, valga la redundancia, las raices obtenidas del polinomio ingresado.

Se crearan tambien un conjunto de funciones que tendran la tarea de hacer los calculos matematicos pertinentes para determinar el tipo de raices y su valor.

Tambien se definen las siguientes funciones que utilizan instancias de las clases **Polinomio2** y **Raices** para obtener y mostrar los resultados finales.

- Funcion **discriminante**
  - Contando como parametro un objeto de la clase Polinomio2 calcula devuelve un numero que indica el tipo de raices del polinomio.

- Funcion **raicesRealesDistintas**
  - Esta funcion recibe como parametros los coeficientes a, b del polinomio y el discriminante y devuelve una instancia de clase Raices con ambas raices reales y distintas.

- Funcion **raicesRealesRepetidas**
  - Esta funcion recibe como parametros los coeficientes a, b del polinomio y devuelve en una instancia de clase Raices con ambas raices reales e iguales.
 
- Funcion **raicesComplejas**
  - Esta funcion recibe como parametros los coeficientes a, b del polinomio y el discriminante y devuelve una instancia de clase Raices con ambas raices complejas. Se hacen optimizaciones para la visualizacion de las raices.
 
- Funcion **calcularResolvente**
  - Ingresando como parametro una instancia de la clase Polinonio2 esta funcion tiene la tarea de englobar las funciones **discriminante**, **raicesComplejas**, **raicesRealesDistintas** y **raicesRealesRepetidas** y settear los resultados obtenidos en el html para su visualizacion.
 
- Funcion **validacionDeConstante**
  - Recibiendo como parametro los coeficientes de un polinomio esta funcion hace las validaciones de que los coeficientes sean valores numericos, devolviendo un mensaje al usuario de esta situacio, y que el "coeficiente a" (termino cuadratico) sea distinto de 0 porque de ser asi estamos en la presencia de un polinomio de grando 1.
 
- Funcion **poliCuadratico**
  - Toma lo ingresado por usuario, en este caso los coeficientes del polinomio y los guarda en el localstorage convertido en JSON para luego ser utilizado en una instancia de clase polinomio2 y calcular sus raices.
 
- Funcion **obtenerConstantes**
  - Toma lo ingresado en el html para luego realizar el proceso de validacion y calculo.

- Funcion **principal**
  - Esta funciones toma los valores almacenados en el localstorage para el calculo de las raices mediantes las funciones antes descriptas. Tambien utiliza un archivos JSON local para mostrar ejemplos de coeficientes para ser utilizados para el calculo de raices y ver en funcionamiento.
 
Se utilizaron librerias SweetAlert y Toastify para mostrar mensajes al usuario dependiendo de la situacion.

