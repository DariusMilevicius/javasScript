function pakelimas(skaicius, laipsnis){
  
    return skaicius ** laipsnis
  }
  
  console.log (pakelimas(2, 5))
  
  function didesnis(pirmas, antras){
      if (pirmas > antras) {
          console.log(pirmas)
      } else if  (pirmas < antras){
         
          console.log (antras)
  
      } else {
          console.log ("skaiciai yra lygus")  
      }
  }
  
  didesnis(9,9)
  
  function kokiaTaiDiena(ivestis){
      if (ivestis === 1){
          console.log("pirmadienis")
      }else if (ivestis === 2 ){
          console.log("antradienis")
      }else if (ivestis === 3){
          console.log("treciadiensi")
      }else if (ivestis === 4){
          console.log("ketvirtadienis")
      }else if (ivestis === 5){
          console.log("penktadienis")
      }else if (ivestis === 6){
          console.log("sestadienis")
      }else if (ivestis === 7){
          console.log("sekmadienis")
           
      }else{
          console.log ("nera tokios dienos")
      }
  
  }
  
  kokiaTaiDiena(9)
  
  
  const sudetiVisusSkaicius = [12, 10, 4, 16, 3, 8, 9, 'hi', 12, 2, 1, 5, 3, 9, 55, 292, 13, undefined]
  
  function sudetis(arr){
      let sum = 0;
      for (let i = 0; i < arr.length; i++ ){
          if (Number.isInteger( arr[i] )){
              console.log("suskaiciuotas")
              sum = sum + arr[i]    
          }
          
      }
      console.log(sum)   
  }
  
  
  sudetis(sudetiVisusSkaicius)
  
  function pirmasGalinis(startinis, galinis){
     const skaiciai = []; 
     for (let i =startini ; i < galinis; i++ )
     skaiciai.push(i)
  
  }
  
  for (let i = 0; i < skaiciai.length; i++){
      if (skaiciai[i] % 3)
  }