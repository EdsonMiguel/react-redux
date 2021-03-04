import React from 'react';
import { connect } from 'react-redux';
import * as CourseActions from '../../store/action/course'
import { bindActionCreators } from 'redux'

function Sidebar({modules, toggleLesson}) {


    return(
        <aside>
            {
                modules.map((module)=>(
                    <div key={module.id}>
                        <strong>{module.title}</strong>
                        <ul>
                            {module.lessons.map((lesson)=>(
                                <li key={lesson.id}>{lesson.title}
                                <button onClick={()=> toggleLesson(module, lesson)}> Definir aula</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </aside>
    )
}


const mapStateToProps = state =>({
    modules: state.course.modules
})

//const mapDispatchToProps = dispatch =>({
//    toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
//})

const mapDispatchToProps = dispatch =>
    bindActionCreators(CourseActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);