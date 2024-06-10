// Валидация email

export function validateLogin(login) {
  const regex = /^[a-zA-Z0-9._-]{3,25}$/
  return regex.test(login)
}

// Валидация пароля

export function validatePassword(password) {
  // eslint-disable-next-line no-useless-escape
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#\$%^&*()\-_=+{};:,<.>]).{8,25}$/
  return passwordRegex.test(password)
}
