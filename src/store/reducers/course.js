const INITIAL_STATE = {
    activeLesson:{},
    activeModule:{},
    modules:[
            {
                id:1, title:"Iniciando com React", lessons:[
                    { id:1, title:'Primaira aula'},
                    { id:2, title:'Segunda aula'},
                    { id:3, title:'Terceira aula'},
                ]
            },
            {
                id:2, title:"React - Redux", lessons:[
                    { id:1, title:'Quarta aula'},
                    { id:2, title:'Quinta aula'},
                    { id:3, title:'Sexta aula'},
                ]
            },
    ]
}



const course =  (state = INITIAL_STATE, action) =>{

    switch (action.type) {
        case "TOGGLE_LESSON":
            return{
                ...state,
                activeLesson:action.payload.lesson,
                activeModule:action.payload.module
            };
        default:
            return state;
    }

}

export default course;