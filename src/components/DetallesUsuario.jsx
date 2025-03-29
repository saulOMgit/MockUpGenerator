import {useOrganization, useSession, useUser} from "@clerk/clerk-react"

const DetallesUsuario = () => {
    const {user}=useUser()
    const {session}=useSession()
    const { organization}= useOrganization()

    if(!user  || !session) return null

    const formatDate = (date) =>{
        return date.toLocaleDateString("es-Es",{
            day:"numeric",
            month:"short",
            year:"numeric",

        })
    }

    const formatDateWithNumbers = (date) => {
        return date.toLocaleDateString("es-Es",{
            day:"numeric",
            month:"numeric",
            year:"numeric",
            hour:"numeric",
            minute:"2-digit",
            second:"2-digit",
            hour12:true,
        })
    }

    return (
        <div className="info-container">
            <article className="info-detail">
                <img className="user-detail-img" src={user.imageUrl} />
                <div>
                    <h1>{user.firstName} {user.lastName}</h1>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <td>email:</td>
                        <td>{user.emailAddresses[0].emailAddress}</td>
                    </tr>
                    <tr>
                        <td>Ultimo Inicio:</td>
                        <td>{formatDate(user.lastSignInAt)}</td>
                    </tr>
                    <tr>
                        <td>Creado:</td>
                        <td>{formatDate(user.createdAt)}</td>
                    </tr>
                    <tr>
                        <td>Id Usuario:</td>
                        <td>{user.id}</td>
                    </tr>
                    </tbody>
                </table>
            </article>
            <article className="info-detail">
                <h2>Detalles Sesión</h2>
                <table>
                     <tbody>
                     <tr>
                        <td>Id sesión:</td>
                        <td>{session.id}</td>
                    </tr>
                    <tr>
                        <td>Estado:</td>
                        <td>{session.status}</td>
                    </tr>
                    <tr>
                        <td>Ultima Actividad:</td>
                        <td>{formatDateWithNumbers(session.lastActiveAt)}</td>
                    </tr>
                    <tr>
                        <td>Expira en:</td>
                        <td>{formatDateWithNumbers(session.expireAt)}</td>
                    </tr>
                     </tbody>
                </table>
            </article>
            {organization && <article className="info-detail">
                <h2>Organización</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>Id Organización</td>
                        <td>{organization.id}</td>
                    </tr>
                    <tr>
                        <td>Nombre Organización</td>
                        <td>{organization.name}</td>
                    </tr>
                    <tr>
                        <td>Numero de Miembros:</td>
                        <td>{organization.membersCount}</td>
                    </tr>
                    <tr>
                        <td>Recuento Invitaciones</td>
                        <td>{organization.pendingInvitationsCount}</td>
                    </tr>
                    </tbody>
                </table>
            </article>}

        </div>
    )
}

export default DetallesUsuario