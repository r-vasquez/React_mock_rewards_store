import { createPortal } from 'react-dom'

function Portal({ children }) {
  const node = document.getElementById('modal-portal')
  return node ? createPortal(children, node) : children
}

export default Portal
