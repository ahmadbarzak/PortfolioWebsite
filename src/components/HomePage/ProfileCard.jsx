import SocialLink from '../SocialLink';
import ProfilePicture from './ProfilePicture';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ProfileCard = forwardRef(({path, text}, ref) => {

  ProfileCard.displayName = 'ProfileCard';

  return (
    <div ref={ref} style={{ position:'relative', width:'300px', height:'400px'}}>
        <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', textAlign:'center'}}>
            <ProfilePicture path={path}/>
            <div style={{width:500, lineHeight:0.9}}>
              <p style={{ color:'white', fontSize:'65px', margin:'10px 0', fontFamily:'Roboto-Serif'}}>
                {text}
              </p>
            </div>
            <div style={{ marginTop:'20px', display:'flex', justifyContent:'center', alignItems:'center', gap:'20px'}}>
                <SocialLink iconPath="/socialLinks/gmail.png" url="mailto:ahmadmbarzak@gmail.com" />
                <SocialLink iconPath="/socialLinks/linkedin.png" url="https://www.linkedin.com/in/abarzak/"/>
                <SocialLink iconPath="/socialLinks/github.png" url="https://github.com/abar494"/>
            </div>
        </div>
    </div>
  );
});

ProfileCard.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


const MotionProfileCard = motion(ProfileCard, { forwardMotionProps: true })

export default MotionProfileCard;