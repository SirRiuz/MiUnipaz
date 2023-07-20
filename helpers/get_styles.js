const getStyles = (d, i) => {
    if(d.length <= 1)
      return ({})
  
    if(i === 0)
      return ({
        borderRadius:0,
        borderTopStartRadius:5,
        borderTopEndRadius:5
      })
  
    if(i === (d.length - 1))
      return ({
        borderRadius:0,
        borderBottomStartRadius:5,
        borderBottomEndRadius:5
      })
  
    return ({borderRadius:0})
}

export default getStyles
