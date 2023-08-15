import { Person } from "../models/Person";

function UserCard(props: Person) {

    return (
        <div className="card">
            <img src={props.avatar} />
            <p>{props.first_name} {props.last_name} </p>
            <a href={props.email}>Get in touch</a>
        </div>
    )
}

export default UserCard;