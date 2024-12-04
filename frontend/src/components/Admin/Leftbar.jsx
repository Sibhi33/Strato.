import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BringToFront, Users, ChartBarIcon, ChartAreaIcon, Power } from 'lucide-react';
import { Button } from '../ui/button';

const Leftbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleMouseEnter = () => setExpanded(true);
    const handleMouseLeave = () => setExpanded(false);

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            icon: BringToFront
        },
        {
            title: 'Users',
            link: '/admin/users',
            icon: Users
        },
        {
            title: 'Reports & Charts',
            link: '/admin/reports',
            icon: ChartAreaIcon
        },
        {
            title: 'Charts',
            link: '/admin/charts',
            icon: ChartBarIcon
        }
    ];

    return (
        <div
            className={`h-screen flex flex-col shadow-sm shadow-primary pt-4 transition-all duration-300 ${expanded ? 'w-64' : 'w-20'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-full flex items-center justify-center mb-6">
                <img
                    src="https://ik.imagekit.io/SIBHI/Imagica/reed.png"
                    alt="Imagica"
                    className="object-contain"
                    style={{ width: expanded ? '160px' : '50px', transition: 'width 0.3s' }}
                />
            </div>

            <div className='flex flex-col gap-3 overflow-y-auto px-3'>
                {AdminLinks.map((data, index) => (
                    <NavLink
                        key={index}
                        to={data.link}
                        className={`p-3 rounded-lg flex items-center transition-all duration-300 hover:bg-primary/10`}
                    >
                        {React.createElement(data.icon, { size: 24 })}
                        {expanded && <span className='ml-4'>{data.title}</span>}
                    </NavLink>
                ))}
            </div>

            <div className='mt-auto px-3'>
                <Button className='p-3 w-full flex items-center bg-red-500/5 hover:bg-red-500/10'>
                    <Power size={24} />
                    {expanded && <span className='ml-4 text-red-500'>Logout</span>}
                </Button>
            </div>
        </div>
    );
};

export default Leftbar;
