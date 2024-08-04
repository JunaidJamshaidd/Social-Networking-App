import React, { useEffect, useState } from 'react'
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import {db} from './firebase';
import firebase from 'firebase/compat/app';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState("")
    const user = useSelector(selectUser);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const q = query(collection(db, "posts"), orderBy('timestamp','desc'));
                const unsubscribe = onSnapshot(q, (snapshot) => {
                    setPosts(snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    })));
                });

                return () => unsubscribe(); // Cleanup function to unsubscribe on unmount
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();

    }, []);

    const sendPost = async (e) => {
        e.preventDefault();
       
        try {
            const docRef = await addDoc(collection(db,'posts'), {
                name: user.displayName,
                description: user.email,
                message: input,
                photoUrl: '',
                timestamp: serverTimestamp(),
            });
  
            console.log("Post added with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding post: ", error);
        }
    
        setInput(""); // Clear input after sending post
    };
    

  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="field">
                <CreateIcon className='create_icon'/>
                <form>
                    <input value={input} onChange={e=> setInput(e.target.value)} type="text" placeholder='Start a post' />
                    <button onClick={sendPost} type='submit'>Send</button>

                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOption Icon= {ImageIcon} title='Photo' color='#7085F9' />
                <InputOption Icon= {SubscriptionsIcon} title='Video' color='#E7A33E' />
                <InputOption Icon= {EventNoteIcon} title='Event' color='#C0CBCD' />
                <InputOption Icon= {CalendarViewDayIcon} title='Write Article' color='#7FC15E' />
            </div>
        </div>

        <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
    <Post
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
    />
))}

</FlipMove>
    </div>
  )
}

export default Feed