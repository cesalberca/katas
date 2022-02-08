export function cypher(message: string, shiftedBy: number): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
  let cypheredMessage = ''

  for (let i = 0; i < message.length; i++) {
    const index = alphabet.indexOf(message[i]) + i + shiftedBy
    const nextLetter = alphabet[index]
    cypheredMessage += nextLetter
  }

  return cypheredMessage
}
