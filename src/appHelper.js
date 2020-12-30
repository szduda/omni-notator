export const getNextId = () => generateId.next().value

export const sortByDate = (o1, o2) => o2.date - o1.date

export const getRouteParam = ({ pathname = '/', param }) => {
  const parts = pathname.split('/')
  if (parts.length < 3) return null;
  const paramIndex = parts.findIndex(p => p === param) + 1
  if (paramIndex > parts.length) return null;
  return parts[paramIndex];
}

function* idGenerator() {
  let i = 1000
  while (true) {
    i = i + 1
    yield `id-${i}`;
  }
}

const generateId = idGenerator()