import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

const GET_NOTES = gql`
	{
 		notes {
  			_id
 	 		title
  			content
  			isDone
		}
	} 
`;

const DELETE_NOTES = gql`
	mutation DeleteNote($_id: ID!) {
		deleteNote(_id: $_id) {
			ok
		}
	}
`

const CHECK_NOTES = gql`
	mutation CheckNotes($_id: ID!) {
		checkNote(_id: $_id) {
			isDone
		}
	}
`
const NotesList = () => {
	const { loading, error, data } = useQuery(GET_NOTES);
	const [deleteNote] = useMutation(DELETE_NOTES);
	const [checkNotes] = useMutation(CHECK_NOTES);

	if (loading) return (
		<>
			<p>Loading notes...</p>
			<div className="progress">
  				<div 
  					className="progress-bar progress-bar-striped progress-bar-animated" 
  					role="progressbar" 
  					aria-valuenow="75" 
  					aria-valuemin="0" 
  					aria-valuemax="100" 
  					style={{width: "75%"}}
  				>
  				</div>
			</div>
		</>
	)
	if (error) {
		return <p>Error</p>
	}

	return (
		<div className="row">
			<div className="col-md-6 offset-md-3">
				{
					data.notes.map(({ _id, title, content, isDone }) => {
						return (
							<div key={_id} className="card m-2">
								<div className="card-body">
									<h4>{title}</h4>
									<small style={
										{
											float: "right"
										}
									}>{_id}</small>
									<p>{content}</p>
									<code>{isDone ? "Está hecha" : "No está hecha"}</code>
									<button 
										className="btn btn-danger btn-sm" 
										style={
											{ 
												display: "block",
												float: "right"
											}
										}
										onClick={async e => {
											await deleteNote({variables: {_id: _id}});
											window.location.reload();
										}}
									>x</button>
									<button
										className="btn btn-success btn-sm"
										style={
											{
												display: isDone ? "none" : "block",
												float: "right"
											}
										}
										onClick={async e => {
											await checkNotes({variables: {_id: _id}});
											window.location.reload();
										}}
									>
										✓
									</button>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}


export default NotesList;