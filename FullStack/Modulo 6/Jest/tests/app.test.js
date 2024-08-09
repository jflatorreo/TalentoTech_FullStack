const supertest = require ("supertest")
const app = require ( "../server.js")

describe("API de creación de Usuarios",()=>{
    it("Se crea usuario en Mongo",async () =>{
        const response = await supertest(app)
            .post("/mongoUser")
            .send({name:"Pepito Perez",email:"pepito@example.com",password:"password123"})
        expect(response.status).toBe(201)
        expect(response.body.name).toBe("Pepito Perez")
        expect(response.body.email).toBe("pepito@example.com")
        expect(response.body.password).toBe("password123")

    })

    it("Se crea usuario en MySQL",async () =>{
        const response = await supertest(app)
            .post("/mySQLUser")
            .send({name:"Pepito Perez",email:"pepito@example.com",password:"password123"})
        expect(response.status).toBe(201)
        expect(response.body.name).toBe("Pepito Perez")
        expect(response.body.email).toBe("pepito@example.com")
        expect(response.body.password).toBe("password123")

    })

    }
)