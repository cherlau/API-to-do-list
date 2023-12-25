const validateTitle = (req, res, next) => {
  const { body } = req

  if(body.title === undefined){
    return res.status(400).json({ message: 'É necessário título'})
  }

  if(body.title === ''){
    return res.status(400).json({ message: 'Título está vazio'})
  }

  next()
}

const validateStatus = (req, res, next) => {
  const { body } = req
  
  if(body.status === undefined){
    return res.status(400).json({ message: 'É necessário o status'})
  }
  
  if(body.status === ''){
    return res.status(400).json({ message: 'Status está vazio'})
  }
  
  next()
}

module.exports = {
  validateTitle,
  validateStatus
}