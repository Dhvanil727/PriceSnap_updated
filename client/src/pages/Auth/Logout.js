import React, { useContext, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const Logout = () => {
    const { dispatch } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/logout', {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });

                if (!response.ok) {
                    throw new Error('Failed to logout');
                }

                dispatch({ type: 'USER', payload: false });
                navigate('/login');
            } catch (error) {
                console.error('Error during logout:', error);
            }
        };

        fetchData();
    }, [dispatch, navigate]); // Include dispatch and navigate in the dependency array

    return (
        <Layout title={"Logout"}>
            <h1>Logout Page</h1>
        </Layout>
    );
};

export default Logout;
