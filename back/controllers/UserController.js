const util = requireF("util/util.js")


class UserController {

	async getById(id, callback) {

		try {
			var retorno = await util.getDB().query('SELECTd $1::text as message', ['Hello world!'], (err, result) => {
				
			})
		
			callback({"message" : retorno})
		} catch(err) {
			callback({"message" : err})
		}
		
	}	

	findByFilters(name, callback) {

	}

	save(entity, callback) {

	}

	remove(id, callback) {

	}

}

module.exports = UserController