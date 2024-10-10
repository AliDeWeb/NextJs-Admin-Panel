import { JSX } from 'react';
import Image from 'next/image';

// Images
import defaultUserProfile from '../../public/assets/icons/users/default-user-profile.webp';
import Link from 'next/link';

const UserInfos = (): JSX.Element => {
  return (
    <div className={'grid grid-cols-2 gap-x-1 lg:grid-cols-6'}>
      <div
        className={
          'col-span-2 w-[25px] overflow-hidden rounded-full lg:w-[50px]'
        }
      >
        <Link href={'#'}>
          <Image src={defaultUserProfile} alt={'user profile'} />
        </Link>
      </div>
      <div
        className={
          'hidden flex-col justify-center font-NunitoSans text-white lg:col-span-3 lg:flex'
        }
      >
        <span className={'text-xl font-bold'}>Moni Roy</span>
        <span className={'text-xs font-semibold'}>Admin</span>
      </div>
      <div
        className={'hidden items-center justify-center lg:col-span-1 lg:flex'}
      >
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
