const mongoUser = require( "../model/mongoUser.js")
const MySqlUser = require("../model/user.js")

describe("Pruebas a la tabla Usuario", function() {
    it("Se pueden crear usuarios en MySQL",async ()=>{

        const user = new MySqlUser("Pepito Perez","pepito@ejemplo.com","password123")

        const savedUser = await user.saveUser()

        expect(savedUser.name).toBe("Pepito Perez")
        expect(savedUser.email).toBe("pepito@ejemplo.com")
        expect(savedUser.password).toBe("password123")

    })

    it("Se pueden crear usuarios en Mongo",async ()=>{

        const user = new MySqlUser("Pepito Perez","pepito@ejemplo.com","password123")

        const savedUser = await user.saveUser()

        expect(savedUser.name).toBe("Pepito Perez")
        expect(savedUser.email).toBe("pepito@ejemplo.com")
        expect(savedUser.password).toBe("password123")

    })

})

