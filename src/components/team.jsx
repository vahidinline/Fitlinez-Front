import React, { useEffect, useState } from 'react';
import './team.css';
import c from '../assets/PN_badge_L1-N_.webp';

const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch('https://fitlinez-backend.herokuapp.com/team')
      .then((response) => response.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <section className='bg-light-blue pt-5 pb-5 text-color '>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-3 mb-3 mb-md-0'>
            <span className='h2 d-block'>
              <a
                href='https://my.precisionnutrition.com/public_credentials/azar-shafiei-l1-certification'
                target='new'
              >
                <img src={c} alt='فیتلاینز' />
              </a>
            </span>
            <h3>اعضای تیم فیتلاینز</h3>
          </div>
          <div className='col-lg-9'>
            <div className='row'>
              {teams.map((team) => {
                return (
                  <div className='col-md-4 d-flex'>
                    <div className='card mb-3' style={{ width: '243px' }}>
                      <img
                        className='card-img-top imgSize'
                        src={team.img}
                        alt={team.name}
                      />
                      <div className='card-body py-3'>
                        <h5 className='mb-0'>{team.name}</h5>

                        <ul className='list-group list-group-flush list-unstyled'>
                          <li className='list-group-item list-class text-wrap'>
                            {team.desc}
                          </li>
                        </ul>
                      </div>
                      <div className='card-footer pt-0 border-top-0'></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
