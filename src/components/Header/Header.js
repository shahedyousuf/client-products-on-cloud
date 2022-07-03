import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div class="navbar bg-neutral min-w-full p-4">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl text-white">Products On Cloud</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-2">
                    <li><HashLink className='text-white' smooth to='/#home'>Home</HashLink></li>
                    <li><HashLink className='text-white' smooth to='/#products'>Products</HashLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;