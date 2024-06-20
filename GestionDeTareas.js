class Elemento {
    constructor(descripcion, fecha) {
      this.descripcion = descripcion;
      this.fecha = fecha;
    }
  }
  class Tarea extends Elemento {
    constructor(descripcion, fecha) {
      super(descripcion, fecha);
      this.completada = false;
    }
  }
  
  let tareas = [];

  tareas.push(new Tarea("Tarea Extraclase 1 Bases de Datos","14/05/2024"));
  tareas.push(new Tarea("Programa Gestión de Tareas JavaScript","04/05/2024"));
  tareas.push(new Tarea("Entrega de Clase Práctica 5 Razonamiento Aproximado","14/06/2024"));
  tareas.push(new Tarea("Tarea Extraclase 2 Bases de Datos","08/06/2024"));
  tareas.push(new Tarea("Tarea Extraclase 3 Bases de Datos","16/06/2024"));
  
  function agregarTarea() {
    const descripcion = prompt("Ingrese la descripción de la tarea:");
    const fecha = prompt("Ingrese la fecha de la tarea (AAAA-MM-DD):");
    const nuevaTarea = new Tarea(descripcion, fecha);
    tareas.push(nuevaTarea);
    alert("Tarea agregada exitosamente!");
  }
  
  function marcarCompletada() {
    let indice = prompt("Ingrese el índice de la tarea a marcar como completada:");
    if (indice >= 0 && indice < tareas.length) {
      tareas[indice].completada = true;
      alert("Tarea Completada");
    } else {
      alert("Índice de tarea inválido.")
    }
  }
  
  function listarTareasPendientes() {
    alert("Tareas pendientes:");
    for (let i = 0; i < tareas.length; i++) {
      if (!tareas[i].completada) {
        alert(tareas[i].descripcion);
      }
    }
  }
  let menu = true; 
  while (menu==true) {
    let opcion = prompt("Seleccione una opción:\n1. Agregar tarea\n2. Marcar tarea como completada\n3. Listar tareas pendientes\n4. Salir");
    switch (opcion) {
      case "1":
        agregarTarea();
        break;
      case "2":
        marcarCompletada();
        break;
      case "3":
        listarTareasPendientes();
        break;
      case "4":
        alert("Saliendo del programa.");
        menu = false;
        break;
      default:
        alert("Opción inválida.");
    }
  }
  