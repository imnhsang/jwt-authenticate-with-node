export const getMe = async (req, res, next) => {
  try {
    return res.json({
      code: 200,
      type: 'OK'
    })
  } catch (error) {
    return next(error)
  }
}
