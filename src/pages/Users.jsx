import { useUsers } from "../hooks/useUser";

export default function Users() {

    const {
        data,
        isLoading,
        error,
    } = useUsers();

    if (isLoading)
        return <h2>Loading...</h2>;

    if (error)
        return <h2>{error.message}</h2>;

    return (
        <div>

            <h1>Users</h1>

            {data.map(user => (

                <p key={user.id}>
                    {user.name}
                </p>

            ))}

        </div>
    );
}