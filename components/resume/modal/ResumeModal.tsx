import React from 'react'
import ReactModal from 'react-modal'
import styles from 'components/resume/modal/ResumeModal.module.scss'
import { Box, Modal } from '@mui/material';
import { useWindowDimensions, screenBreakPoints } from 'utils';
import { maxWidth } from '@mui/system';
import { resumeContent, expContentItems } from './resume.content';
import { BsArrowLeft } from 'react-icons/bs'
import { ArrowBackButton } from 'components/common/buttons/back_button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void
}

interface SkillItemProps {
  skills: string[];
}

interface ModalSectionHeaderProps {
  title: string;
}

export interface ExpItemProps {
  project: string;
  role: string;
  about: string;
  platform?: string;
  tools?: string;
  
}

interface ExpItemDescWithColonProps {
  title?: string;
  descText?: string;
}

interface ModalContentProps {
  onPress: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
  padding: '3% 5%'
};



export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const windowSize = useWindowDimensions();
  const mobile = screenBreakPoints.mobileMaxWidth;
  const isMobile = (windowSize?.width ?? 0.0) <= mobile;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      disableAutoFocus={true}
    >
      <Box 
        sx={{ 
          ...style, 
          width: isMobile ? '100%' : '85%' ,
          height: isMobile ? '100%' : '85%',
        }} 
        >
        <ModalContent 
          onPress={onClose}
        />
      </Box>
    </Modal>
  )
}


const ModalContent = ({
  onPress
} : ModalContentProps) => {
  return (
    <div className={styles.resume}>
      <ArrowBackButton 
        onPress={onPress}
      />
      <ModalMainLandingArea />
      <ModalSectionHeader title={'SKILLS'}/>
      <SkillSection />
      <ModalSectionHeader title={'PROJECTS'}/>
      <ModalExpSection />
    </div>
  )
}

const ModalMainLandingArea = () => {
  return(
    <div className={styles.landingArea}>
      <div className={styles.intro}>
        <h3>Val Augustus Bonite</h3>
        <Box height='10px'></Box>
        <h5>github.com/valaugustusbonite</h5>
        <h5>linkedin.com/in/valbonite</h5>
      </div>
      <Box height='50px'>
      </Box>
      <div className={styles.description}>
        <p>A creative software engineer with a passion for design, tech, and problem solving.</p>
      </div>
    </div>
  )
}

const SkillSection = () => {
  return(
    <div className={styles.skillsSection}>
      {
        resumeContent.map((content) => <SkillItem key={resumeContent.indexOf(content)} skills={content} />)
      }
    </div>
  )
}

const SkillItem = ({skills}: SkillItemProps) => {
  return(
    <div className={styles.skills}>
      {
        skills.map((skill) => <p key={skills.indexOf(skill)}>{skill}</p>)
      }
    </div>
  )
}

const ModalExpSection = () => {
  return (
    <div>
      {
        expContentItems.map((item) => <ExpItem 
          project={item.project}
          role={item.role}
          about={item.about}
          platform={item.platform}
          tools={item.tools} 
        />)
      }
    </div>
  )
}

const ModalSectionHeader = ({title}: ModalSectionHeaderProps) => {
  return (
    <div className={styles.sectionHeader}>
      <p>{title}</p>
    </div>
  )
}


const ExpItem = ({ 
  project,
  role,
  about,
  platform,
  tools,
} : ExpItemProps) => {
  return (
    <div className={styles.expItem}>
      <h3>{project}</h3>
      <p><strong>{role}</strong></p>
      <ExpItemDescWithColon title={'About'} descText={about}/>
      {
        platform != null ? 
        <ExpItemDescWithColon title={'Platform'} descText={platform}/> :
        null
      }
      {
        tools != null ? 
        <ExpItemDescWithColon title={'Tools'} descText={tools}/> : 
        null
      }
    </div>
  )
}

const ExpItemDescWithColon = ({
  title,
  descText,
}: ExpItemDescWithColonProps ) => {
  return (
    <div className={styles.expItemWithColon}>
      <p><strong>{title}:</strong> {descText}</p>
    </div>
  )
}
