describe('Stack de pruebas para ToDo List', () => {

  it('Visita existosa a Localhost:3000', () => {
    cy.visit('localhost:3000')

    cy.title().should('include', 'Todo List App')

  })

  it('Agregar tarea nueva', () =>{
    const newTask = "comprar leche"

    cy.visit('localhost:3000')

    cy.get('input[placeholder="Nueva tarea"]').type(newTask)
    cy.get('button').contains("Agregar").click({force:true})
    cy.get('ul.task-list').should('contain',newTask)
  })

  it("Eliminar Tarea",()=>{
    cy.visit('localhost:3000')
    const taskToDelete="comprar leche";

    cy.get('li').contains(taskToDelete).find('button.delete').click()

    cy.get('ul.task-list').should('not.contain',taskToDelete)

  })

})