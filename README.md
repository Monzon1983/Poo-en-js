*Conceptuales*
1_ ¿Qué es un objeto en JavaScript?
Es una instancia de una clase (elemento concreto) que utiliza la abstracción para modelar el mundo real. Técnicamente, es una estructura mutable que se trata por referencia y que agrupa propiedades (estado) y métodos (comportamiento).

2_ ¿Qué diferencia hay entre clase y objeto?
La clase define las propiedades y el comportamiento (el molde o plantilla), mientras que el objeto es la instancia concreta (el elemento real, como un coche con una matrícula específica) que ocupa un lugar en memoria.

3_ ¿Qué es un prototipo?
Es un objeto que actúa como plantilla. En JS, todos los objetos tienen un enlace a un prototipo (propiedad <prototype>) del cual heredan propiedades y métodos sin poseerlos directamente. Es la base de la herencia en el lenguaje.

4_ ¿Qué hace la palabra new?
Es un operador que crea e inicializa un nuevo objeto invocando una función constructor. Automáticamente hace que el this de esa función apunte al nuevo objeto creado.

5_ ¿Por qué JS no es realmente orientado a clases?
Porque es un lenguaje basado en prototipos. La herencia no ocurre por definición de clases rígidas, sino por la clonación o enlace de objetos (encadenamiento). La palabra class de ES6 es solo azúcar sintáctico sobre el modelo de prototipos.

*Técnicas*
6_ Diferencia entre método en el constructor vs. método en prototype:
Los métodos definidos en el constructor se crean cada vez que se instancia un objeto (consumen más memoria si hay muchos objetos). Los métodos en el prototype se definen una sola vez y todas las instancias acceden a ellos por referencia, lo que es más eficiente.

¿Qué hace extends?
7_ Se utiliza en las clases de ES6 para crear una sub-clase, permitiendo que esta herede todas las propiedades y métodos de una clase "padre".

¿Para qué sirve super()?
8_ Se usa dentro del constructor de una sub-clase para invocar el constructor de la clase padre y así poder heredar sus características correctamente antes de añadir las propias.

9_ ¿Qué es la prototype chain?
Es la técnica de encadenamiento donde un objeto, al no encontrar una propiedad en sí mismo, la busca en su prototipo, y luego en el prototipo del padre, hasta llegar al prototipo global (Object.prototype) o null.

*Pensamiento* 
10 _¿Cuándo conviene usar POO?
Cuando se necesita organizar datos relacionados y crear modelos basados en el mundo real que requieran escalabilidad y reutilización de código.

11 _¿Qué ventaja tiene sobre código "normal"?
Permite la abstracción, la encapsulación (ocultar implementación interna) y el polimorfismo (compartir interfaces con comportamientos distintos), lo que facilita el mantenimiento.

12 _¿Qué problema resuelve la herencia?
Evita la duplicidad de código al permitir que objetos especializados (sub-clases) obtengan el conjunto inicial de propiedades de un objeto base (plantilla) sin tener que redefinirlas.