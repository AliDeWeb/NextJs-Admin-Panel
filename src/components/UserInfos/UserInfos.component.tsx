import { JSX } from 'react';
import Image from 'next/image';

// Images
import defaultUserProfile from '../../public/assets/icons/users/default-user-profile.webp';

const UserInfos = (): JSX.Element => {
  return (
    <div className={'grid grid-cols-6 gap-x-1'}>
      <div className={'col-span-2 w-[50px] overflow-hidden rounded-full'}>
        <Image src={defaultUserProfile} alt={'user profile'} />
      </div>
      <div
        className={
          'col-span-3 flex flex-col justify-center font-NunitoSans text-white'
        }
      >
        <span className={'text-xl font-bold'}>Moni Roy</span>
        <span className={'text-xs font-semibold'}>Admin</span>
      </div>
      <div className={'col-span-1 flex items-center justify-center'}>
        <button
          className={'rounded-full border border-solid border-[#CCCCCC] p-1'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserInfos;
