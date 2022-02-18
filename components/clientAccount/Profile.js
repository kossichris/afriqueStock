import React from 'react';
import Image from 'next/image'
import profile from '/public/images/profile.jpg'
import visa from '/public/images/visa.png'
import mastercard from '/public/images/mastercard.png'
import profileStyles from '../css/Profile.css'
import Buttonsmall from '../ButtonSmall';
import { colors } from '../../constants/colors';

const Profile = () => {
    return (
        <div className="container margin_60_35">
            <div className="row">
                <div className="col-xl-4 col-lg-4 pl-xl-5 no-margin">
                    <div className="box_contacts d-flex flex-column justify-content-center">
                        <Image
                            src={profile}
                            alt="Picture of the author"
                            layout='responsive'
                            width={25}
                            height={25}
                            className="rounded-img"
                        />
                        <div className="info">
                            <h2>Hermannn Shinel?</h2>
                            <a href="#0">43 4324265622</a> - <a href="#0">help@sparker.com</a>

                            <div className="mt-4 d-flex flex-column">
                                <strong > Membre depuis 7 mois </strong>
                                <span> ID 10309090 </span>
                            </div>
                            <div className="mt-4">
                                <Buttonsmall text='Editer Profile' bgColor={colors.blue_light} isFlex={false} isTop={false} width="100% !important" color="#ffff" shape='round' />

                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-xl-8 col-lg-8 pl-xl-5">
                    <div className="box_contacts">
                        <h5 className="text-start">Personal Information : </h5>

                        <div className="d-flex flex-row justify-content-between">
                            <div className="text-1 d-flex flex-column">
                                <span>
                                    <strong>Phone : </strong> <span>(+1) 456 789 890 </span>
                                </span>
                                <span>
                                    <strong>Nom de l'entreprise : </strong> <span>Masculin </span>
                                </span>
                                <span>
                                    <strong>Code postal : </strong> <span> 239484FR </span>
                                </span>
                            </div>
                            <div className="text-2 d-flex flex-column justify-content-start">
                                <span>
                                    <strong>Email : </strong> <span>Chris@gmail.com </span>
                                </span>
                                <span>
                                    <strong>Localisation : </strong> <span> Abidjan </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="box_contacts">
                        <h5 className="text-start">Saved Card</h5>
                        <div className="form-group d-flex flex-row">
                            <Image
                                src={visa}
                                alt="Picture of the author"
                                width={25}
                                height={25}
                                layout='responsive'
                                className="credit-card-img"
                            />
                            <input className="form-control rounded-0" placeholder="**** **** **** 2284 " type="text" id="lastname_contact" name="lastname_contact" />
                        </div>
                        <div className="form-group d-flex flex-row">
                            <Image
                                src={mastercard}
                                alt="Picture of the author"
                                width={25}
                                height={25}
                                layout='responsive'
                                className="credit-card-img"
                            />
                            <input className="form-control rounded-0" placeholder="**** **** **** 2284 " type="text" id="lastname_contact" name="lastname_contact" />
                        </div>
                        <div className="mt-4 d-flex justify-content-start">
                            <Buttonsmall text='+ Add card' bgColor={colors.blue_light} isFlex={false} isTop={false} width="100% !important" color="#ffff" shape='round' />
                        </div>
                    </div>
                    <div className="box_contacts">
                        <h6 className="text-start">Adress : </h6>

                        <div className="d-flex flex-row justify-content-between">
                            <div className="mt-3 d-flex flex-column justify-content-start">
                                <div>978 Baker st. 567
                                </div>
                                <div>
                                    Los Angeles - US
                                </div>
                                <div>
                                    +39 06 97240120
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start">
                                <a> <strong> remove </strong> </a>

                            </div>
                        </div>
                        <hr />
                        <div className="add_new_adress_line">
                            <a className="add_new_adress_line"> + Add New adress line  </a>
                        </div>
                    </div>

                </div>
            </div>
            <style jsx>
                {profileStyles}
            </style>
        </div>
    );
}

export default Profile;
