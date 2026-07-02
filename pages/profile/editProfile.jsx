import React, { useEffect, useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../src/lib/firebase'; // Ensure this path is correct
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import './editprofile.css';

const EditProfile = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [userPhotoFile, setUserPhotoFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (user) {
            setUserName(user.displayName || '');
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [user]);

    const updateUser = async (e) => {
        e.preventDefault();
        if (!user) return;

        try {
            setSubmitting(true);
            let finalPhotoURL = user.photoURL || ''; 

            // 1. IF A NEW PHOTO WAS SELECTED: Upload it to Firebase Storage first
            if (userPhotoFile) {
                const storage = getStorage();
                // Create a unique path using the user's ID
                const storageRef = ref(storage, `profile_pictures/${user.uid}`);
                
                // Upload the raw file
                await uploadBytes(storageRef, userPhotoFile);
                
                // Get the live web URL of the uploaded image
                finalPhotoURL = await getDownloadURL(storageRef);
            }

            // 2. Update Name and Photo in Firebase Auth
            await updateProfile(user, {
                displayName: userName,
                photoURL: finalPhotoURL 
            });

            // 3. Save updated details to Firestore
            const userDocRef = doc(db, "users", user.uid);
            await setDoc(userDocRef, {
                displayName: userName,
                photoURL: finalPhotoURL 
            }, { merge: true });

            // 4. Force Firebase to fetch fresh data from the server
            await user.reload();

            alert('Profile updated successfully!');
            navigate('/profile');
            
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Something went wrong updating your data.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading Profile Details...</div>;
    }

    return (
        <div className='editprofile'>
            <div className='editcontainer'>
                <form onSubmit={updateUser}>
                    <h1>Edit Your Profile</h1>

                    {/* Username */}
                    <div className="input">
                        <label htmlFor="userName" id='userNamelabel'>User Name:</label>
                        <br />
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                        <br />
                    </div>

                    {/* Profile Picture File Upload */}
                    {/* <div className="input file">
                        <label htmlFor="userPhoto" id='userPhotolabel'>Profile Picture:</label>
                        <br />
                        <input
                            type="file"
                            id="userPhoto"
                            name="userPhoto"
                            accept="image/*"
                            onChange={(e) => setUserPhotoFile(e.target.files[0])}
                        />
                    </div> */}

                    <div id='btndiv' style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                        <button type="submit" id="btn" disabled={submitting}>
                            {submitting ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;