import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  console.log('App running')
  return res.status(200).json({message: 'App running'})
})

export default router
