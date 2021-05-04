import React from 'react'

function Addtodoitem(props) {


    const func = function () {

        const tit = (document.getElementById('inputtitle').value).trim()
        const des = (document.getElementById('inputdesc').value).trim()


        if (tit === '' || des === '') {
            alert('Enter title and description')
        } else {
            document.getElementById('inputtitle').value = ''
            document.getElementById('inputdesc').value = ''
            props.onclick(tit, des)
        }
    }


    return (
        <div className="maincon container my-3">
            <h3>Add a todo item</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text" className="form-control inp" id="inputtitle" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" className="form-control inp" id="inputdesc" />
                    <div id="emailHelp" className="form-text">All your todos are saved inside your browser memory until you delete it.</div>
                    </div>

                <button type="button" onClick={func} className="btn btn-primary">Add todo</button>
            </form>
        </div>
    )
}

export default Addtodoitem;
