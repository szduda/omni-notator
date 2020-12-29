export const getNextId = () => generateId.next().value

export const sortByDate = (o1, o2) => o2.date - o1.date

function* idGenerator() {
  let i = 1000
  while (true) {
    i = i + 1
    yield `id-${i}`;
  }
}

const generateId = idGenerator()