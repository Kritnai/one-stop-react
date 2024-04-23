import React from 'react';
import AppFooter from './component/AppFooter';
import AppHeaderMember from './component/AppHeaderMember';
// import people from '../data/relatedPersonsDB';
import "./RelatedPersons.css"

import { useModel } from '../appModel/model';
function RelatedPersons() {
    const { data } = useModel("relatedPersonsDB");
    //alumni element
    const filteredAlumni = data.filter((pro) => {
        return pro.type.includes('alumni');
    });
    const alumniElements = filteredAlumni.map((pro, index) => {
        return (
            <div className='professor-item'>
                <img className='responsive-img scale-img' src={pro.imageUrl} />
                <p>{pro.name}</p>
                <p>{pro.tel}</p>
                <p>{pro.email}</p>
                <p>{pro.office}</p>
            </div>
        );
    });

    //professor element
    const filteredPro = data.filter((pro) => {
        return pro.type.includes('professor');
    });
    const proElements = filteredPro.map((pro, index) => {
        return (
            <div className='professor-item'>
                <img className='responsive-img scale-img' src={pro.imageUrl} />
                <p>{pro.name}</p>
                <p>{pro.tel}</p>
                <p>{pro.email}</p>
                <p>{pro.office}</p>
            </div>
        );
    });

    //staff element
    const filteredStaff = data.filter((staff) => {
        return staff.type.includes('staff');
    });
    const staffElements = filteredStaff.map((staff, index) => {
        return (
            <div className='professor-item'>
                <img className='responsive-img scale-img' src={staff.imageUrl} />
                <p>{staff.name}</p>
                <p>{staff.tel}</p>
                <p>{staff.email}</p>
                <p>{staff.office}</p>
            </div>
        );
    });

    return (
        <div className='RelatedPersons'>
            <AppHeaderMember />
            <section>
                <div className="container">
                    <div className='personcontent'>

                        <h2>ศิษย์เก่า</h2>
                        <div className="alumni">
                            {alumniElements}
                        </div>

                        <h2>อาจารย์</h2>
                        <div className="professor">
                            {proElements}
                        </div>

                        <h2>เจ้าหน้าที่</h2>
                        <div className='staff'>
                            {staffElements}
                        </div>
                    </div>
                </div>
            </section>
            <AppFooter />
        </div>

    );
}


export default RelatedPersons;