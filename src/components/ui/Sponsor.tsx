import React from 'react';

const Sponsor: React.FC = () => {
  return (
   <div  className='w-full h-[30vh]'>
    <div>
      <h1 className='text-black py-4 fond-bold text-4xl  flex flex-wrap justify-center items-center'>Our Sponsor</h1>
      <span className='flex flex-wrap justify-center items-center'>A Special Thank to All Platform for Sponsor !</span>
    </div>
     <div className="flex flex-wrap justify-center items-center">
      <div className="m-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="Firebase" className="h-12" />
      </div>
      <div className="m-4">
        <img src="https://cdn.freelogovectors.net/wp-content/uploads/2022/10/render-logo-freelogovectors.net_.png" alt="MongoDB" className="h-11" />
      </div>
      <div className="m-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStrb82pBkUFTXeiX-IWRf2_Sf6_GYGBmCQKqAC_8I&s" alt="Versel" className="h-11" />
      </div>
      <div className="m-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png" alt="Render" className="h-11" />
      </div>
      <div className="m-4">
        <img src="https://firebase.google.com/images/social.png" alt="FirebASE" className="h-[11vh]" />
      </div>

    </div>
   </div>
  );
};

export default Sponsor;
