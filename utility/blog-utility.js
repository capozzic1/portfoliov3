	// sort posts newest -> oldest by createdAt
	export function sortedPosts(posts) {
		return (posts || []).slice().sort((a, b) => {
			const da = a?.createdAt ? new Date(a.createdAt) : new Date(0)
			const db = b?.createdAt ? new Date(b.createdAt) : new Date(0)
			return db - da
		})
	}

    export const formatDate = (iso) => {
            if (!iso) return ''
            const d = new Date(iso)
            if (isNaN(d)) return ''
            const mm = String(d.getMonth() + 1).padStart(2, '0')
            const dd = String(d.getDate()).padStart(2, '0')
            const yy = String(d.getFullYear()).slice(-2)
            return `${mm}/${dd}/${yy}`
        }
