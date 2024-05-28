import Modal, { ModalProps } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';

type Props = ModalProps & {
  children: React.ReactNode
}


const MyModal = ({ children, ...props }: Props) => {
  return (
    <Modal {...props} center>
      {children}
    </Modal>
  )
}

export default MyModal
