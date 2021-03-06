const resolvers = {
	wikidata: {
		urlMatrch: function(location) {
			return location.href.match(/https:\/\/[\w]+.wikidata.org\/wiki\/Q\d+/) !== null;
		},
		getEntityId: async function() {
			return location.href.match(/https:\/\/[\w]+.wikidata.org\/wiki\/(Q\d+)/)[1];
		}
	}
};