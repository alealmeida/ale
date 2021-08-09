
import { workPages } from '../../global_data'

export default function personHandler({ query: {slug} }, res) {
  const filtered = workPages.filter((p) => p.slug === slug)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${slug} not found.` })
  }
}