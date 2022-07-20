
function CheckDate(InpDate){

  return   InpDate.split('').some((element)=>element==='_')
    
}

export default CheckDate