const validate = (data, type) => {
  const errors = {}

  if (!data.email) {
    errors.email = 'email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'email address is invalid'
  } else {
    delete errors.email
  }
  if (!data.password) {
    errors.password = 'password is required'
  } else if (data.password.length < 6) {
    errors.password = 'password length must to be 6 character or mor'
  } else {
    delete errors.password
  }

  if (type === 'signup') {
    if (!data.name.trim()) {
      errors.name = 'UserName is required'
    } else {
      delete errors.name
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = 'confirmPassword is required'
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = 'password not match'
    } else {
      delete errors.confirmPassword
    }
    if (!data.isAccepted) {
      errors.isAccepted = 'Accept or regulations'
    } else {
      delete errors.isAccepted
    }
  }
  return errors
}
export default validate
