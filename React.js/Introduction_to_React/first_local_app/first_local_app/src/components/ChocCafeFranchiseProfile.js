import './bootstrap.css';

function ChocCafeFranchiseProfile(props)
{
    return (
        <div className="bg-white border d-flex">
            <h2 className="text-primary">Franchise Location: {props.franchise_profile[0].location}</h2>
            <h2>Owner name: {props.franchise_profile[0].owner}</h2>
            <h3>No. employees: {props.franchise_profile[0].employees}</h3>
            <h4>Specialty: {props.franchise_profile[0].specialty}</h4>
        </div>     
    );
}

export default ChocCafeFranchiseProfile;