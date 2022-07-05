import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { HashLink } from 'react-router-hash-link';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading] = useAuthState(auth);

    return (
        <div class="navbar bg-neutral min-w-full p-4">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl text-white">Products On Cloud</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-2">
                    {
                        user &&
                        <small className='text-white'>{user.email}
                            <button onClick={() => signOut(auth)} className='btn btn-ghost'>Sign Out</button>
                        </small>


                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;