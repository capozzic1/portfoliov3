import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import usePosts from './usePosts'
import Modal from 'react-bootstrap/Modal'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDate, sortedPosts } from '../utility/blog-utility'
import { Col, Row, Spinner } from 'react-bootstrap'
export default function BlogTable() {
	const { data: posts = [], isLoading, isError } = usePosts()

	const [showModal, setShowModal] = useState(false)
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [currentPost, setCurrentPost] = useState({ id: null, title: '', content: '' })

	const queryClient = useQueryClient()

	const updateMutation = useMutation(
		async (payload) => {
			payload.author = "me";
			const res = await fetch(`/api/posts/${payload.id}`, {
				credentials: 'include',
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			})
			if (!res.ok) {
				const txt = await res.text()
				throw new Error(txt || 'Failed to update post')
			}
			return res.json()
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['posts'])
				closeModal()
			},
		}
	)

	const deleteMutation = useMutation(
		async (payload) => {
			const res = await fetch(`/api/posts/${payload.id}`, {
				credentials: 'include',
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
			})
			if (!res.ok) {
				const txt = await res.text()
				throw new Error(txt || 'Failed to delete post')
			}
			// Some APIs return 204 No Content — avoid calling res.json() on empty body
			try {
				return await res.json()
			} catch (err) {
				return null
			}
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['posts'])
				closeDelete()
			},
		}
	)

	// create (new) post mutation
	const createMutation = useMutation(
		async (payload) => {
			const res = await fetch('api/posts', {
				credentials: 'include',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			})
			if (!res.ok) {
				const txt = await res.text()
				throw new Error(txt || 'Failed to create post')
			}
			return res.json()
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['posts'])
				closeNew()
			},
		}
	)

	const [showNewModal, setShowNewModal] = useState(false)
	const [newPost, setNewPost] = useState({ title: '', content: '', author: 'hay' })

	if (isLoading) return  <Spinner animation="border" variant="primary" />
	if (isError) return <div>Error loading posts.</div>

	const openEdit = (post) => {
		setCurrentPost({ id: post.id, title: post.title || '', content: post.content || '' })
		setShowModal(true)
	}

	const openNew = () => {
		setNewPost({ title: '', content: '', author: 'hay' })
		setShowNewModal(true)
	}

	const closeModal = () => {
		setShowModal(false)
		setCurrentPost({ id: null, title: '', content: '' })
	}

	const closeNew = () => {
		setShowNewModal(false)
		setNewPost({ title: '', content: '', author: 'hay' })
	}

	const handleSave = async () => {
		updateMutation.mutate(currentPost)
	}

	const handleNewSave = async () => {
		createMutation.mutate(newPost)
	}

	const handleDelete = async () => {
		// use the currently selected post stored in state (set by openDelete)
		if (!currentPost?.id) return
		deleteMutation.mutate(currentPost)
	}

	const openDelete = (post) => {
		setCurrentPost({ id: post.id, title: post.title || '', content: post.content || '' })
		setShowDeleteModal(true)
	}

	const closeDelete = () => {
		setShowDeleteModal(false)
		setCurrentPost({ id: null, title: '', content: '' })
	}


	// format createdAt as MM/DD/YY

	const sortedPostsData = sortedPosts(posts)

	return (
		
		<Row>
			<Col className="mt-4 mb-2">
	
			<Table variant='dark' striped bordered hover>
				<thead>
					<tr>
						<th>Title</th>
						<th>Date</th>
						<th style={{ width: 200 }}>
							Actions
							<Button size="sm" variant="success" className="ms-2" onClick={openNew}>
								New
							</Button>
						</th>
					</tr>
				</thead>
				<tbody>
					{sortedPostsData.map((post) => (
						<tr key={post.id}>
							<td>{post.title}</td>
							<td>{formatDate(post.createdAt)}</td>
							<td>
								<Button size="sm" variant="primary" className="me-2" onClick={() => openEdit(post)}>
									Edit
								</Button>
								<Button size="sm" variant="danger" onClick={() => openDelete(post)}>Delete</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>

			<Modal show={showModal} onHide={closeModal} centered>
				<Modal.Header closeButton>
					<Modal.Title>Edit Post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								value={currentPost.title}
								onChange={(e) => setCurrentPost((p) => ({ ...p, title: e.target.value }))}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Content</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="Leave a comment here"
								style={{ height: '100px' }}
								value={currentPost.content}
								onChange={(e) => setCurrentPost((p) => ({ ...p, content: e.target.value }))}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeModal} disabled={updateMutation.isLoading}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSave} disabled={updateMutation.isLoading}>
						{updateMutation.isLoading ? 'Saving…' : 'Save changes'}
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal show={showNewModal} onHide={closeNew} centered>
				<Modal.Header closeButton>
					<Modal.Title>New Post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								value={newPost.title}
								onChange={(e) => setNewPost((p) => ({ ...p, title: e.target.value }))}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Content</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="Post content"
								style={{ height: '100px' }}
								value={newPost.content}
								onChange={(e) => setNewPost((p) => ({ ...p, content: e.target.value }))}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeNew} disabled={createMutation.isLoading}>
						Close
					</Button>
					<Button variant="success" onClick={handleNewSave} disabled={createMutation.isLoading}>
						{createMutation.isLoading ? 'Creating…' : 'Create Post'}
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal show={showDeleteModal} onHide={closeDelete} centered>
				<Modal.Header closeButton>
					<Modal.Title>Delete Post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group>
							<Form.Label>Are you sure you want to delete this post?</Form.Label>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeDelete} disabled={deleteMutation.isLoading}>
						Close
					</Button>
					<Button variant="success" onClick={handleDelete} disabled={deleteMutation.isLoading}>
						{deleteMutation.isLoading ? 'Deleting...' : 'Delete Post'}
					</Button>
				</Modal.Footer>
			</Modal>
					</Col>
		</Row>
		
	)
}
