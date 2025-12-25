import React from 'react';

const Testimonial = () => {
  return (
    <section className="px-6 md:px-12  xl:px-24 pb-24 pt-8 bg-white flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
      
      {/* Avatars */}
      <div className="flex -space-x-4 order-2 md:order-1">
        <div className="w-14 h-14 rounded-full border-[3px] border-white bg-red-300 overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="w-14 h-14 rounded-full border-[3px] border-white bg-blue-300 overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="w-14 h-14 rounded-full border-[3px] border-white bg-green-300 overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Zack" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="w-14 h-14 rounded-full border-[3px] border-white bg-yellow-300 overflow-hidden flex items-center justify-center text-xs font-bold text-yellow-800">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="text-3xl  hidden md:block md:order-2">/</div>

      {/* Text Info */}
      <div className="flex flex-col gap-2 order-1 md:order-3">
        <p className="text-2xl font-semibold text-gray-900 leading-tight md:w-3/4">
          We Received A Great Amount Of Work In Just 2 Weeks Timeline! 
        </p>
        <p className=" font-bold text-gray-900 mt-1">
          Daniel, Design Lead @Google
        </p>
      </div>

    </section>
  );
};

export default Testimonial;
