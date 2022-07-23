import { paginate, resolver } from "blitz"
import db from "db"
export default resolver.pipe(resolver.authorize(), async ({ where, orderBy, skip = 0, take = 100 }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const {
    items: projects,
    hasMore,
    nextPage,
    count,
  } = await paginate({
    skip,
    take,
    count: () =>
      db.project.count({
        where,
      }),
    query: (paginateArgs) => db.project.findMany({ ...paginateArgs, where, orderBy }),
  })
  return {
    projects,
    nextPage,
    hasMore,
    count,
  }
})
