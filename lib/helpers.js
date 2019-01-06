export function PopulateSelectQuery(query, populates, select){
	if(populates != null){
		for (let index = 0; index < populates.length; index++) {
			query.populate(populates[index])
		}
	}
	if(select != null) query.select(select)
	return query
}
