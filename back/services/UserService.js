const UserController = requireF("controllers/UserController.js")


function UserService(app) {

	var controller = new UserController()
	
	app.get("/users/:id", function(req, res) {

		if (!req.params.id) {
			res.status(400).json("Param ")
			return
		}

		controller.getById(req.params.id, (result) => {
			res.status(result.status == "OK" ? 200 : 400).json(result)
		})
	})

	app.get("/users", function(req, res) {
		controller.findByFilters(req.query.name, (result) => {
			res.status(result.status == "OK" ? 200 : 400).json(result)
		})
	})

	app.put("/users", function(req, res) {

		
		controller.save(req.query, (result) => {
			res.status(result.status == "OK" ? 200 : 400).json(result)
		})
	})

	app.delete("/users/:id", function(req, res) {
		
		if (!req.params.id) {
			res.status(400).json("Param ")
			return
		}

		controller.save(req.params.id, (result) => {
			res.status(result.status == "OK" ? 200 : 400).json(result)
		})
	})

}


module.exports = UserService