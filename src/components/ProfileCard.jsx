import SocialLink from './SocialLink';
import ProfilePicture from './ProfilePicture';

const ProfileCard = () => {
  return (
    <div style={{ position: 'relative', width: '300px', height: '400px' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <ProfilePicture />
            <div style={{width:500, lineHeight:0.9}}>
              <p style={
                { color: 'white', fontSize: '65px', margin: '10px 0', fontFamily: 'Roboto-Serif', }
              }>Hi there, I&apos;m Ahmad Barzak :&#41;</p>
            </div>
            <div style={{
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              }
            }>
                <SocialLink iconPath="gmail.png" url="mailto:ahmadmbarzak@gmail.com" />
                <SocialLink iconPath="linkedin.png" url="https://www.linkedin.com/in/abarzak/" />
                <SocialLink iconPath="github.png" url="https://github.com/abar494" />
            </div>
        </div>
    </div>
  );
};

export default ProfileCard;