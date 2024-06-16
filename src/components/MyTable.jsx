import React from 'react';
import '../styles/table.css'

const MyTable = ({ dataTable }) => {
	return (
		<div>
			<table>
				<thead>
				<tr>
					<th>User ID</th>
					<th>ID</th>
					<th>Title</th>
					<th>Body</th>
				</tr>
				</thead>
				<tbody>
				{dataTable.map((item) => (
					<tr key={item.id}>
						<td>{item.userId}</td>
						<td>{item.id}</td>
						<td>{item.title}</td>
						<td>{item.body}</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
};

export default MyTable;
