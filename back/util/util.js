const pg = require('pg')

class Util {

	contructor() {
		
	}

	connectDB() {
		//this.client = new PGClient()
		//this.client.connect()

		this.client = new pg.Pool({
			user: 'postgres',
		  	host: 'localhost',
		  	database: 'postgres',
		  	password: '121212',
		  	port: 5432,
		})
	}

	getDB() {
		if (this.client == null) {
			this.connectDB()
		}
		
		return this.client
	}


}

module.exports = new Util()

