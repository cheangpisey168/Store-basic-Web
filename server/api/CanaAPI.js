export default defineEventHandler(async (event) => {
  const { getQuery,readBody  } = await import('#imports') // ✅ Safe dynamic import
  const { name } = getQuery(event)
  const {old} = readBody(event)
  return {
    message: `Hello, ${name} I'm ${old} year old`
  }
})
