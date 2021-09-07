import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import DisplayImagePlaceholder from '../../assets/team/placeholder.png';

import './SpeakerModal.styles.scss';

const SpeakerModal = ({ isOpen, closeModal, speaker }) => {
  if (!speaker) return null;

  return (
    <>
      <Modal
        aria-labelledby='speaker-modal'
        aria-describedby='speaker-details'
        className='speaker-modal'
        open={isOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={isOpen}>
          <div className='speaker-modal-content'>
            <div className='speaker-info-container'>
              <div className='display-pic'>
                {speaker?.image ? (
                  <img src={speaker.image} alt='speaker profile pic' />
                ) : (
                  <img
                    src={DisplayImagePlaceholder}
                    alt='speaker profile pic'
                  />
                )}
              </div>

              <div className='name'>{speaker?.name}</div>
              <div className='bio'>{speaker?.longBio || speaker?.shortBio}</div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default SpeakerModal;
