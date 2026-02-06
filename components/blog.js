import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import usePosts from './usePosts'

export default function BlogTable() {
	const { data: posts = [], isLoading, isError } = usePosts()

	if (isLoading) return <div>Loading posts...</div>
	if (isError) return <div>Error loading posts.</div>

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>Title</th>
					<th style={{ width: 200 }}>Actions</th>
				</tr>
			</thead>
			<tbody>
				{posts.map((post) => (
					<tr key={post.id}>
						<td>{post.title}</td>
						<td>
							<Button size="sm" variant="primary" className="me-2">
								Edit
							</Button>
							<Button size="sm" variant="danger">
								Delete
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}
export default function Blog() {
    
}