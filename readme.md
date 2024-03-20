Apuntes:
ng g c (nombrecomponente) || ng generate component nombreComponente
/\ Sirve para crear un nuevo componente. por ejemplo home.

ng g i interfaces/objetos
/\ Genera una nueva carpeta de interfaces con el archivo objetos

Crear eventos:
Cuando queremos que capture los click en los botones hay que poner en la parte de HTML (click)="nombre de la funcion()"
Para capturar un evento hay que usar $event
Para capturar el de un input hay que usar este evento event.target.value
