const sum = (a = 10, b = 5) => {
    console.log(a + b);
  }

  //Ejecuto esta función sin pasar ningún parametro
  sum();
  //Ejecuto esta función pasando un solo parametro
  sum(20);
  //Ejecuto esta función pasando dos parametros
  sum(20, 30);