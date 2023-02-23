export function descontoFrete (freteTeste) {
  if ( freteTeste <= 100 ){
    return 20.00; 
  }
  else if (freteTeste > 100 && freteTeste <= 200) {
    return 12.00;
  }
  else {
    return 0;
  }
 } 
