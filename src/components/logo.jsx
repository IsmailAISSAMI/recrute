import { Link } from 'react-router-dom';

const Logo = ({ className = '' }) => {
  return (
    <div className={className}>
      <Link
        to='/'
        className={`flex items-center space-x-2 text-xl font-bold text-primary dark:text-white`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='200'
          height='48'
          viewBox='0 0 200 50'
          fill='none'
        >
          <defs>
            <linearGradient
              id='gradient'
              x1='0'
              y1='0'
              x2='200'
              y2='0'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0%' stopColor='#4F46E5' />
              <stop offset='100%' stopColor='#6366F1' />
            </linearGradient>
          </defs>

          <rect
            x='10'
            y='10'
            width='30'
            height='30'
            fill='url(#gradient)'
            rx='5'
          />
          <path d='M25 15 L35 25 L25 35 L15 25 Z' fill='#FFFFFF' />

          <text
            x='50'
            y='30'
            textAnchor='start'
            fontSize='24'
            fill='currentColor'
            fontFamily='Arial, sans-serif'
            fontWeight='bold'
          >
            Jobify
          </text>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
