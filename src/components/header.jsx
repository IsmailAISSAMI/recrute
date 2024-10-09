import { Link } from 'react-router-dom';
import Logo from '@/components/logo';
import { ModeToggle } from '@/components/mode-toggle';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Menu } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Job Listings', path: '/jobs' },
  { label: 'Post a Job', path: '/jobs/post' },
  { label: 'Saved Jobs', path: '/saved-jobs' },
];

const Header = () => {
  return (
    <header className='flex h-20 w-full shrink-0 items-center px-4 md:px-6'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='lg:hidden'>
            <Menu className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side='left'>
          <Logo />
          <div className='grid gap-2 py-6'>
            {NAV_LINKS.map(({ label, path }) => (
              <Link
                key={`menu-link-to-${label}`}
                to={path}
                className='flex w-full items-center py-2 text-lg font-semibold'
              >
                {label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <Logo className={'hidden lg:flex mr-6'} />

      <NavigationMenu className='hidden lg:flex'>
        <NavigationMenuList>
          {NAV_LINKS.map(({ label, path }) => (
            <NavigationMenuLink key={`link-to-${label}`} asChild>
              <Link
                to={path}
                className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
              >
                {label}
              </Link>
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className='ml-auto flex gap-2'>
        <ModeToggle />
        <Button variant='outline'>Sign in</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
