import React, { useEffect, useState } from 'react';
import { getAuth, signOut, sendEmailVerification } from 'firebase/auth';
import { Link, useNavigate } from 'react-router';
import './profile.css';

const Profile = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    // Set up safe React state variables to hold data once Firebase is ready
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Actively listen to Firebase until it loads the authenticating user
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe(); // Clean up listener on unmount
    }, [auth]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('User logged out');
            navigate('/login'); // Redirect them to login after signing out
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const handleVerifyEmail = async () => {
        if (!user) return;
        try {
            await sendEmailVerification(user);
            alert('Verification email sent! Please check your inbox.');
        } catch (error) {
            console.error('Verification error:', error.message);
            alert(error.message);
        }
    };

    // Show a loading state instead of crashing while fetching the active session
    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading account details...</div>;
    }

    // Protection layout if someone stumbles onto /profile without logging in
    if (!user) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Please log in to view your profile.</h2>
                <button onClick={() => navigate('/login')}>Go to Login</button>
            </div>
        );
    }

    // Pull variables safely now that we know 'user' exists
    const userName = user.displayName || 'N/A';
    const userPhoto = user.photoURL; // Fallback avatar if empty
    const userEmail = user.email;
    const emailVerified = user.emailVerified;
    const userPhone = user.phoneNumber;
    const userId = user.uid;

    return (
        <div className="profile-page">
            <div className='edit-btn'>
                <button onClick={() => navigate('/editprofile')}>
                    Edit Profile
                </button>
            </div>

            <div className='profile'>
                <div className="user-info">
                    <h2 id='userName'>User Name: {userName}</h2>
                    {/* <h2 id='phoneNumber'>Phone Number: {!userPhone ? 'N/A' : userPhone}</h2> */}
                    <h2 id='email'>Email: {userEmail}</h2>

                    {/* Fixed your conditional verification display & action item */}
                    <h2 id='emailVerified'>
                        Verified: {emailVerified ? (
                            <span style={{ color: 'green' }}>Yes</span>
                        ) : (
                            <>
                                <span style={{ color: 'red' }}>No</span>
                                <button id='verifyBtn' onClick={handleVerifyEmail} >
                                    Verify Email
                                </button>
                            </>
                        )}
                    </h2>

                    {/* <h2>User ID: {userId}</h2> */}
                </div>

                <div className="user-img-logout">
                    <div className="img-div">
                        <div className="img">
                            {userPhoto ? (
                                <img
                                    src={userPhoto}
                                    alt={`${userName || 'User'}'s Avatar`}
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '50%',
                                        objectFit: 'cover' // Prevents the image from stretching
                                    }}
                                    onError={(e) => {
                                        // If the Firebase image link is broken, hide the image 
                                        // Alternatively, you can set e.target.src to a default avatar URL
                                        e.target.style.display = 'none';
                                    }}
                                />
                            ) : (
                                // Styled fallback so the UI doesn't break if there's no photo
                                <div style={{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '50%',
                                    backgroundColor: '#007bff', // Give it a nice background color
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '48px',
                                    fontWeight: 'bold'
                                }}>
                                    {/* Display the first letter of the username, or a default '?' */}
                                    {userName ? userName.charAt(0).toUpperCase() : '?'}
                                </div>
                            )}
                        </div>
                    </div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;