import React from 'react';

import photo from 'src/assets/images/Moi.jpg';

import './aboutUs.scss';

const AboutUs = () => (
  <div className="about_us">
    <h2 className="about_us_title">Qui sommes-nous?</h2>
    <img className="about_us_image" src={photo} alt="" />
    <img className="about_us_image" src={photo} alt="" />
    <img className="about_us_image" src={photo} alt="" />
    <img className="about_us_image" src={photo} alt="" />
    <img className="about_us_image" src={photo} alt="" />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Nisi autem dolorem numquam hic maiores non dolor unde, nobis natus perferendis, 
      eligendi, adipisci libero expedita dolores? Consectetur necessitatibus ut delectus voluptas?
		Quidem laudantium porro voluptates consectetur iure possimus tempore nam voluptatum sit facilis temporibus, cumque perferendis suscipit. Omnis ea molestias, commodi asperiores nostrum eveniet, non provident tenetur qui, officia et nihil!
		Numquam, pariatur. Soluta cumque aliquid, consequatur doloremque itaque sed eum dolore, minima asperiores ipsam hic? Nesciunt fuga vero quia? Qui consequuntur voluptatibus id molestiae dicta molestias in illo, consectetur accusamus?</p>
  </div>
);

export default AboutUs;
