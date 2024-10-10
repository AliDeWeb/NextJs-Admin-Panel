import Link from 'next/link';
import { JSX } from 'react';

const Sidebar = (): JSX.Element => {
  return (
    <div className={'min-h-dvh w-[240px] bg-componentsBg px-10 py-6'}>
      <div>
        {/*
          @Section:
            logo and website name section
        */}
        <h1
          className={'text-center font-NunitoSans text-xl font-bold text-white'}
        >
          <span className={'text-[#4880FF]'}>Dash</span>
          Stack
        </h1>

        {/*
          @Section:
            sidebar main routes section
        */}
        <div className={'mt-[30px]'}>
          <ul
            className={
              'flex flex-col gap-y-2 font-NunitoSans text-sm font-semibold text-white'
            }
          >
            {/*
              @Notice:
                to make menus different when they're selected, add *active-sidebar-menu* class to them.
            */}
            <li
              className={
                'active-sidebar-menu w-full rounded-xl px-4 py-2.5 transition-all hover:bg-[#4880FF]'
              }
            >
              <Link className={'block w-full'} href={'#'}>
                Dashboard
              </Link>
            </li>
            <li
              className={
                'w-full rounded-xl px-4 py-2.5 transition-all hover:bg-[#4880FF]'
              }
            >
              <Link className={'block w-full'} href={'#'}>
                Products
              </Link>
            </li>
            <li
              className={
                'w-full rounded-xl px-4 py-2.5 transition-all hover:bg-[#4880FF]'
              }
            >
              <Link className={'block w-full'} href={'#'}>
                Favorites
              </Link>
            </li>
            <li
              className={
                'w-full rounded-xl px-4 py-2.5 transition-all hover:bg-[#4880FF]'
              }
            >
              <Link className={'block w-full'} href={'#'}>
                Inbox
              </Link>
            </li>
            <li
              className={
                'w-full rounded-xl px-4 py-2.5 transition-all hover:bg-[#4880FF]'
              }
            >
              <Link className={'block w-full'} href={'#'}>
                Order Lists
              </Link>
            </li>
            <li
              className={
                'w-full rounded-xl px-4 py-2.5 transition-all hover:bg-[#4880FF]'
              }
            >
              <Link className={'block w-full'} href={'#'}>
                Product Stock
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
