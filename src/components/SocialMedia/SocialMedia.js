import React from 'react';
import { Button } from 'react-bootstrap';
import googleicon from '../../icon/google.svg';
import facebook from '../../icon/facebook-f.svg'
import githubicon from '../../icon/github.svg'

const SocialMedia = () => {
    return (
        <div className='d-flex justify-content-center py-4'>
            <div ><Button  className='me-2 d-block mx-auto' variant="outline-success"><img style={{ width: '30px' }} src={googleicon} alt="" /> Continue With Google</Button></div>
            <div><Button className='me-2 d-block mx-auto' variant="outline-success"><img style={{ width: '20px' }} src={facebook} alt="" /> Continue With Facebook</Button></div>
            <div><Button className='me-2 d-block mx-auto' variant="outline-success"><img style={{ width: '30px' }} src={githubicon} alt="" /> Continue With GitHub</Button></div>
        </div>
    );
};

export default SocialMedia;