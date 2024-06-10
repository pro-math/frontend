export function createRange(magnitude) {
  const min_number = 10 ** (magnitude - 1)
  const max_number = 10 ** magnitude - 1
  return { min_number, max_number }
}
