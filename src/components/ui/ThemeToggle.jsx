'use client';
import { useTheme } from '../ThemeProvider';
import { motion } from 'motion/react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className='relative flex h-10 w-10 items-center justify-center rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/20 dark:border-white/20 hover:bg-black/20 dark:hover:bg-white/20 transition-colors'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label='Toggle theme'
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className='relative'
      >
        {isDark ? (
          <svg
            className='h-5 w-5 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
            />
          </svg>
        ) : (
          <svg
            className='h-5 w-5 text-black'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
}
