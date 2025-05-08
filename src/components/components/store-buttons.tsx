import Image from 'next/image';

const stores = [
  {
    name: 'Google Play',
    subtitle: 'GET IT ON',
    icon: '/icons/google-play.svg',
    link: 'https://play.google.com/store/apps/details?id=your.app.id',
    darkIcon: false,
  },
  {
    name: 'App Store',
    subtitle: 'Download on the',
    icon: '/icons/apple.svg',
    link: 'https://apps.apple.com/app/idyourappid',
    darkIcon: false,
  },
];

const StoreButtons = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {stores.map((store) => (
        <a
          key={store.name}
          href={store.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-black rounded-2xl text-white space-x-3 hover:opacity-90 transition-all"
        >
          <div className="w-4 h-4 relative">
            <Image
              src={store.icon}
              alt={`${store.name} icon`}
              fill
              className={store.darkIcon ? 'invert' : ''}
            />
          </div>
          <div className="text-left text-sm leading-tight">
            <div className="text-[10px] uppercase tracking-wide text-gray-300">
              {store.subtitle}
            </div>
            <div className="text-base font-semibold">{store.name}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default StoreButtons;
