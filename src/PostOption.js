import React from 'react';
import { useParams ,useNavigate, Link} from 'react-router-dom';
import { deletePost } from './api';
import closeIcon from './images/free-icon-close-4096127.png'

export default function PostOption() {
    const navigate = useNavigate();
    const params = useParams();

    const handleDelete = async () => {
        const postId = parseInt(params.postId);
        const answer = await deletePost(postId);
        navigate(-1);
    };

    return (
        <div className='login-page'>
            <div className='form' style={{ position: 'relative' }}>
                <Link to="/post" style={{ position: 'absolute', top: '0', right: '0', width: '8%', margin: '4px 4px' }}>
                    <img src={closeIcon} alt="Close" style={{ width: '100%' }}/>
                </Link>
                <button onClick={handleDelete}>Удалить пост</button>
            </div>
        </div>
    );
}
