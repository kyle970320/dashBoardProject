export const dataCalc = (data,property,start,end)=>{
  const result = data.filter(el => {
    return (new Date(el.date) >= start) && (new Date(el.date) <= end)
  }).map(el => {
    return el[property]
  }).reduce((el, el2) => {
    return el + el2
  },0);
  return result;
}

export const compareCalc = (data,property,start,end) =>{
  const result = data.map((el,i)=>{
    return {...el, id:i}
  }).filter(el => {
    return (new Date(el.date) >= start) && (new Date(el.date) <= end)
  })
  let compareResult = data.slice(result[0].id-result.length,result[0].id).map(el => {
    return el[property]
  }).reduce((el, el2) => {
    return el + el2
  },0);
  if(data.slice(result[0].id-result.length,result[0].id).length != result.length){
    compareResult = false;
  }
  return compareResult;
}