import React from 'react';
import { Input, Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function AdminLogin() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = () => {
        // Perform authentication logic here (e.g., validate username and password)

        // If authentication succeeds, navigate to "/adminpage"
        navigate('/adminpage');
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-black text-white">
            {/* Right Section with Admin Login Form */}
            <div className="w-full lg:w-1/2 p-8">
                <h1 className="text-center text-4xl font-bold mb-2">Admin Login</h1>
                <div className="flex flex-col space-y-4">
                    <Input
                        type="text"
                        placeholder="Username"
                        size="lg"
                        outline={true}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        size="lg"
                        outline={true}
                    />
                    <Button
                        color="blue"
                        buttonType="filled"
                        size="lg"
                        block={true}
                        onClick={handleLogin} // Call handleLogin onClick
                    >
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
