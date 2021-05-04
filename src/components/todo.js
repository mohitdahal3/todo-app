import React from 'react'

export default function Todo(props) {
    return (
        <>
            <div className='container-sm my-5'>
                <h5>{props.todo.title}</h5>
                <p className="par">{props.todo.work}</p>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />

                    <label className="form-check-label" htmlFor="exampleCheck1">Mark as completed</label>
                </div>
                <button type="button" className="mybtn" onClick={() => { props.onDelete(props.todo) }}>Delete</button>

            </div>
            <hr />
        </>
    )
}
