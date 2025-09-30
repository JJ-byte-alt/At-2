function pagar() {
    const valor_15min = document.getElementById("15m").value;
    const tempo_uso = parseFloat(document.getElementById("uso").value);
    const final0 = document.getElementById("result0");
   
   
    
  
    let valor_final = valor_15min * Math.round (tempo_uso/15) ;
  
    final0.innerHTML = `Valor a pagar ${valor_final}`;
    
  }