import { useState } from "react";

function Create(){

    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Title: " + title +
                    " Cover: " + cover +
                    " Author: " + author);
    }

    return(
        <div>
            <h3>Hello from create.js component.</h3>
            <form onSubmit = {handleSubmit}>
                <div className = "form-group">
                    <label>Add Book Title: </label>
                    <input type = "text"
                        className = "form-control"
                        value = {title}
                        onChange = {
                            (e) => { 
                                setTitle(e.target.value) 
                            }
                        }
                    />
                </div>
                <div className = "form-group">
                    <label>Add Book Author: </label>
                    <input type = "text"
                        className = "form-control"
                        value = {author}
                        onChange = {
                            (e) => { 
                                setAuthor(e.target.value) 
                            }
                        }
                    />
                </div>
                <div className = "form-group">
                    <label>Add Book Cover: </label>
                    <input type = "text"
                        className = "form-control"
                        value = {cover}
                        onChange = {
                            (e) => { 
                                setCover(e.target.value) 
                            }
                        }
                    />
                </div>
                <div>
                    <input type = "submit" value = "Add Book"></input>
                </div>
            </form>
        </div>
    );
}

export default Create;