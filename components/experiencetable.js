

import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useExperience from './useExperience'
import styles2 from  '../styles/spinner.module.scss'

export default function ExperienceTable() {

	const { data: experience = [], isLoading, isError } = useExperience()

	const [showModal, setShowModal] = useState(false)
	const [showNewModal, setShowNewModal] = useState(false)
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [currentExperience, setCurrentExperience] = useState({
		id: null,
		company: '',
		position: '',
		years: '',
	})
	const [newExperience, setNewExperience] = useState({
		company: '',
		position: '',
		years: '',
	})

	const queryClient = useQueryClient()

	const updateMutation = useMutation(
		async (payload) => {
			const res = await fetch(`/api/experience/${payload.id}`, {
				credentials: 'include',
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					company: payload.company,
					position: payload.position,
					years: payload.years,
				}),
			})
			if (!res.ok) {
				const txt = await res.text()
				throw new Error(txt || 'Failed to update experience')
			}
			return res.json()
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['experience'])
				closeModal()
			},
		}
	)

	const createMutation = useMutation(
		async (payload) => {
			const res = await fetch('/api/experience', {
				credentials: 'include',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					company: payload.company,
					position: payload.position,
					years: payload.years,
				}),
			})
			if (!res.ok) {
				const txt = await res.text()
				throw new Error(txt || 'Failed to create experience')
			}
			return res.json()
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['experience'])
				closeNew()
			},
		}
	)

	const deleteMutation = useMutation(
		async (payload) => {
			const res = await fetch(`/api/experience/${payload.id}`, {
				credentials: 'include',
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
			})
			if (!res.ok) {
				const txt = await res.text()
				throw new Error(txt || 'Failed to delete experience')
			}
			try {
				return await res.json()
			} catch (err) {
				return null
			}
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['experience'])
				closeDelete()
			},
		}
	)

	if (isLoading) return(
			<div className={styles2.spinnerContainer}><Spinner animation="grow" variant="primary" />
			</div>
	)
	if (isError) return <div>Error loading experience.</div>

	const openEdit = (item) => {
		setCurrentExperience({
			id: item.id,
			company: item.company || '',
			position: item.position || '',
			years: item.years || '',
		})
		setShowModal(true)
	}

	const closeModal = () => {
		setShowModal(false)
		setCurrentExperience({ id: null, company: '', position: '', years: '' })
	}

	const openNew = () => {
		setNewExperience({ company: '', position: '', years: '' })
		setShowNewModal(true)
	}

	const closeNew = () => {
		setShowNewModal(false)
		setNewExperience({ company: '', position: '', years: '' })
	}

	const openDelete = (item) => {
		setCurrentExperience({
			id: item.id,
			company: item.company || '',
			position: item.position || '',
			years: item.years || '',
		})
		setShowDeleteModal(true)
	}

	const closeDelete = () => {
		setShowDeleteModal(false)
		setCurrentExperience({ id: null, company: '', position: '', years: '' })
	}

	const handleSave = () => {
		updateMutation.mutate(currentExperience)
	}

	const handleNewSave = () => {
		createMutation.mutate(newExperience)
	}

	const handleDelete = () => {
		if (!currentExperience?.id) return
		deleteMutation.mutate(currentExperience)
	}

	return (
		<Row>
			<Col className="mt-4 mb-2">
				<Table variant="dark" striped bordered hover>
					<thead>
						<tr>
							<th>Company</th>
							<th>Position</th>
							<th>Years</th>
							<th style={{ width: 220 }}>
								Actions
								<Button size="sm" variant="success" className="ms-2" onClick={openNew}>
									New
								</Button>
							</th>
						</tr>
					</thead>
					<tbody>
						{experience.map((item, idx) => (
							<tr key={item.id ?? `${item.company}-${item.position}-${idx}`}>
								<td>{item.company}</td>
								<td>{item.position}</td>
								<td>{item.years}</td>
								<td>
									<Button size="sm" variant="primary" className="me-2" onClick={() => openEdit(item)}>
										Edit
									</Button>
									<Button size="sm" variant="danger" onClick={() => openDelete(item)}>
										Delete
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>

				<Modal show={showModal} onHide={closeModal} centered>
					<Modal.Header closeButton>
						<Modal.Title>Edit Experience</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group className="mb-3">
								<Form.Label>Company</Form.Label>
								<Form.Control
									type="text"
									value={currentExperience.company}
									onChange={(e) =>
										setCurrentExperience((p) => ({ ...p, company: e.target.value }))
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Position</Form.Label>
								<Form.Control
									type="text"
									value={currentExperience.position}
									onChange={(e) =>
										setCurrentExperience((p) => ({ ...p, position: e.target.value }))
									}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Years</Form.Label>
								<Form.Control
									type="text"
									value={currentExperience.years}
									onChange={(e) =>
										setCurrentExperience((p) => ({ ...p, years: e.target.value }))
									}
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={closeModal} disabled={updateMutation.isLoading}>
							Close
						</Button>
						<Button variant="primary" onClick={handleSave} disabled={updateMutation.isLoading}>
							{updateMutation.isLoading ? 'Saving...' : 'Save changes'}
						</Button>
					</Modal.Footer>
				</Modal>

				<Modal show={showNewModal} onHide={closeNew} centered>
					<Modal.Header closeButton>
						<Modal.Title>New Experience</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group className="mb-3">
								<Form.Label>Company</Form.Label>
								<Form.Control
									type="text"
									value={newExperience.company}
									onChange={(e) =>
										setNewExperience((p) => ({ ...p, company: e.target.value }))
									}
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Position</Form.Label>
								<Form.Control
									type="text"
									value={newExperience.position}
									onChange={(e) =>
										setNewExperience((p) => ({ ...p, position: e.target.value }))
									}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Years</Form.Label>
								<Form.Control
									type="text"
									value={newExperience.years}
									onChange={(e) =>
										setNewExperience((p) => ({ ...p, years: e.target.value }))
									}
								/>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={closeNew} disabled={createMutation.isLoading}>
							Close
						</Button>
						<Button variant="success" onClick={handleNewSave} disabled={createMutation.isLoading}>
							{createMutation.isLoading ? 'Creating...' : 'Create Experience'}
						</Button>
					</Modal.Footer>
				</Modal>

				<Modal show={showDeleteModal} onHide={closeDelete} centered>
					<Modal.Header closeButton>
						<Modal.Title>Delete Experience</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form>
							<Form.Group>
								<Form.Label>Are you sure you want to delete this experience entry?</Form.Label>
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={closeDelete} disabled={deleteMutation.isLoading}>
							Close
						</Button>
						<Button variant="danger" onClick={handleDelete} disabled={deleteMutation.isLoading}>
							{deleteMutation.isLoading ? 'Deleting...' : 'Delete Experience'}
						</Button>
					</Modal.Footer>
				</Modal>
			</Col>
		</Row>
	)
}
