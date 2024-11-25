import React from 'react';
import './Awards.css';

// Import images from the assets folder
import PVC from '../../assets/awards/PVC.png';
import MVC from '../../assets/awards/MVC.png';
import VrC from '../../assets/awards/VrC.png';
import AC from '../../assets/awards/AC.png';
import KC from '../../assets/awards/KC.png';
import SC from '../../assets/awards/SC.png';
import SYSM from '../../assets/awards/SYSM.png';
import UYSM from '../../assets/awards/UYSM.png';
import YSM from '../../assets/awards/YSM.png';
import PVSM from '../../assets/awards/PVSM.png';
import AVSM from '../../assets/awards/AVSM.png';
import VSM from '../../assets/awards/VSM.png';
import SM from '../../assets/awards/SM.png';
import NM from '../../assets/awards/NM.png';
import VM from '../../assets/awards/VM.png';
import WC from '../../assets/awards/WC.png';
import GCM from '../../assets/awards/GCM.png';
import SSM from '../../assets/awards/SSM.png';

const War = () => {
    return (
        <div className="war-container">
            <h1>Awards and decorations of the Indian Armed Forces</h1>
            <p>
                The Armed Forces of India are eligible for many military decorations awarded for
                extraordinary bravery and distinguished service during times of war and peace.
                Service and campaign medals have been awarded throughout India's history as an independent state.
            </p>

            <table className="medals-table">
                <thead>
                    <tr>
                        <th colSpan="3">Military Medals</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Wartime Gallantry Awards */}
                    <tr>
                        <td rowSpan="3">Wartime Gallantry Awards</td>
                        <td>
                            <img src={PVC} alt="PVC Logo" className="medal-logo" />
                            <div>Param Vir Chakra (PVC)</div>
                        </td>
                        <td><p>
                            The Param Vir Chakra (PVC) is India’s highest military honor, awarded for exceptional bravery in war. It means "Wheel of the Ultimate Brave" and is given for "most conspicuous bravery in the presence of the enemy." As of January 2018, it has been awarded 21 times, with 14 posthumous awards, primarily for actions in Indo-Pakistani conflicts. Major Somnath Sharma was the first recipient, and only one awardee is from the Indian Air Force; the rest are from the Indian Army. PVC recipients or their families receive allowances and rewards from state and central governments.
                        </p>
                            <p>
                                India’s gallantry awards began in 1834 under the East India Company as the Order of Merit, later the Indian Order of Merit. After independence, new awards, including the PVC, were established on 26 January 1950, retroactive to 15 August 1947. The PVC is comparable to the UK's Victoria Cross and the U.S. Medal of Honor.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={MVC} alt="MVC Logo" className="medal-logo" />
                            <div>Maha Vir Chakra (MVC)</div>
                        </td>
                        <td>The Maha Vir Chakra (MVC) (lit.'Great Wheel of Bravery') is the second highest military decoration in India, after the Param Vir Chakra, and is awarded for acts of conspicuous gallantry in the presence of the enemy, whether on land, at sea or in the air. It replaced the British Distinguished Service Order (DSO). The medal may be awarded posthumously.</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={VrC} alt="VrC Logo" className="medal-logo" />
                            <div>Vir Chakra (VrC)</div>
                        </td>
                        <td><p>The Vir Chakra (pronunciation: vi:ɾa tʃakɾa, lit.'wheel of bravery') is an Indian wartime military bravery award presented for acts of gallantry on the battlefield, on land or in the air or at sea.</p>

                            <p>It is third in precedence in wartime gallantry awards and comes after the Param Vir Chakra and Maha Vir Chakra.</p></td>
                    </tr>

                    {/* Peacetime Gallantry Awards */}
                    <tr>
                        <td rowSpan="3">Peacetime Gallantry Awards</td>
                        <td>
                            <img src={AC} alt="AC Logo" className="medal-logo" />
                            <div>Ashoka Chakra (AC)</div>
                        </td>
                        <td><p>
                            The Ashoka Chakra is India’s highest peacetime military award, given for exceptional bravery, courageous action, or self-sacrifice outside of battle. Equivalent to the Param Vir Chakra in peacetime, it honors "most conspicuous bravery or pre-eminent valor or self-sacrifice" not in the face of the enemy. Both military and civilian personnel are eligible.
                        </p>
                            <p>
                                Havildar Bachittar Singh and Naik Narbahadur Thapa were its first recipients. Additional acts of bravery by awardees are recognized with a bar on the medal ribbon, and recipients may also earn the Kirti Chakra or Shaurya Chakra for separate gallant actions.
                            </p></td>
                    </tr>
                    <tr>
                        <td>
                            <img src={KC} alt="KC Logo" className="medal-logo" />
                            <div>Kirti Chakra (KC)</div>
                        </td>
                        <td>
                            <p>
                                The Kirti Chakra (lit. 'Wheel of Glory') is an Indian military decoration awarded for valour, courageous action or self-sacrifice away from the field of battle. It may be awarded to civilians as well as military personnel, including posthumous awards.[6] It is the peacetime equivalent of the Maha Vir Chakra. It is second in order of precedence of peacetime gallantry awards, comes after Ashoka Chakra and before Shaurya Chakra. Before 1967, the award was known as the Ashoka Chakra, Class II.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={SC} alt="SC Logo" className="medal-logo" />
                            <div>Shaurya Chakra (SC)</div>
                        </td>
                        <td>The Shaurya Chakra (lit. 'Wheel of Gallantry') is an Indian military decoration awarded for valour, courageous action or self-sacrifice while not engaged in direct action with the enemy. It may be awarded to civilians as well as military personnel, sometimes posthumously. It is third in order of precedence of peacetime gallantry awards and comes after the Ashoka Chakra and the Kirti Chakra. It precedes the Yudh Seva Medal.</td>
                    </tr>

                    {/* Wartime Distinguished Service Medal */}
                    <tr>
                        <td rowSpan="3">Wartime Distinguished Service Medal</td>
                        <td>
                            <img src={SYSM} alt="SYSM Logo" className="medal-logo" />
                            <div>Sarvottam Yudh Seva Medal (SYSM)</div>
                        </td>
                        <td><p>
                            The Sarvottam Yudh Seva Medal (Ultimate War Service Medal) is India's highest wartime distinguished service decoration. It is awarded for the highest degree of distinguished service in an operational context, which includes times of war, conflict, or hostilities. The award is a war-time equivalent of the Param Vishisht Seva Medal, which is India's highest peacetime distinguished service decoration.
                        </p>
                            <p>
                                The medal has been awarded only three times in history. They have been awarded to officers commanding a large force in a conflict. Lieutenant General A.S. Kalkat was the overall commander of the Indian Peacekeeping Force (IPKF) in Sri Lanka. Air Marshal Vinod Patney was the Western Air Commander and Lieutenant General H.M. Khanna was the Northern Army Commander during the Kargil War.</p></td>
                    </tr>
                    <tr>
                        <td>
                            <img src={UYSM} alt="UYSM Logo" className="medal-logo" />
                            <div>Uttam Yudh Seva Medal (UYSM)</div>
                        </td>
                        <td>Uttam Yudh Seva Medal (UYSM; Great War Service Medal) is one of India's military decorations for Wartime Distinguished Service. It is awarded for a high degree of distinguished services in an operational context. "Operational context" includes times of war, conflict, or hostilities. The award is a wartime equivalent of Ati Vishisht Seva Medal, which is a Peacetime Distinguished Service decoration. Uttam Yudh Seva Medal may be awarded posthumously</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={YSM} alt="YSM Logo" className="medal-logo" />
                            <div>Yudh Seva Medal (YSM)</div>
                        </td>
                        <td><p>
                            The Yudh Seva Medal (lit. 'War Service Medal') is one of India's military decorations for distinguished service during wartime. It is awarded for a high degree of distinguished service in an operational context, which includes times of war, conflict, or hostilities and may be awarded posthumously.
                        </p>
                            <p>
                                The award is the wartime equivalent of the Vishisht Seva Medal, which is a peacetime distinguished service decoration.
                            </p>
                        </td>
                    </tr>

                    {/* Peacetime Distinguished Service Medal */}
                    <tr>
                        <td rowSpan="3">Peacetime Distinguished Service Medal</td>
                        <td>
                            <img src={PVSM} alt="PVSM Logo" className="medal-logo" />
                            <div>Param Vishisht Seva Medal (PVSM)</div>
                        </td>
                        <td>Param Vishisht Seva Medal (PVSM) is a military award of India. It is the highest peacetime medal of the Indian Armed Forces, and is awarded for "distinguished service of the most exceptional order." The medal is awarded for "distinguished service rendered by personnel of the Armed Forces." All ranks of the Armed Forces, including Territorial Army, Auxiliary and Reserve forces, Nursing officers and other members of the Nursing services and other lawfully constituted Armed Forces are eligible for the medal, which may be awarded multiple times as well as posthumously.</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={AVSM} alt="AVSM Logo" className="medal-logo" />
                            <div>Ati Vishisht Seva Medal (AVSM)</div>
                        </td>
                        <td><p>
                            Ati Vishisht Seva Medal (AVSM, lit. 'very distinguished service medal') is a military award of India given to recognize "distinguished service of an exceptional order" to all ranks of the armed forces. The award is a peacetime equivalent of Uttam Yuddh Seva Medal, which is a Wartime Distinguished Service decoration.</p>
                            <p>
                                The award can also be granted posthumously. Subsequent awards are represented by a bar worn on the ribbon. The awardee can use "AVSM" as post-nominal letters.
                            </p></td>
                    </tr>
                    <tr>
                        <td>
                            <img src={VSM} alt="VSM Logo" className="medal-logo" />
                            <div>Vishisht Seva Medal (VSM)</div>
                        </td>
                        <td>
                            <p>
                                The Vishisht Seva Medal (VSM, lit. 'distinguished service medal') is a decoration of the Indian Armed Forces. It is awarded to recognize "distinguished service of a high order" to all ranks of the Indian Armed Forces.
                            </p>
                            <p>
                                From 1980, the Yudh Seva Medal was introduced to recognize exceptional services in an operational environment.Since then the VSM has been restricted to non-operational service.
                            </p>
                        </td>
                    </tr>

                    {/* Distinguished Service Gallantry Medal */}
                    <tr>
                        <td rowSpan="3">Distinguished Service Gallantry Medal</td>
                        <td>
                            <img src={SM} alt="SM Logo" className="medal-logo" />
                            <div>Sena Medal (SM)</div>
                        </td>
                        <td>
                            <p>
                                The Sena Medal (lit. 'Army Medal') is awarded to members of the Indian army, of all ranks, "for such individual acts of exceptional devotion to duty or courage as have special significance for the Army." Awards may be made posthumously and a bar is authorized for subsequent awards of the Sena Medal.
                            </p>
                            <p>
                                It can be awarded for gallantry or it can also be for distinguished service carried out by any soldier, not in the face of the enemy. Therefore, the Sena Medal also serves as a sort of general commendation medal for the Indian Army. From 1 February 1999, the central government set a monthly stipend of Rs. 250 for recipients of the award when it is awarded for bravery. It has since been revised to Rs. 2000. It is preceded by the Vir Chakra, Shaurya Chakra & Yudh Seva Medal.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={NM} alt="NM Logo" className="medal-logo" />
                            <div>Nau Sena Medal (NM)</div>
                        </td>
                        <td>Nau Sena Medal (also spelt Nao Sena Medal, lit. Navy Medal) is a gallantry award for servicemen in the Indian Navy.</td>
                    </tr>
                    <tr>
                        <td>
                            <img src={VM} alt="VM Logo" className="medal-logo" />
                            <div>Vayu Sena Medal (VM)</div>
                        </td>
                        <td>
                            <p>
                                The Vayu Sena Medal (lit. 'Air Force Medal') is a military decoration, usually awarded in peacetime for a job well done in the Indian Air Force. However, it has been granted during times of conflict for acts of gallantry in the face of enemy, though not in the same numbers as the Vir Chakra.
                            </p>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
    );
};

export default War;
