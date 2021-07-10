import React from 'react';
import gql from 'graphql-tag';
import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

const CREATE_NOTE = gql`
	mutation CreateNote($title: String!, $content: String!) {
		createNote(title: $title, content: $content) {
			title
		}
	}
`

const NotesForm = () => {
	const [content, setContent] = useState("");
	const [error, setError] = useState(null);
	const [title, setTitle] = useState("");
	const [createNote] = useMutation(CREATE_NOTE, {
		async onError(err: any) {
			const e = `${err}`.split(':').reverse()[0];
			await setError(e);
		}
	});

	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<div className="card">
					<div className="card-body">
						<h6 className="m-2 text-danger">{error}</h6>
						<form onSubmit={async e => {
							e.preventDefault();
							setError(null);
							await createNote({variables: {title, content}});
							if (error === null){
								window.location.href = "/";
							}
						}}>
							<div className="form-group m-2">
								<input 
									type="text" 
									placeholder="Title..." 
									className="form-control" 
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</div>
							<div className="form-group m-2">
								<textarea 
									type="text" 
									rows="2" 
									placeholder="Content..." 
									className="form-control" 
									style={{resize: "none"}}
									value={content}
									onChange={e => setContent(e.target.value)}
								/>
							</div>
							<button className="btn btn-primary mx-2">
								Save
							</button>
						</form>
					</div> 
				</div>
			</div>
		</div>
	)
}
	


export default NotesForm;